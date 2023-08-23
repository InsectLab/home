import { useContext } from 'react';
import Carousel from '../components/Carousel';
import OpenPosition from '../components/OpenPosition';

import { DBContext } from '../context/DBContext';

import '../CSS/Home.css';

const Home = () => {

    const { positions } = useContext(DBContext);
    /* positions && console.log("positions: " + JSON.stringify(positions)) */
    return (
        <div className="homeWrapper">
            <div className="slider">
                <Carousel />
            </div>
            <div className='wantedWrapper'>
                <h1>Open positions</h1>
                {positions && positions.map((position) => {
                positions && console.log("position: " + JSON.stringify(position))
                    return (
                        <OpenPosition position/>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;