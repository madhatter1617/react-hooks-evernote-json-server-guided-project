import React,{useState} from "react";

function NoteEditor({note:{title, body}}) {
  const [newTitle, setTitle] = useState(title)
  const [newBody, setBody] = useState(body)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
}
const handleChangeBody = (e) => {
  setBody(e.target.value)
}

  return (
    <form className="note-editor">
      <input type="text" name="title" value ={title} 
      onChange={(e) => {handleChangeTitle(e)}} />
      <textarea name="body" value ={body} onChange={(e) => {handleChangeBody(e)}}  />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
