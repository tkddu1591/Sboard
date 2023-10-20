import {useSelector, useDispatch} from "react-redux";
import {changeCateNames} from "../../slice/cateSilce";
import {useEffect} from "react";

function CateRoot({thisCate, type}) {

    let cate1DTO = useSelector((state) => state.cate1);
    let cate2DTO = useSelector((state) => state.cate2);
    let dispatch = useDispatch()
    let newCategory = {}
    let cateNumber = thisCate;

    const cateNames = useSelector((state) => state.cateNames);
    const categoryNo = useSelector((state) => state.categoryNo);

    useEffect(() => {
        if (cateNumber === undefined) {
            cateNumber = categoryNo;
        } else if (cateNumber >= 1000) {
            Array.isArray(cate2DTO) && cate2DTO.some(function (item) {
                if (item.cate2 === parseInt(cateNumber)) {
                    newCategory.c2Name = item.c2Name;
                    const matchedCate1 = cate1DTO.find(item2 => item2.cate1 === parseInt(item.cate1));
                    if (matchedCate1) {
                        // 액션 디스패치
                        dispatch(changeCateNames({ c2Name: item.c2Name, c1Name: matchedCate1.c1Name }));
                    }
                }
            });
        } else {
            Array.isArray(cate1DTO) && cate1DTO.some(function (item) {
                if (item.cate1 === parseInt(cateNumber)) {
                    newCategory.c1Name = item.c1Name;
                    if (cateNames.c2Name != null || newCategory.c1Name !== cateNames.c1Name) {
                        // 액션 디스패치
                        dispatch(changeCateNames({ c1Name: item.c1Name }));
                    }
                }
            });
        }

    }, [cateNumber, categoryNo])

    function getCateName() {
        if (cateNames.c2Name != null) {
            return <>
                > <span>{cateNames.c1Name}</span> > <strong>{cateNames.c2Name}</strong>
            </>
        }
        if (cateNames.c1Name != null) {
            return <>
                > <span>{cateNames.c1Name}</span>
            </>
        }
        return null;
    }

    if (type === "cart")
        return <>
            <nav>
                <h1>장바구니</h1>
                <p>HOME > 장바구니</p>
            </nav>
        </>
    else if (type === "order")
        return <>
            <nav>
                <h1>주문결제</h1>
                <p>HOME > 주문결제</p>
            </nav>
        </>
    else if (type === "complete")
        return <>
            <nav>
                <h1>주문완료</h1>
                <p>HOME > 주문완료</p>
            </nav>
        </>
    else {
        return <>
            <nav>
                <h1>상품목록</h1>
                <p>HOME {getCateName()}</p>
            </nav>
        </>
    }
}


export default CateRoot;