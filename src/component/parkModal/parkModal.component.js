import React, { useState } from 'react'
import classes from './parkModal.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'

function ParkModalComponent({setShowModal}) {

    const [driverName, setDriverName] = useState("");
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [type, setType] = useState('car');
    const [checkIn, setCheckIn] = useState(null);

    console.log(Date())

    return (
        <div className={classes.majorContainer}>
            <div className={classes.formCtn}>
                <div>
                    <p className={classes.closeIcon} onClick={()=>setShowModal(false)}>X</p>
                    <h2>Enter Vehicle Details</h2>
                </div>
                <div>
                    <div className={classes.inpCtn}>
                        <label>Vehicle Number</label>
                        <input type="text" placeholder="MX 19A 1800" value={vehicleNumber} onChange={(e)=>{setVehicleNumber(e.target.value)}}/>
                    </div>
                    <div className={classes.inpCtn}>
                        <label>Driver Name</label>
                        <input type="text" placeholder="John Doe" value={driverName} onChange={(e)=>{setDriverName(e.target.value)}}/>
                    </div>
                    <div className={classes.inpCtn}>
                        <label>Vehicle Type</label>
                        <div className={classes.typeCtn}>
                            <img src={car} className={type === 'car'?classes.selected : ''} onClick={()=>{setType('car')}} />
                            <img src={truck} className={type === 'truck'?classes.selected : ''} onClick={()=>{setType('truck')}} />
                            <img src={bike} className={type === 'bike'?classes.selected : ''} onClick={()=>{setType('bike')}} />
                        </div>
                    </div>
                </div>
                <div className={classes.btnCtn}>
                    <button>Park</button>
                </div>
            </div>
        </div>
    )
}

export default ParkModalComponent
