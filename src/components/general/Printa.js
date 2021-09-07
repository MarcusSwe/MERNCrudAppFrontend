import React, { useState } from "react";
import upvoteButton from '../../upvote3.png';
import replayButton from '../../omegapog2.png';

import tagFun from '../../fun10.png';
import tagMeta from '../../meta10.png';
import tagUrgent from '../../urgent10.png';


const Printa = (props) => {

    const [upvote, addUpvote] = useState();
    const [replay, addReplay] = useState();

  

    const printaReplys = (props, index) => {
        
        let returnX = "";

        if(props.notes[index].replayss.length > 0){
           returnX = <div>
           {props.notes[index].replayss.map((p, index) =>
               <div className="reply">
               {p.replayText}
               </div>
               )};
           </div>            
        } else {
            returnX = <div> </div>;
        }       
            return (
                <div>
                {returnX}
                </div>
            )      
               
    }

    const printaTags = (props, index) => {

        let returnFun = "";
        let returnMeta = "";
        let returnUrgent = "";
        
        if(props.notes[index].tags.fun) {            
            returnFun = <img src={tagFun} className="funloggaInNote"></img>
        }

        if(props.notes[index].tags.meta) {
            returnMeta = <img src={tagMeta} className="metaloggaInNote"></img>
        }

        if(props.notes[index].tags.urgent) {
            returnUrgent = <img src={tagUrgent} className="urgentloggaInNote"></img>;
        }

        return (
            <div className="tagwrapper">
                {returnFun}
                {returnMeta}
                {returnUrgent}
            </div>
        )

    }

    /*   {<img src={tagFun} className="funloggaInNote"></img>
                <img src={tagMeta} className="metaloggaInNote"></img>
                <img src={tagUrgent} className="urgentloggaInNote"></img>}

                return `profileTextField${y}`

                 {printaTags(props, index)}
                */



return (
    <div class="mainParentNote">

        {props.notes.map((p, index) => 
        
        <div className="individualNote">
                
            <div className="newNoteTopTitle"><b>{p.title}</b></div>
            <div className="subjectInNote">{p.message}</div>
            
            <div className="voteDiv">
                <p className="voteNumber">{p.upvote}</p>
                <img src={upvoteButton} onClick="" className="voteButton"/>
            </div>

            <div className="noteInfo">
                <div className="usernameMadenote">
                    {p.author}
                </div>
                <div className="dateInNote">
                    {p.date}
                    <img src={replayButton} onClick="" className="showReplyButton"/>
                    <b className="commentNumbers">{p.replays} comments</b>
                </div>
            </div>

            {printaTags(props, index)}

            <div className="replyParent" style={{top: "-220px",}}>
                <button class="replyButton">Reply</button>
                <textarea class="replyTextarea" maxLength="100"></textarea>
                
                <div className="replyChild">
                    {printaReplys(props, index)}
                </div>

            </div>


        </div>

        )}

  
    </div>
)

}

export default Printa;