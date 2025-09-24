import Header from "./header/Header.tsx";
import WebRouter from "../../router/WebRouter.tsx";
import Footer from "./Footer/Footer.tsx";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main className={'min-h-screen pt-10'}>
                <WebRouter/>
            </main>
            <Footer/>
        </>
    );
};

export default MainLayout;