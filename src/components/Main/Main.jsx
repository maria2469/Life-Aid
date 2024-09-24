import React, { useState } from 'react';

const Main = () => {
  const [selectedCondition, setSelectedCondition] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  // Simulate an API call
  const fetchConditionInfo = async (condition) => {
    // Here you would normally use fetch or axios to make a real API call
    // For this example, we'll simulate API responses with setTimeout and mock data
    const mockApiData = {
      "Severe Bleeding": "Apply pressure to the wound, keep the injured person calm, and elevate the injury if possible.",
      "Choking": "Give 5 back blows followed by 5 abdominal thrusts. Seek emergency medical help if the person is unconscious.",
      "Heart Attack": "Call emergency services, give aspirin if the person is conscious, and perform CPR if necessary.",
      "Stroke": "Recognize the symptoms (F.A.S.T), call emergency services immediately, and keep the person safe until help arrives.",
      "Burns": "Cool the burn under running water for 10 minutes, cover with sterile dressing, and avoid applying ointments.",
      "Fractures and Broken Bones": "Immobilize the injury, apply ice packs to reduce swelling, and seek medical attention.",
      "Seizures": "Do not restrain the person, clear the area of any sharp objects, and time the seizure. Call for help if it lasts longer than 5 minutes.",
      "Unconsciousness": "Check for breathing, place the person in the recovery position, and call emergency services."
    };

    // Simulate a delay to represent API fetch time
    setTimeout(() => {
      setApiResponse(mockApiData[condition]);
    }, 500);
  };

  // Handle button click
  const handleButtonClick = (condition) => {
    setSelectedCondition(condition);
    fetchConditionInfo(condition);
  };

  return (
    <div className='flex flex-col items-center justify-start h-screen bg-gray-100 gap-4 p-7 mt-16'>
      <div className='flex flex-wrap justify-center items-start gap-4'>
        <button onClick={() => handleButtonClick('Severe Bleeding')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Severe Bleeding
        </button>
        <button onClick={() => handleButtonClick('Choking')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Choking
        </button>
        <button onClick={() => handleButtonClick('Heart Attack')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Heart Attack
        </button>
        <button onClick={() => handleButtonClick('Stroke')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Stroke
        </button>
        <button onClick={() => handleButtonClick('Burns')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Burns
        </button>
        <button onClick={() => handleButtonClick('Fractures and Broken Bones')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Fractures and Broken Bones
        </button>
        <button onClick={() => handleButtonClick('Seizures')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Seizures
        </button>
        <button onClick={() => handleButtonClick('Unconsciousness')} className='bg-[#17BEBB] text-white font-semibold py-4 px-6 rounded hover:bg-[#14a2a0] transition duration-300'>
          Unconsciousness
        </button>
      </div>

      {/* Display API response */}
      <div className='bg-white p-6 mt-8 w-full max-w-3xl rounded shadow-md'>
        <h2 className='text-xl font-bold mb-4'>
          {selectedCondition || 'Select a Condition'}
        </h2>
        <p className='text-gray-700'>
          {apiResponse || 'Click a button above to get first aid information.'}
        </p>
      </div>
    </div>
  );
};

export default Main;
