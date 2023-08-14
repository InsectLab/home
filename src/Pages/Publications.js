import {BibtexParser} from "bibtex-js-parser";

import Article from "../assets/Article";

import { ThemeContext } from "../context/ThemeContext";
import { DBContext } from "../context/DBContext";
import { useContext, useEffect, useState } from "react";

import "../CSS/Publications.css"

const Publications = () => {

    const { darkMode } =useContext(ThemeContext);
    const {members} = useContext(DBContext);
    const [Publications, setPublications] = useState("");

    useEffect(() => {
        members && setPublications(BibtexParser.parseToJSON(members[2].Publications));
        /* member && console.log(member.Publications); */
        members && console.log(BibtexParser.parseToJSON(members[2].Publications));
    }, [members])

    return (
        <div className="publicaionsWrraper">
            <h1>Publications</h1>
            <div className="articlesListWrraper">
                {Publications && Publications.map((article) => {
                    return (
                        <div className="articleItem">
                            <span className="articleTitle">{<Article color={`${darkMode ? "white" : "black"}`}/>}{article.title}</span>
                            <span className="articleAuthor">{article.author}</span>
                            <span>{article.publisher && (`${article.publisher}  -  `)}{article.year}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Publications;