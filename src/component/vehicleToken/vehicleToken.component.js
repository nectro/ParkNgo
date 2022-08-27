import React from 'react'
import classes from './vehicleToken.module.css'

import car from '../../assets/icons/carD.svg'
import truck from '../../assets/icons/truckD.svg'
import bike from '../../assets/icons/bikeD.svg'

const VehicleTokenComponent = ({checkOutVehicle,vehicleType,vehicleNo,driverName,checkInTime}) => {
    return (
        <div className={classes.VehicleCard}>
            <div className={classes.type}>
                <img src={vehicleType==='car'?car:vehicleType==='truck'?truck:bike} />
                <button onClick={()=>checkOutVehicle(vehicleNo,checkInTime)}>Check Out</button>
            </div>
            <div className={classes.details}>
                <p><b>Vehicle No</b><br/> {vehicleNo}</p>
                <p><b>Driver Name</b><br/> {driverName}</p>
                <p><b>CheckIn Time</b><br/> {checkInTime}</p>
            </div>
        </div>
    )
}

export default VehicleTokenComponent
