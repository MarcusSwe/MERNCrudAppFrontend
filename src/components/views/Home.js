import React, { useContext, useState } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';
import tagFun from '../../fun10.png';
import tagMeta from '../../meta10.png';
import tagUrgent from '../../urgent10.png';



export const Home = () => {

    const [testNote, setTestNote] = useState([
        {theme: 0, author: "testUser", title: "title", message: "asfkjasdflökj asdflkjsdaf asdlfkjsad asdklfj asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2021-9-9", tags:{fun: true, meta:true, urgent:true}, upvote: 5, replays: 2, 
    replayss:[{replayUser: "replayUser", replayText: "replaytext"},
     {replayUser: "replayUser2", replayText: "replaytext2"}]
    },
    {theme: 1, author: "testUser2", title: "title2", message: "23456456 34564356 asdlfkjsad asd4356j asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2022-9-9", tags:{fun: true, meta:true, urgent:false}, upvote: 1, replays: 3, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"},
     {replayUser: "replayUser22", replayText: "replaytext22"},
     {replayUser: "replayUser2432", replayText: "replaytext2432"}]
    },
    {theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-9-9", tags:{fun: false, meta:false, urgent:true}, upvote: 1, replays: 0, 
    replayss:[]
    },    
    {theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-9-9", tags:{fun: false, meta:false, urgent:false}, upvote: 1, replays: 1, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"}]
    }
    ])

    const [showNewPost, setShowNewPost] = useState(false);
    const [replayText, setReplayText] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [funTagX, setFunTagX] = useState(false);
    const [metaTagX, setMetaTagX] = useState(false);
    const [urgentTagX, setUrgentTagX] = useState(false);

    const openNewpost = () => {        
        if(showNewPost){
            return `individualNote2`
        } else return `individualNote2 hidden`
    }

    const callOpenUpNewPost = () => {        
        setShowNewPost(!showNewPost)
    }


    const addNote = (addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent) => {
        const changed = [...testNote];
        changed.push({theme: 1, author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: {fun:tagFun, meta: tagMeta, urgent: tagUrgent}, upvote:0, replays:0, replayss:[]})
        setTestNote(changed);
    }

    const addNoteCheck = () => {
        
        let omegaX = false;

        if(newTitle === ""){            
            omegaX = true;
        } 
        if(replayText === ""){
            omegaX = true;
        }
        if(omegaX){
            alert("Forget title or input text!");
        } else {
            const date = new Date();
            console.log(date.getFullYear()+"-"+(date.getUTCMonth()+1)+"-"+date.getUTCDate());
            addNote(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),activeUser.username, newTitle, replayText, funTagX, metaTagX, urgentTagX);
            callOpenUpNewPost();
        }

    }

    const addReplayToNote = (i, newReplayX) => {
        const changed = [...testNote];
        let x = changed[i].replays;
        //console.log(changed);
        console.log(activeUser.username);
        changed[i].replayss.push({replayUser: activeUser.username, replayText: newReplayX});
        changed[i].replays = x+1;
        setTestNote(changed);
    }

    const addUpvote = (i) => {
        const changed = [...testNote];
        let x = changed[i].upvote;
        changed[i].upvote = x+1;
        setTestNote(changed);
    }

    const {isAuth , activeUser} = useContext(AuthContext);

    const isAuthyes = () => {
        return (
            <div style={{marginBottom:"45px",}}>
            <button className="topMenuButtonsX" onClick={e => {callOpenUpNewPost()}}>Add new note</button>

            <div className={openNewpost()}>
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
                <textarea id="constr-subject" rows="12" cols="24" className="subjectTextArea" maxlength="275" onChange={e => setReplayText(e.target.value)}></textarea><br/>

                <input type="button" id="constr-submit" name="submit" value="Submit" className="submitNoteButton" onClick={e => {addNoteCheck()}}/>
                <input type="button" id="constr-close" name="close" value="close" onClick={e => {callOpenUpNewPost()}}/>
                </form>
            </div>

            </div>

            </div>
        )
    }

    const unAuth = () => {
        return (
        <div style={{marginBottom:"45px",}}>
            <button className="topMenuButtonsX">Please login to post</button>
        </div>
        )
    }

    return (
        <>          
            {isAuth ? isAuthyes() : unAuth()}
            <Printa 
            notes={testNote}
            addNote = {addNote}
            addReplayToNote = {addReplayToNote}
            addVote = {addUpvote}
            />
        </>
    )
}
