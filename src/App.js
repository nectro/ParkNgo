import './App.css';
import HeaderComponent from './component/header/header.component';
import DashboardPanelComponent from './component/dashboardPanel/dashboardPanel.component';

function App() {
  return (
    <div className="App">
        <HeaderComponent />
        <DashboardPanelComponent />
    </div>
  );
}

export default App;
