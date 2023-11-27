import React from 'react'
import './dashboard.css'
import DashboardContainer from './dashboardContainer/DashboardContainer'

const Dashboard = ({status,priority, info,user, grouping, filtering}) => {
  const group = localStorage.getItem("grouping") ? localStorage.getItem("grouping") : grouping;
  return (
    <div className='dashboardMain'>
        <div className='mainSection'>
            {
              group ==="Status" && status.map((s, index) => (<DashboardContainer s={s} key={index} info={info} filtering={filtering}/>))
            }

            {
              group  === "Priority" && priority.map((p, index) => (<DashboardContainer p={p} key={index} info={info} filtering={filtering}/>))
            }

            {
              group === "User" && user?.map((u) => (<DashboardContainer u={u} key={u?.id} info={info} filtering={filtering}/>))
            }

        </div>
    </div>
  )
}

export default Dashboard
