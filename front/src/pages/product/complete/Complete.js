import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Info from "./Info";
import Alert from "./Alert";
import Message from "./Message";
import Order from "./Order";
import Delivery from "./Delivery";
import {API_BASE_URL} from "../../../App";
import {createTokenHeader, retrieveStoredToken} from "../../../slice/tokenSlice";

function Complete() {
    let [completeList, setCompleteList] = useState([]);
    let [completeTotal, setCompleteTotal] = useState({ordNo: undefined});
    let memberUid = localStorage.getItem('memberUid');
    let [member, setMember] = useState({});
    useEffect(() => {
        axios.get(`${API_BASE_URL}/product/complete/list`, {
            params: {
                uid: memberUid
            }
        }).then(res => {
            setCompleteList(res.data)
        }).catch(err => {
            console.log(err)
        })
        axios.get(`${API_BASE_URL}/product/complete/total`, {
            params: {
                uid: memberUid
            }
        }).then(res => {
            setCompleteTotal(res.data)
        }).catch(err => {
            console.log(err)
        })
        if (memberUid !== null) {
            axios.get(`${API_BASE_URL}/member/me`, createTokenHeader(retrieveStoredToken().token))
                .then(response => {
                    setMember(response.data)
                }).catch(error => console.log('유저 정보가 없습니다.'))
        }
    }, []);

    let navigate = useNavigate();
    if (completeList.length > 0 && completeTotal.ordNo !== undefined && member.name !== undefined) {
        return <>

            <Message></Message>
            <Info completeTotal={completeTotal} completeList={completeList}></Info>
            <Order completeTotal={completeTotal} member={member}></Order>
            <Delivery member={member} completeTotal={completeTotal}></Delivery>
            <Alert></Alert>

        </>
    } else {
        return <div className="error" style={{
            padding: '50px 0 !important',
            textAlign: 'center',
            fontSize: '15px',
            marginTop: '100px'
        }}>데이터를 받아오는데 오류가 발생했습니다. 로그인 후 다시 시도해주세요</div>
    }
}

export default Complete