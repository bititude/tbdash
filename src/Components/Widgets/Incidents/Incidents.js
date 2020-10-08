import React from 'react'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import image from './incidents.png'

const Incidents = () => {
    return (
        <div style={{flex: 2, width: 430}}>
            {/* <img src={image} alt="system_healt" /> */}
            <WidgetHeader label="Incidents" description="Description to be defined" />
        </div>
    )
}

export default Incidents