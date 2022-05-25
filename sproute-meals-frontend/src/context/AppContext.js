import { React,createContext,useState,useContext,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
const ChatContext = createContext();

const ChatProvider = ({children}) =>{
    // const navigate = useNavigate()
    const [user_token,setUserToken]=useState([]);
    const [userInfos,setInfos] = useState([])
    return <ChatContext.Provider value={{user_token,setUserToken,userInfos,setInfos}}>{children}</ChatContext.Provider>
}
export default ChatProvider;
export const ChatState =()=>{
    return useContext(ChatContext);
}