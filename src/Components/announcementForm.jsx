import React from 'react'
import axios from 'axios'
import {AppContext} from './Appcontext'

export default class Announcement extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            toWhom:'',
            date:'',
            announcement:'',
            email:"",
            first_name:"",
            last_name:"",
        }
    }
    handleChange = (e)  => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }


    automate = async() => {
        const response = await axios({
            method: "post",
            url: "http://localhost:5000/screenshot",
            data: {
                "email": this.context.userName,
                "password": this.context.password,
                "document_no":this.context.document_no,
                "toWhom":this.state.toWhom,
                "date":this.state.date,
                "announcement":this.state.announcement,
                'toEmail':this.state.email,
                'first_name':this.state.first_name,
                'last_name':this.state.last_name
            },
        })
        console.log(response)
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        const {toWhom, date, announcement} = this.state
        let obj = {
            toWhom:toWhom,
            date:date,
            announcement:announcement
        }
        console.log(this.context.userName, this.context.password, this.state.email)
        await this.context.createDocument('anoun')
        this.automate()
    }


    render(){
        const {toWhom, date, announcement, email, last_name, first_name} = this.state
        const {documentTitle, handleInput} = this.context
        return(
            <div className = 'card col-6 shadow-sm mt-5'>
                <div className = 'card-body'>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputEmail4">To whom</label>
                                <input type="text" name = {'toWhom'} onChange = {this.handleChange} className="form-control" value = {toWhom} placeholder="Respected xyz"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputPassword4">Date</label>
                                <input type="date" name = {'date'} onChange = {this.handleChange} className="form-control" value = {date} placeholder="29/08"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputDoc">File no</label>
                                <input type="text" name = {'documentTitle'} onChange = {handleInput} className="form-control" value = {documentTitle} placeholder="file3"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Announcement</label>
                            <textarea  name = {'announcement'} onChange = {this.handleChange} className="form-control" value = {announcement} rows="3" placeholder = 'the following saturday...'></textarea>
                        </div>
                        <hr />
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Email</label>
                                <input type="text" name = {'email'} onChange = {this.handleChange} className="form-control" value = {email} placeholder="a@g.com"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label>First Name</label>
                                <input type="text" name = {'first_name'} onChange = {this.handleChange} className="form-control" value = {first_name} placeholder="abc"></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label>Last name</label>
                                <input type="text" name = {'last_name'} onChange = {this.handleChange} className="form-control" value = {last_name} placeholder="xyz"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success btn-block btn-sm">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

Announcement.contextType = AppContext