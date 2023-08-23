import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BibtexParser } from "bibtex-js-parser";
import { ThemeContext } from '../context/ThemeContext';
import { DBContext } from '../context/DBContext';

import Github from "../assets/Github";
import Scholar from "../assets/Scholar";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import ORCID from "../assets/ORCID";
import Personal from "../assets/Personal";
import PublicationList from "./PublicationList";
import Back from '../assets/Back';

import '../CSS/MemberProfile.css'

const MemberProfile = () => {

    const { darkMode } = useContext(ThemeContext);

    const [svgColor, setSvgColor] = useState("");
    useEffect(() => {
        if (darkMode) {
            setSvgColor("rgb(187 222 251)");
        } else {
            setSvgColor("#1B4F72");
        }
    }, [darkMode])

    const {members} = useContext(DBContext);
    const [member, setMember] = useState();

    const { id } = useParams();

    useEffect(() => {
        members && setMember(members[id]);
    },[members]);

    return(
        <div className="memberWrapper">
            <Link className="back" to={"/members"}><Back color={svgColor}/><span>See all members</span></Link>
            {member &&
            <>
                <div className="profile">
                    <div className="profileCard">
                        <img src={`${member.Photo ? member.Photo : "https://static.wixstatic.com/media/56112d_1efe4d20db6249f1a5876256376aabbc~mv2.gif"}`} alt="" />
                        <div className="name">{`${member.Title === "Professor" ? "Prof." : member.Title === "Doctor" ? "Dr." : ""} ${member.Name}`}</div>
                        <br/>
                        <div className="role">{member.Role}</div>
                        <div className="shortSummary">{member.Short_Summary}</div>
                        <br/>
                        <div className="socials">
                            {member.Email.length !== 0 && <Link to={member.Email} target="_blank"><Email color={svgColor}/></Link>}
                            {member.Scholar.length !== 0 && <Link to={member.Scholar} target="_blank"><Scholar color={svgColor}/></Link>}
                            {member.Linkedin.length !== 0 && <Link to={member.Linkedin} target="_blank"><Linkedin color={svgColor}/></Link>}
                            {member.ORCID.length !== 0 && <Link to={member.ORCID} target="_blank"><ORCID color={svgColor}/></Link>}
                            {member.GitHub.length !== 0 && <Link to={member.GitHub} target="_blank"><Github color={svgColor}/></Link>}
                            {member.Personal_Page.length !== 0 && <Link to={member.Personal_Page} target="_blank"><Personal color={svgColor}/></Link>}
                        </div>
                    </div>
                    
                    <div className="profileContent">
                        <div className="info">{member.Long_Summary}</div>
                        
                        {member.Email && <div className="contact">
                            <h1>Contact details</h1>
                            <ul>
                                {member.Email && <li><span>Email: </span>{member.Email}</li>}
                            </ul>
                        </div>}

                        <div className="CV">
                            {member.Interests && <div className="interests">
                                <h1>Interests</h1>
                                <ul>
                                    {(member.Interests.split(";")).map((x) => {
                                        return (
                                            <li><span class="material-symbols-outlined interestsIcon">cognition</span>{x}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                            {member.Education && <div className="education">
                                <h1>Education</h1>
                                <ul>
                                    {member.Education.match(/\[[^\]]*\]/g).map((education) => {
                                        return (
                                            <li>
                                                <span className="material-symbols-outlined educationIcon">school</span>{education.slice(1, -1)}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>

                {member.Publications && <div className="publish">
                    <h1>Latest</h1>
                    {/* {member.Publications && console.log("member.Publications " + member.Publications)}  */}     
                    {member.Publications && <PublicationList Publications={member.Publications}/>}      
                </div>}
            </>
            }
        </div>
    )
}

export default MemberProfile;