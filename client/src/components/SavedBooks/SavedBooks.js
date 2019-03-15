import React from 'react';
import Results from '../Results/Results';

function SavedBooks({ children }) {
    return (

        <div className="container">
            <div className="row">
                <h4>Saved Books</h4>

                <button className='btn btn-success'>View</button>
                <button className='btn btn-danger'>Delete</button>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item">{children}</li>
                </ul>
            </div>
        </div>
    )
}

export default SavedBooks;