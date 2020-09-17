import React from 'react'
import axios from 'axios'

export const AppContext = React.createContext()

export default class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            last_name:'',
            first_name:'',
            userName:'',
            password:'',
            accessKey:'',
            isAuth:false,
            refreshToken:''
        }
    }
    handleInput = (e) =>{
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }


    handleSubmit = async (e) =>{
        e.preventDefault()
        const {userName, password} = this.state
        const headerConfig = {
            headers: {
                'Content-Type': 'application/json',
                'GrantType': 'password'
            }
        };
        const credentials = {
            "user_email": userName,
            "password": password,
            "org_domain":'ft9olktt'
        }
        const loginApi = 'https://ft9olktt.revvsales.com/api/v2/auth/initiate-auth'
        try{
            let loginRequestData = await axios.post(loginApi,credentials,headerConfig)          
            this.setState({
                accessKey:loginRequestData.data.User.access_token,
                isAuth:true,
                first_name:loginRequestData.data.User.first_name,
                last_name:loginRequestData.data.User.last_name,
                refresh_token:loginRequestData.data.User.refresh_token
            })
            console.log(loginRequestData.data.User.access_token)
        }
        catch (error) {
            console.log(error);
        }
    }


    render()
    {
        const {username,password,accessKey,isAuth,first_name,last_name}=this.state
        const {handleInput,handleSubmit}=this
        const value={username,password,accessKey,isAuth,first_name,last_name,handleInput,handleSubmit}
        return(
            <AppContext.Provider value={value} >
                    {this.props.children}
            </AppContext.Provider>
        )
    }
}