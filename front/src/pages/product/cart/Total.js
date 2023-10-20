import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {insertOrderProduct, insertOrderTotal, orderProducts, orderTotal} from "../../../slice/orderSilce";

function Total({total, selectedCartList}) {
    let navigator = useNavigate();
    let dispatch = useDispatch();
    return <>
        {total.totalCount !== 0 ? <div className="total" style={{height: 'auto'}}>
                <h2>전체합계</h2>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>상품수</td>
                            <td>{total.totalCount}</td>
                        </tr>
                        <tr>
                            <td>상품금액</td>
                            <td>{total.totalProductPrice.toLocaleString()}</td>
                        </tr>
                        {total.totalDelivery !== 0 ?
                            <tr>
                                <td>배송비</td>
                                <td>{total.totalDelivery === 0 ? '-' : total.totalDelivery.toLocaleString()}</td>
                            </tr>
                            : null}
                        {total.totalDiscountPrice !== 0 ?
                            <tr>
                                <td>할인금액</td>
                                <td>- {total.totalDiscountPrice.toLocaleString()}</td>
                            </tr>
                            : null
                        }
                        {total.totalPoint !== 0 ?
                            <tr>
                                <td>포인트 적립</td>
                                <td style={{color: 'dodgerblue'}}> {total.totalPoint.toLocaleString()} P</td>
                            </tr>
                            : null}
                        <tr>
                            <td>전체주문금액</td>
                            <td>{total.totalOrderPrice.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>

                <input type="submit" name="" value="주문하기" onClick={async () => {
                    if (selectedCartList.length === 0) {
                        alert("상품을 담아주세요")
                    } else {
                        await dispatch(insertOrderTotal(total))
                        await dispatch(insertOrderProduct(selectedCartList))
                        await navigator("/product/order")
                    }
                }} style={{cursor: 'pointer', userSelect: 'none'}}
                />
            </div> :
            <div className="total" style={{height: 'auto'}}>
                <h2>전체합계</h2>
                <table border="0">
                    <tbody>
                        <tr>
                            <td style={{color: 'black'}}>선택하신 상품이 없습니다</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
    </>
}

export default Total;