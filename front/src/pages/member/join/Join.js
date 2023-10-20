import {Link} from "react-router-dom";
import {HOME_URL} from "../../../App";

function Join({setUserRegisterType}) {
    return <>
        <div className="join">
            <h1 className="welcome"><strong>롯데ON</strong>에 오신것을 환영합니다.</h1>
            <div className="type">
                <div className="normal">
                    <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_tit_normal.gif`}
                         alt="구매회원 가입"/>
                    <div className="txt">
                        <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_txt_normal.gif`}
                             alt="개인 구매회원"/>
                        <Link to={`${HOME_URL}/member/signUp`}
                              onClick={() => {
                                  setUserRegisterType('USER')
                              }}><img
                            src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_btn1.gif`}
                            alt="회원가입"/></Link>
                    </div>
                </div>
                <div className="seller">
                    <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_tit_seller.gif`}
                         alt="판매회원 가입"/>
                    <div className="txt">
                        <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_txt_seller.gif`}
                             alt="개인 구매회원"/>
                        <Link to={`${HOME_URL}/member/signUp`}
                              onClick={() => {
                                  setUserRegisterType('SELLER')
                              }}><img
                            src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_btn2.gif`}
                            alt="회원가입"/></Link>
                    </div>
                </div>
            </div>
            <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_banner1.jpg`} className="banner"
                 alt="신규회원을 위한 기분 좋은 혜택"/>
            <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_join_banner2.jpg`} className="banner"
                 alt="사업자회원을 위한 기분 좋은 혜택"/>
        </div>
    </>
}

export default Join;