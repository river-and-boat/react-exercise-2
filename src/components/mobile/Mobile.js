import React from 'react';
import './Mobile.css';

// eslint-disable-next-line no-undef
const pic = require('../../assets/product_image_placeholder.png');

const Mobile = (props) => {
  // eslint-disable-next-line react/prop-types
  const { mobiles, type, method } = props;
  return (
    <div className="col-md-12">
      <br />
      <span className="col-md-12 label label-info">
        {/* eslint-disable-next-line react/prop-types */}
        <h2>{type.toUpperCase()}</h2>
      </span>
      <br />
      {FilterByType(mobiles, type, method)}
    </div>
  );
};

const FilterByType = (mobiles, type, method) => {
  const result = mobiles
    .filter((m) => m.category === type)
    .map((item, index) => {
      return (
        <table className="col-md-4" key={index}>
          <tr className="col-md-12">
            <td className="col-md-12">{item.name}</td>
          </tr>
          <tr className="col-md-12">
            <td className="col-md-12">
              <img className="picDemo" src={pic} />
            </td>
          </tr>
          <tr className="col-md-12">
            <td className="col-md-4">
              <a>{item.price}</a>
            </td>
            <td className="col-md-8">
              <a id="addCart" className="btn btn-success" onClick={method}>
                add to cart
              </a>
            </td>
          </tr>
        </table>
      );
    });
  return result;
};

export default Mobile;
