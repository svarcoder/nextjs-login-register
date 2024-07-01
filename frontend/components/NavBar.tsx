import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold">
          Home
        </Link>
        <div className="flex space-x-4 items-center">
          {user ? (
            <>
              <Link href="/profile" className="text-white">
                Profile
              </Link>
              {user.role === 'admin' && (
                <Link href="/admin" className="text-white">
                 Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white">
               Login
              </Link>
              <Link href="/register" className="text-white">
               Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
