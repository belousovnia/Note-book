import React from 'react';
import RecordingTile from './RecordingTile';                          

function ListRecording(props) {
  return (
    <div className="ListRecordingMain" key="idListRecordingMain">
      <h1 className="headListRecording">                              
        Записи
      </h1>
      {
        props.nameRecord.map(i => <RecordingTile nameRecord={i}/>)   
      }
    </div>
  )
};

export default ListRecording; 