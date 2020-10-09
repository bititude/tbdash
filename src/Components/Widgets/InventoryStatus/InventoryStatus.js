import React, { useEffect } from 'react'
import Donut from '../../Charts/Donut/Donut'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import * as d3 from 'd3'
import './InventoryStatus.css'

const data = [    
    {status: "good", percent: 70, color: "#01D09F"},
    {status: "average", percent: 20, color: "#FFDB1C"},
    {status: "poor", percent: 10, color: "#FF8D8D"}
]
const Legend = ({data}) => {
    const renderLegend = () => {
        const svg = d3.select("#donut-legend")

        // Handmade legend
        svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#69b3a2")
        svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#404080")
        svg.append("text").attr("x", 220).attr("y", 130).text("variable A").style("font-size", "15px").attr("alignment-baseline","middle")
        svg.append("text").attr("x", 220).attr("y", 160).text("variable B").style("font-size", "15px").attr("alignment-baseline","middle")

    }
    useEffect(() => {
        renderLegend()
    })
    return (
        <div id="donut-legend">
            
        </div>
    )
}
const InventoryStatus = () => {
    return (
        <div style={{flex: 2, width:425}}>            
            <WidgetHeader label="Inventory Status" description="Description to be defined" />
            <Donut data={data} label="inventory" />
            {/* <Legend data={data} /> */}
        </div>
    )
}

export default InventoryStatus