
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <nav className="lg:flex justify-between items-center text-center relative m-10 lg:ml-[500px] ">
              
                <ul className=" flex gap-6 mr-6  ">
                    <li>
                      
                      

                        <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Home
                       </NavLink>
                       </li>
                       <li>
                       <NavLink
                         to="/about"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          About
                       </NavLink>
                    </li>
                       <li>
                       <NavLink
                         to="/research"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Research
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/projects"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Projects
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         >
                          Contact
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                          }
                         ><button> Resume </button>
                       </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;