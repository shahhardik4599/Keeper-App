import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";



function App(){

   const [notes,setNotes] = useState([]);

   function addNote(newNote){
      setNotes(prevNotes => {
        return [...prevNotes, newNote]
      });
   }

   return <div>
        <Header />
        <CreateArea onAdd={addNote}/>
         {notes.map( noteitem => {
                        return <Note
                           key = {noteitem.key}
                           title = {noteitem.title}
                           content = {noteitem.content} 
                        />
         })}
        <Footer />
   </div>
};

export default App;
