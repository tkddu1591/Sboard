import {Link, useNavigate} from "react-router-dom";
import {HOME_URL} from "../../../App";

function ProductItem({pageResponseDTO}) {
    let dtoList = pageResponseDTO.dtoList

    function changeDiscountPrice(price, discount) {
        return (price - (discount * price / 100)).toLocaleString()
    }

    function checkScore(score) {
        if (score == 0) {
            return <h6>상품평이 없습니다.</h6>
        } else if (score > 4.5) {
            return <h6 className="rating star5">상품평</h6>
        } else if (score > 3.5) {
            return <h6 className="rating star4">상품평</h6>
        } else if (score > 2.5) {
            return <h6 className="rating star3">상품평</h6>
        } else if (score > 1.5) {
            return <h6 className="rating star2">상품평</h6>
        } else {
            return <h6 className="rating star1">상품평</h6>
        }
    }

    const productPage = `${HOME_URL}/product/list`;
    let navigate = useNavigate();
    return (
        <table border="0">

            <tbody>
                {dtoList.length === 0 ?
                    <tr className="empty">
                        <td colSpan="7">찾으시는 상품이 없습니다.</td>
                    </tr>
                    :
                    (dtoList.map((item, index) => {
                        return <tr key={item.prodNo}>
                            <td><a onClick={() => {
                                navigate("/product/view?prodNo="+item.prodNo)
                            }}
                                   style={{cursor: 'pointer', userSelect: 'none'}}
                                   className="thumb"><img src="https://via.placeholder.com/120x120"
                                                          alt="상품이미지"/></a>
                            </td>

                            <td>
                                <h3 className="name"
                                    onClick={() => {
                                        navigate("/product/view?prodNo=" + item.prodNo)
                                    }}
                                    style={{cursor: 'pointer', userSelect: 'none'}}
                                >{item.prodName}</h3>
                                <a onClick={() => {
                                    navigate("/product/view?prodNo=" + item.prodNo)
                                }}
                                   style={{cursor: 'pointer', userSelect: 'none'}}
                                   className="desc">{item.descript}</a>
                            </td>
                            <td>
                                <ul>
                                    <li>
                                        <ins
                                            className="dis-price">{changeDiscountPrice(item.price, item.discount)}</ins>
                                    </li>
                                    <li>{item.discount !== 0 ? <>
                                            <del className="org-price">{item.price.toLocaleString()}</del>
                                            <span className="discount"> {item.discount}%</span>
                                        </>
                                        : null
                                    }
                                    </li>
                                    <li><span
                                        className={item.delivery === 0 ? 'free-delivery' : ''}>배송비 {item.delivery.toLocaleString()}</span>
                                    </li>
                                </ul>
                            </td>
                            <td>
                                <h4 className="seller"><i className="fas fa-home"></i>&nbsp;판매자명</h4>
                                <h5 className="badge power">판매자등급</h5>
                                {checkScore(item.score)}
                            </td>
                        </tr>
                    }))}
            </tbody>
        </table>
    )
}

export default ProductItem;