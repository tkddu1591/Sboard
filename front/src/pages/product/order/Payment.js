import React from "react";

function Payment({orderEnd, changeOrderEnd}) {
    return <>

        <article className="payment">
            <h1>결제방법</h1>
            <div>
                <span>신용카드</span>
                <p>
                    <label><input type="radio" name="payment" value="type1" readOnly
                                  checked={orderEnd.ordPayment === 1} onClick={() => {
                        changeOrderEnd('ordPayment', 1);
                    }}/>신용카드 결제</label>
                    <label><input type="radio" name="payment" value="type2" readOnly
                                  checked={orderEnd.ordPayment === 2} onClick={() => {
                        changeOrderEnd('ordPayment', 2);
                    }}/>체크카드 결제</label>
                </p>
            </div>
            <div>
                <span>계좌이체</span>
                <p>
                    <label><input type="radio" name="payment" value="type3" readOnly
                                  checked={orderEnd.ordPayment === 3} onClick={() => {
                        changeOrderEnd('ordPayment', 3);
                    }}/>실시간 계좌이체</label>
                    <label><input type="radio" name="payment" value="type4" readOnly
                                  checked={orderEnd.ordPayment === 4} onClick={() => {
                        changeOrderEnd('ordPayment', 4);
                    }}/>무통장 입금</label>
                </p>
            </div>
            <div>
                <span>기타</span>
                <p>
                    <label><input type="radio" name="payment" value="type5" readOnly
                                  checked={orderEnd.ordPayment === 5} onClick={() => {
                        changeOrderEnd('ordPayment', 5);
                    }}/>휴대폰결제</label>
                    <label>
                        <input type="radio" name="payment" value="type6" readOnly
                               checked={orderEnd.ordPayment === 6} onClick={() => {
                            changeOrderEnd('ordPayment', 6);
                        }}/>카카오페이
                        <img src="../images/ico_kakaopay.gif" alt="카카오페이"/>
                    </label>
                </p>
            </div>
        </article>
    </>
}
export default Payment;