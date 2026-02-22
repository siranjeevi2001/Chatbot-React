import { useState } from "react";
import ReactLogo from "../../assets/images/react.svg";
import Login from "../Auth/Login"; // adjust path if needed

const Header = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-2">
          
          {/* Logo */}
          <img
            src={ReactLogo}
            alt="React Logo"
            className="h-8 w-8"
          />

          {/* Title */}
          <h1 className="text-xl font-bold text-blue-800">
            Rag Application
          </h1>

          {/* Login Button */}
          <button
            onClick={() => setShowLogin(true)}
            className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative">
            <Login />
            
            {/* Close Button */}
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;