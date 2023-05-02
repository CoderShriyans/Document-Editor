import React, { useState, useEffect, useRef } from "react";
import "./css/Editor.css";
import "./css/Dark.css";

const Editor = () => {
  const [editorState, setEditorState] = useState("");
  const editorRef = useRef(null);
  
  useEffect(() => {
    // Move the insertion point to the end of the editor
    const editor = editorRef.current;
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    editor.focus();
  }, []);

  

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
    editorRef.current.focus();
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
    editorRef.current.focus();
  };

  const handleUnderlineClick = () => {
    document.execCommand("underline", false, null);
    editorRef.current.focus();
  };

  const handleFontSizeChange = (event) => {
    document.execCommand("fontSize", false, event.target.value);
    editorRef.current.focus();
  };

  const handleFontColorChange = (event) => {
    document.execCommand("foreColor", false, event.target.value);
    editorRef.current.focus();
  };
  const handleAlignmentChange = (event) => {
    document.execCommand("justify" + event.target.value, false, null);
    editorRef.current.focus();
  };

  const handleImageInsertion = () => {
    const imageUrl = window.prompt("Enter image URL:");
    if (imageUrl) {
      document.execCommand("insertImage", false, imageUrl);
      editorRef.current.focus();
    }
  };
  const handleSaveClick = () => {
    const element = document.createElement("a");
    const file = new Blob([editorState], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "my-text.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <button className="bold-button" onClick={handleBoldClick}>
          <strong>B</strong>
        </button>
        <button className="italic-button" onClick={handleItalicClick}>
          <em>I</em>
        </button>
        <button className="underline-button" onClick={handleUnderlineClick}>
          <u>U</u>
        </button>
        <select onChange={handleFontSizeChange} className="selectEditor">
          <option value="">Size</option>
          <option value="1">8</option>
          <option value="2">10</option>
          <option value="3">12</option>
          <option value="4">14</option>
          <option value="5">18</option>
          <option value="6">24</option>
          <option value="7">36</option>
        </select>
        <select onChange={handleFontColorChange} className="selectEditor">
          <option value="">Color</option>
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </select>
        <select onChange={handleAlignmentChange} className="selectEditor">
          <option value="">Align</option>
          <option value="Left">Left</option>
          <option value="Center">Center</option>
          <option value="Right">Right</option>
          <option value="Justify">Justify</option>
        </select>
        <button className="image-button" onClick={handleImageInsertion}>
          <span className="material-icons">Image</span>
        </button>
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      </div>
      <div
        className="editor"
        ref={editorRef}
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: editorState }}
      />
    </div>
  );
};

export default Editor;
