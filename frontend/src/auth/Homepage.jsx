import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import {Link} from "react-router-dom";

const HomePage = ({ profile, logout }) => {
  const { user } = useContext(UserContext);
  

  return (
    <div>
      <h2 className="text-3xl font-black mb-6 mt-6 text-white">Speak Spanish with Confidence</h2>
      <h3 className='text-xl font-bold'>The Language Learning App Tailored for Physical Therapy Clinicians</h3>
      <Link to="/sections">
        <button className="bg-blue-500 hover:bg-blue-600 text-gray-700 font-bold py-2 px-4 rounded mt-20">
          Learn Now!
        </button>
      </Link>
    </div>
  );
};

export default HomePage;