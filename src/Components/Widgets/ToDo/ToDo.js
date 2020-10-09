import React from 'react'
import VBarChart from '../../Charts/VBarChart/VBarChart'
import WidgetHeader from '../../Common/WidgetHeader/WidgetHeader'

import image from './todo.png'

const Todo = () => {
    return (
        <div style={{flex: 2}}>
            {/* <img src={image} alt="todo" />             */}
            <WidgetHeader label="ToDo" description="Description to be defined" />
            <VBarChart />
        </div>
    )
}

export default Todo