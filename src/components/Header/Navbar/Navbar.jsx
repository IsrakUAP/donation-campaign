import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
  <div className="flex-1">
    <img src="https://i.ibb.co/qF67VYq/Logo.png"/>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 space-x-4">
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
Home
</NavLink>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
Donation
</NavLink>
<NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
Statistics
</NavLink>
    </ul>
  </div>
</div>

        </div>
    );
};

export default Navbar;