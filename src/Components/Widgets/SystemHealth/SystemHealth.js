import React from 'react'
import BarChart from '../../Charts/BarChart/BarChart'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'

const SystemHealth = () => {
    return (
        <div style={{display: "flex", flexDirection:"column"}}>            
            <WidgetHeader label="System Health" description = "Description to be defined" />
            <BarChart />
        </div>
    )
}

export default SystemHealth