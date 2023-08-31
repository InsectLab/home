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
                <Carousel images={images ? images : ["data:image/jpeg;base64,/9j/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAacBpwMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APn+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAClxQMZ56V22jaQNa8L+ZuXdExjKgcg4yDUyaSGk2cRRUkqNFI8bdVYqfwqOqTuhBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFF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"]}/>
            </div>
            <div className='wantedWrapper'>
                <h1>Open positions</h1>
                <div className='positionsInfo'>
                    <span>We are looking for talented BSc, MSc and PhD students from various scientific backgrounds to join our group.</span>
                    <span>Methods used in our lab include electrophysiology, imaging, theoretical modelling and simulations, robotics and data analysis.</span>
                    <span>To apply, please contact Amir Ayali at ayali@tauex.tau.ac.il.</span>
                </div>
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