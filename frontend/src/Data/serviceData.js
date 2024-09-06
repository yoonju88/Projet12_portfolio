import { faCode,faBugSlash,faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import  { faFaceSmile} from '@fortawesome/free-regular-svg-icons'
export const serviceData = [
    {
        id : "d1",
        icon : faCode,
        alt :" integration icon",
        title: "Développement",
        description : [
            {id :"f1", text : 'Développement du web interactifs et réactifs.'},
            {id :"f2", text : 'Transforme des maquettes en sites fonctionnels.'},
        ]
    },
    {
        id : "d2",
        icon : faFaceSmile,
        alt :" optimisation icon",
        title: "Optimisation",
        description : [
            { id :"f3", text : 'Réduction des temps de chargement.'},
            { id :"f4", text : "Amélioration l’UX et optimisation SEO."},
        ]
    },
    {
        id:"d3",
        icon : faBugSlash,
        alt: "Debug icon",
        title: "Débugage",
        description : [
            {id :"f5", text : "Résolution des problèmes d'affichage."},
            {id :"f6", text : 'Correction des erreurs JavaScript.'},
        ]
    },
    {
        id: "d4",
        icon:faLaptopCode,
        alt:"Responsive icon",
        title: "Responsive",
        description : [
            {id :"f7", text : "Interfaces adaptables à toute les tailles d'écran."},
            {id :"f8", text : 'Compatibilité et fluidité garantissant une utilisation optimale.'},
        ]
    }
]   