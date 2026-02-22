import type { ReactNode} from "react";

import Header from "./Header";
import Footer from "./Footer";


interface MainLayoutProps {
    children: ReactNode;
}

const MainLayoutGuess = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header/>
            <main className="pt-16">{children}</main>   
            <Footer />
        </>
    );
};

export default MainLayoutGuess;


