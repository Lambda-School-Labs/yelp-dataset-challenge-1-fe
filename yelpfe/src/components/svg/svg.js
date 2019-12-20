import React from "react";
import "./svg.css"

function Svg(props) {
    let count = props.data/props.total*100

    if(props.value === 'Total Votes'){
        return (
            <>
            {console.log("SVG props check",props.data)}
            <div>
                <svg width="100%" height="100%" class="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                    <circle class="circle-chart-background" stroke="#efefef" stroke-width="3" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                    <circle class="circle-chart-circle" stroke="hsl(0, 72%, 48%)" stroke-width="3" stroke-dasharray={`100,100`} stroke-linecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                    <g class="gpa-text">
                        <text x="50%" y="50%" class="chart-label">{props.value}</text>
                        <text x="50%" y="50%" class="chart-number">{props.data}</text>
                    </g>
                </svg>
            </div>
            </>
        );
    } else {
       return (
        <>
        {/* {let count = props.data/props.total*100)} */}
        <div>
            <svg width="100%" height="100%" class="circle-chart" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle-chart-background" stroke="#efefef" stroke-width="3" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <circle class="circle-chart-circle" stroke="hsl(0, 72%, 48%)" stroke-width="3" stroke-dasharray={`${count},100`} stroke-linecap="round" fill="none" cx="21" cy="21" r="15.91549431"></circle>
                <g class="gpa-text">
                    <text x="50%" y="50%" class="chart-label">{props.value}</text>
                    <text x="50%" y="50%" class="chart-number">{props.data}</text>
                </g>
            </svg>
        </div>
        </>
    ); 
    }
    
}

export default Svg