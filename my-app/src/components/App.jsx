import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";
import Undo from "./Undo";


function App(){

   const [notes,setNotes] = useState([]);

   function addNote(newNote){
      setNotes(prevNotes => {
        return [...prevNotes, newNote]
      });
   }

   const [undo,setUndo] = useState([]);

   function deleteNote(id){
      
      // setUndo( () => {
      //    return noteItem[id];
      // })

      setNotes(prevNotes => {
         return prevNotes.filter((noteItem , index) => {
            return index !== id;
         } )
      })
      setUndo(prevNotes => {
         return prevNotes.filter((noteItem , index) => {
            return index == id;
         } )
      })
   }

   function undoNote(){
      return addNote(undo);
   }

   return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        <Undo onUndo = {undoNote}/>
         {notes.map( (noteitem , index) => {
                        return <Note
                           key = {index}
                           id = {index}
                           title = {noteitem.title}
                           content = {noteitem.content} 
                           onDelete = {deleteNote}
                        />
         })}
        <Footer />
   </div>
};

export default App;
