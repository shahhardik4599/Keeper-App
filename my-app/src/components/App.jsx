import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";



function App(){
   return <div>
        <Header />
        <CreateArea />
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
