function Review({pageResponseDTO}) {
    let reviewDtoList = pageResponseDTO.reviewDtoList


    function checkScore(score) {
        if (score == 0) {
            return <h5>상품평이 없습니다.</h5>
        } else if (score > 4.5) {
            return <h5 className="rating star5">상품평</h5>
        } else if (score > 3.5) {
            return <h5 className="rating star4">상품평</h5>
        } else if (score > 2.5) {
            return <h5 className="rating star3">상품평</h5>
        } else if (score > 1.5) {
            return <h5 className="rating star2">상품평</h5>
        } else {
            return <h5 className="rating star1">상품평</h5>
        }
    }

    if (reviewDtoList === undefined) {
        return <div className="empty">
            <div>상품 리뷰가 없습니다.</div>
        </div>
    }
    return <ul>

        {Array.isArray(reviewDtoList) && reviewDtoList.map((item, index) => {
            return (<li key={item.revNo}>
                <div>
                    {checkScore(item.rating)}
                    <span><MaskedText text={item.uid} preserveCount={3}></MaskedText></span>
                </div>
                <h3>상품명1/BLUE/L</h3>
                <p>
                    {item.content}
                </p>
            </li>)
        })}

    </ul>
}

function MaskedText({text, preserveCount}) {
    if (!text) {
        return null; // 또는 다른 처리 방법 선택
    }
    const preservedPart = text.slice(0, preserveCount); // 보존할 부분
    const maskedPart = text.slice(preserveCount).replace(/./g, '*'); // 마스킹된 부분
    const maskedText = preservedPart + maskedPart;
    return <span>{maskedText}</span>;
}

export default Review;