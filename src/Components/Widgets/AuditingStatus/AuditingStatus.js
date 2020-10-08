import React from 'react'
import VennDiagram from '../../Charts/VennDiagram/VennDiagram'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'
import image from './auditing.png'

const AuditingStatus = () => {
    return (
        <div style={{flex: 2, width:440}}>            
            <WidgetHeader label="Auditing Status" description="Description to be defined" />
            <VennDiagram />         
        </div>
    )
}

export default AuditingStatus