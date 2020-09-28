import React from 'react';

function ListItem({shop}) {

  const navigateToShop = () => {
    const shopLocation = `${shop.latitude},${shop.longitude}`;
    if ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1) || (navigator.platform.indexOf("iPad") != -1) || (navigator.platform.indexOf("Android") != -1)) {
      window.open(`maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${shopLocation}`);
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${shopLocation}`);
    }
  }

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <img
            className="card-img-top"
            src="https://via.placeholder.com/120x80"
            alt="Card image"/>
          <div className="card-body">
            <h4 className="card-title">{shop.storeName}</h4>
            <p className="card-text">{shop.address}</p>
            <a onClick={()=>navigateToShop()} className="btn btn-primary">Navigate</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem;