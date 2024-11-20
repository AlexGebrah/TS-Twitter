import {createContext} from "react";
import {TwitContextValue} from "./types.ts";

export const TwitterContext = createContext<TwitContextValue>({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    },
    setUser: () => {},
    stats: {
        followers: 0,
        following: 0,
    },
    setStats: () => {},
});