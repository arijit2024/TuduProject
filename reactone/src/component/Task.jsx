import React from 'react'

const Task = ({title,discrioction,deletetask,index}) => {
    return (
        <div>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discrioction}</p>
                </div>
                <div className="card-body">
                    <button className='btn-danger' onClick={()=>{
                        deletetask(index)
                    }}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Task;