import React from 'react';
import './MemberShip.scss';
const MemberShipForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label forHtml="first-name">First Name</label>
          <input type="text" className="form-control" id="first-name" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" className="form-control" id="last-name" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="mobile-number">Mobile Number</label>
          <input type="text" className="form-control" id="mobile-number" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-2">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <select id="date-of-birth-state" className="form-control">
            <option>Day</option>
            <option>1</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="date-of-birth">Month</label>
          <select id="date-of-birth-state" className="form-control">
            <option>Month</option><option>1</option>
          </select>
        </div>
        <div className="form-group col-md-2">
          <label htmlFor="inputState">Year</label>
          <select id="inputState" className="form-control">
            <option>Year</option>
            <option>2020</option>
          </select>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="gender">Gender</label>
          <select id="gender-state" className="form-control">
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Address line 1</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">Country/Region</label>
          <input type="text" className="form-control" id="country" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="postcode">Postcode</label>
          <input type="text" className="form-control" id="postcode" />
        </div>
      </div>
    </form>
  );
};

export default MemberShipForm;