import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import img from './static/images/2.png'

export default function About() {
    const obj=useContext(noteContext)
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col-8">
            <img src={img} className="img-fluid rounded" alt="Chinmay" style={{height:"500px", width:"800px"}} />
                </div>
                <div className="col-4 text-center">
            <h3>Creater is {obj.creator}</h3>
                </div>
            </div>
        </div>

    )
}