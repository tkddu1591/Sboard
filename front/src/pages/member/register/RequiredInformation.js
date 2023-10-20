import React from "react";

function RequiredInformation({register, errors, watch}) {
    return <>
        <section>
            <table>
                <caption>필수 정보입력</caption>
                <tbody>
                    <tr>
                        <th><span className="essential">*</span>아이디</th>
                        <td><input type="text" name="km_uid"
                                   placeholder="아이디 입력"
                                   {...register("uid", {
                                       required: "아이디를 입력해 주세요.",
                                       pattern: /^[a-z]+[a-z0-9]{4,12}$/
                                   })}
                                   style={errors.uid && {border: 'solid 2px red'}} required/> <span
                            className="msgSId">&nbsp;&nbsp;영문, 숫자로
										4~12자까지 설정해 주세요.</span>
                            {errors.uid && <div style={{color: 'red'}}>아이디를 형식에 맞춰 입력해주세요</div>}
                        </td>

                    </tr>
                    <tr>
                        <th><span className="essential">*</span>비밀번호</th>
                        <td><input type="password" name="km_pass"
                                   placeholder="비밀번호 입력" required
                                   {...register('pass', {
                                       required: "비밀번호를 입력해 주세요.",
                                       pattern: /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,12}$/
                                   })}
                                   style={errors.pass && {border: 'solid 2px red'}}

                        /> <span
                            className="msgPass">&nbsp;&nbsp;영문,
										숫자, 특수문자를 조합하여 8~12자까지 설정해 주세요.</span>
                            {errors.pass && <div style={{color: 'red'}}>비밀번호를 형식에 맞춰 입력해주세요</div>}
                        </td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>비밀번호확인</th>
                        <td><input type="password" name="km_pass"
                                   placeholder="비밀번호 확인" required
                                   {...register('pass2', {
                                       required: "비밀번호가 일치하지 않습니다.",
                                       validate: (value) => value === watch().pass
                                   })}
                                   style={errors.pass2 && {border: 'solid 2px red'}}
                        /> <span
                            className="msgPass">&nbsp;&nbsp;비밀번호 재입력</span>
                            {errors.pass2 && <div style={{color: 'red'}}>비밀번호와 같게 입력해주세요</div>}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>
}
export default RequiredInformation;