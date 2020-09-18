import React from 'react'



const Cards = (props) => {
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Cards