import React, { useContext, useState } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';




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
    {theme: 6, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-9-9", tags:{fun: false, meta:false, urgent:true}, upvote: 1, replays: 0, 
    replayss:[]
    },    
    {theme: 8, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-9-9", tags:{fun: false, meta:false, urgent:false}, upvote: 1, replays: 1, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"}]
    }
    ])

 

    const addNote = (theme, addDate, addAuthor, addTitle, addMessage, tagFun, tagMeta, tagUrgent) => {
        
        const changed = [...testNote];
        changed.unshift({theme: theme, author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: {fun:tagFun, meta: tagMeta, urgent: tagUrgent}, upvote:0, replays:0, replayss:[]})
        setTestNote(changed);
        

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

    const {isAuth , activeUser} = useContext(AuthContext);

   

    return (
        <>           
            <Printa 
            notes={testNote}
            addNote = {addNote}
            addReplayToNote = {addReplayToNote}
            addVote = {addUpvote}
            />            
        </>
    )
}


