import {BibtexParser} from "bibtex-js-parser";

import Article from "../assets/Article";

import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { useContext, useEffect, useState } from "react";

import "../CSS/Publications.css"

const Publications = () => {

    const { darkMode } = useContext(ThemeContext);
    const { publications } = useContext(DBContext);
    const [temp, setTemp] = useState("");

    useEffect(() => {
        publications && setTemp(BibtexParser.parseToJSON(publications));
    }, [publications])

    return (
        <div className={`publicaionsWrraper ${darkMode ? "publicaionsWrraperDark" : ""}`}>
            <h1>Selected publications</h1>
            <div className="articlesListWrraper">
                {temp && temp.map((article) => {
                    return (
                        <div className="articleItem">
                            <span className="articleTitle">{<Article color={`${darkMode ? "white" : "black"}`}/>}{article.title}</span>
                            <span className="articleAuthor">
                                {article.author.split(" and ").map((author,i) => {
                                    return (
                                        <span className="authorName">
                                            <span>{author.split(", ")[1]}</span>
                                            &nbsp;
                                            <span>{author.split(", ")[0]}</span>
                                            {i<article.author.split(" and ").length -1 && ","}
                                        </span>
                                    );
                                })}
                            </span>
                            <span>{article.journal && (`${article.journal}  -  `)}{article.year}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publications;