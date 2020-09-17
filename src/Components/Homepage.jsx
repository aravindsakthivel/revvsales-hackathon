import React from 'react'
import LoginPage from './LoginPage'
import {AppContext} from './Appcontext'
import Dashboard from './Dashboard'
import DashboardAdmin from './DashboardAdmin'



class HomePage extends React.Component{
    render(){
        const {isAuth , first_name , last_name , handleInput , handleAuth, handleSubmit , ...value} = this.context
    return (
        <div>
            {!isAuth?
                <LoginPage value={value} handleInput={handleInput} handleSubmit={handleSubmit}/>
                : value.userName==="aravindan.sakthivel@outlook.com" ? 
                <Dashboard first_name={first_name} last_name={last_name} handleAuth={handleAuth}/>
                :<DashboardAdmin first_name={first_name} last_name={last_name} handleAuth={handleAuth}/>
            }
        </div>
    );
    }
}

HomePage.contextType=AppContext

export default HomePage

