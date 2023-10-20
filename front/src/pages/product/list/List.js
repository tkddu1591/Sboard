import {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import ProductItem from "./ProductItem"
import PageNavigation from "./PageNavigation";
import CateRoot from "../CateRoot";
import ListSort from "./ListSort";
import {API_BASE_URL} from "../../../App";
function List() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const newCate = searchParams.get('cate');
    const [cate, setCate] = useState(newCate);
    const newSearch = searchParams.get('search');
    const [search, setSearch] = useState(newSearch);
    const newType = searchParams.get('type');
    const [type, setType] = useState(newType);

    let [pageRequestDTO, setPageRequestDTO] = useState({
        pg: 1, size: 10, cate: cate, search: search, type: type
    })
    let [pageResponseDTO, setPageResponseDTO] = useState({
        cate: parseInt(cate), dtoList: [], end: 10, start: 1, next: true, prev: true, total: 10, size: 10
    });

    useEffect(() => {
        axios.get(`${API_BASE_URL}/product/list`, {
            params: pageRequestDTO
        })
            .then(res => {
                setPageResponseDTO(res.data)
            }).catch(error => {
            console.log(error);
        })

    }, [pageRequestDTO]);

    const changePageRequest = (key, value) => {
        setPageRequestDTO((pageRequestDTO) => {
            let pageRequest = {...pageRequestDTO};
            pageRequest[key] = value;
            return pageRequest;
        });
    };

    if (newCate !== cate
        && newCate !== null) {
        setCate(newCate);
        resetPageRequest()
        changePageRequest('cate', newCate)
    }
    if (newSearch !== search
        && newSearch !== null
    ) {
        setSearch(newSearch);
        resetPageRequest()
        changePageRequest('search', newSearch);
    }
    if (newType !== type) {
        setType(newType);
        resetPageRequest()
        changePageRequest('type', newType);
    }

    function resetPageRequest() {
        changePageRequest('pg', 1)
        changePageRequest('type', 'sold')
        changePageRequest('search', '')
        changePageRequest('cate', '0')
    }

    return (
        <>
            <CateRoot thisCate={cate}></CateRoot>

            <ListSort changePageRequest={changePageRequest}
                      pageRequestDTO={pageRequestDTO}
                      cate={newCate}
                      search={newSearch}
            ></ListSort>

            <ProductItem pageResponseDTO={pageResponseDTO}></ProductItem>

            <PageNavigation pageResponseDTO={pageResponseDTO} changePageRequest={changePageRequest}>

            </PageNavigation>
        </>
    )
}


export default List;