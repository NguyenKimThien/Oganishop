import { FaArrowDown, FaBars, FaChevronDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { useState } from "react";
const SideBar = () => {
    const [onMenu , setOnMenu] = useState(false);
    const OpenMenu = () => {
        setOnMenu(onMenu => !onMenu)
    }
    return (
                    <div className="hero__categories">
                        <div className="hero__categories__all" onClick={OpenMenu}>
                            <FaBars/>
                            <span>All departments</span>
                            <FaChevronDown/>
                        </div>
                        <ul className={onMenu ? 'active' : ''}>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                </div>
    )
}

export default SideBar;