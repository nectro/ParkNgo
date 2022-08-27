import React from 'react'
import classes from './dashboardPanel.module.css'

import Park from '../../assets/icons/parkSymbol.svg'

import VehicleTokenComponent from '../vehicleToken/vehicleToken.component'

function DashboardPanelComponent({setShowModal}) {
    return (
        <div className={classes.majorContainer}>
            <VehicleTokenComponent />
            <div className={classes.ParkCard} onClick={()=>setShowModal(true)}>
                <img src={Park} />
                <h2>Park Vehicle</h2>
            </div>
        </div>
    )
}

export default DashboardPanelComponent
