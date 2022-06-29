import React from "react";

function ChartSelect({chart}){
    const chartSongs = chart.map((song,index) => {
        return <li key={index}>
        <a> 
        <img src={song['im:image'][0].label}></img>
        {index + 1}. {song["im:name"].label} - {song["im:artist"].label}
        </a>
        </li>
    })

    return(
        
        <>{chartSongs}</>
      
    )
}

export default ChartSelect