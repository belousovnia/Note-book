import React from 'react'

function RecordingTile(props) {

  // Функция которая открывает запись если кликнуть по ней.

  function openRecord(){
    const noteBook = JSON.parse(localStorage["noteBook"])      
    
    document.getElementById(                                   
      'headingId').innerHTML = props.nameRecord;
    document.getElementById(                                   
      'textFieldId').value = noteBook[props.nameRecord];
  };

  return(
    <div                                                        
      title={props.nameRecord}
      id={props.nameRecord} 
      className='recordingTile'
      onClick={openRecord}
    >
    {props.nameRecord}                                         
    </div>
  )
}

export default RecordingTile;