import React, { useContext, useState } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';
import tagFun from '../../fun10.png';
import tagMeta from '../../meta10.png';
import tagUrgent from '../../urgent10.png';



export const Home = () => {

    const [testNote, setTestNote] = useState([
        {theme: 0, author: "testUser", title: "title", message: "asfkjasdflökj asdflkjsdaf asdlfkjsad asdklfj asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2021-09-09", tags:{fun: true, meta:true, urgent:true}, upvote: 5, replays: 2, 
    replayss:[{replayUser: "replayUser", replayText: "replaytext"},
     {replayUser: "replayUser2", replayText: "replaytext2"}]
    },
    {theme: 1, author: "testUser2", title: "title2", message: "23456456 34564356 asdlfkjsad asd4356j asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2022-09-09", tags:{fun: true, meta:true, urgent:false}, upvote: 1, replays: 3, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"},
     {replayUser: "replayUser22", replayText: "replaytext22"},
     {replayUser: "replayUser2432", replayText: "replaytext2432"}]
    },
    {theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-09-09", tags:{fun: false, meta:false, urgent:true}, upvote: 1, replays: 0, 
    replayss:[]
    },    
    {theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-09-09", tags:{fun: false, meta:false, urgent:false}, upvote: 1, replays: 1, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"}]
    }
    ])

    const [showNewPost, setShowNewPost] = useState(false);

    const openNewpost = () => {        
        if(showNewPost){
            return `individualNote2`
        } else return `individualNote2 hidden`
    }

    const callOpenUpNewPost = () => {        
        setShowNewPost(!showNewPost)
    }


    const addNote = (addTheme, addAuthor, addTitle, addMessage, addDate, tagFun, tagMeta, tagUrgent) => {
        const changed = [...testNote];
        changed.push({theme: addTheme, author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: {fun:tagFun, meta: tagMeta, urgent: tagUrgent}, upvote:0, replays:0, replayss:[]})
        setTestNote(changed);
    }

    const addReplayToNote = (i, newReplayX) => {
        const changed = [...testNote];
        let x = changed[i].replays;
        console.log(changed);
        changed[i].replayss.push({replayuser: "cpåke", replayText: newReplayX});
        changed[i].replays = x+1;
        setTestNote(changed);
    }

    const addUpvote = (i) => {
        const changed = [...testNote];
        let x = changed[i].upvote;
        changed[i].upvote = x+1;
        setTestNote(changed);
    }

    const {isAuth} = useContext(AuthContext);

    const isAuthyes = () => {
        return (
            <div style={{marginBottom:"45px",}}>
            <button className="topMenuButtonsX" onClick={e => {callOpenUpNewPost()}}>Add new note</button>

            <div className={openNewpost()}>
                <div className="newNoteTopTitle"><b>New Note</b></div>
      
                <div>
                    <form>
                    <label for="constr-title" className="titleFont"><b>New Note Title</b></label>
                    <input id="constr-title" type="text" name="constr-title" value="" className="inputTitle" maxlength="12" size="24" />
                    <br/>

                    <div className="checkboxWrapper">
                        <label className="xCheckbox">
                        <input type="checkbox" name="tag1" value="F"/>
                        <span className="checkmark"></span>
                        <img src={tagFun} className="funlogga"/>
                        </label>

                        <label className="xCheckbox">
                        <input type="checkbox" id="constr-tag2" name="tag2" value="M" />
                        <span className="checkmark"></span>
                        <img src={tagMeta} className="metalogga"/>
                        </label>

                        <label className="xCheckbox">
                        <input type="checkbox" id="constr-tag3" name="tag3" value="U" />
                        <span className="checkmark"></span>
                        <img src={tagUrgent} className="urgentlogga"/>
                        </label>
                    </div>

                <label for="constr-subject" className="newNoteSubjectTitle"><b>New Note Subject</b></label>
                <textarea id="constr-subject" rows="12" cols="24" className="subjectTextArea" maxlength="275"></textarea><br/>

                <input type="button" id="constr-submit" name="submit" value="Submit" className="submitNoteButton"/>
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
