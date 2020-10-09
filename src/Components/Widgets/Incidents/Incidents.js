import React from 'react'
import Donut2 from '../../Charts/Donut2/Donut2'
import DonutChart from 'react-donut-chart'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import './Incidents.css'

const data = [
    {label: "good", value: 25, color: "#72C3FF"},
    {label: "average", value: 22, color: "#FFE350"},
    {label: "poor", value: 16, color: "#FFCC7E"},
    {label: "critical", value: 37, color: "#F3AB9B" }
]

const Incidents = () => {
    return (
        <div style={{flex: 2, width: 430}}>            
            <WidgetHeader label="Incidents" description="Description to be defined" />
            {/* <Donut2 data={data}/> */}
            <DonutChart data={data} height={350} width={440} colors={["#72C3FF", "#FFE350", "#FFCC7E", "#F3AB9B"]} strokeColor="#FFFFFF"/>
        </div>
    )
}

export default Incidents