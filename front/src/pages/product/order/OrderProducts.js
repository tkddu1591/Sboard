import {useNavigate} from "react-router-dom";

function OrderProducts({orderProducts}) {
    let navigate = useNavigate();

    function changeDiscountPrice(price, discount) {
        return (price - (discount * price / 100)).toLocaleString()
    }

    return <>
        <table>
            <thead>
                <tr>
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
                {Array.isArray(orderProducts) && orderProducts.map((item, index) => {
                    return <tr key={item.cartNo}>
                        <td>
                            <article>
                                <a onClick={()=>{navigate(process.env.PUBLIC_URL + "/product/view?prodNo=" + item.prodNo)}}
                                   style={{cursor:'pointer'}}
                                ><img
                                    src="https://via.placeholder.com/80x80" alt={item.prodName}/></a>
                                <div>
                                    <h2><a onClick={()=>{navigate(process.env.PUBLIC_URL + "/product/view?prodNo=" + item.prodNo)}}
                                           style={{cursor:'pointer'}}>{item.prodName}</a></h2>
                                    <p>{item.descript}</p>
                                </div>
                            </article>
                        </td>
                        <td>{item.count}</td>
                        <td>
                            {item.discount !== 0 ? <div style={{position: 'relative', top: '-6px'}}>
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

export default OrderProducts;