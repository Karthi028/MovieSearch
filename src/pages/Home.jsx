import { Outlet} from "react-router"
import WithLoader from "../wrappers/Topbar";


const Home = () => {

    return <div className="p-2">
        <WithLoader/>
        <Outlet />
    </div>
}

export default Home;