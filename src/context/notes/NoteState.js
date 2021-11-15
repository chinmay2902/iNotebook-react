import React,{useState} from "react";
import NoteContext from "./noteContext";

const NoteState =(props)=>{

    const host="http://127.0.0.1:8000"
    
    const [notes,setNotes]=useState([])

    const getNotes=  async ()=>{
        const response = await fetch(`${host}/`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            }
        });
        const listNotes=await response.json()
       setNotes(listNotes)
        
    }

    const createNote= async (title,desc,tags)=>{
        const creator="1"
        const response = await fetch(`${host}/createNotes/`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({title, desc, tags,creator})
        });
        const data = await response.json()

        setNotes(notes.concat(data))
    }

    const updateNotes= async (id,title,desc,tags)=>{
        // console.log(title,desc,tags)
        const response = await fetch(`${host}/updateNotes/${id}/`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
            //   "authToken":localStorage.getItem('token')
            },
            body: JSON.stringify({title, desc, tags})
        });    
        const json = await response.json()
        console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
      
        for(let i=0;i<newNotes.length;i++){
            let temp=newNotes[i]
            if(temp.id===id){
                temp.title=title
                temp.desc=desc
                temp.tags=tags
                break
            }
        }
        setNotes(newNotes)     
    }

    const deleteNote= async(id)=>{
        const response = await fetch(`${host}/deleteNotes/${id}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        const data = notes.filter((note) => {
        return note.id !== id;
        });
        setNotes(data);
    }

    return (
        <NoteContext.Provider value={{notes,getNotes,createNote,updateNotes,deleteNote}}>
            {props.children}
        </NoteContext.Provider>

    )
}
export default NoteState