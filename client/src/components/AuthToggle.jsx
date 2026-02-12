import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function AuthToggle({ isMobile = false, closeMenu }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/api/student-details", {
          withCredentials: true,
        });

        if (res?.data?.statusCode === 200) {
          setIsLoggedIn(true);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      setLoading(true);

      await axios.post(
        "/api/logout",
        {},
        { withCredentials: true }
      );

      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      if (closeMenu) closeMenu();
    }
  };

  // Desktop Button
  if (!isMobile) {
    return !isLoggedIn ? (
      <NavLink
        to="/login"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Login
      </NavLink>
    ) : (
      <button
        onClick={handleLogout}
        disabled={loading}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
      >
        {loading ? "Logging out..." : "Logout"}
      </button>
    );
  }

  // Mobile Button
  return (
    <li>
      {!isLoggedIn ? (
        <NavLink
          to="/login"
          onClick={closeMenu}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Login
        </NavLink>
      ) : (
        <button
          onClick={handleLogout}
          className="text-red-500 font-medium"
        >
          {loading ? "Logging out..." : "Logout"}
        </button>
      )}
    </li>
  );
}

export default AuthToggle;