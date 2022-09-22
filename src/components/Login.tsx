import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { userLogin } from "../services/userService"
import { control } from "../utils/control"
import { encrypt } from "../utils/encdecrypt"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const navigate = useNavigate()
    const sendFnc = (evt: React.FormEvent) => {
        evt.preventDefault()
        if (email === '') {
            toast.error('E-mail Empty!')
        } else if (password === '') {
            toast.error('Password Empty!')
        } else {
            userLogin(email, password).then(res => {
                if (res.status === 200 && res.data.user[0].durum === true) {
                    const dt = res.data
                    const stData = JSON.stringify(dt)
                    sessionStorage.setItem('user', encrypt(stData))
                    // remember control
                    if (remember === true) {
                        localStorage.setItem('user', encrypt(stData))
                    }
                    // redirect
                     navigate('/products')
            // window.location.href = '/dashboard'
                } else {
                    toast.error("Username or Password Fail!")
                }

            }).catch(err => {
                toast.error(err.message)
            })
        }
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center ">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header text-center h4 p-3">Admin Login Screen</div>
                        <div className="card-body">
                            <form onSubmit={sendFnc}>
                                <div className="row mb-3">
                                    <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setEmail(evt.target.value)} type="email" className="form-control" id="email" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input required onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-9 offset-sm-3">
                                        <input onChange={(evt) => setRemember(!remember)} type="checkbox" className="form-check-input" id="benihatirma" />
                                        <label htmlFor="benihatirla" className="form-check-label">Beni Hatırla</label>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-9 offset-sm-3">
                                        <button className="btn btn-primary"><i className="fa fa-check"></i> Login </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login