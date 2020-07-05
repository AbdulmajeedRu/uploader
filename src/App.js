import React from 'react';
import Title from './Title';
import Aboutus from './Aboutus';
import './App.css';
const mystyle = {
  color: "white",
 
  padding: "10px",
  fontFamily: "Arial"
};

function App() {
  return (
    <div className="App">
      <Title />
      <header className="App-header">
       {
       
  
        <div className="container">
          <div className="row centerr">
            <div className="col-md-8">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" />
                </div>
              </form>
            </div>
            
            </div>
            <button onClick="" className="button1">Upload</button>
          </div>


           

        
      
    }
 
       
     </header>
      <Aboutus/>
    </div>
  
  );
}

export default App;
