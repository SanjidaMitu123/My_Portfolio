
import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <nav className="lg:flex justify-between items-center text-center relative m-10 lg:ml-[100px] ">
              
                <ul className=" flex gap-6 mr-6  ">
                <li className="mr-[200px] font-bold text-2xl">
                      
                      

                      <NavLink
                       to="/"
                       className={({ isActive, isPending }) =>
                       isPending ? "pending" : isActive ? "text-black" : ""
                         }
                       >
                       Sanjida Sultana Mitu
                     </NavLink>
                     </li>
                    <li>
                      
                      

                        <NavLink
                         to="/"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         >
                          Home
                       </NavLink>
                       </li>
                       <li>
                       <NavLink
                         to="/about"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         >
                          About
                       </NavLink>
                    </li>
                       <li>
                       <NavLink
                         to="/research"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         >
                          Research
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/projects"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         >
                          Projects
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         >
                          Contact
                       </NavLink>
                    </li>
                    <li>
                       <NavLink
                         to="/contact"
                         className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-purple-700 underline" : ""
                          }
                         ><button className=""> Resume </button>
                       </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;