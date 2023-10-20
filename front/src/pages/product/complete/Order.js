

function Order({completeTotal, member}) {
    return <>
        <article className="order">
            <h1>주문정보</h1>
            <table border="0">
                <tbody>
                    <tr>
                        <td>주문번호</td>
                        <td>{completeTotal.ordNo}</td>
                        <td rowSpan="3">총 결제금액</td>
                        <td rowSpan="3"><span>{completeTotal.ordTotPrice.toLocaleString()}</span>원</td>
                    </tr>
                    <tr>
                        <td>결제방법</td>
                        <td>{completeTotal.ordPayment}</td>
                    </tr>
                    {member.name !== '' ?
                        <tr>
                            <td>주문자/연락처</td>
                            <td>{member.name}/{member.hp}</td>
                        </tr> : null
                    }
                </tbody>
            </table>
        </article>
    </>
}

export default Order