import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import { useHistory } from "react-router-dom"

export default function Login() {
    let history = useHistory()

    const title = "Login"
    document.title = 'DumbMerch | ' + title

    const [state, dispatch] = useContext(UserContext)

    const [form,setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = form


    const login = () => {
        // dispatch({
        //     type: "LOGIN_SUCCESS",
        //     payload: {
        //         id: 1,
        //         name: 'Yosep',
        //         email: 'yosepgans@gmail.com',
        //         phone: '083896833122',
        //         gender: 'Male',
        //         address: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        //         status: 'customer'
        //     }
        // })
        // history.push("/")
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card-auth p-4">
                <div style={{ fontSize: '36px', lineHeight: '49px', fontWeight: '700' }}>Login</div>
                <div className="mt-5 form">
                    <input placeholder="Email" className="px-3 py-2" />
                    <input placeholder="Password" className="px-3 py-2 mt-3" />
                </div>
                <div className="d-grid gap-2 mt-5">
                    <button onClick={login} className="btn btn-login">Login</button>
                </div>
            </div>
        </div>
    )
}
