import "../styles/navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ height: "0rem" }}
            animate={{ height: "6rem" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="nav-container"
        >
            {/* Logo */}
            <motion.img
                src="/logo-3.svg"
                alt="LOGO"
                className="logo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }} />



            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>


            <motion.ul
                className={menuOpen ? "show" : ""}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
                <li className="navlink nav-cyan"><NavLink to="/">Home</NavLink></li>
                <li className="navlink nav-magenta"><NavLink to="/services">Services</NavLink></li>
                <li className="navlink nav-yellow"><NavLink to="/technology">Technology</NavLink></li>
                <li className="navlink nav-black"><NavLink to="/contact-us">Contact</NavLink></li>
            </motion.ul>
        </motion.nav>
    );
}

export default Navbar;
