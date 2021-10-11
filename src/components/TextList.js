import React from 'react'

function TextList(props){

  return (
    <div className="TextList">

        <h1                            
          className="headTextList" 
          id="headingId" 
          contenteditable="true"
        >
          Новая запись
        </h1>

        <textarea                     
        className="textField"
        id="textFieldId"
        autofocus
        >
        </textarea>

        <button                       
          onClick={props.saveRecord} 
          className="batton"
        >
          Сохранить
        </button>

        <button                        
          onClick={props.newRecord} 
          className="batton"
        >
          Новая запись
        </button>

        <button                        
          onClick={props.deleteRecord} 
          className="batton"
        >
          Удалить запись
        </button>

    </div>
  )
};

export default TextList;