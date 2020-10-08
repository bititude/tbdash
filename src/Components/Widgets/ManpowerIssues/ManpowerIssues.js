import React from 'react'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import image from './manpower.png'

const ManpowerIssues = () => {
    return (
        <div style={{flex: 2, width: 430}}>
            {/* <img src={image} alt="system_healt" /> */}
            <WidgetHeader label="Manpower Issues" description="Description to be defined" />
        </div>
    )
}

export default ManpowerIssues