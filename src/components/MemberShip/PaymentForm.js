import React from 'react';
import './PaymentForm.scss';

const PaymentForm = () => {
  return (
    <>
      <form id="form-box">
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
              <label className="font-weight-bold ml-3" htmlFor="exampleRadios1" id="credit-card-txt">Credit Card</label>
            </div>
          </div>
          <div className="form-group col-md-6 d-flex justify-content-end">
            <img className="p-1" src="  https://i.ibb.co/C5SGCHT/credit-cards-visa.png" alt="" />
            <img className="p-1" src="https://i.ibb.co/9vSLLdR/credit-cards-amex.png" alt="" />
            <img className="p-1" src="  https://i.ibb.co/YdyGZVq/credit-cards-mastercard.png" alt="" />
          </div>
        </div>
        <div className="form-group" id="border-box-margin">
          <label htmlFor="card-number" className="text-uppercase">Card Number</label>
          <input type="text" className="form-control" id="card-number" placeholder="0000 0000 0000 0000" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name-on-card" className="text-uppercase">Name on card</label>
            <input type="text" className="form-control" id="name-on-card" />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="expiry-date" className="text-uppercase">Expiry date</label>
            <input type="text" className="form-control" id="expiry-date" placeholder=" MM / YY " />
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="cvv-code" className="text-uppercase">Cvv code</label>
            <input type="text" className="form-control" id="cvv-code" />
          </div>
        </div>
      </form>
      <form id="form-box">
        <div className="form-row">
          <div className="form-group col-md-6">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="" />
              <label className="font-weight-bold ml-3" htmlFor="exampleRadios1" id="credit-card-txt">PayPal</label>
              <p className="text-body">You will be redirected to PayPal website to complete your purchase securely</p>
            </div>
          </div>
          <div className="form-group col-md-6 d-flex justify-content-end">
            <img className="p-1" src="https://i.ibb.co/z4HhpCZ/Bitmap.png" alt="" width="max-content" height="max-content" />
          </div>
        </div>
      </form>

    </>
  );
};

export default PaymentForm;