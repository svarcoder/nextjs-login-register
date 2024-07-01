
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './authentication/route';

const Admin = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Admin Page</h1>
        {user?.role === 'admin' ? (
          <p className="mb-4">Welcome, Admin!</p>
        ) : (
          <p className="mb-4">You do not have access to this page.</p>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default Admin;
