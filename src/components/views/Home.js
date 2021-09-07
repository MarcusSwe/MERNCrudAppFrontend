import React, { useContext, useState } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';




export const Home = () => {

    const [testNote, setTestNote] = useState([
        {noteID: 1, theme: 0, author: "testUser", title: "title", message: "asfkjasdflökj asdflkjsdaf asdlfkjsad asdklfj asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2021-09-09", tags:{fun: true, meta:true, urgent:true}, upvote: 5, replays: 2, 
    replayss:[{replayUser: "replayUser", replayText: "replaytext"},
     {replayUser: "replayUser2", replayText: "replaytext2"}]
    },
    {noteID: 2, theme: 1, author: "testUser2", title: "title2", message: "23456456 34564356 asdlfkjsad asd4356j asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2022-09-09", tags:{fun: true, meta:true, urgent:false}, upvote: 1, replays: 3, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"},
     {replayUser: "replayUser22", replayText: "replaytext22"},
     {replayUser: "replayUser2432", replayText: "replaytext2432"}]
    },
    {noteID: 3, theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-09-09", tags:{fun: false, meta:false, urgent:true}, upvote: 1, replays: 1, 
    replayss:[]
    },    
    {noteID: 4, theme: 1, author: "testUser3", title: "title3", message: "oemga ösdjf asdfaf",
    date: "2022-09-09", tags:{fun: false, meta:false, urgent:false}, upvote: 1, replays: 1, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"}]
    }
    ])

    const addNote = (addAuthor, addTitle, addMessage, addDate, addTags) => {
        const changed = [...testNote];
        changed.push({noteID: 0, theme: 0, author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: addTags, upvote:0, replays:0, replayss:[]})
        setTestNote(changed);
    }

    const addReplayToNote = (i, newReplayX) => {
        const changed = [...testNote];
        console.log(changed);
        changed[i].replayss.push({replayuser: "cpåke", replayText: newReplayX});
        setTestNote(changed);
    }


    // const updated = {...user, department: {...user.department, 'number': 7 } };

    const {isAuth} = useContext(AuthContext);

    const isAuthyes = () => {
        return (
            <>
            INLOGGAD
            </>
        )
    }

    const unAuth = () => {
        return (
        <>
        hästen
        </>
        )
    }

    return (
        <>          
            {isAuth ? isAuthyes() : unAuth()}
            <Printa 
            notes={testNote}
            addNote = {addNote}
            addReplayToNote = {addReplayToNote}
            />
        </>
    )
}
