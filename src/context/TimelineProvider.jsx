import { useState } from "react"
import { TimelineContext } from "./context";

export const TimelineContextProvider = ({children}) => {
    const [timelineData, setTimelineData] = useState([]);

    return <TimelineContext.Provider value={{timelineData, setTimelineData}}>
        {children}
    </TimelineContext.Provider>
}