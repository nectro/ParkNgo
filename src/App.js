import { useState, useEffect } from 'react';
import './App.css';
import HeaderComponent from './component/header/header.component';
import DashboardPanelComponent from './component/dashboardPanel/dashboardPanel.component';
import ParkModalComponent from './component/parkModal/parkModal.component';
import HistoryModalComponent from './component/historyModal/historyModal.component';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [totalVehicles, setTotalVehicles] = useState(0)
  const [showType, setShowType] = useState('all')

  const [report, setReport] = useState([])

  const [vehicleList, setVehicleList] = useState([])

  useEffect(() => {
    setTotalVehicles(vehicleList.length)
  }, [vehicleList])

  const checkInVehicle = (vehicleNumber,driverName,vehicleType)=>{
    const date = new Date()
    const checkInTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    const newData = {
      vehicleNo:vehicleNumber,
      driverName,
      vehicleType,
      checkInTime
    }

    setVehicleList([...vehicleList, newData])
    setShowModal(false)
  }

  const checkOutVehicle = (vehicleNumber)=>{
    const date = new Date()
    const checkOutTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

    let tempList = [];
    let checkedOutVehicle = {};
    vehicleList.forEach(vehicle => {
      if(vehicle.vehicleNo !== vehicleNumber){
        tempList.push(vehicle);
      }else{
        checkedOutVehicle = vehicle;
      }
    })

    // console.log([...report, {...checkedOutVehicle,checkOutTime}])
    setReport([...report, {...checkedOutVehicle,checkOutTime}])
    setVehicleList(tempList)
    alert(`Vehicle Checked Out:-\nvehicle number: ${vehicleNumber}\nchecked In: ${checkedOutVehicle.checkInTime}\nchecked Out: ${checkOutTime}\n(data saved in report)`)
  }



  return (
    <div className="App">
        {
          showHistory &&
          <HistoryModalComponent 
            setShowHistory={setShowHistory} 
            report={report}
          />
        }
        {
          showModal &&
          <ParkModalComponent checkInVehicle={checkInVehicle} setShowModal={setShowModal} />
        }
        <HeaderComponent 
          showType={showType}
          setShowType={setShowType}
          totalVehicles={totalVehicles} 
          setShowHistory={setShowHistory}
        />
        <DashboardPanelComponent 
            checkOutVehicle={checkOutVehicle} 
            showType={showType}
            vehicleList={vehicleList} 
            setShowModal={setShowModal} 
        />
    </div>
  );
}

export default App;
