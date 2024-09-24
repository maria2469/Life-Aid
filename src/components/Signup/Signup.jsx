import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Signup = () => {
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [language, setLanguage] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSignup = (e) => {
    e.preventDefault();  // Prevent form submission reload
    // Add any validation logic here, if necessary
    navigate('/main');  // Navigate to Main page
  };

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
  ];

  const pincodes = {
    US: ['10001', '90001', '60601'],
    CA: ['K1A', 'L1R', 'M5A'],
    GB: ['E1 6AN', 'W1A 1AA', 'SW1A 1AA'],
  };

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
  ];

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form className='bg-white p-6 rounded shadow-md' onSubmit={handleSignup}>
        <h2 className='text-xl mb-4'>Sign Up</h2>
        
        <input type="text" placeholder="Username" className='border p-2 mb-4 w-full' />
        
        <select 
          value={country} 
          onChange={(e) => setCountry(e.target.value)} 
          className='border p-2 mb-4 w-full'
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>{country.name}</option>
          ))}
        </select>

        <select 
          value={pincode} 
          onChange={(e) => setPincode(e.target.value)} 
          className='border p-2 mb-4 w-full'
          disabled={!country}
        >
          <option value="">Select Pincode</option>
          {country && pincodes[country]?.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>

        <select 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
          className='border p-2 mb-4 w-full'
        >
          <option value="">Select Language</option>
          {languages.map((language) => (
            <option key={language.code} value={language.code}>{language.name}</option>
          ))}
        </select>

        <button type="submit" className='bg-[#17BEBB] text-white py-2 px-4 rounded'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
