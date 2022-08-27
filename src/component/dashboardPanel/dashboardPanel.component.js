import React, { useState } from 'react'
import classes from './dashboardPanel.module.css'

import Park from '../../assets/icons/parkSymbol.svg'

import VehicleTokenComponent from '../vehicleToken/vehicleToken.component'

function DashboardPanelComponent({checkOutVehicle,showType,vehicleList,setShowModal}) {

    return (
        <div className={classes.majorContainer}>

            {
                vehicleList&&
                vehicleList.map((vehicle,index)=>{
                    if(showType === 'all'){
                        return(
                            <VehicleTokenComponent
                                key={index} 
                                checkOutVehicle={checkOutVehicle}
                                vehicleType={vehicle.vehicleType}
                                vehicleNo={vehicle.vehicleNo}
                                driverName={vehicle.driverName}
                                checkInTime={vehicle.checkInTime}
                            />
                        )
                    }else if(showType === vehicle.vehicleType){
                        return(
                            <VehicleTokenComponent
                                key={index} 
                                checkOutVehicle={checkOutVehicle}
                                vehicleType={vehicle.vehicleType}
                                vehicleNo={vehicle.vehicleNo}
                                driverName={vehicle.driverName}
                                checkInTime={vehicle.checkInTime}
                            />
                        )
                    }
                }
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
