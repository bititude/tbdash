import React from 'react'
import Donut from '../../Charts/Donut/Donut'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'

const data = [
    {status: "good", percent: 70, color: "#01D09F"},
    {status: "average", percent: 20, color: "#FFDB1C"},
    {status: "poor", percent: 10, color: "#FF8D8D"}
]

const InventoryStatus = () => {
    return (
        <div style={{flex: 2, width:425}}>            
            <WidgetHeader label="Inventory Status" description="Description to be defined" />
            <Donut data={data} label="inventory" />
        </div>
    )
}

export default InventoryStatus