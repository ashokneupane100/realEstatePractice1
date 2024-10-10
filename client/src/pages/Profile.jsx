import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../redux/user/userSlice';

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      console.error('Authentication error:', error);
      // Optionally, you can clear the error or handle it as needed
      dispatch(clearError());
    }
  }, [error, dispatch]);

  if (!currentUser) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' defaultValue={currentUser.username} />
        <input type="email" placeholder='email' id='email' className='border p-3 rounded-lg' defaultValue={currentUser.email} />
        <input type="password" placeholder='password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}