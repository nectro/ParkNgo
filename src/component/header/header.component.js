import React from 'react'
import classes from './header.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'
import Logo from '../../assets/icons/logo.svg'
import History from '../../assets/icons/history.svg'

function HeaderComponent({setShowHistory}) {
    return (
        <div className={classes.majorContainer}>
            <img src={Logo} className={classes.logo}/>
            <div className={classes.vehicleType}>
                <img src={History} onClick={()=>{setShowHistory(true)}}/>
                <p>Total Vehicles:</p>
                <p style={{backgroundColor:'#ffcc02', padding:'2px 6px',borderRadius:'4px'}}>10</p>
                <p>
                   Show vehicle type:
                </p>
                <h2>All</h2>
                <img src={car} />
                <img src={truck} />
                <img src={bike} />
            </div>
        </div>
    )
}

export default HeaderComponent
