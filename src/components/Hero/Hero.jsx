import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Hero.css'; // Ensure this is in the correct path

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 main'>
      <div className='text-center'>
        <p className='text-black text-2xl font-semibold mb-6'>
          Quick guidance for when every second counts.
        </p>
        <button
          className='border-black border-2 text-black py-2 px-6 rounded-lg hover:bg-black hover:text-white transition duration-300'
          onClick={handleGetStarted} // Call the function on click
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Hero;
