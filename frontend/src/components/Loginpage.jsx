export default function Landingpage() {
  return (
    <>
      <div className="md:relative bg-orange-300 min-w-screen h-screen">
        <div className="flex items-center justify-center h-full w-3/5">
          <h1>Welcome to GaadiGuru</h1>
        </div>
        <div className="md:absolute top-20 md:right-30 bg-white w-7/8 mx-auto max-w-md md:w-2/5 lg:w-2/7 h-auto md:h-2/3 shadow-sm shadow-gray-50 rounded-2xl py-8 px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-orange-500 tracking-wider px-2 pt-3 pb-8 md:pb-12">
            Sign in
          </h1>

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full outline-gray-300 py-3 px-4 rounded-lg mb-4 border border-gray-300"
          />

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-gray-300 py-3 px-4 rounded-lg mb-4 border border-gray-300"
            />
            <h1 className="absolute top-3 right-6 text-orange-500 font-bold text-sm">
              SHOW
            </h1>
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col md:flex-row md:justify-between px-2 text-sm gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              <span>Remember Me</span>
            </label>
            <button className="text-orange-500 hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="py-3 rounded-lg text-white font-bold bg-orange-400 hover:bg-orange-500 w-full my-3"
          >
            Sign In
          </button>

          {/* Footer */}
          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <span className="text-orange-500 hover:underline cursor-pointer">
              Signup
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
