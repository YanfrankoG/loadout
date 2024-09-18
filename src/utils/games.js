import codImage from "../assets/games/cod1.jpg";
import genshinImage from "../assets/games/genshin1.jpg";
import freeFireImage from "../assets/games/freefire1.jpg";
import honorImage from "../assets/games/honor1.jpg";
import p5Image from "../assets/games/p5.png";
import wzmImage from "../assets/games/wzm.jpg";
import honkaiImage from "../assets/games/honkai.png";
import fortniteImage from "../assets/games/fortnite.jpeg";
import wzImage from "../assets/games/wz.jpg";
import rocketImage from "../assets/games/rocket.jpeg";

const games = {
	mobileGames: [
		{
			id: "codm",
			title: "CALL OF DUTY MOBILE",
			platform: ["MOBILE"],
			img: codImage,
			info: {
				description:
					"¡Recarga tus CP COD Points para Call of Duty Mobile de la manera más confiable y en pocos minutos!",
				data: [
					{ key: "Tipo", value: "Recarga (Manual Interna)" },
					{ key: "Región", value: "Global " },
					{ key: "Entrega", value: "1 Hora (Máximo)" },
					{ key: "Horario", value: "10AM - 10PM (UTP -4" },
				],
				extra: [
					"Por restricciones de regíon se requieren datos de acceso para hacer las recargas de COD Mobile en este momento.",
					"La promovión 2x1 solo es válida una vez por paquete. No es posible adquirir el mismo paquete 2 veces",
				],
			},
		},
		{
			id: "genshin_impact",
			title: "GENSHIN IMPACT",
			platform: ["MOBILE", "PC", "PLAYSTATION"],
			img: genshinImage,
		},
		{
			id: "free_fire",
			title: "FREE FIRE",
			platform: ["MOBILE"],
			img: freeFireImage,
		},
		{
			id: "honor_of_kings",
			title: "HONOR OF KINGS",
			platform: ["MOBILE"],
			img: honorImage,
		},
		{
			id: "persona_5",
			title: "P5: THE PHANTOM X",
			platform: ["MOBILE"],
			img: p5Image,
		},
		{
			id: "warzone_mobile",
			title: "WARZONE MOBILE",
			platform: ["MOBILE"],
			img: wzmImage,
		},
		{
			id: "honkai_star_rail",
			title: "HONKAI: STAR RAIL",
			platform: ["MOBILE", "PLAYSTATION"],
			img: honkaiImage,
		},
	],
	desktopGames: [
		{
			id: "fortnite",
			title: "FORTNITE",
			platform: ["MOBILE", "PC", "PLAYSTATION", "XBOX"],
			img: fortniteImage,
		},
		{
			id: "warzone",
			title: "CALL OF DUTY: WARZONE",
			platform: ["PC", "PLAYSTATION", "XBOX"],
			img: wzImage,
		},
		{
			id: "rocket_league",
			title: "ROCKET LEAGUE",
			platform: ["PLAYSTATION", "XBOX", "PC"],
			img: rocketImage,
		},
	],
};

export default games;

// export const desktopGames = [
// 	{
// 		fortnite: {
// 			id: "fortnite",
// 			title: "FORTNITE",
// 			platform: ["MOBILE", "PC", "PLAYSTATION", "XBOX"],
// 			img: fortniteImage,
// 		},

// 		wz: {
// 			id: "warzone",
// 			title: "CALL OF DUTY: WARZONE",
// 			platform: ["PC", "PLAYSTATION", "XBOX"],
// 			img: wzImage,
// 		},

// 		rocket: {
// 			id: "rocket_league",
// 			title: "ROCKET LEAGUE",
// 			platform: ["PLAYSTATION", "XBOX", "PC"],
// 			img: rocketImage,
// 		},
// 	},
// ];
