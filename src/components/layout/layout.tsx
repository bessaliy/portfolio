import {Outlet} from "react-router-dom";

import Header from "./header.tsx";
import Footer from "./footer.tsx";

function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;