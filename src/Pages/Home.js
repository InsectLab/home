import { useContext } from 'react';
import Carousel from '../components/Carousel';
import OpenPosition from '../components/OpenPosition';

import { DBContext } from '../context/DBContext';

import '../CSS/Home.css';

const Home = () => {

    const { positions, images } = useContext(DBContext);
    /* positions && console.log("positions: " + JSON.stringify(positions)) */
    return (
        <div className="homeWrapper">
            <div className="slider">
                {images && <Carousel images={images}/>}
            </div>
            <div className='wantedWrapper'>
                <h1>Open positions</h1>
                <div className='positions'>
                    {positions && positions.map((position) => {
                        return (
                            <OpenPosition position={position}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;