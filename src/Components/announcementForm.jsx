import React from 'react'

export default class Announcement extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            toWhom:'',
            date:'',
            announcement:''
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
        const {toWhom, date, announcement} = this.state
        let obj = {
            toWhom:toWhom,
            date:date,
            announcement:announcement
        }
        let allProcess =  JSON.parse(localStorage.getItem('currentAndAllProcess')) || []
        allProcess.push(obj)
        localStorage.setItem('currentAndAllProcess', JSON.stringify(allProcess))
        this.automate()
    }
    render(){
        const {toWhom, date, announcement} = this.state
        return(
            <div className = 'card col-6 shadow-sm mt-5'>
                <div className = 'card-body'>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">To whom</label>
                                <input type="text" name = {'toWhom'} onChange = {this.handleChange} className="form-control"  id="inputEmail4" value = {toWhom} placeholder="Respected xyz"></input>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Date</label>
                                <input type="text" name = {'date'} onChange = {this.handleChange} className="form-control"  id="inputPassword4" value = {date} placeholder="29/08"></input>
                            </div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="textarea">Announcement</label>
                            <textarea  name = {'announcement'} onChange = {this.handleChange} class="form-control"  id="textarea" value = {announcement} rows="3" placeholder = 'the following saturday...'></textarea>
                        </div>
                        <button type="submit" class="btn btn-success btn-block btn-sm">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

