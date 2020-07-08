import React from 'react';

class Uploadb extends React.Component {

    render() {
      return (
  
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form method="post" action="#" id="#">
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple />
                </div>
              </form>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      );
    }
  };

  export default Uploadb