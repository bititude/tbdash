import React from 'react';
import SideBar from './Components/Common/SideBar/SideBar'
import StaffActivities from './Components/Widgets/StaffActivities/StaffActivities'
import SystemHealth from './Components/Widgets/SystemHealth/SystemHealth'
import AuditingStatus from './Components/Widgets/AuditingStatus/AuditingStatus'
import SortableList from './Components/Sortable/Sortable'
import InventoryStatus from './Components/Widgets/InventoryStatus/InventoryStatus';
import ManpowerIssues from './Components/Widgets/ManpowerIssues/ManpowerIssues';
import Incidents from './Components/Widgets/Incidents/Incidents'
import Compliance from './Components/Widgets/Compliance/Compliance';
import Todo from './Components/Widgets/ToDo/ToDo';

var items = [      
  <StaffActivities />,
  <SystemHealth />,
  <AuditingStatus />,
  <InventoryStatus />,
  <ManpowerIssues />,
  <Incidents />,
  <Compliance />,
  <Todo />
]

function App() {
  return (
    <div className='d-flex flex-row flex-wrap'>
      <SideBar />
      <div style={{ flex: 1, overflow: "auto" }}>        
          <SortableList items={items} />        
      </div>
    </div>
  );
}

export default App;
