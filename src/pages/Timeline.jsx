import { useContext } from "react";
import { TimelineContext } from "../context/context";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Timeline</h1>

          <p className="text-gray-500 mt-2">Recent user activities</p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 ml-4 space-y-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-5 rounded-2xl shadow-md ml-6 hover:shadow-lg transition"
            >
              {/* Dot */}
              <div className="absolute -left-10 top-7 w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

              {/* Name */}
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>

              {/* Action */}
              <p className="mt-2 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {item.action}
              </p>

              {/* Time */}
              <p className="text-sm text-gray-500 mt-4">
                🕒{" "}
                {new Date(item.time).toLocaleString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {timelineData.length === 0 && (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Activity Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Timeline activities will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
