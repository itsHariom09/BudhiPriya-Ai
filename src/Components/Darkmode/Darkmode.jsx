import { useEffect, useState } from "react";
import { CgSun } from "react-icons/cg";
import "./Darkmode.css"
import { AiOutlineMoon } from "react-icons/ai";
export default function Darkmode(){
    const[mode,setMode]=useState("darkmode");
    function toggle(){
        (mode=="darkmode")?setMode("lightmode"):setMode("darkmode");
    }

    useEffect(()=>{
        document.body.className=mode;
    },[mode]);
    return(
        <div>
            <button onClick={()=>{toggle()}} className="darkbtn">{(document.body.className=="lightmode")?<CgSun />:<AiOutlineMoon />}</button>
        </div>
    );
}