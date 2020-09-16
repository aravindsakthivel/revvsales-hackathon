import React from 'react'


const Forms = (props) => {
    return(
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" value = {props.value[0]} placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" value = {props.value[1]}  placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-secondary btn-block">Submit</button>
        </form>
    )
}

export default Forms