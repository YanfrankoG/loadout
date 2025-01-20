/* eslint-disable no-mixed-spaces-and-tabs */
import { Nav } from "../../components/nav/Nav";
import { SelectionCard } from "../../components/selection/SelectionCard";
import { getAllGames } from "../../utils/games.js";
import "./ProductsScreen.css";
import "../../components/dashboard/Dashboard.css";
import { useEffect, useState } from "react";

const loopArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ProductsScreen = () => {
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
			console.error(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Nav></Nav>

			<section className="product-container">
				<h1 className="games-title">JUEGOS MOVILES</h1>
				<section className="product-grid">
					{games && !isLoading
						? games
								.filter((game) => !game.platform.includes("PC"))
								.map((game) => (
									<SelectionCard
										key={game.id}
										gameTitle={game.title}
										gameImg={game.img}
										gamePlatforms={game.platform}
										gameId={game.id}
									/>
								))
						: loopArray.map((key) => (
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
												width: "80%",
												height: "50%",
												alignSelf: "center",
											}}
										></div>
									</div>
								</div>
						  ))}
				</section>
			</section>
		</>
	);
};
