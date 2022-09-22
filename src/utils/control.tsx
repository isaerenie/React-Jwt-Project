import { ILogin } from "../models/ILogin"
import { IUser } from "../models/IUser"
import { decrypt } from "./encdecrypt"

export const control = () : ILogin | null  => {
    // remember control
    const stRemember = localStorage.getItem('user')
    if ( stRemember ) {
        sessionStorage.setItem('user', stRemember)
    }
    const stEncData = sessionStorage.getItem('user')
    if ( stEncData ) {
        try {
            const stDdata = decrypt(stEncData)
            const user = JSON.parse(stDdata) as ILogin
            return user
        } catch (error) {
            sessionStorage.removeItem('user')
        }
    }
    return null
}