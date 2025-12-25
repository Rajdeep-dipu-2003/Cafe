function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md z-50 flex items-center">
      <div className="w-full px-6 flex justify-end items-center gap-4">
        <button className="text-red-600 font-medium hover:text-red-700 transition">
          Login
        </button>

        <button className="px-4 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Nav;
