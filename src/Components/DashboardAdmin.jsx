import React from 'react'
import data from './data.json'
import Styled from 'styled-components'
import {AppContext} from './Appcontext'
import FeesForm from './FeesForm'
//import axios from 'axios'
import Announcement from './announcementForm'
//import { v4 as uuidv4 } from 'uuid'


const DashBoardWrapper=Styled.div`
    background:white;
    color:black;
    .content:link{ 
        margin-left:20px;       
        text-decoration:none;
        color:rgb(244, 143, 177);
    }
    .navbar .dropdown-menu {
        background-color: #4CAF50;
    }
    .dropdown-toggle{
        background-color: #4CAF50;
        border:none;
    }    
    
    .dropdown-toggle:hover{
        background-color: blue;
    }
    .navbar .dropdown.show a { 
        background-color: blue;
    }
`


export default class DashboardAdmin extends React.Component{
    render(){
        const {showFeesForm, showProcess, show} = this.context
        const {first_name,last_name,handleAuth}=this.props 
        return(
            <DashBoardWrapper>
                <div className="row">
                    <div className="col">
                    <div className="fixed-top">                    
                        <nav className="navbar navbar-dark bg-secondary">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalcard" aria-controls="navbarToggleExternalcard" aria-expanded="true" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <h4 className = "text-light ml-3 mt-1">{first_name+last_name}</h4>
                            <div className="dropdown ml-auto mr-3">
                                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create documents
                                </button>
                                <div className="dropdown-menu" style={{backgroundColor:"green"}} aria-labelledby="dropdownMenuButton">
                                    <button className="dropdown-item" onClick = {() => showProcess('announce')}>Announcement</button>
                                    <button className="dropdown-item" onClick = {() => showProcess('fees')}>Fees</button>
                                    {/* <button className="dropdown-item">Waiting</button> */}
                                </div>
                            </div>
                            <img src={"https://via.placeholder.com/150"} 
                                style={{width:"50px",height:"50px",borderRadius:"50%"}}
                                alt={first_name+last_name}
                            />
                        </nav>
                        <div className="collapse" id="navbarToggleExternalcard">
                            <div className="bg-dark p-4">
                            <h5 className="text-white h4">Principal</h5>
                            <span className="text-muted">({data[0].academicYear})</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="row">
                    <div className="col">
                        <div className="row" style={{marginTop:"60px"}}>
                            <div className="col-2" style={{border:"1px solid black",height:"900px",background:"rgb(38, 50, 56)"}}>
                                <a href="#para1" className="content"><div className="ml-2">Timetable</div></a>
                                <a href="#para2" className="content"><div className="ml-2">Events</div></a>
                                <a href="#para3" className="content"><div className="ml-2">Attendance</div></a>
                                <a href="#para4" className="content"><div className="ml-2">News</div></a>
                                <button type = 'button' className = 'btn btn-danger ml-2 mt-2' onClick={handleAuth}>Logout</button>
                            </div>          
                            <div className="col-10">
                                {
                                    show === 'announce' ? (
                                        < 
                                            Announcement 
                                        />
                                        ) : show === 'fees' ? (
                                            <
                                                FeesForm 
                                            />
                                        ) : ("")
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </DashBoardWrapper>
        )
    }
    
}

DashboardAdmin.contextType=AppContext