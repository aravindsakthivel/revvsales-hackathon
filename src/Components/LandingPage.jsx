import React from 'react'
import NavBar from './NavBar'
import LogoBar from './LogoBar'
import DisplayBar from './DisplayBar'
import {AppContext} from './Appcontext'
// import Homepage from './Homepage'

 class LandingPage extends React.Component
{
    
    render()
    {
        const {display,...value}=this.context
        console.log(display)
        return(
            
            <div>
                {!display?
                    <div>
                        <NavBar />
                        <LogoBar/>
                        <DisplayBar/>
                    </div>
                    :<div>
                        
                        
                    </div>
                    
                }       
    
            </div>
        )
    }
    
}

LandingPage.contextType=AppContext

export default LandingPage