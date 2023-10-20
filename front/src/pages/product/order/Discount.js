import React from "react";

function Discount({setUsePoint, member, usePoint, changeOrderEnd, newOrderTotal}) {
    const handlePointChange = (event) => {
        const updateCount = event.target.value
        if (isNaN(Number(updateCount))) {
            setUsePoint(usePoint);
        } else if (updateCount < 0) {
            setUsePoint(0);
        } else if (updateCount > member.point) {
            setUsePoint(member.point);
        } else {
            setUsePoint(updateCount);
        }
    };

    return <>
        <article className="discount">
            <h1>할인정보</h1>

            <div>
                <p>현재 포인트 : <span>{member.point&&member.point.toLocaleString()}</span>점</p>
                <label>
                    <input type="text" name="point"
                           value={usePoint.toLocaleString()}
                           onChange={(e) => {
                               handlePointChange(e)
                           }}
                    />점
                    <input type="button" value="적용"
                           onClick={() => {
                               if (usePoint < 5000) {
                                   alert('포인트 5,000점 이상부터 사용가능합니다.')
                               }
                               changeOrderEnd('usedPoint', usePoint)
                               changeOrderEnd('ordTotPrice"', newOrderTotal.totalOrderPrice - usePoint)
                           }}/>
                </label>
                <span>포인트 5,000점 이상이면 현금처럼 사용 가능합니다.</span>
            </div>
        </article>
    </>
}

export default Discount;