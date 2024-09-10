"use client"
import axios from "axios";
const qs = require("qs");
//@ts-ignore
import { jwtDecode } from "jwt-decode";
import { ApiEndPoints } from "./apiconfig";


export default class TokenManager {
         async GetToken() {
        try {
         var url=ApiEndPoints.baseUrl+'/connect/token';
         var param={
            client_id:'client',
            client_secret:'secret',
            grant_type:'client_credentials'
            }
            const res = await axios.post(url,qs.stringify(param)
                );
              const response = await res.data;
            window.localStorage.setItem("token", JSON.stringify(response));
            return {
                access_token: response.access_token,code:200,message:""
            };
        } catch(error) {
            return {
                access_token:"null",code:500,message:"network error"
            };
        }
    }
}

export async function getToken() {
    
    let token =
        window.localStorage.getItem("token") != null && window.localStorage.getItem("token")!=""
            ? JSON.parse(window.localStorage.getItem("token")??"").access_token
            : null;
    const tokenManager = new TokenManager();
    if (token == null || token == "" || token == undefined) {
        //first case
        var a = await tokenManager.GetToken();
        return a.access_token??"";
    } else {
        let decodedToken = jwtDecode(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            var a = await tokenManager.GetToken();
            return a.access_token??"";
        } else {
            return token;
        }
    }
}

export function getTokenSync() {
    let token =
    window.localStorage.getItem("token") != null && window.localStorage.getItem("token")!=""
        ? JSON.parse(window.localStorage.getItem("token")??"").access_token
        : null; 
    const tokenManager = new TokenManager();
    if (token == null || token == "" || token == undefined) {
        //first case
        var a = null;
        tokenManager.GetToken().then(function (x) {
            a = x;
            return x.access_token;
        });
       // return a.access_token;
    } else {
        let decodedToken = jwtDecode(token);
        if (Date.now() >= decodedToken.exp * 1000) {
            var a = null;
            tokenManager.GetToken().then(function (x) {
                a = x;
                return x;
            });
            return a.access_token;
        } else {
            return token;
        }
    }
    return token;
}
export function setToken(token) {
    return window.localStorage.setItem("token", token);
}

export function isTokenExpired(token) {}