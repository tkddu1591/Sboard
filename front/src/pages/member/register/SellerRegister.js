import DaumPost from "../../../store/DaumPost";
import React from "react";

function SellerRegister({postOn, register, postDTO, setPostDTO, setPostOn, errors}) {
    return <>
        <section>
            <table>
                <caption>판매자 정보입력</caption>
                <tbody>
                    <tr>
                        <th><span className="essential">*</span>회사명</th>
                        <td><input type="text" name="kms_company"
                                   placeholder="회사명 입력" required
                                   {...register("company", {
                                       required: "회사명 입력해 주세요.",
                                       pattern: /^(\(주\)).+$/,
                                   })}
                                   style={errors.company && {border: 'solid 2px red'}}
                        /> <span
                            className="msgCompany">&nbsp;&nbsp;(주)포함
										입력, 예) (주)케이마켓</span>

                            {errors.company && <div style={{color: 'red'}}>유효한 회사명을 입력해주세요</div>}</td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>대표자</th>
                        <td><input type="text" name="kms_ceo" placeholder="대표자 입력"
                                   {...register("ceo", {
                                       required: "이름을 입력해 주세요.",
                                       pattern: /^[가-힣]{2,10}$/
                                   })}
                                   style={errors.ceo && {border: 'solid 2px red'}}
                                   required/>
                            {errors.ceo && <div style={{color: 'red'}}>유효한 이름을 입력해주세요</div>}</td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>사업자등록번호</th>
                        <td><input type="text" name="kms_corp_reg"
                                   placeholder="사업자등록번호 입력" required
                                   {...register("bizRegNum", {
                                       required: "사업자등록번호를 입력해 주세요.",
                                       pattern: /^\d{3}-\d{2}-\d{5}$/
                                   })}
                                   style={errors.bizRegNum && {border: 'solid 2px red'}}
                        /> <span
                            className="msgCorp">&nbsp;&nbsp;-
										표시 포함 12자리 입력, 예) 123-45-67890</span>
                            {errors.bizRegNum && <div style={{color: 'red'}}>유효한 사업자 등록번호를 입력해주세요</div>}
                        </td>

                    </tr>
                    <tr>
                        <th><span className="essential">*</span>통신판매업신고 번호</th>
                        <td><input type="text" name="kms_online_reg"
                                   placeholder="통신판매업신고 입력" required
                                   {...register("comRegNum", {
                                       required: "통신판매업신고 번호를 입력해 주세요.",
                                       pattern: /^(?:[가-힣\d]+-?\d{5}|제\s?\d+-\d+-\d+호|\d{4}-[가-힣]+\d{4})$/
                                   })}
                                   style={errors.comRegNum && {border: 'solid 2px red'}}
                        /> <span
                            className="msgOnline">&nbsp;&nbsp;-
										표시 포함, 예) 강남-12345, 제 1-01-23-4567호, 2017-경기성남-0011</span>
                            {errors.comRegNum && <div style={{color: 'red'}}>유효한 사업자 등록번호를 입력해주세요</div>}
                        </td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>전화번호</th>
                        <td><input type="text" name="kms_tel" placeholder="전화번호 입력" maxLength="13"
                                   {...register("tel", {
                                       required: "전화번호를 입력해 주세요.",
                                       pattern: /^(02|0[1-9][0-9])-\d{3,4}-\d{4}$/
                                   })}
                                   style={errors.tel && {border: 'solid 2px red'}}
                                   required/> <span className="msgTel">&nbsp;&nbsp;- 표시 포함,
										지역번호 포함, 예) 02-234-1234</span>
                            {errors.tel && <div style={{color: 'red'}}>유효한 전화번호를 입력해주세요</div>}</td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>팩스번호</th>
                        <td><input type="text" name="kms_fax" placeholder="팩스번호 입력"
                                   {...register("fax", {
                                       required: "팩스번호를 입력해 주세요.",
                                       pattern: /^(02|0[1-9][0-9])-\d{3,4}-\d{4}$/
                                   })}
                                   style={errors.fax && {border: 'solid 2px red'}}
                                   required/> <span className="msgFax">&nbsp;&nbsp;- 표시 포함,
										지역번호 포함, 예) 02-234-1234</span>
                            {errors.fax && <div style={{color: 'red'}}>유효한 팩스번호를 입력해주세요</div>}</td>
                    </tr>
                    <tr>
                        <th><span className="essential">*</span>EMAIL</th>
                        <td><input type="email" name="kms_email"
                                   placeholder="이메일 입력" required
                                   {...register("email", {
                                       required: "이메일을 입력해 주세요.",
                                       pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
                                   })}
                                   style={errors.email && {border: 'solid 2px red'}}
                                   required/>
                            {errors.email && <div style={{color: 'red'}}>유효한 이메일을 입력해주세요</div>}</td>
                    </tr>
                    <tr className="addr">
                        <th>회사주소</th>
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
                                <input type="text" name="km_addr1" id="addr1" size="50"
                                       value={postDTO.addr1}
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
        <section>
            <table>
                <caption>담당자 정보입력</caption>
                <tbody>
                    <tr>
                        <th><span className="essential">*</span>이름</th>
                        <td><input type="text" name="km_name" placeholder="이름을 입력"
                                   required
                                   {...register("name", {
                                       required: "이름을 입력해 주세요.",
                                       pattern: /^[가-힣]{2,10}$/
                                   })}
                                   style={errors.name && {border: 'solid 2px red'}}
                                   required/>
                            {errors.name && <div style={{color: 'red'}}>유효한 이름을 입력해주세요</div>}</td>
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
                </tbody>
            </table>
        </section>
    </>

}
export default SellerRegister