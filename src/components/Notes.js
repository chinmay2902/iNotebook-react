import React, { useEffect, useState ,useContext, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

export default function Notes() {
    const context = useContext(noteContext)
    const { notes, getNotes ,updateNotes} = context
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note,setNote]=useState({eid:"",etitle:"",edesc:"",etags:""})

    useEffect(() => {
        getNotes()
    }, [])
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({eid:currentNote.id,etitle:currentNote.title,edesc:currentNote.desc,etags:currentNote.tags})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]: e.target.value})
    }
    const handleClick=(e)=>{
        // e.preventDefault()
        refClose.current.click()
        updateNotes(note.eid,note.etitle,note.edesc,note.etags)
        
    }
    return (
        <>
            <div className="container w-75 mt-5">

                <h3>Your Notes</h3>

                <div className="row">
                    {notes.map((note)=>{
                        return <div className="col-md-3 my-3">
                            <NoteItem key={note.id} notes={note} updateNote={updateNote} />
                        </div>
                    })}
                </div>
            </div>


            <button type="button" className="btn btn-primary" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: "none" }}>
                Edit
            </button>


            <div className="modal fade" id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <form>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edesc" className="form-label">Desc</label>
                                    <input type="text" className="form-control" id="edesc" name="edesc" onChange={onChange} value={note.edesc} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etags" className="form-label">Tags</label>
                                    <input type="text" className="form-control" id="etags" name="etags" onChange={onChange} value={note.etags} />
                                </div>

                                
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
