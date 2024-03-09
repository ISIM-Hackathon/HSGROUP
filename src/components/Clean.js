
import React, { useState, useEffect } from "react";

export default function Clean() {
    const [text1, setext1] = useState("");
  const [text2, setext2] = useState("");
  const [text3, setext3] = useState("");

  const handletoclear = (event) => {
    let newtext = "";
    setext1(newtext);
    setext2(newtext);
    setext3(newtext);
   
        
  };
 
  const handleonchange1 = (event) => {
    setext1(event.target.value);
  };
  const handleonchange2 = (event) => {
    setext2(event.target.value);
  };
  const handleonchange3 = (event) => {
    setext3(event.target.value);
  };

  return (
    <>
    <div className="report">
     

      <div className="container my-3 reportbox shadow p-3 mb-5 bg-white rounded">
          <div className="imgbox  my-2">
              <img src="broom.png" alt=""  className="lostimage"/><br />
              <h4>Clean and shine</h4></div>
      
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>

          <input
            type="text"
            className="form-control inputbox"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            value={text1}
            onChange={handleonchange1}
          />
        </div>
        <div className="my-4 ">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control inputbox"
            id="exampleFormControlInput1"
            placeholder="Enter your e-mail"
            value={text2}
            onChange={handleonchange2}
          />
        </div>
        <div className="my-4">
          <label for="exampleFormControlTextarea1" className="form-label">
            What Happend?
          </label>
          <textarea
            className="form-control inputbox"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text3}
            onChange={handleonchange3}
          ></textarea>
        </div>
        <div className="mb-3">
          <label for="formFile" className="form-label">
            Uplaod image of item!
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className="container align-items-center btnbox">
          <button className="btn btn-primary"onClick={handletoclear} data-target="success" data-toggle="alert"type="submit">Submit</button>
        </div>
      </div>
    </div>
  </>
  );
}
