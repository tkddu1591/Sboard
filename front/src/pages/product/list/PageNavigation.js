function PageNavigation({pageResponseDTO, changePageRequest}) {
    let start = pageResponseDTO.start;
    let end = pageResponseDTO.end;
    let size = pageResponseDTO.size;
    let next = pageResponseDTO.next;
    let prev = pageResponseDTO.prev;
    let cate = pageResponseDTO.cate;
    let total = pageResponseDTO.total;
    let pg = pageResponseDTO.pg;

    let no = []
    for (let i = start; i <= end; i++) {
        no.push(i)
    }

    for(let i = start; i <= end; i++) {
        <div>{i}</div>
    }
    return <div className="paging">

        {prev && <span className="prev">
                <a onClick={() => changePageRequest('pg', start - 1)}
                   style={{cursor: 'pointer', userSelect: 'none'}}> &lt; 이전 </a>
            </span>}
        <span className="num">

            {no.map((item, index) => {
                return <a key={index}
                          onClick={() => changePageRequest('pg', item)} style={{cursor: 'pointer', userSelect: 'none'}}
                          className={pg === item ? 'on' : ''}>{item}</a>
            })}
        </span>

        {next && <span className="">
                <a onClick={() => changePageRequest('pg', end + 1)}
                   style={{cursor: 'pointer', userSelect: 'none'}}> 다음 &gt;</a>
            </span>}

    </div>
}


export default PageNavigation;