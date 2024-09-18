import "./Nav.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { scrollTop } from "../../utils/scrollTop";
export const Nav = () => {
	const [search, setSearch] = useState(false);
	function setHandleSearch(e) {
		setSearch(e);
	}
	return (
		<div className="nav-container">
			<div className="nav">
				<Link to={"/"} className="icon" onClick={scrollTop}>
					<FontAwesomeIcon icon={faBox} className="logo" />
				</Link>
				<Link href="/about" className="nav-item">
					<p className="nav-link">Sobre nosotros</p>
				</Link>

				<Link to={"/products"} className="nav-item" onClick={scrollTop}>
					<p className=" nav-link">Juegos</p>
				</Link>
				<label className={"nav-search" + (search ? " search" : "")}>
					<input
						type="text"
						placeholder="Buscar juegos"
						onFocus={() => setHandleSearch(true)}
						onBlur={() => setHandleSearch(false)}
					/>
					<FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
				</label>
				<FontAwesomeIcon icon={faUser} className="icon" size="lg" />
			</div>
		</div>
	);
};
