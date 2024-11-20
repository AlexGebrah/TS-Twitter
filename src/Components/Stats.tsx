import Avatar from "./Avatar.tsx";
import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";
import {Stat} from "../Utils/types.ts";


const Stats = () => {
    const {user, stats, setStats} = useContext(TwitterContext);

    const handleFollowersClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (e.button === 0) {
            setStats((oldInfo: Stat) => ({
                ...oldInfo,
                followers: stats.followers + 1,
            }));
        }

        if (e.button === 2) {
            setStats((oldInfo: Stat) => ({
                ...oldInfo,
                followers: stats.followers > 0 ? stats.followers - 1 : 0,
            }));
            e.preventDefault();
        }
    }

    const handleFollowingClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (e.button === 0) {
            setStats((oldInfo: Stat) => ({
                ...oldInfo,
                following: stats.following + 1
            }));
        }

        if (e.button === 2) {
            setStats((oldInfo: Stat) => ({
                ...oldInfo,
                following: stats.following > 0 ? stats.following - 1 : 0,
            }));
            e.preventDefault();
        }
    }

    return (
        <div className={'user-stats'}>
            <div>
                <Avatar size={''}/>
                {user.name}
            </div>
            <div className={'stats'}>
                <div onClick={handleFollowersClick} onContextMenu={handleFollowersClick}>
                    Followers: {stats.followers}
                </div>
                <div onClick={handleFollowingClick} onContextMenu={handleFollowingClick}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
}

export default Stats;