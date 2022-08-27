import { useState } from 'react';
import './App.css';
import HeaderComponent from './component/header/header.component';
import DashboardPanelComponent from './component/dashboardPanel/dashboardPanel.component';
import ParkModalComponent from './component/parkModal/parkModal.component';
import HistoryModalComponent from './component/historyModal/historyModal.component';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const [vehicleList, setVehicleList] = useState([
    {
        vehicleType:'car',
        vehicleNo:'WB 18 AE 1077',
        DriverName:'John Doe',
        CheckinTime:'10:00'
    },
    {
        vehicleType:'truck',
        vehicleNo:'WB 18 AE 9087',
        DriverName:'John Bruh',
        CheckinTime:'10:30'
    },
    {
        vehicleType:'bike',
        vehicleNo:'WB 18 AE 9070',
        DriverName:'John Buh',
        CheckinTime:'10:50'
    },
])


  return (
    <div className="App">
        {
          showHistory &&
          <HistoryModalComponent setShowHistory={setShowHistory} />
        }
        {
          showModal &&
          <ParkModalComponent setShowModal={setShowModal} />
        }
        <HeaderComponent setShowHistory={setShowHistory}/>
        <DashboardPanelComponent vehicleList={vehicleList} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
