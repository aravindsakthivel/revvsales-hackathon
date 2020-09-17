import React from 'react'
import data from './data.json'
import Styled from 'styled-components'

const DashBoardWrapper=Styled.div`
    background:white;
    color:black;
    .content:link{ 
        margin-left:20px;       
        text-decoration:none;
        color:rgb(244, 143, 177);
    }
`

var i=0
export default function Dashboard(props){
    const {first_name,last_name,handleAuth}=props    
    return(
        <DashBoardWrapper>
            <div className="row">
                <div className="col">
                <div className="fixed-top">                    
                    <nav className="navbar navbar-dark bg-dark">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalcard" aria-controls="navbarToggleExternalcard" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <h1 style={{color:"white"}}>{first_name+last_name}</h1>
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Create documents
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <img src={"https://via.placeholder.com/150"} 
                            style={{width:"50px",height:"50px",borderRadius:"50%"}}
                            alt={first_name+last_name}
                        />
                    </nav>
                    <div className="collapse" id="navbarToggleExternalcard">
                        <div className="bg-dark p-4">
                        <h5 className="text-white h4">Student</h5>
                        <span className="text-muted">{data[0].grade}({data[0].academicYear})</span>
                        </div>
                    </div>
                </div>
                </div>
            </div> 
            <div className="row">
                <div className="col">
                    <div className="row" style={{marginTop:"70px"}}>
                        <div className="col-2" style={{border:"1px solid black",height:"900px",background:"rgb(38, 50, 56)"}}>
                                <a href="#para1" className="content"><div className="ml-2">Timetable</div></a>
                                <a href="#para2" className="content"><div className="ml-2">Events</div></a>
                                <a href="#para3" className="content"><div className="ml-2">Attendance</div></a>
                                <a href="#para4" className="content"><div className="ml-2">Fees</div></a>
                                <a href="#para5" className="content"><div className="ml-2">Announcements</div></a>
                                <a href="#para6" className="content"><div className="ml-2">My Subjects</div></a>
                                <a href="#para7" className="content"><div className="ml-2">Gallery</div></a>
                                <a href="#para8" className="content"><div className="ml-2">Exam Reports</div></a>
                                <button type = 'button' className = 'btn btn-danger ml-2 mt-2' onClick={handleAuth}>LogOut</button>
                        </div>                   
                        <div  className="col-10">
                            <div id="para1" className="collapse in ">
                                Time table 
                            </div>
                            <div id="para2" className="collapse">
                                Events
                            </div>
                            <div id="para3" className="collapse">
                                Attendance
                            </div>
                            <div id="para4" className="collapse">
                                Fees
                            </div>
                            <div id="para5" className="collapse">
                                Announcements
                            </div>
                            <div id="para6" className="collapse">
                                My Subjects
                            </div>
                            <div id="para7" className="collapse">
                                <div className="row">
                                {Object.values(data[0].gallaryView).map((item)=>(
                                    
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div>                                               
                                                <img src={item} height="200px" width="200px" alt={i} style={{margin:"10px"}} />                                                  
                                            </div>
                                        </div>
                                ))}
                                </div>
                            </div>
                            <div id="para8" className="collapse">
                                Exam Reports
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </DashBoardWrapper>
            
    )
}


