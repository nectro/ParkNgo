import React from 'react'
import classes from './header.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'
import Logo from '../../assets/icons/logo.svg'

function HeaderComponent() {
    return (
        <div className={classes.majorContainer}>
            <img src={Logo} className={classes.logo}/>
            <div className={classes.vehicleType}>
                <p>
                   Show vehicle type:
                </p>
                <img src={car} />
                <img src={truck} />
                <img src={bike} />
            </div>
        </div>
    )
}

export default HeaderComponent