import React, { Component } from 'react';

export default class Book extends Component {

    render() {


        return (

            <li className="list-group-item">
                <h5>{this.props.title}</h5>
                {this.props.authors.map(author => <h6>{author}</h6>)}
                <p style={{ float: "right" }}>{this.props.description}</p>
                <img src={this.props.img} alt={this.props.img} />
                <button className='btn btn-success'><a href={this.props.link} /> View</button>
                <button onClick={this.saveBook} className='btn btn-dark'>Save</button>
            </li>


        );
    }
}
