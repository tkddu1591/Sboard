import {Link, useNavigate} from "react-router-dom";
import {API_BASE_URL, HOME_URL} from "../../../App";
import React, {useEffect, useState} from "react";
import {changeDTO} from "../../../store/ChangeDTO";
import axios from "axios";

function SignUp({userRegisterType}) {
    let [termsCheck, setTermsCheck] = useState({
        agree1: false,
        agree2: false,
        agree3: false,
        agree4: false
    });
    let [terms, setTerms] = useState({})
    useEffect(() => {
        axios.get(`${API_BASE_URL}/member/terms`).then(response => {
            setTerms(response.data)
        })
        if (userRegisterType === 'USER') {
            changeDTO(setTermsCheck, 'agree4', true)
        }
    }, []);

    let navigate = useNavigate();

    if (userRegisterType !== '') {
        return <>
            <div className="signup">
                <nav>
                    <h1>약관동의</h1>
                </nav>
                <section>
                    <h3><span className="essential">(필수)</span>케이마켓 이용약관</h3>
                    <textarea className="terms" value={terms.terms}
                              readOnly></textarea>
                    <label><input type="checkbox" name="agree1"
                                  onClick={e => changeDTO(setTermsCheck, 'agree1', !termsCheck.agree1)}
                    />동의합니다.</label>

                    <h3><span className="essential">(필수)</span>전자금융거래 이용약관</h3>
                    <textarea className="financial" value={terms.finance} readOnly></textarea>
                    <label><input type="checkbox" name="agree2" onChange={()=>{changeDTO(setTermsCheck, 'agree2', !termsCheck.agree2)}}/>동의합니다.</label>

                    <h3><span className="essential">(필수)</span>개인정보 수집동의</h3>
                    <textarea className="privacy" readOnly value={terms.privacy}></textarea>
                    <label><input type="checkbox" name="agree3" onChange={()=>{changeDTO(setTermsCheck, 'agree3', !termsCheck.agree3)}}/>동의합니다.</label>

                    {userRegisterType ==="SELLER"? <>
                        <h3><span className="essential">(필수)</span>개인정보 수집동의</h3>
                        <textarea className="privacy" readOnly value={terms.tax}></textarea>
                        <label><input type="checkbox" name="agree4" onChange={()=>{changeDTO(setTermsCheck, 'agree4', !termsCheck.agree4)}}/>동의합니다.</label>
                    </>:null
                    }
                </section>

                <section>
                    <h3><span className="optional">(선택)</span>위치정보 이용약관</h3>
                    <textarea className="location" readOnly value={terms.location}></textarea>
                    <label><input type="checkbox" name="agree4"/>동의합니다.</label>
                </section>

                <div>
                    <input type="button" className="agree" value="동의하기"
                    onClick={()=>{
                        if(termsCheck.agree1 && termsCheck.agree2 && termsCheck.agree3 && termsCheck.agree4) {
                            navigate("/member/register")
                        }else
                            alert("필수 약관에 동의해주세요.")
                    }}
                    />
                </div>
            </div>
        </>
    }
    else{
        return <>
            <div className="register"><nav><h1>정보를 불러오는 중 오류가 발생했습니다. 처음부터 다시 시도해주세요.</h1></nav></div>
        </>
    }
}

export default SignUp;