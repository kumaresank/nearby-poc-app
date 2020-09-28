import React from 'react';

function Search() {
    return (
        <div className="container-fluid">
            <div className="row form-input-group">
                <div className="col-12">
                    <input className="form-control" placeholder="PIN Code" type="text"/>
                </div>
            </div>
            <div className="row form-input-group">
                <div className="col-12">
                    <input className="form-control" placeholder="Enter Item" type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Search;