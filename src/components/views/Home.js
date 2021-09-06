import React, { useContext, useState } from "react";
import { AuthContext  } from "../../context/AuthContext";
import Printa from '../general/Printa';




export const Home = () => {

    const [testNote, setTestNote] = useState([
        {author: "testUser", title: "title", message: "asfkjasdflökj asdflkjsdaf asdlfkjsad asdklfj asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2021-09-09:20:54", tags: "fun", upvote: 5, replays: 2, 
    replayss:[{replayUser: "replayUser", replayText: "replaytext"},
     {replayUser: "replayUser2", replayText: "replaytext2"}]
    },
    {author: "testUser2", title: "title2", message: "asfkjasdflökj asdflkjsdaf asdlfkjsad asdklfj asdfölkjs dsflöksjdf  sadfklösdjf asdfaf",
    date: "2022-09-09:20:54", tags: "meta", upvote: 1, replays: 3, 
    replayss:[{replayUser: "replayUser10", replayText: "replaytext2"},
     {replayUser: "replayUser22", replayText: "replaytext22"},
     {replayUser: "replayUser2432", replayText: "replaytext2432"}]
    }
    ])

    const addNote = (addAuthor, addTitle, addMessage, addDate, addTags) => {
        const changed = [...testNote];
        changed.push({author: addAuthor, title: addTitle, message: addMessage, date: addDate, tags: addTags})
        setTestNote(changed);
    }




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
            <h1>Home</h1>
            <h3>Routing Turorial</h3>
            {isAuth ? isAuthyes() : unAuth()}
            <Printa 
            addNote = {addNote}
            />
        </>
    )
}
