import React from 'react';
import {LineChart, SparklineChart} from "nr1";

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class HomeNerdlet extends React.Component {
  render() {
    return <>
    <p style={{color: "pink", padding:"10px", alignitem:"center", background:"Salmon", fontSize:"20px", textAlign:"center"}}>This is LineChart</p>
    <LineChart style={{width:"60%", height:"35%"}}
    accountId = {3932072}
    query = "SELECT average(host.loadAverageOneMinute) as '1 minute', average(host.loadAverageFiveMinute) AS '5 minutes', average(host.loadAverageFifteenMinute) AS '15 minutes' FROM Metric WHERE `entityGuid` = 'MzkzMjA3MnxJTkZSQXxOQXw4NDc0MDAzMDUwOTc5MDUyMTAy' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    
    <p style={{color: "skyblue", padding:"10px" , alignitem:"center", background:"Salmon", fontSize:"20px", textAlign:"center"}}>This is PieChart</p>
    <LineChart style={{width:"60%", height:"35%"}}
    accountId = {3932072}
    query = "SELECT average(host.net.transmitBytesPerSecond) AS 'Transmit bytes per second', average(host.net.receiveBytesPerSecond) AS 'Receive bytes per second' FROM Metric WHERE `entityGuid` = 'MzkzMjA3MnxJTkZSQXxOQXw4NDc0MDAzMDUwOTc5MDUyMTAy' TIMESERIES auto"
    fullWidth
    fullHeight
    />
    </>;
  }
}