import React, { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext'

export default function CreateNote() {
    const  context = useContext(noteContext)
    const {createNote}=context
    
    const [note,setNote]=useState({title:"",desc:"",tags:""})

    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
    const handleClick=(e)=>{
        e.preventDefault()
        createNote(note.title,note.desc,note.tags)
    }
    return (
        <div className="container">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Desc</label>
                    <input type="text" className="form-control" id="desc" name="desc"onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="tags" name="tags" onChange={onChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
