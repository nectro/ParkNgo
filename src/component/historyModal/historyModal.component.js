import React from 'react'
import classes from './historyModal.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'

function HistoryModalComponent({setShowHistory}) {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.formCtn}>
                <div className={classes.heading}>
                    <h2>Vehicle History</h2>
                    <p className={classes.closeIcon} onClick={()=>setShowHistory(false)}>X</p>
                </div>
                <div className={classes.forScroll}>
                    <table className={classes.info}>
                        <tr>
                            <th>Vehicle Type</th>
                            <th>Vehicle No</th>
                            <th>Driver Name</th>
                            <th>Check In Time</th>
                            <th>Check Out Time</th>
                        </tr>
                        <tr>
                            <td>
                                Car
                            </td>
                            <td>
                                WB 18AE 1077
                            </td>
                            <td>
                                John Doe
                            </td>
                            <td>
                                10:00am
                            </td>
                            <td>
                                12:00pm
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HistoryModalComponent
