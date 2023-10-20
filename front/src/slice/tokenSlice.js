import axios from "axios";
import {API_BASE_URL} from "../App";
import {useDispatch} from "react-redux";
import {deleteMember} from "./memberSlice";
import store from "../store";
import {useNavigate} from "react-router-dom";

export const createTokenHeader = (token) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

export const loginTokenHandler = (token, expirationTime) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));

    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
}

export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';
    const storedMemberUid = localStorage.getItem('memberUid');
    const remaingTime = calculateRemainingTime(+storedExpirationDate);


    if (remaingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('memberUid');
        return null
    }

    return {
        token: storedToken,
        duration: remaingTime,
        memberUid : storedMemberUid
    }
}

export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('memberUid');
};
