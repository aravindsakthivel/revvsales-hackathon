import React from 'react'

const Form = (props) => {
    return(
        <form onSubmit = {props.operationForm}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    name = {props.name[0]} 
                    value = {props.value[0]}
                    onChange = {props.operationsInp} 
                    className="form-control"  
                    placeholder="Enter email" 
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                    type="password" 
                    name = {props.name[1]} 
                    onChange = {props.operationsInp} 
                    className="form-control" 
                    value = {props.value[1]}  
                    placeholder="Password" 
                />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">Submit</button>
        </form>
    )
}
export default Form
