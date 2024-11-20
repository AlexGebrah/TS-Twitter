import Context from "./Context.tsx";
import Sidebar from "./Sidebar.tsx";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Context/>
        </div>
    );
};

export default Body;