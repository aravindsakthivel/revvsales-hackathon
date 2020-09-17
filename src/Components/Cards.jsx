import React from 'react'


const Cards = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Cards