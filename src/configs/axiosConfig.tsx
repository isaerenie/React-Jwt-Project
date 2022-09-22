import axios from "axios";
 

const baseUrl = 'https://www.jsonbulut.com/json/'
const timeout = 15000;
export const userConfig = axios.create({
    baseURL: baseUrl,
    timeout: timeout,
    params: { "ref": "d1becef32825e5c8b0fc1b096230400b" }
})


export const siteConfig = axios.create({
    baseURL: baseUrl,
    timeout: timeout,
    params: { "ref": "d1becef32825e5c8b0fc1b096230400b" }
   // headers: { 'Authorization': 'Bearer ' + control()?.jwt }
})