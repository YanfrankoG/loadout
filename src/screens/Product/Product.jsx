import { useEffect, useState } from "react";
import "./Product.css";
// import games from "../../utils/games";
import { Nav } from "../../components/nav/Nav";
import { useParams } from "react-router-dom";
import { getGame } from "../../utils/games";
export const Product = () => {
	const { productId } = useParams();
	const [game, setGame] = useState();
	const [isLoading, setisLoading] = useState(true);

	// console.log(productId, "productId");

	useEffect(() => {
		const fetchData = async () => {
			try {
				await new Promise((resolve) => setTimeout(resolve, 1000));
				await getGame(productId).then((response) => {
					console.log(response);
					setGame(response);
				});
				setisLoading(false);
			} catch (error) {
				console.error("Error en el fetch", error);
				setisLoading(false);
			}
		};

		fetchData();

		// const currentGame =
		// 	games.mobileGames.find((element) => element.id === productId) ||
		// 	games.desktopGames.find((element) => element.id === productId);

		// setGame(currentGame);
		// console.log(currentGame, productId);
	}, [productId]);

	return (
		<>
			<Nav />
			{game && !isLoading ? (
				<div
					className="back-image"
					style={{ backgroundImage: `url(${game.img})` }}
				>
					<div className="over"></div>
				</div>
			) : (
				<div
					className="back-image skeleton"
					style={{ borderRadius: "0" }}
				></div>
			)}

			<div className="principal-section">
				<div className="content-box">
					{game && !isLoading ? (
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
					) : (
						<div className="content content-1">
							<div
								style={{
									width: "100%",
									height: "250px",
									borderRadius: "0",
								}}
								className="skeleton "
							></div>
							<div
								className="skeleton"
								style={{
									height: "2rem",
									width: "50%",
									margin: "18px auto 22px",
								}}
							></div>

							<div
								className="skeleton skeleton-text"
								style={{ width: "87%" }}
							></div>
							<div
								className="skeleton skeleton-text"
								style={{ width: "80%" }}
							></div>
							<div
								className="skeleton skeleton-text"
								style={{ width: "45%" }}
							></div>
							<br />
							<div
								className="skeleton skeleton-text"
								style={{ width: "29%" }}
							></div>
							<div
								className="skeleton skeleton-text"
								style={{ width: "35%" }}
							></div>
							<div
								className="skeleton skeleton-text"
								style={{ width: "30%" }}
							></div>
							<div
								className="skeleton skeleton-text"
								style={{ width: "45%" }}
							></div>
						</div>
					)}
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
