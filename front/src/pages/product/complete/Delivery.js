

function Delivery({completeTotal, member}) {
    return <>

        <article className="delivery">
            <h1>배송정보</h1>
            <table border="0">
                <tbody>
                    <tr>
                        <td>수취인</td>
                        <td>{member.name}</td>
                        <td>주문자 정보</td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td>{completeTotal.recipHp}</td>
                        <td rowSpan="2">
                            {member.name}<br/>
                            {member.hp}
                        </td>
                    </tr>
                    <tr>
                        <td>배송지 주소</td>
                        <td>{completeTotal.recipZip !== null ? completeTotal.recipZip + " " : null}
                            {completeTotal.recipAddr1 !== null ? completeTotal.recipAddr1 + " " : null}
                            {completeTotal.recipAddr2 !== null ? completeTotal.recipAddr2 + " " : null}</td>
                    </tr>
                </tbody>
            </table>
        </article>
    </>
}


export default Delivery