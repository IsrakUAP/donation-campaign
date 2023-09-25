import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="https://i.ibb.co/qF67VYq/Logo.png"/>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 space-x-4">
      <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
  }
>
Home
</NavLink>
<NavLink
  to="/donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
  }
>
Donation
</NavLink>
<NavLink
  to="/statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-semibold text-[18px]" : "font-semibold text-[18px]"
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