import DaumPost from "../../../store/DaumPost";
import React from "react";

function UserRegister({postOn, register, postDTO, setPostDTO, setPostOn, errors}) {
    return <>
        <section>
            <table>
                <caption>기본 정보입력</caption>
                <tbody>
                    <tr>
                        <th><span className="essential">*</span>이름</th>
                        <td><input type="text" name="km_name" placeholder="이름 입력"
                                   {...register("name", {
                                       required: "이름을 입력해 주세요.",
                                       pattern: /^[가-힣]{2,10}$/
                                   })}
                                   style={errors.name && {border: 'solid 2px red'}}
                                   required/>
                            {errors.name && <div style={{color: 'red'}}>유효한 이름을 입력해주세요</div>}
                        </td>

                    </tr>
                    <tr>
                        <th><span className="essential">*</span>성별</th>
                        <td>
                            <label><input type="radio" value="1" checked {...register("gender")}/>남</label>
                            <label><input type="radio" value="2" {...register("gender")}/>여</label>
                        </td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>EMAIL</th>
                        <td><input type="email" name="km_email" placeholder="이메일 입력"
                                   {...register("email", {
                                       required: "이메일을 입력해 주세요.",
                                       pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
                                   })}
                                   style={errors.email && {border: 'solid 2px red'}}
                                   required/>
                            {errors.email && <div style={{color: 'red'}}>유효한 이메일을 입력해주세요</div>}
                        </td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>휴대폰</th>
                        <td><input type="text" name="km_hp" maxLength="13"
                                   placeholder="휴대폰번호 입력" required
                                   {...register("hp", {
                                       required: "휴대폰번호를 입력해 주세요.",
                                       pattern: /^01(?:0|1|[6-9])-(?:\d{4})-\d{4}$/
                                   })}
                                   style={errors.hp && {border: 'solid 2px red'}}
                                   required/><span>&nbsp;&nbsp;- 포함하여 13자리를 입력해주세요.</span>
                            {errors.hp && <div style={{color: 'red'}}>유효한 휴대폰 번호를 입력해주세요</div>}</td>
                    </tr>
                    <tr className="addr">
                        <th>주소</th>
                        <td>
                            <div>
                                <input type="text" name="km_zip" id="zip" placeholder="우편번호 검색 클릭"
                                       readOnly {...register('zip')}
                                       value={postDTO.zip}
                                       onClick={() => {
                                           setPostOn(!postOn)
                                       }}/>
                            </div>
                            <div>
                                <input type="text" name="km_addr1" id="addr1" size="50" value={postDTO.addr1}
                                       placeholder="주소를 검색하세요." {...register('addr1')} readOnly/>
                            </div>
                            <div>
                                <input type="text" name="km_addr2" id="addr2" size="50"
                                       defaultValue={postDTO.addr2}
                                       {...register('addr2')}
                                       placeholder="상세주소를 입력하세요."/>
                            </div>
                            {postOn && <>
                                <DaumPost setPostDTO={setPostDTO} setPostOn={setPostOn}></DaumPost>
                            </>}
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>
}

export default UserRegister