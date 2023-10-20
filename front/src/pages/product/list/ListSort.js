function ListSort({changePageRequest, pageRequestDTO, cate, search}) {


    function changeType(type) {
        changePageRequest('pg', 1)
        changePageRequest('type', type)
    }


    if(cate===null && search===null){
        return null
    }

    return <>
        <ul className="sort">
            <li>
                <a onClick={() => changeType('sold')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'sold' ? 'on' : ''}>판매많은순</a></li>
            <li>
                <a onClick={() => changeType('price')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'price' ? 'on' : ''}>낮은가격순</a></li>
            <li>
                <a onClick={() => changeType('priceAsc')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'priceAsc' ? 'on' : ''}>높은가격순</a></li>
            <li>
                <a onClick={() => changeType('score')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'score' ? 'on' : ''}>평점높은순</a></li>
            <li>
                <a onClick={() => changeType('review')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'review' ? 'on' : ''}>후기많은순</a></li>
            <li>
                <a onClick={() => changeType('rdate')}
                   style={{cursor: 'pointer', userSelect: 'none'}}
                   className={pageRequestDTO.type === 'rdate' ? 'on' : ''}>최근등록순</a></li>
        </ul>
    </>
}

export default ListSort