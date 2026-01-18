import { useState } from "react"
import api from "@lib/axios"
import Spinner from "../Util/Spinner";
import { useNavigate } from "react-router"
import toast, { Toaster } from 'react-hot-toast';

function Authentication() {
    const [mode, setMode] = useState("signin") // signin | signup
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: ""
    })
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            setLoading(true)

            const response = await api.post("/auth/signin", {
                email: userDetails.email,
                password: userDetails.password
            });

            if (response.data.success) {
                navigate("/user/dashboard")
            }
        }
        catch (e) {
            const errorMessage =
            e?.response?.data?.error || "Something went wrong";
            toast.error(errorMessage)
        }
        finally {
            setLoading(false);
        }
    }

    const handleSignup = async () => {
        try {
            setLoading(true)

            const response = await api.post("/auth/signup", {
                name: userDetails.name,
                email: userDetails.email,
                password: userDetails.password,
                phoneNumber: userDetails.phoneNumber
            });

            if (response.data.success) {
                navigate("/user/dashboard")
            }
        }
        catch (e) {
            const errorMessage =
            e?.response?.data?.error || "Something went wrong";
            toast.error(errorMessage)
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="h-screen w-screen mt-[-64px] flex items-center justify-center bg-gray-200">

            <Toaster />

            <div className="h-[600px] w-[900px] bg-white shadow-lg rounded-lg overflow-hidden flex">

                {/* LEFT SECTION */}
                <div className="w-1/2 bg-red-600 flex items-center justify-center">
                    <img
                        src="https://gifclips.com/media/GIF00000426.gif"
                        alt="Auth animation"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* RIGHT SECTION */}
                <div className="w-1/2 flex flex-col justify-center px-10">

                    {/* HEADER */}
                    <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                        {mode === "signin" ? "Sign In" : "Create Account"}
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                        {mode === "signin"
                            ? "Welcome back! Please enter your details"
                            : "Sign up to get started"}
                    </p>

                    {/* FORM */}
                    <form className="space-y-4">
                        {mode === "signup" && (
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={userDetails.name}
                                    onChange={e => setUserDetails(prev => ({ ...prev, name: e.target.value }))}
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={userDetails.email}
                                onChange={e => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                                placeholder="user@example.com"
                                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={userDetails.password}
                                onChange={e => setUserDetails(prev => ({ ...prev, password: e.target.value }))}
                                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>


                        {mode === "signup" && (
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="+91"
                                    value={userDetails.phoneNumber}
                                    onChange={e => setUserDetails(prev => ({ ...prev, phoneNumber: e.target.value }))}
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            disabled={loading}
                            onClick={mode === "signin" ? handleSignin : handleSignup}
                            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md transition
                            ${loading
                                    ? "bg-red-400 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-700 text-white"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <Spinner />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                mode === "signin" ? "Sign In" : "Sign Up"
                            )}
                        </button>
                    </form>

                    {/* TOGGLE */}
                    <div className="mt-6 text-sm text-center">
                        {mode === "signin" ? (
                            <>
                                Don’t have an account?{" "}
                                <button
                                    onClick={() => setMode("signup")}
                                    className="text-red-600 font-medium hover:underline"
                                >
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{" "}
                                <button
                                    onClick={() => setMode("signin")}
                                    className="text-red-600 font-medium hover:underline"
                                >
                                    Sign In
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication
