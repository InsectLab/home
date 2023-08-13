import { toBibtex } from "bibtex-parse-js";
import {BibtexParser} from "bibtex-js-parser";

import { DBContext } from "../context/DBContext";
import { useContext } from "react";

const Publications = () => {

    const {members} = useContext(DBContext);

    return (
        <div>
            {members && members.map((member) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Publications;