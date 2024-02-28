import { NavLink } from "react-router-dom"

function Header (){
    return(
        <nav className=" flex md:inline-flex accordion-item text- ;">
            <div>
                <h2 className="text-5xl font-extrabold"> Logo</h2>
            </div>
            <ul className="flex text-3xl font-bold p-5 mx-6">
                <li className="px-10" >
                    <NavLink to="/"  >Home</NavLink>
                </li>
                <li className="px-10" >

                    <NavLink to="/About">About</NavLink>
                </li>
                <li className="px-10" >

                    <NavLink to="/Gallary">Gallary</NavLink>
                </li>
                <li className="px-10" >

                    <NavLink to="/Service">Service</NavLink>
                </li>
                <li className="px-10" >

                    <NavLink to="/Contact ">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
};
export default Header