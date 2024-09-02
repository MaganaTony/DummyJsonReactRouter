import { useForm } from "react-hook-form"
import { loginUser } from "../api"
import { useNavigate } from "react-router-dom"


export default function LoginPage() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    function onSubmit(data) {
        loginUser(data.username, data.password)
        .then(token => {
            if (token){
                localStorage.setItem("token", token)
                navigate("/")

            } else {
                alert("Invalid username or password")
            }
        })
        .catch(error => console.error('Login error', error))
        
    }

    return (
        <main className="p-4 flex flex-col gap-10">
            <h1 className="text-2xl w-full font-bold text-center">Login Page</h1>
            <section className="flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)}
                className="border border-white/10 p-4 rounded-md flex flex-col gap-4 max-w-md w-full"
                >
                    <input type="text"
                    className="bg-black border border-white/50 p-2 rounded-md"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required"
                            },
                        })}
                    />
                    <input type="password"
                    className="bg-black border border-white/50 p-2 rounded-md"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })}
                    />
                    <button 
                    className="rounded-md bg-white text-black font-bold p-2 "
                    type="submit">Login</button>
                </form>
            </section>
        </main>
    )
}