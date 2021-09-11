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
            console.log(data);
            const omegaY = [...data]; 
            omegaY.reverse();
            setTestNote(omegaY);            
        }
        getNotes();
    },[omegaHook]);
 

    const yesGo = () => {
        callOmegaHook(!omegaHook);
    }

    const addNote = async (Xtheme, addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent) => {

        console.log(Xtheme, addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent);

        const newNoteX = {theme: Xtheme, date: addDate, title: addTitle, author: addAuthor, message: addMessage, tags:{fun:tagFun, meta:tagMeta, urgent: tagUrgent}, upvote:0, replayss:[], replays:0, voters:[]};



        const data = await NoteService.newNote(newNoteX);
        const { message } = data;

        if(!message.msgError) {        
            yesGo();    
        } else alert ("Something went wrong! Try again!");
        
       
        

    }



    const addReplayToNote = async (i, newReplayX) => {
        if(isAuth){
            console.log("CP");
            const getID = testNote[i]._id;
            const getreply = [...testNote[i].replayss]
            const getreplynumbers = testNote[i].replays+1;
            
            getreply.push({sender: activeUser.username, content: newReplayX});
            
            console.log(getreply);

            const data = await NoteService.updateNoteNewReply(getID, getreply, getreplynumbers);


       /* const changed = [...testNote];
        let x = changed[i].replays;
        //console.log(changed);
        console.log(activeUser.username);
        changed[i].replayss.push({replayUser: activeUser.username, replayText: newReplayX});
        changed[i].replays = x+1;
        setTestNote(changed);*/}

        yesGo();
    }

    const addUpvote = async (i) => {

        const getID = testNote[i]._id;   
        const siffra = testNote[i].upvote+1;   

      
       

        const addVoster = [...testNote[i].voters];
        console.log(addVoster);

       // addVoster.reverse();
        

        
        if(addVoster.includes(activeUser.username) || !isAuth){
            alert("You already voted or not logged in!");
        } else {
            console.log(isAuth);
            addVoster.push(activeUser.username);         
            console.log(addVoster);
            console.log(siffra);
            console.log(getID);
            const data2 = await NoteService.updateNoteNewVoteName(getID, addVoster);
            const data = await NoteService.updateNoteUpvote(getID, siffra);
            yesGo();
        }

        

        /*const changed = [...testNote];
        let x = changed[i].upvote;
        changed[i].upvote = x+1;
        setTestNote(changed);*/
    }

    const deletePostX = async (d) => {

        const getID = testNote[d]._id;

        const data = await NoteService.deleteNote(getID);

      /*  const changed = [...testNote];
        changed.splice(d,1);
        setTestNote(changed);*/
        yesGo();
    }

    const updatePostX = async (i, m) => {

        const getID = testNote[i]._id;     

        
        const data = await NoteService.updateNote(getID, m);      
        /*
        const changed = [...testNote];
        changed[i].message = m;
        console.log(changed[i].message ,i);
        setTestNote(changed);*/
        yesGo();
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


