import React from 'react'
import axios from 'axios'

export const AppContext = React.createContext()

export default class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            last_name:'Aravind',
            first_name:'Sakthivel ',
            userName:'',
            password:'',
            accessKey:'',
            isAuth:true,
            refreshToken:'',
            showFeesForm:false,
            documentTitle:'',
            show:"",
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


    createDocument = async (e) => {
        e.preventDefault()
        const headerConfig = {
            headers: {
                'AccessToken': this.state.accessKey,
                'Content-Type': 'application/json'
            }
        };
        const credentials = {
            "template_id":1,
            "title": this.state.documentTitle
        }
        const createDocumentApi = 'https://ft9olktt.revvsales.com/api/docs'
        try{
            const createDocument = await axios.post(createDocumentApi, credentials, headerConfig)
        }
        catch (error) {
            console.log(error);
        }
    }


    showProcess = (which) => {
        console.log(which)
        this.setState({
            show:which
        })
    }

    handleAuth=()=>{
        this.setState({isAuth:false})
    }

    render()
    {
        const {username,password,accessKey,isAuth,first_name,last_name,refreshToken, showFeesForm, documentTitle, show}=this.state
        const {handleInput,handleSubmit, handleAuth,createDocument, showProcess}=this
        const value={username,password,accessKey,isAuth,first_name,last_name,refreshToken, showFeesForm, documentTitle, show, handleInput, handleSubmit,handleAuth, createDocument, showProcess}
        return(
            <AppContext.Provider value={value} >
                {this.props.children}
            </AppContext.Provider>
        )
    }

}