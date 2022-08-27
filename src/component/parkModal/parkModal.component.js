import React from 'react'
import classes from './parkModal.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'

function ParkModalComponent({setShowModal}) {
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
                        <input type="text" placeholder="MX 19A 1800" />
                    </div>
                    <div className={classes.inpCtn}>
                        <label>Driver Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className={classes.inpCtn}>
                        <label>Vehicle Type</label>
                        <div className={classes.typeCtn}>
                            <img src={car} />
                            <img src={truck} />
                            <img src={bike} />
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
