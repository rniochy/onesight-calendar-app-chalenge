import HeadComponent from "../components/head";
import "../styles/global.scss";
import { createContext, useState } from "react";

export const AppContext = createContext(null)

function MyApp({ Component, pageProps }) {
    const [appoimentFile, setAppoimentFile] = useState(false);
    const [eventDate, setEventDate] = useState("");
    return(
        <>
            <AppContext.Provider value={{appoimentFile, setAppoimentFile, eventDate, setEventDate}}>
                <HeadComponent title="Onsight Calendar" />
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
 }
export default MyApp;