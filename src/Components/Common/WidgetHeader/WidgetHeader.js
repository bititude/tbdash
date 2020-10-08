import React from 'react'
import './WidgetHeader.css'

const WidgetHeader = ({label, description}) => {
    return (
        <div className="widget-header">
            <div className="widget-label">{label}</div>
            <div className="widget-description">{description}</div>
        </div>
    )
}

export default WidgetHeader;