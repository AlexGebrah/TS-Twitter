import {useContext} from "react";
import {TwitterContext} from "../Utils/context.js";

interface Props {
    size: string
}

const Avatar = ({size}: Props) => {
    const {user, setUser} = useContext(TwitterContext);

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (e.button === 0) {
            const newAvatarUrl: string = prompt("Введите новый URL для аватара:", user.avatar)!;
            if (newAvatarUrl) {
                setUser((oldInfo) => ({
                    ...oldInfo,
                    avatar: newAvatarUrl,
                }));
            }
            e.preventDefault();
        }
        if (e.button === 2) {
            const newName: string= prompt("Введите новое имя:", user.name)!;
            if (newName) {
                setUser((oldInfo) => ({
                    ...oldInfo,
                    name: newName,
                }));
            }
            e.preventDefault();
        }
    };

        return (
        <img onClick={handleClick}  onContextMenu={handleClick} className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}/>
    );
};

export default Avatar;