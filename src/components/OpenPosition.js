const OpenPosition = (position) => {

    console.log("pos: " + JSON.stringify(position));
    return (
        <div className="positionWrapper">
            <div className="positionDetails">
                <div className="positionTitle">
                    {position.Title}
                </div>
            </div>
        </div>
    )
}

export default OpenPosition;