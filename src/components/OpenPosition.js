import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const OpenPosition = ({position}) => {

    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`positionWrapper ${darkMode ? "positionWrapperDark" : ""}`}>
                <div className="positionInfo">
                    <div className="positionTitle">{position.Title}</div>
                </div>
                <div className="positionDetails">
                    <ul>
                        {position.Type && <li><b>Type:</b> {position.Type}</li>}
                        {position.Start_Date && <li><b>Start date:</b> {position.Start_Date}</li>}
                        {position.Duration && <li><b>Duration:</b> {position.Duration}</li>}
                    </ul>
                </div>
                <div className="seperator"></div>
                <div className="positionDesciption">
                    <span>{position.Description}</span>
                </div>
        </div>
    )
}

export default OpenPosition;