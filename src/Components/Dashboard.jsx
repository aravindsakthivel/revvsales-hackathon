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


export default function Dashboard(props){
    const {first_name,last_name}=props    
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
                                <a href="#para1" data-toggle="collapse" data-target="#para1" className="content"><div className="ml-2">Timetable</div></a>
                                <a href="#para2" data-toggle="collapse" data-target="#para2" className="content"><div className="ml-2">Events</div></a>
                                <a href="#para3" data-toggle="collapse" data-target="#para3" className="content"><div className="ml-2">Attendance</div></a>
                                <a href="#para4" data-toggle="collapse" data-target="#para4" className="content"><div className="ml-2">Fees</div></a>
                                <a href="#para5" data-toggle="collapse" data-target="#para5" className="content"><div className="ml-2">Announcements</div></a>
                                <a href="#para6" data-toggle="collapse" data-target="#para6" className="content"><div className="ml-2">My Subjects</div></a>
                                <a href="#para7" data-toggle="collapse" data-target="#para7" className="content"><div className="ml-2">Gallery</div></a>
                                <a href="#para8" data-toggle="collapse" data-target="#para8" className="content"><div className="ml-2">Exam Reports</div></a>
                        </div>                   
                        <div  className="col-10">
                            <div id="para1" className="collapse in ">
                                Time table for class1
                            </div>
                            <div id="para2" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para3" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para4" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para5" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para6" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para7" className="collapse">
                                Time table for class1
                            </div>
                            <div id="para8" className="collapse">
                                Time table for class1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </DashBoardWrapper>
            
    )
}