import React, { useEffect, useState } from "react";
import "./Product.css";
import games from "../../utils/games";
import { Nav } from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
export const Product = () => {
	const { productId } = useParams();
	const [game, setGame] = useState();

	// console.log(productId, "productId");

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 2000));
				const response = await import("../../utils/games.js");
				setGame(
					response.default.mobileGames.find(
						(element) => element.id === productId
					) ||
						response.default.desktopGames.find(
							(element) => element.id === productId
						)
				);
			} catch (error) {
				console.error("Error en el fetch", error);
			}
		};

		fetchData();

		// const currentGame =
		// 	games.mobileGames.find((element) => element.id === productId) ||
		// 	games.desktopGames.find((element) => element.id === productId);

		// setGame(currentGame);
		// console.log(currentGame, productId);
	}, [productId]);
	console.log(game);
	return (
		<>
			<Nav />
			{game ? (
				<div
					className="back-image"
					style={{ backgroundImage: `url(${game.img})` }}
				>
					<div className="over"></div>
				</div>
			) : null}

			<div className="principal-section">
				<div className="content-box">
					{game ? (
						<div className="content content-1">
							<img src={game.img} alt={game?.title} />
							<h1>{game.title}</h1>
							<p>{game.info?.description}</p>
							<h3>Características</h3>

							{game.info?.data?.map((element) => (
								<p key={element.key} style={{ padding: "2px 20px" }}>
									{" "}
									<strong
										style={{
											fontWeight: "600",
										}}
									>
										{element.key + ": "}
									</strong>
									{element.value}
								</p>
							))}
							{game.info?.extra?.map((element) => (
								<p
									key={element}
									style={{ padding: "2px 20px", fontWeight: "600" }}
								>
									{element}{" "}
								</p>
							))}
						</div>
					) : null}
					{/* <div className="content content-1">
						<img src={game.img} alt={game?.title} />
						<h1>{game.title}</h1>
						<p>{game.info?.description}</p>
						<h3>Características</h3>

						{game.info?.data?.map((element) => (
							<p key={element.key} style={{ padding: "2px 20px" }}>
								{" "}
								<strong
									style={{
										fontWeight: "600",
									}}
								>
									{element.key + ": "}
								</strong>
								{element.value}
							</p>
						))}
						{game.info?.extra?.map((element) => (
							<p
								key={element}
								style={{ padding: "2px 20px", fontWeight: "600" }}
							>
								{element}{" "}
							</p>
						))}
					</div> */}
					<div className="content-box-2">
						<div className="content content-2">
							<h1>Informacion de la cuenta</h1>
							<div className="content-input">
								<h5>Email</h5>
								<input type="text" />
							</div>
						</div>
						<div className="content content-3"></div>
					</div>
				</div>
			</div>
		</>
	);
};
