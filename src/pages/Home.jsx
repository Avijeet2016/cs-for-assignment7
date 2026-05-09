// import React, { use } from 'react';

// const dataPromise = fetch("/data.json").then(res => res.json());

// const Home = () => {
//     const data = use(dataPromise);
//     console.log(data);
//     return (
//         <div>
//             {
//                 data.map((item, index) => <div>

//                 </div>)
//             }
//         </div>
//     );
// };

// export default Home;


import React, { use } from "react";
import { Link } from "react-router";

const dataPromise = fetch("/data.json").then((res) => res.json());

const Home = () => {
  const data = use(dataPromise);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Team Members</h1>
          <p className="text-gray-500 mt-2">
            Displaying user information from JSON data
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <Link to={`profileDetails/${item.id}`}>
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="flex justify-center mt-6">
                  <img
                    src={item.imageSrc}
                    alt={item.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">Age: {item.age}</p>

                  <p className="text-blue-600 font-medium mt-2">
                    {item.companyName}
                  </p>

                  {/* Contact Info */}
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>📧 {item.email}</p>
                    <p>📞 {item.phone}</p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                    >
                      Audio Call
                    </a>
                    &nbsp;
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-white bg-yellow-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                    >
                      Video Call
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

