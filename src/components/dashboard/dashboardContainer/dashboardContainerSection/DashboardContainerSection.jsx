import React from 'react'
import './dashboardContainerSection.css'
import Card from './Card/Card';

const DashboardContainerSection = ({info, status, priority, todo, inProg, done, backlog, noPriority, urgent, high, medium, low, user, u1, u2, u3, u4, u5}) => {
  console.log(info);
  console.log(status?.st);
  return (
    <div className='cardSection'>
        {/* info?.tickets.map((i) => {if(status.st === i.status) {todo.map((t) => (t.title))}}) */}
        {todo?.map((t) => (t.status === status.st ? <Card data={t} p={t.priority}/>: ""))}
        {inProg?.map((i) => (i.status === status.st ? <Card data={i} p={i.priority}/> : ""))}
        {done?.map((i) => (i.status === status.st ? <Card data={i} p={i.priority}/> : ""))}
        {backlog?.map((i) => (i.status === status.st ? <Card data={i} p={i.priority}/> : ""))}
        {noPriority?.map((i) => (i.priority === 0 && priority.pri === "No priority" ? <Card data={i} s={i.status}/> : ""))}
        {low?.map((i) => (i.priority === 1 && priority.pri === "Low" ? <Card data={i} s={i.status}/> : ""))}
        {medium?.map((i) => (i.priority === 2 && priority.pri === "Medium"? <Card data={i} s={i.status}/> : ""))}
        {high?.map((i) => (i.priority === 3 && priority.pri === "High"? <Card data={i} s={i.status}/> : ""))}
        {urgent?.map((i) => (i.priority === 4 && priority.pri === "Urgent"? <Card data={i} s={i.status}/> : ""))}
        {u1?.map((i) =>(i.userId === "usr-1" && user.id === "usr-1" ? <Card data={i} p={i.priority} s={i.status}/> : ""))}
        {u2?.map((i) =>(i.userId === "usr-2" && user.id === "usr-2" ? <Card data={i} p={i.priority} s={i.status}/> : ""))}
        {u3?.map((i) =>(i.userId === "usr-3" && user.id === "usr-3" ? <Card data={i} p={i.priority} s={i.status}/> : ""))}
        {u4?.map((i) =>(i.userId === "usr-4" && user.id === "usr-4" ? <Card data={i} p={i.priority} s={i.status}/> : ""))}
        {u5?.map((i) =>(i.userId === "usr-5" && user.id === "usr-5" ? <Card data={i} p={i.priority} s={i.status}/> : ""))}
    </div>
  )
}

export default DashboardContainerSection
