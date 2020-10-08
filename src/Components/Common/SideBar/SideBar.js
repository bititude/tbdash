import React from 'react'
import './SideBar.css'

const SideBar = () => {
    return (
        <div id="sidebar">
            <div className="menu-items">
                <ul className="nav flex-column mt-3 pt-2">
                    <li className="nav-item"><a className="nav-link"><span className="nav-text">Dashboard</span></a></li>
                    <li className="nav-item"><a className="nav-link"><span className="nav-text">Properties</span></a></li>
                    <li className="nav-item"><a className="nav-link"><span className="nav-text">Tasks</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar