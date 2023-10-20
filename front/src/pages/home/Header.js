import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {changeCategoryNo, changeCateNames} from "../../slice/cateSilce";
import {useDispatch, useSelector} from "react-redux";
import {API_BASE_URL, HOME_URL} from "../../App";
import LoginHeader from "./LoginHeader";

function Header() {
    let navigator = useNavigate();

    let dispatch = useDispatch();


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const newCate = searchParams.get('cate');
    const [cate, setCate] = useState(newCate);
    const newType = searchParams.get('type');
    const [type, setType] = useState(newType);
    const newSearch = searchParams.get('search');
    let [search, setSearch] = useState('');
    return (
        <header>
            <LoginHeader></LoginHeader>
            <div className="logo">
                <div>
                    <Link to={process.env.PUBLIC_URL + "/"}><img
                        src={`${process.env.REACT_APP_HOME_URL}/images/header_logo.png`} alt="로고"/></Link>
                    <div>
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            onKeyUp={(e) => {
                                if (e.keyCode === 13) {
                                    dispatch(changeCateNames(''))
                                    dispatch(changeCategoryNo(0))
                                    navigator(process.env.PUBLIC_URL + "/product/list?search=" + search)
                                }
                            }}


                        />
                        <button><i className="fa fa-search"
                                   onClick={(e) => {
                                       navigator(process.env.PUBLIC_URL + "/product/list?search=" + search)
                                   }}
                        ></i></button>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div>
                    <ul>
                        <li><a style={{
                            fontWeight: (newCate === null ? newType === 'hit' ? 'bold' : null : null),
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                               onClick={() => {
                                   (navigator(process.env.PUBLIC_URL + "/product/list?type=hit"))
                               }
                               }>히트상품</a></li>
                        <li><a style={{
                            fontWeight: (newCate === null ? newType === 'score' ? 'bold' : null : null),
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                               onClick={() => {
                                   (navigator(process.env.PUBLIC_URL + "/product/list?type=score"))
                               }
                               }>추천상품</a></li>
                        <li><a style={{
                            fontWeight: (newCate === null ? newType === 'rdate' ? 'bold' : null : null),
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                               onClick={() => {
                                   (navigator(process.env.PUBLIC_URL + "/product/list?type=rdate"))
                               }
                               }>최신상품</a></li>
                        <li><a style={{
                            fontWeight: (newCate === null ? newType === 'sold' ? 'bold' : null : null),
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                               onClick={() => {
                                   (navigator(process.env.PUBLIC_URL + "/product/list?type=sold"))
                               }
                               }>인기상품</a></li>
                        <li><a style={{
                            fontWeight: (newCate === null ? newType === 'discount' ? 'bold' : null : null),
                            cursor: 'pointer',
                            userSelect: 'none'
                        }}
                               onClick={() => {
                                   (navigator(process.env.PUBLIC_URL + "/product/list?type=discount"))
                               }
                               }>할인상품</a></li>
                    </ul>
                    <ul>
                        <li><Link to={API_BASE_URL + "/cs/notice/list?cate=all"}>공지사항</Link></li>
                        <li><Link to={API_BASE_URL + "/cs/faq/list?cate=member"}>자주묻는질문</Link></li>
                        <li><Link to={API_BASE_URL + "/cs/qna/list?cate=member"}>문의하기</Link></li>
                        <li><Link to={API_BASE_URL + "/cs/index"}>고객센터</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;