import {FaSearch, FaEllipsisV ,FaPencilAlt,FaUsers, FaPlus} from "react-icons/fa";
import SideBar from '../order/Orders/SideBar';
import ClientAdd from "./ClientAdd";
import ClientHeader from "./ClientHeader";
import ClientShowCase from "./ClientShowCase";
import './styles.css';
const Clients = () => {
    let clients=[
        {
           id:1,
           image:<svg width="55" height="50" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
           <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_227_51)"/>
           <path d="M18.64 33.92C18.64 32.5333 18.9267 31.3 19.5 30.22C20.0867 29.1267 20.9133 28.28 21.98 27.68C23.0467 27.0667 24.2733 26.76 25.66 26.76C27.42 26.76 28.9 27.2333 30.1 28.18C31.3 29.1133 32.0733 30.3867 32.42 32H28.2C27.9467 31.4667 27.5933 31.06 27.14 30.78C26.7 30.5 26.1867 30.36 25.6 30.36C24.6933 30.36 23.9667 30.6867 23.42 31.34C22.8867 31.98 22.62 32.84 22.62 33.92C22.62 35.0133 22.8867 35.8867 23.42 36.54C23.9667 37.18 24.6933 37.5 25.6 37.5C26.1867 37.5 26.7 37.36 27.14 37.08C27.5933 36.8 27.9467 36.3933 28.2 35.86H32.42C32.0733 37.4733 31.3 38.7533 30.1 39.7C28.9 40.6333 27.42 41.1 25.66 41.1C24.2733 41.1 23.0467 40.8 21.98 40.2C20.9133 39.5867 20.0867 38.74 19.5 37.66C18.9267 36.5667 18.64 35.32 18.64 33.92ZM43.1963 38.7H38.1963L37.4363 41H33.3163L38.4563 26.9H42.9763L48.0963 41H43.9563L43.1963 38.7ZM42.2163 35.7L40.6963 31.14L39.1963 35.7H42.2163Z" fill="white"/>
           <defs>
           <linearGradient id="paint0_linear_227_51" x1="33" y1="0" x2="33" y2="66" gradientUnits="userSpaceOnUse">
           <stop stop-color="#0093E9"/>
           <stop offset="0.0001" stop-color="#22A3E0" stop-opacity="0.734375"/>
           <stop offset="1" stop-color="#1EFBE2" stop-opacity="0.8"/>
           </linearGradient>
           </defs>
           </svg>
           ,
           name:"Carrie Alexander",
           email:"kettyAnders@gmail.com",
           location:"NYC , USA ",
           Orders:2,
           phone:"(840) 789 123 465",
           controls:<FaPencilAlt/>,
           searchControl:<FaSearch/>
        },
        {
            id:2,
            image:<svg width="55" height="50" viewBox="0 0 72 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_227_53)"/>
            <path d="M27.46 39L23.04 32.82V39H19.12V24.9H23.04V30.98L27.42 24.9H31.94L26.76 31.74L32.2 39H27.46ZM42.5517 36.7H37.5517L36.7917 39H32.6717L37.8117 24.9H42.3317L47.4517 39H43.3117L42.5517 36.7ZM41.5717 33.7L40.0517 29.14L38.5517 33.7H41.5717Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_227_53" x1="9.5" y1="17.5" x2="66" y2="54.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#ABD0E8"/>
            <stop offset="1" stop-color="#000CE8" stop-opacity="0.6"/>
            </linearGradient>
            </defs>
            </svg>,
            name:"Ketty Anderson",
            email:"kattyander@gmail.com",
            location:"Dubai UAE",
            Orders:9,
            phone:"(840) 789 123 465",
            controls:<FaEllipsisV/>,
         },

         {
            id:3,
            image:<svg width="55" height="50" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_31_68)"/>
            <path d="M36.58 27.9V42H32.66V34.22L30 42H26.72L24.04 34.16V42H20.12V27.9H24.86L28.4 37.06L31.86 27.9H36.58ZM44.1314 42.14C42.4914 42.14 41.1447 41.7533 40.0914 40.98C39.0381 40.1933 38.4714 39.0733 38.3914 37.62H42.5714C42.6114 38.1133 42.7581 38.4733 43.0114 38.7C43.2647 38.9267 43.5914 39.04 43.9914 39.04C44.3514 39.04 44.6447 38.9533 44.8714 38.78C45.1114 38.5933 45.2314 38.34 45.2314 38.02C45.2314 37.6067 45.0381 37.2867 44.6514 37.06C44.2647 36.8333 43.6381 36.58 42.7714 36.3C41.8514 35.9933 41.1047 35.7 40.5314 35.42C39.9714 35.1267 39.4781 34.7067 39.0514 34.16C38.6381 33.6 38.4314 32.8733 38.4314 31.98C38.4314 31.0733 38.6581 30.3 39.1114 29.66C39.5647 29.0067 40.1914 28.5133 40.9914 28.18C41.7914 27.8467 42.6981 27.68 43.7114 27.68C45.3514 27.68 46.6581 28.0667 47.6314 28.84C48.6181 29.6 49.1447 30.6733 49.2114 32.06H44.9514C44.9381 31.6333 44.8047 31.3133 44.5514 31.1C44.3114 30.8867 43.9981 30.78 43.6114 30.78C43.3181 30.78 43.0781 30.8667 42.8914 31.04C42.7047 31.2133 42.6114 31.46 42.6114 31.78C42.6114 32.0467 42.7114 32.28 42.9114 32.48C43.1247 32.6667 43.3847 32.8333 43.6914 32.98C43.9981 33.1133 44.4514 33.2867 45.0514 33.5C45.9447 33.8067 46.6781 34.1133 47.2514 34.42C47.8381 34.7133 48.3381 35.1333 48.7514 35.68C49.1781 36.2133 49.3914 36.8933 49.3914 37.72C49.3914 38.56 49.1781 39.3133 48.7514 39.98C48.3381 40.6467 47.7314 41.1733 46.9314 41.56C46.1447 41.9467 45.2114 42.14 44.1314 42.14Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_31_68" x1="15" y1="1.88974e-07" x2="33" y2="66" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FBDA61"/>
            <stop offset="1" stop-color="#FF5ACD" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
            </svg>,
            name:"Matt Stephanie",
            email:"mattnie@gmail.com",
            location:"Canada Ottawa",
            Orders:8,
            phone:"(840) 789 123 465",
            controls:<FaEllipsisV/>,
         },

         {
            id:4,
            image:<svg width="55" height="50" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" marginBottom="2em"> 
            <circle cx="33" cy="33" r="33" fill="url(#paint0_linear_31_67)"/>
            <path d="M25.98 38.52H20.74L19.9 41H16.32L21.4 26.96H25.36L30.44 41H26.82L25.98 38.52ZM25.1 35.88L23.36 30.74L21.64 35.88H25.1ZM44.5461 41H41.1261L35.4061 32.34V41H31.9861V26.96H35.4061L41.1261 35.66V26.96H44.5461V41Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_31_67" x1="33" y1="0" x2="33" y2="66" gradientUnits="userSpaceOnUse">
            <stop stop-color="#21D4FD" stop-opacity="0.8"/>
            <stop offset="1" stop-color="#B721FF" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
            </svg>,
            name:"Alice Norway",
            email:"aliways@gmail.com",
            location:"Belgium Brussels",
            Orders:3,
            phone:"(840) 789 123 465",
            controls:<FaEllipsisV/>
         },

    ]                          
    return (
        <div className="flex bg-[#F7F8FC] w-full">
            <SideBar/>
            <div className="block">
                <ClientHeader/>
                <ClientAdd/>
                <ClientShowCase/>
            </div>
        </div>
    );
}

export default Clients;