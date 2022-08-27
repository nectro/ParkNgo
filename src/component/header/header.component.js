import React, { useState } from 'react'
import classes from './header.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'
import Logo from '../../assets/icons/logo.svg'
import History from '../../assets/icons/history.svg'
import Bar from '../../assets/icons/bar.svg'

function HeaderComponent({showType,setShowType,totalVehicles,setShowHistory}) {

    const [modal, setModal] = useState(false)
    // console.log(showType)
    return (
        <div className={classes.majorContainer}>
            <img src={Logo} className={classes.logo}/>
            <div className={classes.vehicleType}>
                <img src={History} onClick={()=>{setShowHistory(true)}}/>
                <p>Total Vehicles:</p>
                <p style={{backgroundColor:'#ffcc02', padding:'2px 6px',borderRadius:'4px'}}>{totalVehicles}</p>
                <p>
                   Show vehicle type:
                </p>
                <h2 className={showType === 'all'?classes.selected:''} onClick={()=>{setShowType('all')}}>All</h2>
                <img src={car} className={showType === 'car'?classes.selected:''}  onClick={()=>{setShowType('car')}}/>
                <img src={truck} className={showType === 'truck'?classes.selected:''}  onClick={()=>{setShowType('truck')}}/>
                <img src={bike} className={showType === 'bike'?classes.selected:''}  onClick={()=>{setShowType('bike')}}/>
            </div>
            <div className={classes.vehicleTypeM}>
                <p>Total:</p>
                <p style={{backgroundColor:'#ffcc02', padding:'2px 6px',borderRadius:'4px'}}>{totalVehicles}</p>
                <img src={Bar} style={{height:20}} onClick={()=>setModal(true)}/>
            </div>
            {
                modal &&
                <div className={classes.menu}>
                    <p className={classes.closeIcon} onClick={()=>setModal(false)}>X</p>
                    <img src={History} onClick={()=>{setShowHistory(true);setModal(false);}}/>
                    <p>
                        Show vehicle type:
                    </p>
                    <h2 className={showType === 'all'?classes.selected:''} onClick={()=>{setShowType('all')}}>All</h2>
                    <img src={car} className={showType === 'car'?classes.selected:''}  onClick={()=>{setShowType('car');setModal(false);}}/>
                    <img src={truck} className={showType === 'truck'?classes.selected:''}  onClick={()=>{setShowType('truck');setModal(false);}}/>
                    <img src={bike} className={showType === 'bike'?classes.selected:''}  onClick={()=>{setShowType('bike');setModal(false);}}/>
                </div>    
            }
        </div>
    )
}

export default HeaderComponent
