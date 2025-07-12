import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Main from "./Main";

const Layout = ({ theme }) => {
    return (
        <>
            <Header theme={theme} />
            <Main>
                <Outlet />
            </Main>

        </>
    );
};

export default Layout;
