import React from 'react';
import ListItem from './ListItem';
import shops from './../data.json';

function List() {
  return (
    <div className="container-fluid list-container">{shops.map((shop,index) => (<ListItem shop={shop} key={index}/>))}</div>
  )
}

export default List;