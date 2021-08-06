import React,{useState} from "react";

function NoteEditor({note:{title, body},setNoteEd, setNotes,noteEd, notes}) {
  const [newTitle, setTitle] = useState(title)
  const [newBody, setBody] = useState(body)

  const editNote = { title: newTitle, body: newBody };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
}
  const handleChangeBody = (e) => {
    setBody(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
		setNotes((p) => {
			const index = p.indexOf(notes)
			const spreadNotes = [ ...p ]
			spreadNotes[index] = editNote
      console.log("well shit")
			return spreadNotes;
})
  }
	
  return (
    <form className="note-editor">
      <input type="text" name="title" value ={newTitle} 
      onChange={(e) => {handleChangeTitle(e)}} />
      <textarea name="body" value ={newBody} onChange={(e) => {handleChangeBody(e)}}  />
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={handleSubmit}  />
        <button type="button" >Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
