import React from 'react'
import classes from './historyModal.module.css'

import car from '../../assets/icons/car.svg'
import truck from '../../assets/icons/truck.svg'
import bike from '../../assets/icons/bike.svg'

function HistoryModalComponent({report,setShowHistory}) {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.formCtn}>
                <div className={classes.heading}>
                    <h2>Vehicle History</h2>
                    <p className={classes.closeIcon} onClick={()=>setShowHistory(false)}>X</p>
                </div>
                <div className={classes.forScroll}>
                    {
                        report.length > 0 ?
                        <table className={classes.info}>
                            <tbody>
                                <tr>
                                    <th>Vehicle Type</th>
                                    <th>Vehicle No</th>
                                    <th>Driver Name</th>
                                    <th>Check In Time</th>
                                    <th>Check Out Time</th>
                                </tr>
                                {
                                    report &&
                                    report.map( (r,index)=>
                                        <tr key={index}>
                                            <td>
                                                {r.vehicleType}
                                            </td>
                                            <td>
                                                {r.vehicleNo}
                                            </td>
                                            <td>
                                                {r.driverName}
                                            </td>
                                            <td>
                                                {r.checkInTime}
                                            </td>
                                            <td>
                                                {r.checkOutTime}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table> :
                        <p>No vehicle haven't checked out yet...</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default HistoryModalComponent
