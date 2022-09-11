import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logOut } = UserAuth;

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        Firebase Google Auth and Context
      </h1>
      {user ? (
        <button onClick={handleSignOut}>Logout</button>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
    </div>
  );
};
