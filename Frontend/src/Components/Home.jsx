import { Link } from "react-router"
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">

            <p className="text-4xl text-black">Welcome Welcome Welcome</p>
            <div className="flex gap-4">
                <Link to="/login" className="border-3 border-black rounded-full px-4 py-1 hover:bg-gray-100 text-black transition mb-5 mt-2">Login</Link>
                <Link to="/register" className="border-3 border-black rounded-full px-3 py-1 hover:bg-gray-100 text-black transition mb-5 mt-2">Register</Link>

            </div>

        </div>
    )
}