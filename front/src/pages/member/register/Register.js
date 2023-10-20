import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import DaumPost from "../../../store/DaumPost";
import SellerRegister from "./SellerRegister";
import UserRegister from "./UserRegister";
import RequiredInformation from "./RequiredInformation";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Register({userRegisterType, ip}) {
    const {
        watch,
        register,
        setValue,
        formState: {
            errors,
        }, handleSubmit
    } = useForm({mode: "onTouched"});
    let navigate = useNavigate();
    const onValid = async (data) => {
        await axios.post(`${process.env.REACT_APP_API_ROOT}/member/signup`, data)
            .then(res=>{
                alert('회원가입이 완료되었습니다.')
                navigate("/member/login")
            }).catch(err => {

            });
    }
    let [postOn, setPostOn] = useState(false);
    let [postDTO, setPostDTO] = useState({
        zip: '',
        addr1: '',
        addr2: ''
    });
    useEffect(() => {
            setValue("zip",postDTO.zip)
            setValue("addr1",postDTO.addr1)
            setValue("addr2",postDTO.addr2)
    }, [postDTO]);

    if(userRegisterType === ""){
        return <div className="register"><nav><h1>정보를 불러오는 중 오류가 발생했습니다. 처음부터 다시 시도해주세요.</h1></nav></div>
    }else {
        return <>
            <div className="register">
                <nav>
                    {userRegisterType === "USER" && <h1>일반 회원가입</h1>}
                    {userRegisterType === "SELLER" && <h1>판매자 회원가입</h1>}
                </nav>

                <form onSubmit={handleSubmit(onValid)}>
                    <input type="hidden" {...register('regIp')} value={ip}/>
                    <RequiredInformation register={register} errors={errors} watch={watch}></RequiredInformation>

                    {userRegisterType === "USER" &&
                        <UserRegister register={register} errors={errors} setPostOn={setPostOn} postDTO={postDTO}
                                      postOn={postOn} setPostDTO={setPostDTO}></UserRegister>}

                    {userRegisterType === "SELLER" && <>
                        <SellerRegister postOn={postOn} register={register} postDTO={postDTO} setPostDTO={setPostDTO}
                                        setPostOn={setPostOn} errors={errors}></SellerRegister>

                    </>}


                    <div>
                        <input type="submit" className="join" value="회원가입"/>
                    </div>
                </form>
            </div>
        </>
    }
}

export default Register;