import SophieV1 from "../images/pages/realisations/sophie_v1.webp" 
import SophieV2 from "../images/pages/realisations/sophie-v2.webp" 
import KasaV1 from "../images/pages/realisations/kasa_v1.webp"
import KasaV2 from "../images/pages/realisations/kasa-v2.webp"
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

export const realisationData = [
    {
        id:  "c1",
        name: "Architecture Sophie Bluel",
        array: "row",
        linkCover : SophieV1,        
        linkCoverAlt : "Architecure Sophie Bluel, tablette",
        linkTo : "sophiebluel",
        image: SophieV2,
        imageAlt: "Architecure Sophie Bluel, notebook",
        codeLink:"https://github.com/yoonju88/Architecte-sophie-bluel",
        description: "Gestion des événements utilisateur et manipulation des éléments du DOM avec JavaScript.Création d'une page de connexion pour l'administrateur du site. Développement d'une modale pour uploader et supprimer des évenements dans la galerie.Communication avec une API pour intégrer ces fonctionnalités.",
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
        description: "Création d'un application de logement",
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
        description: "implementer l'application avec react et redux",
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
        description: "débugger le site",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : react, alt:'Icon React'},
            {src : Debug, alt:'Icon Debug'}
        ] 
    }
]