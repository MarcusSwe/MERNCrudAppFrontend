import React, { useContext, useState, useEffect } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';
import NoteService from "../../services/NoteService";



export const Home = () => {

    const [testNote, setTestNote] = useState([])
    const [omegaHook, callOmegaHook] = useState(true);

    useEffect (() => {
        async function getNotes(){        
            const data = await NoteService.getNotes();
            const omegaY = [...data]; 
            omegaY.reverse();
            setTestNote(omegaY);
            console.log(omegaY);
        }
        getNotes();
    },[omegaHook]);
 

    const yesGo = () => {
        callOmegaHook(!omegaHook);
    }

    const addNote = async (Xtheme, addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent) => {

        console.log(Xtheme, addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent);

        const newNoteX = {theme: Xtheme, date: addDate, title: addTitle, author: addAuthor, message: addMessage, tags:{fun:tagFun, meta:tagMeta, urgent: tagUrgent}, upvote:0, replayss:[], replays:0};

        const data = await NoteService.newNote(newNoteX);
        const { message } = data;

        if(!message.msgError) {        
            yesGo();    
        } else alert ("Something went wrong! Try again!");


        /*
        const changed = [...testNote];
        changed.unshift({theme: Xtheme, author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: {fun:tagFun, meta: tagMeta, urgent: tagUrgent}, upvote:0, replays:0, replayss:[]})
        setTestNote(changed);*/
        

    }



    const addReplayToNote = (i, newReplayX) => {
        if(isAuth){
        const changed = [...testNote];
        let x = changed[i].replays;
        //console.log(changed);
        console.log(activeUser.username);
        changed[i].replayss.push({replayUser: activeUser.username, replayText: newReplayX});
        changed[i].replays = x+1;
        setTestNote(changed);}
    }

    const addUpvote = (i) => {
        const changed = [...testNote];
        let x = changed[i].upvote;
        changed[i].upvote = x+1;
        setTestNote(changed);
    }

    const deletePostX = async (d) => {

        const testD = "613a692d21067f230ea5cde3";

        const data = await NoteService.deleteNote(testD);

        const changed = [...testNote];
        changed.splice(d,1);
        setTestNote(changed);
    }

    const updatePostX = (i, m) => {
        const changed = [...testNote];
        changed[i].message = m;
        console.log(changed[i].message ,i);
        setTestNote(changed);
    }

    const {isAuth , activeUser} = useContext(AuthContext);

   

    return (
        <>           
            <Printa 
            notes={testNote}
            addNote = {addNote}
            addReplayToNote = {addReplayToNote}
            addVote = {addUpvote}
            deletePost = {deletePostX}
            updatePost = {updatePostX}
            />            
        </>
    )
}


