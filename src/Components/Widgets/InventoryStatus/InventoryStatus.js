import React from 'react'
import Donut from '../../Charts/Donut/Donut'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import image from './inventory.png'

const InventoryStatus = () => {
    return (
        <div style={{flex: 2, width:425}}>
            {/* <img src={image} alt="system_healt" /> */}
            <WidgetHeader label="Inventory Status" description="Description to be defined" />
            {/* <Donut /> */}
        </div>
    )
}

export default InventoryStatus