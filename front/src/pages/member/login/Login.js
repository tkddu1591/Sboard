import {useEffect, useState} from "react";
import {API_BASE_URL} from "../../../App";
import axios from "axios";
import {changeDTO} from "../../../store/ChangeDTO";
import {useNavigate} from "react-router-dom";
import {createTokenHeader, GET, loginTokenHandler, retrieveStoredToken} from "../../../slice/tokenSlice";
import {useDispatch, useSelector} from "react-redux";
import {insertMember} from "../../../slice/memberSlice";

function Login() {
    let [memberDTO, setMemberDTO] = useState({uid: '', pass: ''})
    let [memberCheck, setMemberCheck] = useState(false)
    let navigate = useNavigate();
    const dispatch = useDispatch();
    return <div className="login">
        <nav>
            <h1>로그인</h1>
        </nav>

        <div>

            <table border="0">
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="uid" placeholder="아이디 입력"
                                   onChange={event => changeDTO(setMemberDTO, 'uid', event.target.value)}
                                   onKeyUp={async (e)=>{
                                       if (e.key === 'Enter') {
                                           await axios.post(`${API_BASE_URL}/member/login`, memberDTO, {
                                               headers: {
                                                   'Content-Type': 'application/json',
                                               }
                                           }).then(response => {
                                               //로그인시 아이디가 있으면 토큰을 로컬에 저장
                                               loginTokenHandler(response.data.accessToken, response.data.tokenExpiresIn);
                                           }).catch(error => setMemberCheck(true))
                                           //유저 정보를 들고옴
                                           if (localStorage.getItem('token') !== null) {
                                               await axios.get(`${API_BASE_URL}/member/me`, createTokenHeader(retrieveStoredToken().token))
                                                   .then(response => {
                                                       localStorage.setItem('memberUid', response.data.uid);
                                                   }).catch(error => console.log('유저 정보가 없습니다.'))
                                               await navigate("/")
                                           }
                                       }
                                   }}
                        /></td>

                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="pass"
                                   onChange={event => changeDTO(setMemberDTO, 'pass', event.target.value)}
                                   placeholder="비밀번호 입력"
                                   onKeyUp={async (e)=>{
                                       if (e.key === 'Enter') {
                                           await axios.post(`${API_BASE_URL}/member/login`, memberDTO, {
                                               headers: {
                                                   'Content-Type': 'application/json',
                                               }
                                           }).then(response => {
                                               //로그인시 아이디가 있으면 토큰을 로컬에 저장
                                               loginTokenHandler(response.data.accessToken, response.data.tokenExpiresIn);
                                           }).catch(error => setMemberCheck(true))
                                           //유저 정보를 들고옴
                                           if (localStorage.getItem('token') !== null) {
                                               await axios.get(`${API_BASE_URL}/member/me`, createTokenHeader(retrieveStoredToken().token))
                                                   .then(response => {
                                                       localStorage.setItem('memberUid', response.data.uid);
                                                   }).catch(error => console.log('유저 정보가 없습니다.'))
                                               await navigate("/")
                                           }
                                       }
                                   }}
                        /></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit"
                   style={{cursor: 'pointer'}}
                   onClick={async (e) => {
                       await axios.post(`${API_BASE_URL}/member/login`, memberDTO, {
                           headers: {
                               'Content-Type': 'application/json',
                           }
                       }).then(response => {
                           //로그인시 아이디가 있으면 토큰을 로컬에 저장
                           loginTokenHandler(response.data.accessToken, response.data.tokenExpiresIn);
                       }).catch(error => setMemberCheck(true))
                       //유저 정보를 들고옴
                       if (localStorage.getItem('token') !== null) {
                           await axios.get(`${API_BASE_URL}/member/me`, createTokenHeader(retrieveStoredToken().token))
                               .then(response => {
                                   localStorage.setItem('memberUid', response.data.uid);
                               }).catch(error => console.log('유저 정보가 없습니다.'))
                           await navigate("/")
                       }

                   }}
                   value="로그인"/>
            <span>
                <label><input type="checkbox" name="auto"/>자동 로그인</label>
                {memberCheck &&
                    <div style={{color: 'red', marginTop: '10px'}}> 아이디 또는 비밀번호를 잘못 입력했습니다.<br/>입력하신 내용을 다시 확인해주세요.
                    </div>}
            </span>
            <span style={{position: 'absolute', left: '10px', bottom: '10px'}}>
                <span href="#" style={{border: 'none'}}>아이디찾기</span>
                <span href="#">비밀번호찾기</span>
                <span onClick={() => navigate("/member/join")}>회원가입</span>
            </span>
            <a href="#" className="banner"><img
                src={`${process.env.REACT_APP_HOME_URL}/images/member/member_login_banner.jpg`}
                alt="1만원 할인 쿠폰 받기"/></a>

        </div>
        <img src={`${process.env.REACT_APP_HOME_URL}/images/member/member_certifi_logo.gif`} alt="banner"/>
    </div>

}

export default Login