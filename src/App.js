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

  const [report, setReport] = useState([])

  const [vehicleList, setVehicleList] = useState([
    {
        vehicleType:'car',
        vehicleNo:'WB 18 AE 1077',
        driverName:'John Doe',
        checkInTime:'10:00:00'
    },
    {
        vehicleType:'truck',
        vehicleNo:'WB 18 AE 9087',
        driverName:'John Bruh',
        checkInTime:'10:30:00'
    },
    {
        vehicleType:'bike',
        vehicleNo:'WB 18 AE 9070',
        driverName:'John Buh',
        checkInTime:'10:50:00'
    },
  ])

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

    console.log([...report, {...checkedOutVehicle,checkOutTime}])
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
          totalVehicles={totalVehicles} 
          setShowHistory={setShowHistory}
        />
        <DashboardPanelComponent 
            checkOutVehicle={checkOutVehicle} 
            vehicleList={vehicleList} 
            setShowModal={setShowModal} 
        />
    </div>
  );
}

export default App;
