
import './App.css'
import {useState} from "react";
import { TwitterContext } from './Utils/context';
import Navigation from "./Components/Navigation.tsx";
import Body from "./Components/Body.tsx";

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    })
    const [stats, setStats] = useState({
        followers: 1,
        following: 1
    })

    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user,
                setUser,
                stats,
                setStats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
