
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './authentication/route';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome, {user?.username}!</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
