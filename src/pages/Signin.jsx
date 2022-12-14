import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Signin = () => {
  const { user, googleSignin } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await googleSignin();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user !== null) navigate('/account');
  }, [user]);

  return (
    <div>
      <h1 className=" text-3xl font-bold py-8">Login</h1>
      <div>
        <button
          className="border-2 bg-red-700 border-black  text-3xl font-bold py-8"
          onClick={handleGoogleSignin}
        >
          Sign in com o google
        </button>
      </div>
    </div>
  );
};
