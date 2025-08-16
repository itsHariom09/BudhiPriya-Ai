import {React, useState,useContext} from 'react';
import { FaPlus } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { dataContext } from '../../context/Usercontext';
import "./slidebar.css"
export default function SlideBar(){
    const {sent,prevprompt,newChat}=useContext(dataContext);
    const[extent,setExtent]=useState(false);

    async function loadPrev(prompt) {
        sent(prompt);
    }
    return(
        <div className="slidebar">
            <GiHamburgerMenu id='ham' onClick={()=>{
                setExtent(prev=>!prev);
            }}/>
            <div className="newchat" onClick={()=>newChat()}>
                <FaPlus />
                {extent?<p>New Chat</p>:null}
                
            </div>
            {prevprompt.map((item,index)=>{
                return(
                    <div className="recent" onClick={()=>{loadPrev()}} key={index}>
                        <BiSolidMessageSquareDetail />
                        {extent?<p>{item.slice(0,10)+"..."}</p>:null}
                    </div>
                )
            })}
            
        </div>
    );
}