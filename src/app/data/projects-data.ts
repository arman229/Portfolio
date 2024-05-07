import weatherimage from "../images/projects/weather.png"
import bmiimage from "../images/projects/responsivebmi.png"
import ecommereceproject from "../images/projects/newecommerece.png"
import todoproject from "../images/projects/newtodoproject.png"

const DataCard = [
    {
        id: "0",
        image: weatherimage,
        heading: "Weather Web App",
        detail:
            "A compilation of my weather web app projects exemplifying innovation and skill.",
        demo: "https://weatherinfo24.netlify.app/",
        github: "https://github.com/arman229/Weather-app",
        techused:['Reactjs', "CSS","Material UI"
        ]
    },
    {
        id: "1",
        image: bmiimage,
        heading: "BMI Calculator",
        detail:
            "A compilation of my BMI calculator projects exemplifying technical prowess.",
        demo: "https://bmicalculator-arman.netlify.app/",
        github: "https://github.com/arman229/CalculateBMI.git",
        techused:['Reactjs', "CSS","HTML"
        ]
    },
    {
        id: "2",
        image: ecommereceproject,
        heading: "E-commerce project",
        detail:
            "Intuitive and visually appealing frontend for your eCommerce store.  ",
        demo: "https://my-shopping-website-assignment.vercel.app/",
        github: "https://github.com/arman229/E_commerce_website",
        techused:['Nextjs', "shadcn ui","CSS"
        ]
    },
    {
        id: "3",
        image: todoproject,
        heading: "To Do App",
        detail:
            "A collection of my web design projects showcasing creativity and expertise.",
        demo: "https://piaicwebtodo.vercel.app/",
        github: "https://github.com/arman229/todoapp.git",
        
        techused:['Nextjs', "CSS","Typescript"
        ]
    },
];

export default DataCard;
