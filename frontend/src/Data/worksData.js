import SophieV1 from "../images/pages/realisations/sophie_v1.webp" 
import SophieV2 from "../images/pages/realisations/sophie-v2.webp" 
import KasaV1 from "../images/pages/realisations/kasa_v1.webp"
import KasaV2 from "../images/pages/realisations/kasa_v2.webp"
import argentbankV1 from "../images/pages/realisations/argentbank_v1.webp"
import argentbankV2 from "../images/pages/realisations/argentbank-v2.webp"
import EventsV1 from "../images/pages/realisations/724events_v1.webp"
import EventsV2 from "../images/pages/realisations/724events-v2.webp"
import html5 from "../images/icons/html5.png"
import css3 from "../images/icons/css3.png"
import javaScript from "../images/icons/javascript.png"
import react from "../images/icons/react.png"
import nodeJs from "../images/icons/nodeJs.png"
import redux from "../images/icons/redux.png"
import MongoDB from "../images/icons/mongoDB.png"
import Debug from "../images/icons/debug.png"

export const worksData = [
    {
        id:  "c1",
        name: "Architectur Sophie",
        array: "row",
        linkCover : SophieV1,        
        linkCoverAlt : "Architecture Sophie Bluel, tablette",
        linkTo : "sophiebluel",
        image: SophieV2,
        imageAlt: "Architecure Sophie Bluel, notebook",
        codeLink:"https://github.com/yoonju88/Architecte-sophie-bluel",
        description: "J’ai créé une page web dynamique avec JavaScript, comprenant une page de connexion et une modale pour le téléchargement de média. J’ai intégré une API pour le back-end et utilisé Figma pour concevoir et intégrer le design.",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : javaScript, alt:'Icon javaScript'},
            {src : nodeJs, alt:'Icon nodeJs'},
        ]
    },
    {
        id: "c2",
        name: "Kasa",
        array: "row_reverse",
        linkCover: KasaV1,
        linkCoverAlt : "Kasa, tablette",
        linkTo : "kasa",
        image: KasaV2,
        imageAlt: "Kasa, notebook",
        codeLink:"https://github.com/yoonju88/projet_8_Kasa",
        description: "J’ai développé une application web réactive en utilisant React. J’ai configuré la navigation entre les différentes pages de l’application avec React Router et j’ai développé les éléments de l’interface du site web grâce aux composants React.",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : react, alt:'Icon React'}  
        ] 
    },
    {
        id: "c3",
        name: "ArgentBank",
        array: "row",
        linkCover: argentbankV1,
        linkCoverAlt : "ArgentBank - tablette",
        linkTo : "argentbank",
        image : argentbankV2,
        imageAlt : "ArgentBank, notebook",
        codeLink:"https://github.com/yoonju88/ArgentBank-website",
        description: "Pour créer un tableau de bord réactif et gérer l’état global de l’application, j’ai utilisé React et Redux, en intégrant le back-end via des appels API REST. J’ai défini les points d’accès de l’API avec Swagger et utilisé Node.js pour gérer le serveur.",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : react, alt:'Icon React'},
            {src : redux, alt:'Icon Redux'},
            {src : nodeJs, alt:'Icon nodeJs'},
            {src : MongoDB, alt:'Icon MongoDB'},
        ]
    },
    {
        id: "c4",
        name: "724events",
        array: "row_reverse",
        linkCover: EventsV1,
        linkCoverAlt : "724events - tablette",
        linkTo : "724event",
        image : EventsV2,
        imageAlt : "724events, notebook",
        codeLink:"https://github.com/yoonju88/Projet10-724events",
        description: "J’ai examiné et corrigé les bugs en utilisant Chrome DevTools et React Developer Tools. J’ai résolu les problèmes avec JavaScript et React, complété le cahier de recette avec des tests unitaires et fonctionnels ainsi que Yarn et Node.js pour la gestion des dépendances et l’exécution des tests.",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : react, alt:'Icon React'},
            {src : Debug, alt:'Icon Debug'}
        ] 
    }
]