import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {insertOrderProduct, insertOrderTotal} from "../../../slice/orderSilce";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL} from "../../../App";
import {member} from "../../../slice/memberSlice";

function Info({prodDTO, scrollY}) {

    function scrollToYPosition(scrollY) {
        window.scrollTo({
            top: scrollY, behavior: 'smooth'
        });
        console.log(scrollY);
    }

    function changeDiscountPrice(price, discount) {
        return (price - (discount * price / 100))
    }

    function checkScore(score) {
        if (score === 0) {
            return <h5>상품평이 없습니다.</h5>
        } else if (score > 4.5) {
            return <h5 className="rating star5"><a onClick={() => scrollToYPosition(scrollY)}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}>상품평보기</a></h5>
        } else if (score > 3.5) {
            return <h5 className="rating star4"><a onClick={() => scrollToYPosition(scrollY)}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}>상품평보기</a></h5>
        } else if (score > 2.5) {
            return <h5 className="rating star3"><a onClick={() => scrollToYPosition(scrollY)}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}>상품평보기</a></h5>
        } else if (score > 1.5) {
            return <h5 className="rating star2"><a onClick={() => scrollToYPosition(scrollY)}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}>상품평보기</a></h5>
        } else {
            return <h5 className="rating star1"><a onClick={() => scrollToYPosition(scrollY)}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}>상품평보기</a></h5>
        }
    }

    function addDays(date, days) {
        const clone = new Date(date);
        clone.setDate(date.getDate() + days)
        return clone;
    }

    const today = new Date();
    const deliveryDay = addDays(today, 2);
    const week = ['일', '월', '화', '수', '목', '금', '토', '일', '월', '화']
    let dayOfWeef = week[deliveryDay.getDay()]

    function changeFommatDate() {
        return '모레(' + dayOfWeef + ')   ' + ('0' + (deliveryDay.getMonth() + 1)).slice(-2) + '/' + ('0' + deliveryDay.getDate()).slice(-2) + ' 도착예정';
    }

    const handleInputChange = (event) => {
        const updateCount = event.target.value
        if (isNaN(Number(updateCount))) {
            changeCartData('count', 1);
        } else {
            changeCartData('count', updateCount);
        }
        if (updateCount > prodDTO.stock) {
            changeCartData('count', prodDTO.stock);
        } else if (updateCount < 1) {
            changeCartData('count', 1);
        }
    };


    //*****************user 추가하고 uid 수정필요*****************

    let [cartDTO, setCartDTO] = useState({
        thumb1: prodDTO.thumb1,
        prodName: prodDTO.prodName,
        descript: prodDTO.descript,
        count: 1,
        uid: localStorage.getItem('memberUid'),
        price: prodDTO.price,
        discount: prodDTO.discount,
        delivery: prodDTO.delivery,
        point: prodDTO.point,
        prodNo: prodDTO.prodNo,
        total: changeDiscountPrice(prodDTO.price, prodDTO.discount)
    })


    const changeCartData = (key, value) => {
        setCartDTO((cartDTO) => {
            let newCartDTO = {...cartDTO};
            newCartDTO[key] = parseInt(value);
            if (key === 'count') {
                newCartDTO.total = (value * changeDiscountPrice(prodDTO.price, prodDTO.discount))
            }
            return newCartDTO;
        });
    };
    if (cartDTO.price === 0) {
        setCartDTO({
            count: 1,
            uid: 'user',
            price: prodDTO.price,
            discount: prodDTO.discount,
            delivery: prodDTO.delivery,
            point: prodDTO.point,
            prodNo: prodDTO.prodNo,
            total: changeDiscountPrice(prodDTO.price, prodDTO.discount)
        })
    }
    let navigate = useNavigate();
    console.log(localStorage.getItem('memberUid'))

    let dispatch = useDispatch();
    return <>
        <article className="info">
            <div className="image">
                <img src="https://via.placeholder.com/460x460" alt="상품이미지"/>
            </div>
            <div className="summary">
                <nav>
                    <h1>{prodDTO.company}</h1>
                    <h2>상품번호&nbsp;:&nbsp;<span>{prodDTO.prodNo}</span></h2>
                </nav>
                <nav>
                    <h3>{prodDTO.prodName}</h3>
                    <p>{prodDTO.descript}</p>
                    {checkScore(prodDTO.score)}
                </nav>
                <nav>
                    {prodDTO.discount === 0 ? '' : <div className="org_price">
                        <del>{prodDTO.price.toLocaleString()}</del>
                        <span>{prodDTO.discount}%</span>
                    </div>}
                    <div className="dis_price">
                        <ins>{prodDTO.discount === 0 ? prodDTO.price.toLocaleString() : changeDiscountPrice(prodDTO.price, prodDTO.discount).toLocaleString()}</ins>
                    </div>
                </nav>
                <nav>
                    <span
                        className="delivery">{prodDTO.delivery === 0 ? '무료배송' : prodDTO.delivery.toLocaleString() + '원'}</span>
                    <span className="arrival">{changeFommatDate()}</span>
                    <span className="desc">본 상품은 국내배송만 가능합니다.</span>
                </nav>
                <nav>
                    <span className="card cardfree"><i>아이콘</i>무이자할부</span>&nbsp;&nbsp;
                    <span className="card cardadd"><i>아이콘</i>카드추가혜택</span>
                </nav>
                <nav>
                    <span className="origin">원산지-상세설명 참조</span>
                </nav>
                <img src={`${process.env.REACT_APP_HOME_URL}/images/vip_plcc_banner.png`} alt="100원만 결제해도 1만원 적립!"
                     className="banner"/>

                <div className="count">
                    {cartDTO.count !== 1 ? <button className="decrease" onClick={() => {
                        if (cartDTO.count <= 1) {
                            changeCartData('count', 1);
                        } else {
                            changeCartData('count', cartDTO.count - 1);
                        }
                    }}
                                                   style={{cursor: 'pointer', userSelect: 'none'}}
                    >-</button> : ''}

                    <input type="text" name="num"
                           value={cartDTO.count}
                           onChange={handleInputChange}
                    />
                    <button className="increase" onClick={() => {
                        if (cartDTO.count >= prodDTO.stock) {
                            changeCartData('count', prodDTO.stock);
                            changeCartData('total', changeDiscountPrice(prodDTO.price, prodDTO.discount) * (cartDTO.count + 1))
                        } else {
                            changeCartData('count', cartDTO.count + 1);
                            changeCartData('total', changeDiscountPrice(prodDTO.price, prodDTO.discount) * (cartDTO.count + 1))
                        }

                    }}
                            style={{cursor: 'pointer', userSelect: 'none'}}
                    >+
                    </button>
                </div>

                <div className="total">
                    <span>{cartDTO.total.toLocaleString()}</span>
                    <em>총 상품금액</em>
                </div>

                <div className="button">
                    <input type="button" className="cart"
                           onClick={() => {
                               if (localStorage.getItem('memberUid') !== null) {
                                   axios.post(`${API_BASE_URL}/product/cart`, cartDTO,
                                       {
                                           headers: {
                                               'Content-Type': 'application/json',
                                           }
                                       })
                                       .then(() => {
                                               alert('선택하신 상품이 장바구니에 담겼습니다.')
                                           }
                                       ).catch((error) => {
                                       alert('로그인 후 시도해주시기 바랍니다.')
                                       console.error(error)
                                   })
                               } else {
                                   alert('로그인 후 시도해주시기 바랍니다.')
                               }
                           }}
                           value="장바구니"/>
                    <input type="button" className="order"
                           onClick={async () => {
                               if (localStorage.getItem('memberUid') !== null) {
                                   await dispatch(insertOrderProduct([cartDTO]))
                                   await dispatch(insertOrderTotal({
                                       totalCount: 1,
                                       totalDelivery: cartDTO.delivery,
                                       totalDiscount: cartDTO.discount,
                                       totalOrderPrice: cartDTO.total,
                                       totalProductPrice: cartDTO.price * cartDTO.count,
                                       totalPoint: cartDTO.point,
                                       totalDiscountPrice: (cartDTO.price * cartDTO.discount) / 100

                                   }))
                                   navigate("/product/order")
                               }else{
                                   alert('로그인 후 시도해주시기 바랍니다.')
                               }


                           }}


                           value="구매하기"/>
                </div>
            </div>
        </article>
    </>
}

export default Info;