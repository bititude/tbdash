import React from 'react'
import Donut2 from '../../Charts/Donut2/Donut2'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'

const data = [
    {status: "good", percent: 25, color: "#72C3FF"},
    {status: "average", percent: 22, color: "#FFE350"},
    {status: "poor", percent: 16, color: "#FFCC7E"},
    {status: "critical", percent: 37, color: "#F3AB9B" }
]

const Incidents = () => {
    return (
        <div style={{flex: 2, width: 430}}>            
            <WidgetHeader label="Incidents" description="Description to be defined" />
            <Donut2 data={data}/>
        </div>
    )
}

export default Incidents