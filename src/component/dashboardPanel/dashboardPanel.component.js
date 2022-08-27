import React from 'react'
import classes from './dashboardPanel.module.css'

import Park from '../../assets/icons/parkSymbol.svg'

import VehicleTokenComponent from '../vehicleToken/vehicleToken.component'

function DashboardPanelComponent({setShowModal}) {

    const vehicleList = [
        {
            vehicleType:'car',
            vehicleNo:'WB 18 AE 1077',
            DriverName:'John Doe',
            CheckinTime:'10:00pm'
        },
        {
            vehicleType:'truck',
            vehicleNo:'WB 18 AE 9087',
            DriverName:'John Bruh',
            CheckinTime:'10:30pm'
        },
        {
            vehicleType:'bike',
            vehicleNo:'WB 18 AE 9070',
            DriverName:'John Buh',
            CheckinTime:'10:50pm'
        },
    ]


    return (
        <div className={classes.majorContainer}>

            {
                vehicleList&&
                vehicleList.map((vehicle)=>
                    <VehicleTokenComponent 
                        vehicleType={vehicle.vehicleType}
                        vehicleNo={vehicle.vehicleNo}
                        DriverName={vehicle.DriverName}
                        CheckinTime={vehicle.CheckinTime}
                    />
                )
            }
            <div className={classes.ParkCard} onClick={()=>setShowModal(true)}>
                <img src={Park} />
                <h2>Park Vehicle</h2>
            </div>
        </div>
    )
}

export default DashboardPanelComponent
