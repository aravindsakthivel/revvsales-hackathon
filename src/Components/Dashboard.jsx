import React from 'react'
import data from './data.json'
import Styled from 'styled-components'


const DashBoardWrapper=Styled.div`
    background:white;
    color:black;
    position:relative;
    top:-30px;    
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
                                <button style={{background:"#E91E63",color:"white",borderRadius:"10px",border:"none"}} onClick={handleAuth}>LogOut</button>
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
                                <div className="row">
                                    <div className=" col-12 col-md-6 col-lg-4 ">
                                        <div className="m-3">
                                            <div class="card " style={{width: "18rem"}}>
                                            <div style={{background:"orange",color:"white",padding:"10px"}}>Term 1 Fees</div> 
                                            <div class="card-body" style={{display:"flex"}}>
                                                <h5 class="card-title" style={{margin:"10px"}}>₹20,000</h5>                                        
                                                <button className="btn-warning" style={{marginLeft:"50px",border:"none",borderRadius:"10px",padding:"10px",fontWeight:"bold",color:"white"}}>PAY FEES</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 ">
                                        <div className="m-3">
                                            <div class="card" style={{width: "18rem"}}>
                                            <div style={{background:"orange",color:"white",padding:"10px"}}>Term 1 Fees</div> 
                                            <div class="card-body" style={{display:"flex"}}>
                                                <h5 class="card-title" style={{margin:"10px"}}>₹20,000</h5>                                        
                                                <button className="btn-warning" style={{marginLeft:"50px",border:"none",borderRadius:"10px",padding:"10px",fontWeight:"bold",color:"white"}}>PAY FEES</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                
                                
                                     <div class="col-12 col-md-6  col-lg-4 ">
                                         <div className="m-3">
                                            <div class="card" style={{width: "18rem"}}>
                                            <div style={{background:"orange",color:"white",padding:"10px"}}>Term 1 Fees</div> 
                                            <div class="card-body" style={{display:"flex"}}>
                                                <h5 class="card-title" style={{margin:"10px"}}>₹20,000</h5>                                        
                                                <button className="btn-warning" style={{marginLeft:"50px",border:"none",borderRadius:"10px",padding:"10px",fontWeight:"bold",color:"white"}}>PAY FEES</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4 ">
                                        <div className="m-3">
                                        <div class="card" style={{width: "18rem"}}>
                                            <div style={{background:"orange",color:"white",padding:"10px"}}>Term 1 Fees</div> 
                                            <div class="card-body" style={{display:"flex"}}>
                                                <h5 class="card-title" style={{margin:"10px"}}>₹20,000</h5>                                        
                                                <button className="btn-warning" style={{marginLeft:"50px",border:"none",borderRadius:"10px",padding:"10px",fontWeight:"bold",color:"white"}}>PAY FEES</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                    <div className="col-12 col-md-6 col-lg-4 ">
                                        <div className="m-3">
                                            <div class="card" style={{width: "18rem"}}>
                                            <div style={{background:"orange",color:"white",padding:"10px"}}>Term 1 Fees</div> 
                                            <div class="card-body" style={{display:"flex"}}>
                                                <h5 class="card-title" style={{margin:"10px"}}>₹20,000</h5>                                        
                                                <button className="btn-warning" style={{marginLeft:"50px",border:"none",borderRadius:"10px",padding:"10px",fontWeight:"bold",color:"white"}}>PAY FEES</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                               
                                </div>
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