import React from 'react'
import ChartArea from '../../Charts/ChartArea/ChartArea'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'

const ManpowerIssues = () => {
    return (
        <div style={{flex: 2, width: 437}}>            
            <WidgetHeader label="Manpower Issues" description="Description to be defined" />
            <ChartArea />
        </div>
    )
}

export default ManpowerIssues