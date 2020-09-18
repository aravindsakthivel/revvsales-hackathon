import React from 'react'
import Styled from 'styled-components'

const LogoBarWrapper=Styled.div`
    display:flex;
    margin:20px;
    img{
        height:80px;
        width:150px;
    }
    div{
        margin:5px;
    }
    a{
        height:50px;
        margin-top:20px;
        margin-left:20px;
    }
    
`
export default function LogoBar()
{
    return(
       <LogoBarWrapper>
           <img src="img/e-school.png" alt="LoGo"/>
           <div style={{display:"none",marginLeft:"40%"}}>
               <div><div className="text-muted">Email</div><div>aravindhan.sakthivel@outlook.com</div></div>
               <div><div className="text-muted">PhoneNo</div><div>123456789</div></div>
           </div>
           {/* <a href="#login" className="btn btn-outline-primary">Student Login</a>           */}
       </LogoBarWrapper> 
    )
}