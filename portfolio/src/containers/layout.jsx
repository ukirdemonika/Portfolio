import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "./Main";

const Layout = (props) => {
    return (
        <>
            <Header theme={props.theme} />
            <Main theme={props.theme}>
                <Outlet />
            </Main>

        </>
    );
};

export default Layout;
