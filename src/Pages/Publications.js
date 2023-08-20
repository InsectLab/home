import {BibtexParser} from "bibtex-js-parser";

import Article from "../assets/Article";

import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { useContext } from "react";

import "../CSS/Publications.css"

const Publications = () => {

    const { darkMode } = useContext(ThemeContext);
    const {members, publications} = useContext(DBContext);

    /* useEffect(() => {
        members && setPublications(BibtexParser.parseToJSON(members[2].Publications));
        member && console.log(member.Publications);
        members && console.log(BibtexParser.parseToJSON(members[2].Publications));
    }, [members]) */

    return (
        <div className={`publicaionsWrraper ${darkMode ? "publicaionsWrraperDark" : ""}`}>
            <h1>Publications</h1>
            <div className="articlesListWrraper">
                {publications && publications.map((article) => {

                    /* console.log("results:" + JSON.stringify(BibtexParser.parseToJSON(results.data[0].Citation), null, 2)) */
                    console.log("777: " + JSON.stringify(BibtexParser.parseToJSON(article.Citation)[0]))
                    var temp = BibtexParser.parseToJSON(article.Citation)
                    console.log("temp:" + JSON.stringify(temp[0].author));
                    /* temp.link = article.Link*/

                    return (
                        <div className="articleItem">
                            <span className="articleTitle">{<Article color={`${darkMode ? "white" : "black"}`}/>}{temp[0].title}</span>
                            <span className="articleAuthor">
                                {temp[0].author.split(" and ").map((author,i) => {
                                    return (
                                        <span className="authorName">
                                            <span>{author.split(", ")[1]}</span>
                                            &nbsp;
                                            <span>{author.split(", ")[0]}</span>
                                            {i<temp[0].author.split(" and ").length -1 && ","}
                                        </span>
                                    );
                                })}
                            </span>
                            {/* {article && <span className="articleAuthor">
                                {article.author = article.author.split(" and").map((author) => {
                                    console.log("author: " +author)
                                    return (console.log("1"+author.split(",")));
                                })}
                            </span>} */}
                            <span>{temp[0].publisher && (`${temp[0].publisher}  -  `)}{temp[0].year}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publications;