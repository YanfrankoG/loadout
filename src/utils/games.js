import cod from "../assets/games/cod1.jpg";
import genshin from "../assets/games/genshin1.jpg";
import free from "../assets/games/freefire1.jpg";
import honor from "../assets/games/honor1.jpg";
import p5 from "../assets/games/p5.png";
import wzm from "../assets/games/wzm.jpg";
import honkai from "../assets/games/honkai.png";
import fortnite from "../assets/games/fortnite.jpeg";
import wz from "../assets/games/wz.jpg";
import rocket from "../assets/games/rocket.jpeg"

export const mobileGames = [{
    games: [
        {
            cod: {
                title: "CALL OF DUTY MOBILE",
                platform: ['MOBILE'],
                img: cod,
                path: '/cod',
                description: '¡Recarga tus CP COD Points para Call of Duty Mobile de la manera más confiable y en pocos minutos!',
                data: 
                [
                    {key:'Tipo', value:'Recarga (Manual Interna)'}, 
                    {key:'Región', value: 'Global '}, 
                    {key: 'Entrega', value: '1 Hora (Máximo)'},
                    {key: 'Horario', value: '10AM - 10PM (UTP -4'}
                ] ,
                extra: ['Por restricciones de regíon se requieren datos de acceso para hacer las recargas de COD Mobile en este momento.', 
                    'La promovión 2x1 solo es válida una vez por paquete. No es posible adquirir el mismo paquete 2 veces']    
            },
            
            genshin: {
                title: 'GENSHIN IMPACT',
                platform: ['MOBILE', 'PC', 'PLAYSTATION'],
                img: genshin},
            
            freefire: {
                title: 'FREE FIRE',
                platform: ['MOBILE'],
                
                img: free},
            honor: {
                title: 'HONOR OF KINGS',
                platform: ['MOBILE'],
                img: honor},
            
            p5: {
                title: 'P5: THE PHANTOM X',
                platform: ['MOBILE'],
                img: p5},
            
            wzm: {
                title: 'WARZONE MOBILE',
                platform: ['MOBILE'],
                img: wzm},
            
            honkai: {
                title: 'HONKAI: STAR RAIL',
                platform: ['MOBILE', 'PLAYSTATION'],
                img: honkai,
            }

        }
    ],
    

}]

export const desktopGames = [{
fortnite: {
    title: 'FORTNITE',
    platform: ['MOBILE', 'PC', 'PLAYSTATION', 'XBOX'],
    img: fortnite,
},

wz: {
    title: 'CALL OF DUTY: WARZONE',
    platform: ['PC', 'PLAYSTATION', 'XBOX'],
    img: wz,},

rocket: {
    title: 'ROCKET LEAGUE',
    platform: ['PLAYSTATION', 'XBOX', 'PC'],
    img: rocket,
}
}]
