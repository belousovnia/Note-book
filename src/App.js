import React, { useState } from 'react'
import ListRecording from './components/ListRecording';  
import TextList from './components/TextList';            

//    Создание и проверка наличия переменной для хранения записей в локальном 
// хранилище. Если в локальном хранилище уже есть элемент который хранит 
// записи, то этот этап пропускается, если нет то создается новый 
// элемент с одной тестовой записью.
if (localStorage["noteBook"] === undefined) {
  let objRecord = {
    testName: "просто текст"
  };
  let jsonRecord = JSON.stringify(objRecord);
  localStorage.setItem("noteBook", jsonRecord) 
};

  
let record = JSON.parse(localStorage["noteBook"]); 
let nameList = [];                                 

for (var nameRecord in record){
   nameList.push(nameRecord);
 };

// -----------------------------------------------------------------------

function App() {

  const [count, setCount] = useState(nameList.sort());                
  
  // Функция проверки имени в списке записей.
  // Возвращает false если записи нет или true если есть.

  function checkName(nameCheckRecord){
    if (count.indexOf(nameCheckRecord) === -1){
      return false
    } else {
      return true
    };
      
  }

  //    Функция сохраниния записи, также используется для редактирования новых записей 
  // путем сохраниения новых данных поверх предыдущих. Функция передается в элемент TextList.

  function saveRecord() {                                             
    // Получения имени новой записи от пользователя. 
    let defaultName = document.getElementById('headingId').innerHTML;
    let nameRecord = prompt("Ведите название записи", defaultName);
    
    // Проверка есть ли уже запись с таким именем. 
    if (checkName(nameRecord) === true){                              
      if (window.confirm(                                               
        `Вы уверены что хотите перезаписать запись ${nameRecord}?`     
      ) === false){
        // задается значение null чтобы дальше функция не пошла.
        nameRecord = null;                                            
      }                                                                
    };

    // if проверяет не нажал ли пользователь отмену в prompt.
    if (nameRecord != null){                                          
      let record = JSON.parse(localStorage["noteBook"]);              
      let saveText = document.getElementById('textFieldId').value;    

      record[nameRecord] = saveText;                                   
      localStorage["noteBook"] = JSON.stringify(record);               
      
      let listName = count;

      if (listName.includes(nameRecord) === false){                  
        setCount(count.concat(nameRecord));                           
      };                                                             
    };  
  };

  // Функция удаления записи для передачи и использования в TextList.
  // Удаляет активную запись.

  function deleteRecord(){
    let defaultName = document.getElementById('headingId').innerHTML;
  
    if (window.confirm(                                               
        `Вы уверены что хотите удалить запись ${defaultName}?`
      ) === true){
        
      let record = JSON.parse(localStorage["noteBook"]);               
      delete record[defaultName]                                       
      localStorage["noteBook"] = JSON.stringify(record);               

      setCount(count.filter(i => i !== defaultName));                 
      newRecord();                                                    
    };
  };
  
  // Функция создания новой записи для использования в TextList.

  function newRecord(){
    document.getElementById('headingId').innerHTML  = 'Новая запись';  
    document.getElementById('textFieldId').value = '';                 
  };

  // ------------------------------------------------------------------
  
  return (
    <div>
      <div className='styleHeader'></div>
      <div className='styleBackground' >
        <ListRecording                                                
          nameRecord={count.sort()}                                   
        />                                                            
        <TextList                                                     
          saveRecord={saveRecord}                                     
          newRecord={newRecord}                                        
          deleteRecord={deleteRecord}                                  
        />
      </div> 
    </div>
  );
};

export default App;
