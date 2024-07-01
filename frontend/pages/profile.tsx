
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './authentication/route';

const Profile = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <p className="mb-4">Username: {user?.username}</p>
        <p className="mb-4">Email: {user?.email}</p>
        <p className="mb-4">Role: {user?.role}</p>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
