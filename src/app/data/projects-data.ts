import weatherimage from "../images/projects/weather.png"
import ai_video from "../images/projects/ai_video_gen.png"
import ecommereceproject from "../images/projects/newecommerece.png"
import full_stack_eco from "../images/projects/armanstore.png"
 

 
const DataCard = [
    {
        id: "1",
        image: full_stack_eco,
        heading: "ArmansStore — AI-Powered E-Commerce",
        detail:"Backend APIs with AI chatbot, RAG, and visual search.",
        demo: "https://armanstore.vercel.app/",
        github: "https://github.com/arman229",  
        techused: ['FastAPI', 'Python', 'Next.js']
    },
    {
        id: "2",
        image: ai_video,
        heading: "SnuggleFable — Agentic AI Video Generator",
        detail:
            "AI platform that converts story themes into videos.",
        demo: "https://snugglefable.vercel.app/",
        github: "https://github.com/arman229", 
        techused: ['Python','OpenAI Agents SDK', 'Next.js']
    },
    {
        id: "3",
        image:ecommereceproject,
        heading: "E-commerce project",
        detail:
            "Intuitive and visually appealing frontend for your eCommerce store.  ",
        demo: "https://my-shopping-website-assignment.vercel.app/",
        github: "https://github.com/arman229/E_commerce_website",
        techused:['Nextjs', "shadcn ui","CSS"
        ]
    },
    {
        id: "4",
        image: weatherimage,
        heading: "Weather Web App",
        detail:
            "A compilation of my weather web app projects exemplifying innovation and skill.",
        demo: "https://weatherinfo24.netlify.app/",
        github: "https://github.com/arman229/Weather-app",
        techused:['Reactjs', "CSS","Material UI"
        ]
    },
 
 
];

export default DataCard;
