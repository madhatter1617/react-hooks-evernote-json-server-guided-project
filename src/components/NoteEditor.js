import React,{useState} from "react";

function NoteEditor({note:{title, body},setNoteEd, setNotes,noteEd, notes, newEdit}) {
  const [newTitle, setTitle] = useState(title)
  const [newBody, setBody] = useState(body)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
}
  const handleChangeBody = (e) => {
    setBody(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEdit)
    const index = notes.map(noot => noot.id).indexOf(newEdit.id)
		setNotes(Object.values({...notes,[index]: {...notes[index],title:newTitle, body: newBody }}))
  }
  const cancelBtn = () => {
    setNoteEd(false);
  }

	
  return (
    <form className="note-editor">
      <input type="text" name="title" value ={newTitle} 
      onChange={(e) => {handleChangeTitle(e)}} />
      <textarea name="body" value ={newBody} onChange={(e) => {handleChangeBody(e)}}  />
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={handleSubmit}  />
        <button type="button" onClick={cancelBtn} >Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
