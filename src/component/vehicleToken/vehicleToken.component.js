import React from 'react'
import classes from './vehicleToken.module.css'

import car from '../../assets/icons/carD.svg'
import truck from '../../assets/icons/truckD.svg'
import bike from '../../assets/icons/bikeD.svg'

const VehicleTokenComponent = () => {
    return (
        <div className={classes.VehicleCard}>
            <div className={classes.type}>
                <img src={car} />
            </div>
            <div className={classes.details}>
                <p><b>Vehicle No</b><br/> WB 18AE 1077</p>
                <p><b>Driver Name</b><br/> John Doe</p>
                <p><b>CheckIn Time</b><br/> 10:20pm</p>
            </div>
        </div>
    )
}

export default VehicleTokenComponent
