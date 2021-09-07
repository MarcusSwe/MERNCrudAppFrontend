import React, { useState } from "react";
import upvoteButton from '../../upvote3.png';
import replayButton from '../../omegapog2.png';

const Printa = (props) => {

    const [upvote, addUpvote] = useState();
    const [replay, addReplay] = useState();

    



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

        </div>

        )}

  
    </div>
)

}

export default Printa;