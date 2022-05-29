const Navbar = () => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <nav className="flex items-center py-6">
          <a
            className="text-2xl font-semibold leading-none text-[#3254fe]"
            href="/"
          >
            Truffatori
          </a>
          <div className="ml-auto">
            <a
              className="mr-2 inline-block px-6 py-3 text-sm text-blue-600 hover:text-[blue-700] font-semibold leading-none border border-[#3254fe] rounded-md"
              href="#"
            >
              Log In
            </a>
            <a
              className="inline-block px-6 py-3 text-sm font-semibold leading-none bg-[#3254fe] text-white rounded-md"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
