import React from 'react';

const TrialForm = () => {
  return (
    <div className="trial-form container inputForm" style={{ backgroundColor: "white", borderRadius: "15px", marginBottom: "30px", boxShadow: "0px 10px 9px rgba(0, 0, 0, 0.1)" }}>
      <div style={{ backgroundColor: "#396AA6", width: "100%", textAlign: "center", borderRadius: "15px 15px 0 0", color: "white" }}>
        <h3 style={{ paddingTop: "20px", marginBottom: "10px" }}>Enjoy your free trial</h3>
        <h6 style={{ paddingBottom: "10px" }}>Limited slots only</h6>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">First Name :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Second Name :</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Phone number :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email ID :</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Comapany Name :</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Job Role : </label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
        </div>
        <button type="button" className="btn btn-primary btn-block" style={{ marginBottom: "4%" }}>Submit</button>
      </form>
    </div>
  );
};

export default TrialForm;
