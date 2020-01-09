import React from "react";
import Svg from "../svg/svg"
import "./prediction.css"

function Prediction(props) {
    
    return (
        <>
        {/* {console.log("Prediction props check",props.data)} */}
        
        <div className="predictions">
            <Svg
            value='Total Votes'
            data={props.data.Total}
            total={props.data.Total}
            />
            <Svg
            value='Helpful Votes'
            data={props.data.Helpful}
            total={props.data.Total}
            />
            <Svg
            value='Funny Votes'
            data={props.data.Funny}
            total={props.data.Total}
            />
            <Svg
            value='Useful Votes'
            data={props.data.Useful}
            total={props.data.Total}
            />
        </div>
        </>
    );
}

export default Prediction;