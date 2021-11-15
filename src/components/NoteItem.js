import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function NoteItem(props) {
    let { id,title, desc, tags } = props.notes
    const {notes,updateNote}=props
    const  context = useContext(noteContext)
    const {deleteNote}=context

    return (

        <div className="card shadow bg-white" style={{ borderRadius: "20px" }}>
            <div className="card-header bg-*">
                <div className="row">
                    <div className="col-8">
                        <h5>{title}</h5>
                    </div>
                    <div className="col-4 d-flex justify-content-end mt-2" >
                        
                        <i className="fas fa-edit mx-2" onClick={()=>updateNote(notes)} ></i>
                        <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(id)}}></i>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <p>{desc}</p>
                <div className="float-left">
                    <small>{tags}</small>
                </div>
            </div>
        </div>

    )
}
