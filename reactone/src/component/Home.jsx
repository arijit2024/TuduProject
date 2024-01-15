import React, { useEffect, useState } from 'react';
import Task from './task';

const Home = () => {

    

    const [task, setTask] = useState(localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []);
    const [title, setTitle] = useState('');
    const [discrioction, setDiscrioction] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        setTask([...task, { title, discrioction}]);
        setTitle("");
        setDiscrioction("");
    }

    const deletetask = (index) => {
        const folterarr = task.filter((val,i) => {
            return i !== index;
        })
        console.log(folterarr)
        setTask(folterarr);
    }

    useEffect(() => {
        localStorage.setItem("task",JSON.stringify(task))
    },[task]);

    return (
        <div>
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Type</label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea className="form-control" rows="3" value={discrioction} onChange={(e) => setDiscrioction(e.target.value)}></textarea>
                    </div>
                    <button className='btn-success' >Submit</button>
                </form>
                {task.map((item, index) => (
                    <Task key={index} title={item.title} discrioction={item.discrioction} deletetask={deletetask} index={index}/>
                ))}
            </div>
        </div>
    )
};

export default Home;
