
function Notice({prodDTO}){
    return <article className="notice">
        <nav>
            <h1>상품 정보 제공 고시</h1>
            <p>[전자상거래에 관한 상품정보 제공에 관한 고시] 항목에 의거 등록된 정보입니다.</p>
        </nav>
        <table border="0">
            <tbody>
                <tr>
                    <td>상품번호</td>
                    <td>{prodDTO.prodNo}</td>
                </tr>
                <tr>
                    <td>상품상태</td>
                    <td>{prodDTO.status}</td>
                </tr>
                <tr>
                    <td>부가세 면세여부</td>
                    <td>{prodDTO.duty}</td>
                </tr>
                <tr>
                    <td>영수증발행</td>
                    <td>{prodDTO.receipt}</td>
                </tr>
                <tr>
                    <td>사업자구분</td>
                    <td>{prodDTO.bizType}</td>
                </tr>
                <tr>
                    <td>브랜드</td>
                    <td>{prodDTO.company}</td>
                </tr>
                <tr>
                    <td>원산지</td>
                    <td>{prodDTO.origin}</td>
                </tr>
            </tbody>
        </table>
        <table border="0">
            <tbody>
                <tr>
                    <td>제품소재</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>색상</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>치수</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>제조자/수입국</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>제조국</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>취급시 주의사항</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>제조연월</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>품질보증기준</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>A/S 책임자와 전화번호</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td>주문후 예상 배송기간</td>
                    <td>상세정보 직접입력</td>
                </tr>
                <tr>
                    <td colSpan="2">구매, 교환, 반품, 배송, 설치 등과 관련하여 추가비용, 제한조건 등의 특이사항이 있는 경우</td>
                </tr>
            </tbody>
        </table>
        <p className="notice">
            소비자가 전자상거래등에서 소비자 보호에 관한 법률 제 17조 제1항 또는 제3항에 따라 청약철회를 하고
            동법 제 18조 제1항 에 따라 청약철회한 물품을 판매자에게 반환하였음에도 불구 하고 결제 대금의
            환급이 3영업일을 넘게 지연된 경우, 소비자 는 전자상거래등에서 소비자보호에 관한 법률 제18조
            제2항 및 동법 시행령 제21조 2에 따라 지연일수에 대하여 전상법 시행령으로 정하는 이율을 곱하여
            산정한 지연이자(“지연배상금”)를 신청할 수 있습니다. 아울러, 교환∙반품∙보증 및 결제대금의
            환급신청은 [나의쇼핑정보]에서 하실 수 있으며, 자세한 문의는 개별 판매자에게 연락하여 주시기 바랍니다.
        </p>
    </article>

}
export default Notice;