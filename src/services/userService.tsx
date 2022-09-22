import { config } from "process"
import { userConfig } from "../configs/axiosConfig"
import { ILogin } from "../models/ILogin"
 



 
export const userLogin = ( email:string, password:string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: "no"
    }
    return userConfig.get<ILogin>("userLogin.php", { params: sendParams })
}


 
