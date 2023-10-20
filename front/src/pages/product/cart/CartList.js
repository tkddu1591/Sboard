import {useNavigate} from "react-router-dom";

function CartList({cartDataList, setSelectedCartList, selectedCartList}) {


    let navigate = useNavigate();

    function allSelect() {
        if (selectedCartList.length !== cartDataList.length) {
            setSelectedCartList(cartDataList)
        } else
            setSelectedCartList([])
    }

    function changeDiscountPrice(price, discount) {
        return (price - (discount * price / 100)).toLocaleString()
    }


    const toggleItemSelection = (cartNo) => {
        // 선택한 항목이 이미 있는지 확인
        const isItemSelected = selectedCartList.includes(cartNo);

        // 선택한 항목을 토글 (추가 또는 제거)
        if (isItemSelected) {
            // 이미 선택된 항목이면 제거
            setSelectedCartList(selectedCartList.filter(item => item !== cartNo));
        } else {
            // 선택되지 않은 항목이면 추가
            setSelectedCartList([...selectedCartList, cartNo]);
        }
    };
    console.log(selectedCartList)
    console.log(cartDataList)
    return <>
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" name="all"
                               checked={selectedCartList.length === cartDataList.length}
                               onChange={() => {
                                   allSelect()
                               }}/></th>
                    <th>상품명</th>
                    <th>총수량</th>
                    <th>판매가</th>
                    <th>할인</th>
                    <th>포인트</th>
                    <th>배송비</th>
                    <th>소계</th>
                </tr>
            </thead>

            <tbody>
                {cartDataList.length===0? <tr>
                    <td colSpan="7" style={{height:'150px', color:'black'}}>장바구니에 상품이 없습니다.</td>
                </tr>:null}

                {Array.isArray(cartDataList) && cartDataList.map((item, index) => {
                    return <tr key={index}>
                        <td><input type="checkbox"
                                   checked={selectedCartList.includes(item)}
                                   onChange={() => {
                                       toggleItemSelection(item)
                                   }}
                        /></td>
                        <td>
                            <article>
                                <a onClick={() => {
                                    navigate("/product/view?prodNo=" + item.prodNo)
                                }}
                                   style={{cursor: 'pointer'}}><img src="https://via.placeholder.com/80x80" alt=""/></a>
                                <div>
                                    <h2><a onClick={() => {
                                        navigate("/product/view?prodNo=" + item.prodNo)
                                    }
                                    } style={{cursor: 'pointer', userSelect: 'none'}}>{item.prodName}</a>
                                    </h2>
                                    <p>{item.descript}</p>
                                </div>
                            </article>
                        </td>
                        <td>{item.count}</td>

                        <td>
                            {item.discount != 0 ? <div style={{position: 'relative', top: '-6px'}}>
                                    <p
                                        style={{color: 'grey', textDecoration: 'line-through', fontSize: '10px'}}
                                    >
                                        {item.price.toLocaleString()}</p>
                                    <p>{changeDiscountPrice(item.price, item.discount)}</p>
                                </div>
                                : item.price.toLocaleString()
                            }
                        </td>

                        {/*할인*/
                        }
                        <td>{item.discount !== 0 ? item.discount + '%' : ''}</td>

                        {/*포인트*/
                        }
                        {
                            item.point !== 0 ? <td
                                    style={{color: "dodgerblue"}}
                                >{item.point.toLocaleString() + ' P'}</td> :
                                <td>-</td>
                        }
                        {/*배달비*/
                        }
                        <td><span
                            className={item.delivery === 0 ? 'free-delivery' : ''}
                        >{item.delivery.toLocaleString()}</span>
                        </td>
                        {/*소계*/}
                        <td>
                            <div>
                                <p style={{fontWeight: 'bold'}}>
                                    {item.total.toLocaleString()}</p>
                                {item.point !== 0 ?
                                    <p style={{color: "dodgerblue", fontSize: '10px'}}
                                    >{item.point.toLocaleString()} P</p>
                                    : null}
                            </div>
                        </td>
                    </tr>
                })}

            </tbody>
        </table>
    </>


}

export default CartList