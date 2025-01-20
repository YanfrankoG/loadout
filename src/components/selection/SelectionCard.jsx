import "./SelectionCard.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faXbox, faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { scrollTop } from "../../utils/scrollTop";
import { useEffect, useState } from "react";

export const SelectionCard = (props) => {
	const [active, setActive] = useState(false);

	const icons = props.gamePlatforms.map((element) => {
		switch (element) {
			case "PLAYSTATION":
				return { name: faPlaystation, color: "#2e6db4", id: element };
			case "MOBILE":
				return { name: faMobile, color: "var(--black)", id: element };
			case "XBOX":
				return { name: faXbox, color: "#107c10", id: element };
			case "PC":
				return { name: faDesktop, color: "var(--black)", id: element };
		}
	});
	useEffect(() => {
		setActive(true);
	}, []);

	return (
		<Link
			to={`/products/${props.gameId}`}
			className={"card"}
			onClick={scrollTop}
		>
			<div className={"icon-platform" + (active ? " active" : "")}>
				{icons.map((icon) => (
					<FontAwesomeIcon
						icon={icon.name}
						className="platform"
						key={icon.id}
						size="lg"
						style={{
							color: icon.color,
						}}
					/>
				))}
			</div>
			<img
				src={props.gameImg}
				alt=""
				className={"card-img" + (active ? " active" : "")}
			/>
			<h1 className={"card-title" + (active ? " active" : "")}>
				{props.gameTitle}
			</h1>
		</Link>
	);
};

SelectionCard.propTypes = {
	gameTitle: PropTypes.string,
	gameImg: PropTypes.string,
	gamePlatforms: PropTypes.array,
	gameId: PropTypes.string,
	active: PropTypes.bool,
};
