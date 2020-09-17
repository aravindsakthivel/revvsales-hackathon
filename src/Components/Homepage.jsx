import React from 'react'
import LoginPage from './LoginPage'
import {AppContext} from './Appcontext'
import Dashboard from './Dashboard'

class HomePage extends React.Component{
    render()
    {
        const {isAuth , first_name , last_name , handleInput , handleSubmit , ...value} = this.context
    return (
        <div>
        {!isAuth ?
            <LoginPage value={value} handleInput={handleInput} handleSubmit={handleSubmit}/>
            : 
            <Dashboard first_name={first_name} last_name={last_name}/>
        }
        </div>
    );
    }
}

HomePage.contextType=AppContext

export default HomePage
