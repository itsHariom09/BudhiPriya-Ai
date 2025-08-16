import {React, useContext, useState} from 'react';
import "./chatsearch.css";
import { ImAttachment } from "react-icons/im";
import { LuSendHorizontal } from "react-icons/lu";
import Darkmode from '../Darkmode/Darkmode';
import { dataContext } from '../../context/Usercontext';
import user from"../../assets/user.png"
import ai from"../../assets/ai.png"

export default function ChatSearch(){
    let {sent,input,setInput,result,showresult,recentprompt,loading}=useContext(dataContext);
    return(
        <div className='chatsearch'>
            <div className="topsection">
                {!showresult?<div className="headings">
                    <span>Hello, Hariom</span>
                    <span>I'm Your Own Assistent</span>
                    <span>What can I help you...</span>
                </div>:<div className='result'>
                        <div className="userbox">
                            <img src={user} alt="" width="60px"/>
                            <p>{recentprompt}</p>
                        </div>

                        <div className="aibox">
                            <img src={ai} alt="" width="60px"/>
                            {loading?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>:<p>{result}</p>}
                            
                        </div>
                    </div>}

            </div>
            <div className="bottomsection">
                <div className="search">
                    <button id='adddoc' onClick={()=>{alert("In Building... Coming Soon!")}}><ImAttachment /></button>
                    <input type="text" placeholder='Enter a promt' onChange={(e)=>{setInput(e.target.value)}} value={input} />
                    <button id='sendbtn' onClick={()=>{sent(input)}}><LuSendHorizontal /></button>
                    <Darkmode id="dm"/>
                </div>
            
            </div>
        </div>
    );
}