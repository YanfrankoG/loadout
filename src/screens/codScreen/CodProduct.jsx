import React, { useEffect } from "react";
import "./CodProduct.css";
import { mobileGames } from "../../utils/games";
import { Nav } from "../../components/nav/Nav";
export const CodProduct = () => {
  const game = mobileGames[0].games[0].cod;

  useEffect(() => {
    console.log(game);
  });

  return (
    <>
      <Nav />
      <div
        className="back-image"
        style={{ backgroundImage: `url(${game.img})` }}
      >
        <div className="over"></div>
      </div>

      <div className="principal-section">
        <div className="content-box">
          <div className="content content-1">
            <img src={game.img} alt={game.title} />
            <h1>{game.title}</h1>
            <p>{game.description}</p>
            <h3>Características</h3>

            {game.data?.map((element) => (
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
            {game.extra?.map((element) => (
              <p
                key={element}
                style={{ padding: "2px 20px", fontWeight: "600" }}
              >
                {element}{" "}
              </p>
            ))}
          </div>
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
