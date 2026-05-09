// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const ProfileDetails = () => {
//     const data = useLoaderData();
//     console.log(data);
//     const {id} = useParams();
//     console.log(id);
//     const user = data.find((item) => item.id === parseInt(id));
//     console.log('user:', user);
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ProfileDetails;



import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { TimelineContext } from "../context/context";
import { toast } from "react-toastify";



const ProfileDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const user = data.find((item) => item.id === parseInt(id));
  const { timelineData, setTimelineData } = useContext(TimelineContext);

  const handleCalling = (type, userDetails) => {
    const newData = {
      ...userDetails,
      action: type,
      time: new Date().toISOString()
    };
    setTimelineData([...timelineData, newData]);
    toast.success('Audio Call done!');
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          {/* Top Banner */}
          <div className="h-52 bg-gradient-to-r from-blue-500 to-purple-600 relative">
            {/* Profile Image */}
            <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
              <img
                src={user.imageSrc}
                alt={user.name}
                className="w-36 h-36 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-24 pb-10 px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">{user.name}</h1>

            <p className="text-gray-500 mt-2 text-lg">{user.companyName}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age */}
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                  Age
                </h3>
                <p className="text-2xl font-semibold text-gray-800 mt-2">
                  {user.age} Years
                </p>
              </div>

              {/* Email */}
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                  Email
                </h3>
                <p className="text-lg font-medium text-gray-800 mt-2 break-all">
                  {user.email}
                </p>
              </div>

              {/* Phone */}
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                  Phone
                </h3>
                <p className="text-lg font-medium text-gray-800 mt-2">
                  {user.phone}
                </p>
              </div>

              {/* Website */}
              <div className="bg-gray-100 rounded-2xl p-5 shadow-sm">
                <h3 className="text-gray-500 text-sm uppercase tracking-wide">
                  Website
                </h3>

                <a
                  href={user.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-lg font-medium mt-2 inline-block"
                >
                  Visit Website
                </a>
              </div>
            </div>

            {/* About Section */}
            <div className="mt-10 bg-blue-50 p-6 rounded-2xl text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">About</h2>

              <p className="text-gray-600 leading-relaxed">
                {user.name} is a dedicated professional working at{" "}
                <span className="font-semibold text-blue-600">
                  {user.companyName}
                </span>
                . Passionate about innovation, teamwork, and technology, they
                continuously contribute to building impactful solutions and
                improving user experiences.
              </p>
            </div>
            <div>
              <a
                onClick={() => handleCalling("audio-call", user)}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                Audio Call
              </a>
              &nbsp;
              <a
                onClick={() => handleCalling("video-call", user)}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-white bg-yellow-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                Video Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

