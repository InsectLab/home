import ResearchItem from '../components/ResearchItem';
import '../CSS/Reserch.css'
import { useContext } from 'react';
import { DBContext } from '../context/DBContext';

const Research = () => {

    const { researches } = useContext(DBContext);
    console.log("researches: " + researches)

    return(
        <div className="reserchWrapper">
            <div className='listWrraper'>
                {researches && researches.map((research) => {
                    return (
                        <ResearchItem research={research}/>
                    )
                })}
            </div>
        </div>
    )
}
    
export default Research;