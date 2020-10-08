// import React from 'react'
// import DashboardCard from '../../Cards/DashboardCard/DashboardCard'
// import './StaffActivities.css'

// const stafftasks = [
//     {
//         CardType: "Tasks",
//         IcconName: "house_keeping",
//         Name: "House Keeping",
//         "Total Tasks": 121,
//         Completed: 0,
//         Rejected: 0,
//         Defaulted: 0
//     },
//     {
//         CardType: "Tasks",
//         IcconName: "security",
//         Name: "Security",
//         "Total Tasks": 20,
//         Completed: 0,
//         Rejected: 0,
//         Defaulted: 0
//     },
//     {
//         CardType: "Tasks",
//         IcconName: "plumber",
//         Name: "Plumber",
//         "Total Tasks": 20,
//         Completed: 0,
//         Rejected: 0,
//         Defaulted: 0
//     },
//     {
//         CardType: "Tasks",
//         IcconName: "electrician",
//         Name: "Electrician",
//         "Total Tasks": 20,
//         Completed: 0,
//         Rejected: 0,
//         Defaulted: 0
//     },
// ]

// class StaffActivities extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             staffActivities: stafftasks
//         }
//     }
//     onNavigate = (item) => {
//         console.log(item)
//     }

//     render() {
//         const { staffActivities } = this.state
//         return (
//             <div id="staff_activities">
//                 <div className="d-flex mt-3 flex-wrap">        
//                     {staffActivities.map((item, i) => 
//                         <DashboardCard item={item} key={i} onNavigate={this.onNavigate}>
//                             <div className='tasks w-100'>
//                                 <span title={item.Name} className="label text-truncate" style={{ color: '#494949' }}>{item.Name}
//                                     <span className="text-primary float-right"><i className={`icon-${item.IconName}`} /></span>
//                                 </span>
//                                 <div className="text-left">
//                                     <span className="total d-block text-left mt-4">{item['Total Tasks']} Tasks</span>
//                                     <span className="completed d-block text-left">{item.Completed} Completed</span>
//                                     <span className="completed d-block text-left" style={{fontSize:'0.7rem', color:'#ff6a6a'}}>{item.Rejected ? item.Rejected : 0} Defaulted</span>
//                                 </div>
//                             </div>
//                         </DashboardCard>
//                     )}
//                 </div>
//             </div>
//         )        
//     }
// }

// export default StaffActivities

import React from 'react'
import image from './staff.png'

const StaffActivities = () => {
    return (
        <div style={{display: "flex"}}>
            <img src={image} alt="system_healt" />            
        </div>
    )
}

export default StaffActivities