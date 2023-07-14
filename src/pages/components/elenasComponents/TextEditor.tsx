import React, {useState} from 'react';
// import {ReactQuill} from 'react-quill';
import "react-quill/dist/quill.snow.css";
import dynamic from 'next/dynamic';

// import "./custom-quill.css"

const ReactQuill = dynamic(
  () => import('react-quill'),
  { ssr: false }
);

const TextEditor = () => {
  const [value, setValue] = useState ('');
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image'],
  ['clean']              
  ];
  const editorModule = {
    toolbar: toolbarOptions,
  };
  return (
    <div>
      <ReactQuill 
      modules = {editorModule}
      theme = "snow"
      value={value}
      />
    </div>
  )
}

export default TextEditor