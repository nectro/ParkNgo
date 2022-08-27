import { useState } from 'react';
import './App.css';
import HeaderComponent from './component/header/header.component';
import DashboardPanelComponent from './component/dashboardPanel/dashboardPanel.component';
import ParkModalComponent from './component/parkModal/parkModal.component';
import HistoryModalComponent from './component/historyModal/historyModal.component';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showHistory, setShowHistory] = useState(false)


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
        <DashboardPanelComponent setShowModal={setShowModal} />
    </div>
  );
}

export default App;
