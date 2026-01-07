import { useState } from "react"

function Authentication() {
    const [mode, setMode] = useState("signin") // signin | signup

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
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
                                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        {mode === "signup" && (
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-400"
                                />
                            </div>
                        )}

                        <button
                            type="button"
                            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                        >
                            {mode === "signin" ? "Sign In" : "Sign Up"}
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
