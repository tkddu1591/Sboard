import './css/App.css';
import './css/Product.css'
import './css/Member.css'
import React, {lazy, memo, Suspense, useEffect, useState,} from "react";
import {Outlet, Route, Routes} from "react-router-dom";
import axios from "axios";
import {changeCate1, changeCate2} from "./slice/cateSilce";
import {useDispatch, useSelector} from "react-redux";
import './pages/home/slider.css';
import CateRoot from "./pages/product/CateRoot";
import {deleteBanner} from "./slice/bannerSilce";
import Order from "./pages/product/order/Order";
import {insertMember} from "./slice/memberSlice";

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const HOME_URL = process.env.REACT_APP_HOME_URL;
const Aside = lazy(() => import('./pages/home/Aside.js'))
const Footer = lazy(() => import('./pages/home/Footer.js'))
const Header = lazy(() => import('./pages/home/Header.js'))
const MainPage = lazy(() => import('./pages/home/MainPage.js'))
const List = lazy(() => import('./pages/product/list/List.js'))
const View = lazy(() => import('./pages/product/view/View.js'))
const Cart = lazy(() => import('./pages/product/cart/Cart.js'))
const Complete = lazy(() => import('./pages/product/complete/Complete.js'))
const LoginHeader = lazy(() => import('./pages/home/LoginHeader.js'))
const Login = lazy(() => import('./pages/member/login/Login.js'))
const SignUp = lazy(() => import('./pages/member/signUp/SignUp.js'))
const Join = lazy(() => import('./pages/member/join/Join.js'))
const MemberRegister = lazy(() => import('./pages/member/register/Register.js'))

function App() {

    let dispatch = useDispatch();
    const [ip, setIp] = useState();

    useEffect(() => {
        axios.get('https://geolocation-db.com/json/')
            .then((res) => {
                setIp(res.data.IPv4)
            })
    }, [])

    function fallbackData() {
        return <div>로딩중</div>
    }

    let member = {
        uid: 'user',
        pass: 'user',
    }
    useEffect(() => {
        axios.get(`${API_BASE_URL}/product/cate1`).then(res => {
            dispatch(changeCate1(res.data))
        }).catch(error => {
            console.log(error);
        })
        axios.get(`${API_BASE_URL}/product/cate2`).then(res => {
            dispatch(changeCate2(res.data))
        }).catch(error => {
            console.log(error);
        })
        //user 데이터 받아오기 나중에는 로그인 페이지로 처리
    }, []);


    let BannerTopMemo = memo(function () {
        return <BannerTop></BannerTop>
    })
    let HeaderMemo = memo(function () {
        return <Header></Header>
    })
    let FooterMemo = memo(function () {
        return <Footer></Footer>
    })
    let AsideMemo = memo(function () {
        return <Aside></Aside>
    })

    let [userRegisterType, setUserRegisterType] = useState('');
    return (
        <>
            <Routes>
                {
                    /*여기에 배포 레포지토리 정의 해줌 index.js의 BrowserRouter의 base와 매칭 LotteON 등*/}
                <Route path="/" element={
                    <Suspense fallback={fallbackData()}>
                        <BannerTopMemo/>
                        <Outlet></Outlet>
                        <FooterMemo></FooterMemo>
                    </Suspense>
                }>
                    {/*멤버 라우트*/}
                    <Route path="member" element={
                        <>
                            <header><LoginHeader></LoginHeader></header>
                            <main id="member">
                                <Outlet></Outlet>
                            </main>
                        </>
                    }>

                        <Route path="login" element={<Suspense fallback={fallbackData()}>
                            <Login></Login>
                        </Suspense>}/>
                        <Route path="join" element={<Suspense fallback={fallbackData()}>
                            <Join setUserRegisterType={setUserRegisterType}></Join>
                        </Suspense>}/>
                        <Route path="signUp" element={<Suspense fallback={fallbackData()}>
                            <SignUp userRegisterType={userRegisterType}></SignUp>
                        </Suspense>}/>
                        <Route path="register" element={<Suspense fallback={fallbackData()}>
                            <MemberRegister userRegisterType={userRegisterType} ip={ip}></MemberRegister>
                        </Suspense>}/>


                    </Route>
                    {/*프로덕트 라우트*/}
                    <Route path="product" element={
                        <>
                            <Header></Header>
                            <main id="product">
                                <AsideMemo></AsideMemo>
                                <Outlet></Outlet>
                            </main>
                        </>}>
                        <Route path="list" element={<section className="list"><List></List></section>}/>
                        <Route path="view" element={<Suspense fallback={fallbackData()}>
                            <section className="view">
                                <CateRoot></CateRoot>
                                <View></View>
                            </section>
                        </Suspense>}/>
                        <Route path="cart" element={<Suspense fallback={fallbackData()}>
                            <section className="cart">
                                <CateRoot type={'cart'}></CateRoot>
                                <Cart></Cart>
                            </section>
                        </Suspense>}/>

                        <Route path="order" element={<Suspense fallback={fallbackData()}>
                            <section className="order">
                                <CateRoot type='order'></CateRoot>
                                <Order></Order>
                            </section>
                        </Suspense>}/>
                        <Route path="complete" element={<Suspense fallback={fallbackData()}>
                            <section className="complete">
                                <CateRoot type='complete'></CateRoot>
                                <Complete></Complete>
                            </section>
                        </Suspense>}/>
                    </Route>

                    <Route path="" element={<><HeaderMemo/>
                        <main><AsideMemo></AsideMemo><MainPage></MainPage></main>
                    </>}/>
                    <Route path="*" element={<><HeaderMemo/>
                        <main><AsideMemo></AsideMemo>
                            <div>없는 페이지 입니다</div>
                        </main>
                    </>}/>

                </Route>
            </Routes>
        </>
    )
}

function BannerTop() {

    let dispatch = useDispatch()
    let banner = useSelector((state) => state.banner);
    if (banner) {
        return (
            <div id="bannerTop" className="on" style={{background: '#e4dfdf'}}>
                <article>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#"><img src={`${process.env.REACT_APP_HOME_URL}/images/topBanner1.png`}/></a>
                    <button className="btnClose" onClick={() => {
                        dispatch(deleteBanner())
                    }}>close
                    </button>
                </article>
            </div>
        )
    } else return null;
}

export default App;



