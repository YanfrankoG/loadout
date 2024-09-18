import { Nav } from "../../components/nav/Nav";
import { SelectionCard } from "../../components/selection/SelectionCard";
// import games from "../../utils/games";
import "./ProductScreen.css";
import "../../components/dashboard/Dashboard.css";
import { useEffect, useState } from "react";

export const ProductsScreen = () => {
	const [games, setGames] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await import("../../utils/games.js");
				setGames(response.default);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	// const [game, setGame] = useState();

	// useEffect(() => {
	// 	setGame(mobileGames.games[0]);
	// }, []);
	// console.log(game);

	// const game = games.mobileGames[0];
	return (
		<>
			<Nav></Nav>

			<section className="product-container">
				<h1 className="games-title">JUEGOS MOVILES</h1>
				<section className="product-grid">
					{games &&
						games?.mobileGames.map((game) => (
							<SelectionCard
								key={game.id}
								gameTitle={game?.title}
								gameImg={game?.img}
								gamePlatforms={game?.platform}
								gameId={game?.id}
							/>
						))}
				</section>
			</section>
		</>
	);
};
