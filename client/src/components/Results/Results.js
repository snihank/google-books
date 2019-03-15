import React, { Component } from 'react';
import './results.css';
import Book from '../Book';
class Results extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <h5>Results</h5>
                    <Book
                        title={this.props.book.volumeInfo.title}
                        authors={[this.props.book.volumeInfo.authors]}
                        description={this.props.book.searchInfo.textSnippet}
                        img={this.props.book.volumeInfo.imageLinks.smallThumbnail}
                        link={this.props.book.searchInfo.textSnippet}
                    />
                </div>
            </div>


        )

    }
}

export default Results;