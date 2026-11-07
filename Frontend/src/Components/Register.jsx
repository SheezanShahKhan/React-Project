import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router"

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleRegister(e) {

        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:5000/user/register",
                {
                    email: email,
                    password: password,
                }
            );
            console.log(response.data)
            setEmail("")
            setPassword("")
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate("/todo")

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <form onSubmit={handleRegister}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email Address" id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} required />
                <label htmlFor="password">Create-password</label>
                <input type="password" required placeholder="Password" value={password}
                onChange={(e)=>setPassword(e.target.value)}id="password"/>
                <button >Create Account</button>
                <p>Already have an account ?<Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}