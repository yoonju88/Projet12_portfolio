import SophieV1 from "../images/pages/realisations/sophi_v1.webp" 
import SophieV2 from "../images/pages/realisations/sophi_v2.webp" 
import KasaV1 from "../images/pages/realisations/kasa_v1.webp"
import KasaV2 from "../images/pages/realisations/kasa_v2.webp"
import argentbankV1 from "../images/pages/realisations/argentbank_v1.webp"
import argentbankV2 from "../images/pages/realisations/argentbank_v2.webp"
import EventsV1 from "../images/pages/realisations/724events_v1.webp"
import EventsV2 from "../images/pages/realisations/724events_v2.webp"
import html5 from "../images/icons/html5.png"
import css3 from "../images/icons/css3.png"
import javaScript from "../images/icons/javascript.png"
import react from "../images/icons/javascript.png"
import nodeJs from "../images/icons/nodeJs.png"
import redux from "../images/icons/redux.png"
import MongoDB from "../images/icons/mongoDB.png"

export Cartes = [
    {
        id:  "c1",
        name: "Architecture Sophie Bluel",
        linkCover : SophieV1,
        linkCoverAlt : "Architecure Sophie Bluel, tablette",
        image: SophieV2,
        imageAlt: "Architecure Sophie Bluel, notebook",
        description: "Gestion des événements utilisateur et manipulation des éléments du DOM avec JavaScript.Création d'une page de connexion pour l'administrateur du site.Développement d'une modale pour uploader et supprimer des évenements dans la galerie.Communication avec une API pour intégrer ces fonctionnalités.",
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
        linkCover: KasaV1,
        linkCoverAlt : "Kasa, tablette",
        image: KasaV2,
        imageAlt: "Kasa, notebook",
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
        linkCover: argentbankV1,
        linkCoverAlt : "ArgentBank - tablette",
        image : argentbankV2,
        imageAlt : "ArgentBank, notebook",
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
        linkCover: EventsV1,
        linkCoverAlt : "724events - tablette",
        image : EventsV2,
        imageAlt : "724events, notebook",
        description: "débugger le site",
        icons : [
            {src : html5, alt:'Icon html5'},
            {src : css3, alt:'Icon css3'},
            {src : react, alt:'Icon React'}
        ] 
    }
]