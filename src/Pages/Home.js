import Carousel from '../components/Carousel';

import '../CSS/Home.css';

const Home = () => {
 return (
    <div className="homeWrapper">
        <div className="slider">
            <Carousel />
        </div>
    </div>
 )
}

export default Home;