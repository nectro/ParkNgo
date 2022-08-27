import { useState } from 'react';
import './App.css';
import HeaderComponent from './component/header/header.component';
import DashboardPanelComponent from './component/dashboardPanel/dashboardPanel.component';
import ParkModalComponent from './component/parkModal/parkModal.component';

function App() {
  const [showModal, setShowModal] = useState(false)


  return (
    <div className="App">
        {
          showModal &&
          <ParkModalComponent setShowModal={setShowModal} />
        }
        <HeaderComponent />
        <DashboardPanelComponent setShowModal={setShowModal} />
    </div>
  );
}

export default App;
