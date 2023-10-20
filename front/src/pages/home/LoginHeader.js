import {Link, useNavigate} from "react-router-dom";
import {HOME_URL} from "../../App";
import {useDispatch, useSelector} from "react-redux";
import {deleteMember, insertMember} from "../../slice/memberSlice";
import {logoutActionHandler} from "../../slice/tokenSlice";
import {useState} from "react";

function LoginHeader() {
    let [member,setMember] = useState(localStorage.getItem('memberUid'));
    let navigate = useNavigate();
    let dispatch = useDispatch();


    return <>
        <div className="top">
            <div>

                {member === null ?
                    <>
                        <Link to={HOME_URL + "/member/login"}>로그인</Link>
                        <Link to={HOME_URL + "/member/join"}>회원가입</Link>
                    </>
                    :
                    <>
                        <a style={{color:'#E60012'}}>{member}</a>
                        <a style={{cursor: 'pointer', userSelect: 'none'}}
                           onClick={(e) => {
                               logoutActionHandler()
                               navigate(0)
                           }}>로그아웃</a>
                        <Link>마이페이지</Link>
                        <a onClick={(e) => {
                            navigate(process.env.PUBLIC_URL + "/product/cart")
                        }}
                           style={{cursor: 'pointer', userSelect: 'none'}}
                        ><i className="fa fa-shopping-cart" aria-hidden="true"

                        ></i
                        >&nbsp;장바구니</a
                        >
                    </>}


                <Link to={HOME_URL + "/"}>홈</Link>
            </div>
        </div>
    </>
}

export default LoginHeader