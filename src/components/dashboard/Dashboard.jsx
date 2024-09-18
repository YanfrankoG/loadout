import "./Dashboard.css";
// import games from "../../utils/games";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SelectionCard } from "../selection/SelectionCard";
import { Nav } from "../nav/Nav";
import { Link } from "react-router-dom";

const ITEM_WIDTH = 540;
const loop = [1, 2, 3, 4, 5, 6];

export const Dashboard = () => {
	console.log(loop);
	const [games, setGames] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const response = await import("../../utils/games.js");
				setGames(response.default);
				setIsLoading(false);
				// throw new Error("No se encontraron datos");
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};
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
						<h1>Loadout</h1>
					</div>
				</div>
			</section>

			<section className="mobile-games section-games">
				<Link to={"/products"} className="games-title">
					JUEGOS MOVILES
				</Link>
				<div className="selection " ref={selectionRef}>
					{!isLoading && games
						? Object.entries(games?.mobileGames).map((key) => {
								return (
									<SelectionCard
										key={key}
										gameTitle={key[1].title}
										gameImg={key[1].img}
										gamePlatforms={key[1].platform}
										gameId={key[1].id}
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
											height: "70px",
											backgroundColor: "white",
											display: "flex",
											justifyContent: "center",
										}}
									>
										<div
											className={"skeleton"}
											style={{
												width: "80%",
												height: "50%",
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
			<section
				style={{ backgroundColor: "white", width: "100%", padding: "1px 0" }}
			>
				<section className="pc-games section-games">
					<h1 className="games-title">JUEGOS MULTIPLATAFORMA</h1>
					<div className="selection">
						{!isLoading && games
							? Object.entries(games?.desktopGames).map((key) => {
									return (
										<SelectionCard
											key={key}
											gameTitle={key[1].title}
											gameImg={key[1].img}
											gamePlatforms={key[1].platform}
											gameId={key[1].id}
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
												height: "70px",
												backgroundColor: "white",
												display: "flex",
												justifyContent: "center",
											}}
										>
											<div
												className={"skeleton"}
												style={{
													width: "80%",
													height: "50%",
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
