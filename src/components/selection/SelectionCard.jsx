import "./SelectionCard.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faXbox, faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { scrollTop } from "../../utils/scrollTop";

export const SelectionCard = (props) => {
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

	return (
		<Link to={`/products/${props.gameId}`} className="card" onClick={scrollTop}>
			<div className="iconPlatform">
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
			<img src={props.gameImg} alt="" />
			<h1>{props.gameTitle}</h1>
		</Link>
	);
};

SelectionCard.propTypes = {
	gameTitle: PropTypes.string,
	gameImg: PropTypes.string,
	gamePlatforms: PropTypes.array,
	gameId: PropTypes.string,
};
