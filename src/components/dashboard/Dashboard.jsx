/* eslint-disable no-mixed-spaces-and-tabs */
import "./Dashboard.css";
// import games from "../../utils/games";
import { useEffect, useRef, useState } from "react";
import { getAllGames } from "../../utils/games.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SelectionCard } from "../selection/SelectionCard";
import { Nav } from "../nav/Nav";
import { Link } from "react-router-dom";

const ITEM_WIDTH = 540;
const loop = [1, 2, 3, 4, 5, 6];

export const Dashboard = () => {
	const [games, setGames] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			getAllGames().then((response) => {
				setGames(response);
			});
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [scroll, setScroll] = useState(0);

	const selectionRef = useRef();

	const handleScroll = (scrollAmount) => {
		const newScroll = scroll + scrollAmount;
		// Asegurar que el desplazamiento esté dentro de los límites del contenedor
		const maxScroll =
			selectionRef.current.scrollWidth - selectionRef.current.clientWidth;
		const clampedScroll = Math.max(0, Math.min(newScroll, maxScroll));
		setScroll(clampedScroll);
		selectionRef.current.scrollLeft = clampedScroll;
	};
	return (
		<>
			<Nav />
			<section className="section-principal">
				<div className="principal-content">
					<h1 className="principal-title">
						TU SITIO IDEAL
						<p>Recarga segura, rapida y confiable</p>
					</h1>
					<div className="loadout-logo">
						{/* <FontAwesomeIcon
              icon={faBox}
              className="principal-icon"
            ></FontAwesomeIcon> */}
						<h1>LOADOUT</h1>
					</div>
				</div>
			</section>

			<section className="mobile-games section-games">
				<Link to={"/products"} className="games-title">
					JUEGOS MOVILES
				</Link>
				<div className="selection " ref={selectionRef}>
					{!isLoading && games
						? games
								.filter((game) => !game.platform.includes("PC"))
								.map((game) => {
									return (
										<SelectionCard
											key={game.id}
											gameTitle={game.title}
											gameImg={game.img}
											gamePlatforms={game.platform}
											gameId={game.id}
										/>
									);
								})
						: loop.map((key) => (
								<div
									key={key}
									className="skeleton skeleton-card"
									style={{
										height: "260px",
										overflow: "hidden",
									}}
								>
									<div
										style={{
											width: "100%",
											height: "60px",
											backgroundColor: "white",
											display: "flex",
											justifyContent: "center",
										}}
									>
										<div
											className={"skeleton"}
											style={{
												width: "70%",
												height: "60%",
												alignSelf: "center",
											}}
										></div>
									</div>
								</div>
						  ))}
				</div>

				{games && (
					<div className="card-buttons">
						<button onClick={() => handleScroll(-ITEM_WIDTH)}>
							<FontAwesomeIcon icon={faAngleLeft} className="arrow" />
						</button>
						<button onClick={() => handleScroll(ITEM_WIDTH)}>
							<FontAwesomeIcon icon={faAngleRight} className="arrow" />
						</button>
					</div>
				)}
			</section>
			<section className="section-container1">
				<section className="pc-games section-games">
					<h1 className="games-title">JUEGOS MULTIPLATAFORMA</h1>
					<div className="selection">
						{!isLoading && games
							? games
									.filter((game) => game.platform.includes("PC"))
									.map((game) => {
										return (
											<SelectionCard
												key={game.id}
												gameTitle={game.title}
												gameImg={game.img}
												gamePlatforms={game.platform}
												gameId={game.id}
											/>
										);
									})
							: loop.map((key) => (
									<div
										key={key}
										className="skeleton skeleton-card"
										style={{
											height: "250px",
											overflow: "hidden",
										}}
									>
										<div
											style={{
												width: "100%",
												height: "50px",
												backgroundColor: "white",
												display: "flex",
												justifyContent: "center",
											}}
										>
											<div
												className={"skeleton"}
												style={{
													width: "70%",
													height: "60%",
													alignSelf: "center",
												}}
											></div>
										</div>
									</div>
							  ))}
					</div>
				</section>
			</section>
		</>
	);
};
