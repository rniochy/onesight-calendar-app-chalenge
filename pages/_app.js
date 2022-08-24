import HeadComponent from "../components/head/head";
import "../styles/global.scss";
import { createContext, useState } from "react";
export const AppContext = createContext(null)

function MyApp({ Component, pageProps }) {
    const [appoimentFile, setAppoimentFile] = useState(false);
    const [eventDate, setEventDate] = useState({year:"", month:"", day:""});
    const [approve, setApprove] = useState();
    const [cancel, setCancel] = useState();
    const [appointment, setAppointment] = useState([]);


    return(
        <>
            <AppContext.Provider value={
                {
                appoimentFile, setAppoimentFile,
                appointment, setAppointment,
                eventDate, setEventDate,
                approve, setApprove,
                cancel, setCancel,
            }}>
                <HeadComponent title="Onsight Calendar" />
                <Component {...pageProps} />
            </AppContext.Provider>
        </>
    );
 }
export default MyApp;