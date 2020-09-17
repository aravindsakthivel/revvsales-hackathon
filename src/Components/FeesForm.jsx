import React from 'react'
import axios from 'axios'

export default class FeesForm extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            term1:'',
            fees1:'',
            term2:'',
            fees2:'',
            term3:'',
            fees3:'',
            term4:'',
            fees4:'',
            data:[]
        }
    }


    handleChange = (e)  => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }


    automate = async() => {
        const response = await axios.get('http://localhost:5000/screenshot')
        console.log(response)
    }

    handleSubmit = () => {
        const {term1, fees1, term2, fees2, term3, fees3, term4, fees4} = this.state
        let obj = {
            term1:term1,
            fees1:fees1,
            term2:term2,
            fees2:fees2,
            term3:term3,
            fees3:fees3,
            term4:term4,
            fees4:fees4
        }
        let allProcess =  JSON.parse(localStorage.getItem('currentAndAllProcess')) || []
        allProcess.push(obj)
        localStorage.setItem('currentAndAllProcess', JSON.stringify(allProcess))
        this.automate()
    }


    render(){
        const {term1, fees1, term2, fees2, term3, fees3, term4, fees4} = this.state
        return(
            <div className = 'card col-6 shadow-sm mt-5'>
                <div className = 'card-body'>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name = "term1" onChange = {this.handleChange} value = {term1} className="form-control" placeholder="term-1"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name = "fees1" onChange = {this.handleChange} value = {fees1} className="form-control" placeholder="1234"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name = "term2" onChange = {this.handleChange} value = {term2} className="form-control" placeholder="term-1"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name = "fees2" onChange = {this.handleChange} value = {fees2} className="form-control" placeholder="1234"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name = "term3" onChange = {this.handleChange} value = {term3} className="form-control" placeholder="term-1"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name = "fees3" onChange = {this.handleChange} value = {fees3} className="form-control" placeholder="1234"></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="text" name = "term4" onChange = {this.handleChange} value = {term4} className="form-control" placeholder="term-1"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="text" name = "fees4" onChange = {this.handleChange} value = {fees4} className="form-control" placeholder="1234"></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block btn-success btn-sm">Send</button>
                    </form>
                </div>
            </div>
        )
    }
    
}
