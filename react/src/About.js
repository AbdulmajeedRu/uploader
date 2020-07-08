import React,  { useState }  from 'react';

import './App.css';

function About(props) {

  useState([])


  var files_list = props.list
  
    return (
      
      <div className="About">
       
       <div className="col-md-8">
         
          <table className="tablestyle" border="1">
            <thead>
          <tr><th>Name</th><th>Type</th><th>Date</th><th>Link</th></tr>
          </thead>
          <tbody>
          {files_list.map((entry, index) => (
              <tr key={index}>
              <td>{entry.fileName}</td><td>{entry.fileType}</td><td>{entry.date}</td><td><a href={entry.fileURL}>Download</a></td>
              </tr>
    ))}
    </tbody>
                </table>
                


          </div> 
      </div>
    );
  }
  
  export default About;