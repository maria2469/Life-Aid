import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='bg-[#17BEBB] w-screen fixed top-0 left-0 z-50 h-16 flex justify-between items-center px-4'>
      <div className='Logo text-black font-bold text-lg'>
        LIFE-AID
      </div>
      <div className='options flex gap-8'>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : 'text-black') + ' cursor-pointer hover-bold'}>HOME</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-white' : 'text-black') + ' cursor-pointer hover-bold'}>ABOUT</NavLink>
        <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'text-white' : 'text-black') + ' cursor-pointer hover-bold'}>REVIEWS</NavLink>
        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'text-white' : 'text-black') + ' cursor-pointer hover-bold'}>SIGN UP</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
