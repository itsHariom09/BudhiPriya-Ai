import { createContext, useState } from "react";
import run from "../gemini.js";
export const dataContext=createContext();


export default function Usercontext({children}){
    const [input,setInput]=useState("");
    const [showresult,setShowresult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [result,setResult]=useState("");
    const [recentprompt,setRecentprompt]=useState("");
    const [prevprompt,setPrevprompt]=useState([]);

    function newChat() {
        setShowresult(false);
        setLoading(false);
    }

    async function sent(prompt){
        setResult("");
        setShowresult(true);
        setRecentprompt(input);
        setLoading(true);
        setPrevprompt(prev=>[...prev,input]);
        let response=await run(input);
        setResult(response.includes("**") ? response.split("**") : response.split("*"));
        setLoading(false);
        setInput("");
    }
    const data={
        loading,
        setLoading,
        showresult,
        setShowresult,
        result,
        setResult,
        input,
        sent,
        setInput,
        recentprompt,
        setRecentprompt,
        prevprompt,
        newChat,
    };
    return(
        <>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>
        </>
    );
}