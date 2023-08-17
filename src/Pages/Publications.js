import {BibtexParser} from "bibtex-js-parser";

import Article from "../assets/Article";

import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { useContext, useEffect, useState } from "react";

import "../CSS/Publications.css"

const Publications = () => {

    const { darkMode } =useContext(ThemeContext);
    const {members, publications} = useContext(DBContext);
    const [Publications, setPublications] = useState("");

    useEffect(() => {
        members && setPublications(BibtexParser.parseToJSON(members[2].Publications));
        /* member && console.log(member.Publications); */
        members && console.log(BibtexParser.parseToJSON(members[2].Publications));
    }, [members])

    return (
        <div className={`publicaionsWrraper ${darkMode ? "publicaionsWrraperDark" : ""}`}>
            <h1>Publications</h1>
            <div className="articlesListWrraper">
                {Publications && Publications.map((article) => {
                    return (
                        <div className="articleItem">
                            <span className="articleTitle">{<Article color={`${darkMode ? "white" : "black"}`}/>}{article.title}</span>
                            <span className="articleAuthor">
                                {article.author.split(" and ").map((author) => {
                                    return (
                                        <span className="authorName">
                                            <span>{author.split(", ")[1]}</span>
                                            &nbsp;
                                            <span>{author.split(", ")[0]}</span>
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
                            <span>{article.publisher && (`${article.publisher}  -  `)}{article.year}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publications;