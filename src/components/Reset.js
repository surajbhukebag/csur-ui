import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './AdminHeader';
import LeftNavigation from './LeftNavigation';
import {clearData} from './../actions';

// Import Style
import styles from './Admin.css';


class Reset extends Component { 
  render() {   
    return (
        <div>
  		    <Header />
          <div className={styles['headerMargin']}>          
            
              <div className="container-fluid">
                <div className="row" >
                  <LeftNavigation />
                  
                  
                <div className="col-md-9 pt-5"> <br/><br/>System Reset: Enter New Capacity for all trains <br/> <br/> 
                       <div className="form-group row">
                     
                         <label for="example-search-input" className="col-1 col-form-label">Capacity</label>
                          <div className="col-3">
                               <input className="form-control" type="text" id="example-date-input" onChange={(event) => {
                                                  this.setState({
                                                      capacity: event.target.value
                                                  }); }} />
                          </div>
                          
                          
                          <div className="col-3">
                              <div className="col-2"> 
                                <button type="button" class="btn btn-primary" onClick={() => {this.props.clearData(this.state)}}>System Reset</button>
                              </div>
                          </div>
                        </div>
                        <br/><br/>
                  {
                    this.props.msg !== undefined ?
                      <div className="form-group row">
     
                          <div className="col-8"><div className="alert alert-success" role="alert">{this.props.msg}</div> </div>
                          
                      </div>
                    : ''
                  }

                  </div>
               
                </div>

              </div>
          
  		  	
		    </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
 let msg = state.csur.systemReset;
 state.csur.systemReset = "";
  return {msg};
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearData : (data) => dispatch(clearData(data))
  };
};

Reset.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
