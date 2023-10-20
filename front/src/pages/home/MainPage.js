function MainPage(){

    const images = ([
        "https://via.placeholder.com/985x447",
        "https://via.placeholder.com/985x447",
        "https://via.placeholder.com/985x447",
    ])

    return(
            <section>
                <section className="slider">
                    <ul>
                        <SliderItem images={images}></SliderItem>
                    </ul>
                </section>

                <ProductList type="hit" name="히트"></ProductList>
                <ProductList type="recomment" name="추천"></ProductList>
                <ProductList type="new" name="최신"></ProductList>
                <ProductList type="discount" name="할인"></ProductList>
            </section>
    )
}

function ProductList(props) {
    let count = [];
    for (let i = 0; i < 8; i++) {
        count.push(i);
    }
    return (
        <section className={props.type}>
            <h3><span>{props.name}상품</span></h3>
            {count.map((item, index) => {
                return (
                    <ProductItem key={index + props.type}></ProductItem>
                )
            })}

        </section>

    )
}

function ProductItem(props) {
    return (
        <article>
            <a style={{cursor: "pointer"}}>
                <div className="thumb">
                    <img src="https://via.placeholder.com/230x230" alt="t1"/>
                </div>
                <h2>상품명</h2>
                <p>간단한 상품 설명</p>
                <div className="org_price">
                    <del>30,000</del>
                    <span>10%</span>
                </div>
                <div className="dis_price">
                    <ins>27,000</ins>
                    <span className="free">무료배송</span>
                </div>
            </a>
        </article>
    )
}


function SliderItem({images}) {
    return (

        images.map((image, index) => {
            return (
                <li key={index}>
                    <a href="#"
                    ><img src={image} alt="item1"
                    /></a>
                </li>
            )
        })

    )
}

export default MainPage;