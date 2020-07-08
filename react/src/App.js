import React,  { useState } from 'react';
import Title from './Title';
import Aboutus from './Aboutus';
import About from './About';
import './App.css';
import './Aboutus.css'
import { Button } from 'reactstrap';
const mystyle = {
  color: "white",
 
  padding: "10px",
  fontFamily: "Arial"
};

var api_url = "https://m7ammad.com/cv-api"

//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}


function App() {

  const forceUpdate = useForceUpdate()
  let needsRefresh = true;
  function ValidateFile() {
    var myfile = document.getElementById("file").files[0]
    if(typeof myfile == "undefined")
      return false; // return if not set

    let fileExtension = myfile.name.split(".")
    fileExtension = fileExtension[fileExtension.length-1]

    let accepted_types = ["png", "doc", "docx", "pdf", "jpg"]

    // Check type
    if(accepted_types.indexOf(fileExtension) < 0)
    {
        alert("Allowed types are: png, doc, docx, pdf, jpg")
        document.getElementById("file").value = ""
        return false;
    }

    // Check Size
    var FileSize = myfile.size / 1024 / 1024; // in MB
    if (FileSize > 4) {
      alert("File size must smaller than 4 MB")
      document.getElementById("file").value = ""
      return false;
    }

    return true;

}
var files_list = [] //{fileName: "Example", fileType: "Example Type", url: "http://localhost:5000/", date: "1970"}
 
function send_file() {
    var myfile = document.getElementById("file").files[0]
    if(ValidateFile)
    {
      let xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4)
        { 
          alert("File uploaded successfully")
          
          console.log(this.responseText)
          document.getElementById("file").value = ""
          refreshTable()

        }
      }

      xhr.open("post", api_url+"/uploadDocument")
      var formData = new FormData();
      formData.append("myCVFile", myfile);
      xhr.send(formData);
    }
  }

  function refreshTable() {
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
      if(this.status == 200 && this.readyState == 4)
      { 
        localStorage.setItem("files_list", this.responseText)
        files_list = JSON.parse(this.responseText)
        
      }
    }

    xhr.open("get", api_url+"/listFiles")
    xhr.send();

  }

  if(!localStorage.getItem("files_list"))
    {
      refreshTable()
    }
    else
    files_list = JSON.parse(localStorage.getItem("files_list"))
    
    
  


  return (
    <div className="App">
      <Title />
      <header className="App-header">
      <About list={files_list} /> 
       {
       

        <div className="container">
          
          <div className="row centerr">
            
            <div className="col-md-8">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" id="file" name="myCVFile" onChange={ValidateFile} className="form-control" />
                </div>
              </form>
            </div>
            
            </div>
            <button onClick={send_file} className="button1">Upload</button>
            


            <div>
              <br></br>
              <br></br>
              
    <h1 className="About2"> About Us </h1>
    <div className="About" >
    
      
       {
            <div>
      <p> </p>
    
    <p> </p>
    <h3> Group2 Members: </h3>
    <p> </p>
    <h5> - Abdulmajeed Alrugaye  (Leader) </h5>
    <p>  - Raghad Al-Quraishi  ,  Salma khalid </p> 
    <p>  - Zaid Al-Harbi  ,  Abdullah Al-Rumayh</p>
   
    </div>
  


        
      
    }

       
      
    </div>
          </div>
          


           </div>

        
      
    }
 
       
     </header>
      
      
    </div>
  
  );
}


export default App;
