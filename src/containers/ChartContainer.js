import React, {useState, useEffect} from "react";
import ChartSelect from "../components/ChartSelect";

const ChartContainer = ()=>{
    const [chart, setChart] = useState([])

    useEffect(()=> {
        getChart();
    },[]);

    const getChart = async function(){
        const res = await fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
        const chart = await res.json();
        setChart(chart.feed.entry)
    }
    // const getChart = function(){
    //     fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    //     .then((result) => result.json())
    //     .then((chart) => setChart(chart.feed.entry));
    // }

    return( <>
        <div>UK Top 20:</div>
        <ChartSelect chart={chart}/>
        </>
    )
}

export default ChartContainer;