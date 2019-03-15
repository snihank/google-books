import React, { Component } from 'react';

class SearchBar extends Component {



    render() {
        return (
            <div className="container">
                <h4>Book Search</h4>
                <form className="form-group">
                    <label>Book</label>
                    <input ref={this.myform}
                        type="text"
                        onChange={this.props.onChange}
                        value={this.props.search}
                        name='search'
                        id='search'
                        className="form-control"
                        placeholder="Type Your Search" />
                    <button
                        type='submit'
                        onClick={this.props.onSubmit}
                        className="btn btn-primary">
                        Search
                </button>
                </form>
            </div>
        )
    }
}


export default SearchBar;
