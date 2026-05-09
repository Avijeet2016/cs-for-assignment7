import { useContext } from 'react';
import { NavLink } from 'react-router';
import { TimelineContext } from '../../context/context';

const Navbar = () => {
  const { timelineData } = useContext(TimelineContext);
    return (
      <div className="flex justify-between">
        <h1>Project</h1>
        <div className="flex gap-5">
          <NavLink
            to={"/"}
            className={({ isActive }) => isActive ? "text-red-600" : ""}
          >
            Home
          </NavLink>
          <NavLink
            to={"/timeline"}
            className={({ isActive }) => isActive ? "text-red-600" : ""}
          >
            Timeline({timelineData.length})
          </NavLink>
        </div>
      </div>
    );
};

export default Navbar;