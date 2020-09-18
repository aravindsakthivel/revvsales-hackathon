import React from 'react'
import axios from 'axios'

export const AppContext = React.createContext()

export default class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            display:false,
            last_name:'',
            first_name:'',
            userName:'',
            password:'',
            accessKey:'',
            isAuth:false,
            refreshToken:'',
            showFeesForm:false,
            documentTitle:'',
            document_no:"DOC-000040",
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
                refresh_token:loginRequestData.data.User.refresh_token,
                display:true
            })
            console.log(loginRequestData.data.User.access_token)
        }
        catch (error) {
            console.log(error);
        }
    }


    createDocument = async (which) => {
        // e.preventDefault()
        const headerConfig = {
            headers: {
                'AccessToken': this.state.accessKey,
                'Content-Type': 'application/json'
            }
        };
        const credentials = {
            "template_id":21,
            "title": this.state.documentTitle
        }
        const createDocumentApi = 'https://ft9olktt.revvsales.com/api/docs'
        try{
            const createDocument = await axios.post(createDocumentApi, credentials, headerConfig)
            console.log(createDocument.data.Document.doc_no)
            this.setState({
                document_no:createDocument.data.Document.doc_no
            })
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
        this.setState({isAuth:false,
                    display:false})
    }

    render()
    {
        const {userName,password,accessKey,isAuth,first_name,last_name,refreshToken, showFeesForm, documentTitle, show,display,document_no}=this.state
        const {handleInput,handleSubmit, handleAuth,createDocument, showProcess}=this
        const value={userName,password,accessKey,isAuth,first_name,last_name,refreshToken, display,showFeesForm, documentTitle, show,document_no, handleInput, handleSubmit,handleAuth, createDocument, showProcess}
        return(
            <AppContext.Provider value={value} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}