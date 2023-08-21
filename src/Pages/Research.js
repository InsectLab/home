import { Route, Routes } from 'react-router-dom';

import ResearchList from '../components/ResearchList';
import ResearchPage from '../components/ResearchPage';

import '../CSS/Reserch.css'

const Research = () => {
    return(
        <Routes>
            <Route path='/' Component={ResearchList} />
            <Route path='/:id' Component={ResearchPage} />
        </Routes>
    )
}
    
    export default Research;