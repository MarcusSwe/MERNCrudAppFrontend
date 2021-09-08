import React, { useState, useContext, useEffect } from "react";
import upvoteButton from '../../upvote3.png';
import replayButton from '../../omegapog2.png';

import tagFun from '../../fun10.png';
import tagMeta from '../../meta10.png';
import tagUrgent from '../../urgent10.png';
import lolTag from '../../loltaggen.png';

import { AuthContext  } from "../../context/AuthContext";


const Printa = (props) => {
   
    const [showReplay, setShowReplay] = useState(false);
    const [indexX, setIndexX] = useState(1212112120);
    const [replayText, setReplayText] = useState("");
    const [replayText2, setReplayText2] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [funTagX, setFunTagX] = useState(false);
    const [metaTagX, setMetaTagX] = useState(false);
    const [urgentTagX, setUrgentTagX] = useState(false);
    const [opacityLevel, setOpacityLevel] = useState(0);
    const [addNewpost, setAddNewPost] = useState(false);

    const {isAuth , activeUser, newNote, setNewNote} = useContext(AuthContext);


    function colorSconst (yTitle, yMain, ySubject, yVote, yTag, yComment, yDate, yReplyparent, yReplytextareaBackground, yReplytextareaBorder, yReplybuttonBorder, yReplybuttonColor, yreplyDiv){
        this.title = yTitle;
        this.main = yMain;
        this.subject = ySubject;
        this.vote = yVote;
        this.tag = yTag;
        this.comment = yComment;
        this.date = yDate;
        this.replyParent = yReplyparent;
        this.replyTextareaBackground = yReplytextareaBackground;
        this.replyTextareaBorder = yReplytextareaBorder;
        this.replyButtonBorder = yReplybuttonBorder;
        this.replyButtonColor = yReplybuttonColor;
        this.replyDiv = yreplyDiv;
      }

    let colorSarray = [];

    colorSarray.push(new colorSconst("","","","","","","","","","","","",""));
    colorSarray.push(new colorSconst("rgb(49, 60, 211)","rgb(49, 60, 211)","rgb(93, 101, 226)","rgb(93, 101, 226)","rgb(93, 101, 226)","rgb(93, 101, 226)","rgb(93, 101, 226)","rgb(49, 60, 211)","rgb(93, 101, 226)","rgb(93, 101, 226)","rgb(49, 60, 211)","rgb(49, 60, 211)","rgb(93, 101, 226)"));
    colorSarray.push(new colorSconst("rgb(44, 82, 23)","rgb(179, 255, 134)","rgb(97, 194, 41)","rgb(97, 194, 41)","rgb(97, 194, 41)","rgb(97, 194, 41)","rgb(97, 194, 41)","rgb(179, 255, 134)","rgb(97, 194, 41)","rgb(97, 194, 41)","rgb(179, 255, 134)","rgb(179, 255, 134)","rgb(97, 194, 41)"));
    colorSarray.push(new colorSconst("rgb(243, 51, 157)","rgb(243, 51, 157)"," rgb(192, 47, 127)","rgb(93, 101, 226)"," rgb(192, 47, 127)"," rgb(192, 47, 127)"," rgb(192, 47, 127)","rgb(243, 51, 157)"," rgb(192, 47, 127)"," rgb(192, 47, 127)","rgb(243, 51, 157)","rgb(243, 51, 157)"," rgb(192, 47, 127)"));
    colorSarray.push(new colorSconst(" rgb(252, 102, 102)"," rgb(252, 102, 102)","rgb(236, 56, 56)","rgb(236, 56, 56)","rgb(236, 56, 56)","rgb(236, 56, 56)","rgb(236, 56, 56)"," rgb(252, 102, 102)","rgb(236, 56, 56)","rgb(236, 56, 56)"," rgb(252, 102, 102)"," rgb(252, 102, 102)","rgb(236, 56, 56)"));
    colorSarray.push(new colorSconst("rgb(255, 242, 65)","rgb(255, 242, 65)"," rgb(180, 171, 34)"," rgb(180, 171, 34)"," rgb(180, 171, 34)"," rgb(180, 171, 34)"," rgb(180, 171, 34)","rgb(255, 242, 65)"," rgb(180, 171, 34)"," rgb(180, 171, 34)","rgb(255, 242, 65)","rgb(255, 242, 65)"," rgb(180, 171, 34)"));
    colorSarray.push(new colorSconst("rgb(0, 0, 0)","rgb(0, 0, 0)","rgb(121, 121, 121)","rgb(121, 121, 121)","rgb(121, 121, 121)","rgb(121, 121, 121)","rgb(121, 121, 121)","rgb(0, 0, 0)","rgb(121, 121, 121)","rgb(121, 121, 121)","rgb(0, 0, 0)","rgb(121, 121, 121)","rgb(121, 121, 121)"));
    colorSarray.push(new colorSconst("rgb(75, 0, 250)","rgb(75, 0, 250)","rgb(155, 112, 255)","rgb(155, 112, 255)","rgb(155, 112, 255)","rgb(155, 112, 255)","rgb(155, 112, 255)","rgb(75, 0, 250)","rgb(155, 112, 255)","rgb(155, 112, 255)","rgb(75, 0, 250)","rgb(75, 0, 250)","rgb(155, 112, 255)"));
    colorSarray.push(new colorSconst("rgb(46, 155, 137)","rgb(46, 155, 137)","rgb(70, 255, 224)","rgb(70, 255, 224)","rgb(70, 255, 224)","rgb(70, 255, 224)","rgb(70, 255, 224)","rgb(46, 155, 137))","rgb(70, 255, 224)","rgb(70, 255, 224)","rgb(46, 155, 137)","rgb(46, 155, 137)","rgb(70, 255, 224)"));

   

    useEffect(() => {

        let y = 0;
        let z = 0;
        let ani = 0;
    
        const aniMation =() => {
            ani = setInterval(function() {
                setOpacityLevel(y);
                y = z*3.8*0.01;
                z++;
            }, 45);                
        }
    
        aniMation();
        setTimeout(function() {
            clearTimeout(ani);
        }, 1350);

    }, [addNewpost])

    const addNoteCheck = (props) => {
        
        let omegaX = false;

        if(newTitle === ""){            
            omegaX = true;
        } 
        if(replayText2 === ""){
            omegaX = true;
        }
        if(omegaX || !isAuth){
            alert("Forgot title,input text or not logged in!");
        } else {
           
            setAddNewPost(!addNewpost);
            console.log(addNewpost);
            const date = new Date();
            console.log(date.getFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate());
            let i = Math.floor(Math.random() * 9);
            props.addNote(i, date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),activeUser.username, newTitle, replayText2, funTagX, metaTagX, urgentTagX);
           
        }

    }
    
    const openNewpost = (i) => {        
        if(i){
            return ( <div className="individualNote2">
            <div className="newNoteTopTitle"><b>New Note</b></div>
  
            <div>
                <form>
                <label for="constr-title" className="titleFont"><b>New Note Title</b></label>
                <input type="text" name="constr-title" value={newTitle} className="inputTitle" maxlength="12" size="24" onChange={e => {setNewTitle(e.target.value)}} />
                <br/>

                <div className="checkboxWrapper">
                    <label className="xCheckbox">
                    <input type="checkbox" checked={funTagX} onChange={e => {setFunTagX(!funTagX)}} name="tag1" value="F"/>
                    <span className="checkmark"></span>
                    <img src={tagFun} className="funlogga"/>
                    </label>

                    <label className="xCheckbox">
                    <input type="checkbox" checked={metaTagX} onChange={e => {setMetaTagX(e.target.checked)}} name="tag2" value="M" />
                    <span className="checkmark"></span>
                    <img src={tagMeta} className="metalogga"/>
                    </label>

                    <label className="xCheckbox">
                    <input type="checkbox" checked={urgentTagX} onChange={e => {setUrgentTagX(!urgentTagX)}} name="tag3" value="U" />
                    <span className="checkmark"></span>
                    <img src={tagUrgent} className="urgentlogga"/>
                    </label>
                </div>

            <label for="constr-subject" className="newNoteSubjectTitle"><b>New Note Subject</b></label>
            <textarea rows="12" cols="24" className="subjectTextArea" maxlength="275" onChange={e => setReplayText2(e.target.value)}></textarea><br/>
            
            <input type="button" id="constr-submit" name="submit" value="Submit" className="submitNoteButton" onClick={e => addNoteCheck(props)}/>
            <input type="button" id="constr-close" name="close" value="close" onClick={e => setNewNote(false)}/>
           
            </form>
        </div>

        </div>)
        } else return ``
    }
  

    const printaReplys = (props, index) => {
        
        let returnX = "";
        let y = index;

        if(props.notes[index].replayss.length > 0){
           returnX = <div>
           {props.notes[index].replayss.map((p, index) =>
               <div className="reply" style={{backgroundColor: colorSarray[props.notes[y].theme].replyDiv}}>
               {p.replayUser}: {p.replayText}
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
        let lolTaggenTrueOrFalse = false;
        let lolTaggen = "";
        
        if(props.notes[index].tags.fun) {            
            returnFun = <img src={tagFun} className="funloggaInNote"></img>
            lolTaggenTrueOrFalse = true;
        }

        if(props.notes[index].tags.meta) {
            returnMeta = <img src={tagMeta} className="metaloggaInNote"></img>
            lolTaggenTrueOrFalse = true;
        }

        if(props.notes[index].tags.urgent) {
            returnUrgent = <img src={tagUrgent} className="urgentloggaInNote"></img>;
            lolTaggenTrueOrFalse = true;
        }

        if(!lolTaggenTrueOrFalse){            
            lolTaggen = <img src={lolTag} className="urgentloggaInNote"></img>;
        } 

        return (
            <div className="tagwrapper">
                {returnFun}
                {returnMeta}
                {returnUrgent}
                {lolTaggen}
            </div>
        )
    }   

    const openReplayUp = (props) => {        
        if(showReplay && props == indexX){
            return `replyParent`
        } else return `replyParent hidden`
    }

    const callOpenUpReplay = (props) => {
        setIndexX(props);
        setShowReplay(!showReplay)
    }

    const ifFirstPost = (b) =>{
         if(b === 0) {
            return opacityLevel
         }else return "100"
    } 

    const showUpdateButton = (c) => {
        if(c === activeUser.username){
            return `topMenuButtons13`
        } else return `topMenuButtons13 hidden`
    }

    const showDeleteButton = (v) => {
        if(v === activeUser.username){
            return `topMenuButtons12`
        } else return `topMenuButtons12 hidden`
    }

    const openCloseTextArea = (v) => {
        if(v === activeUser.username){
            return ""
        } else return "true"
    }


return (
    <div class="mainParentNote">

        {newNote ? openNewpost(true) : openNewpost(false)}

        {props.notes.map((p, index) => 
        
        <div key={p.index} className="individualNote" style={{borderColor: colorSarray[p.theme].main, opacity: ifFirstPost(index)}}>
                
            <button className={showDeleteButton(p.author)} onClick={e => {console.log("HEEEEEEEEEEEEJ")}}>X</button>   
            <button className={showUpdateButton(p.author)} onClick={e => {console.log("HEEEEEEEEEEEEJ")}}>E</button>   

            <div className="newNoteTopTitle" style={{color: colorSarray[p.theme].title}}><b>{p.title}</b></div>
            <textarea className="subjectInNote" style={{backgroundColor: colorSarray[p.theme].subject}} readOnly={openCloseTextArea(p.author)} >{p.message}</textarea>
            
            <div className="voteDiv">
                <p className="voteNumber" style={{color: colorSarray[p.theme].vote}}>{p.upvote}</p>
                <img src={upvoteButton} onClick={e => {props.addVote(index)}} className="voteButton"/>
            </div>

            <div className="noteInfo">
                <div className="usernameMadenote" style={{color: colorSarray[p.theme].tag}}>
                    {p.author}
                </div>
                <div className="dateInNote" style={{color: colorSarray[p.theme].date}}>
                    {p.date}
                    <img src={replayButton} onClick={e => {callOpenUpReplay(index)}} className="showReplyButton"/>
                    <b className="commentNumbers" style={{color: colorSarray[p.theme].comment}}>{p.replays} comments</b>
                </div>
            </div>

            {printaTags(props, index)}

            <div className={openReplayUp(index)} style={{top: "-220px", borderColor: colorSarray[p.theme].replyParent}}>
                <button class="replyButton" style={{borderColor: colorSarray[p.theme].replyButtonBorder, color: colorSarray[p.theme].replyButtonColor}} onClick={e => {props.addReplayToNote(index, replayText)}}>Reply</button>
                <textarea class="replyTextarea" maxLength="100" style={{backgroundColor: colorSarray[p.theme].replyTextareaBackground, borderColor: colorSarray[p.theme].replyTextareaBorder}} onChange={e => setReplayText(e.target.value)}></textarea>
                
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