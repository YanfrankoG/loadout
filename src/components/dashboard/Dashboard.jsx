import "./Dashboard.css";
import { mobileGames, desktopGames } from "../../utils/games";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { SelectionCard } from "../selection/SelectionCard";
import { Nav } from "../nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
export const Dashboard = () => {
  const ITEM_WIDTH = 540;

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
      <Outlet />
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
        <h1 className="games-title">JUEGOS MOVILES</h1>
        <div className="selection " ref={selectionRef}>
          {Object.entries(mobileGames[0].games[0]).map((key) => {
            return (
              <SelectionCard
                key={key}
                gameTitle={key[1].title}
                gameImg={key[1].img}
                gamePlatforms={key[1].platform}
                gamePath={key[1].path}
              />
            );
          })}
        </div>

        <div className="card-buttons">
          <button onClick={() => handleScroll(-ITEM_WIDTH)}>
            <FontAwesomeIcon icon={faAngleLeft} className="arrow" />
          </button>
          <button onClick={() => handleScroll(ITEM_WIDTH)}>
            <FontAwesomeIcon icon={faAngleRight} className="arrow" />
          </button>
        </div>
      </section>

      <section className="pc-games">
        <section className="section-games">
          <h1 className="games-title">JUEGOS MULTIPLATAFORMA</h1>
          <div className="selection">
            {Object.entries(desktopGames[0]).map((key) => {
              return (
                <SelectionCard
                  key={key}
                  gameTitle={key[1].title}
                  gameImg={key[1].img}
                  gamePlatforms={key[1].platform}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};
