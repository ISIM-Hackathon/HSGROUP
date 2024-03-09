import React from 'react';
import Maindata from '../Maindata';
import Mainitem from './Mainitem';

export default function Main() {
  return (
    <div>
      <div className="row">

        { Maindata.map((item, index) => (
           <div key={index} className="col-md-4">
            <Mainitem item ={item} />
          </div>
        ))}
      </div>
    </div>
  );

}

