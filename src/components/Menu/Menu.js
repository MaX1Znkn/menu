import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<nav className="menu">
			<NavLink
				exact="true"
				className={({ isActive }) =>
					isActive ? "menu__item-active menu__item" : "menu__item"
				}
				to="/main"
			>
				Главная
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? "menu__item-active menu__item" : "menu__item"
				}
				to="/drift"
			>
				Дрифт-такси
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? "menu__item-active menu__item" : "menu__item"
				}
				to="/timeattack"
			>
				Time Attack
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? "menu__item-active menu__item" : "menu__item"
				}
				to="/forza"
			>
				Forza Karting
			</NavLink>
		</nav>
	);
};

export default Menu;
