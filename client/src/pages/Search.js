import React, { Component } from 'react'
import SearchBar from '../components/SearchBar/SearchBar';
import Results from '../components/Results/Results';
import API from '../API';


class Search extends Component {



    state = {
        results: null,
        search: null
    }
    // state = {

    //     results: {
    //         title: '',
    //         authors: '',
    //         description: '',
    //         imageLink: '',
    //         link: ''
    //     },
    //     search: ''

    // }

    componentDidMount() {
        if (this.state.search) {
            this.searchBooks({ search: this.state.search });
        }

    };

    handleInputChange = event => {

        this.setState({
            [event.target.name]: event.target.value,

        });

    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('clicked', this.state);
        this.searchBooks(this.state.search);
    }

    searchBooks = query => {
        console.log('SEARCH BOOKS QUERY', query);
        API.search(query)
            .then(res => {
                // console.log('RES: ', res)
                this.setState({

                    results: res.data.items


                })

            })
            .catch(err => console.log(err));
    }



    render() {
        return (
            <div>
                <SearchBar
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleFormSubmit}
                />
                {this.state.results && this.state.results.map(book => {
                    return <Results key={book.kind} book={book} />
                })}

            </div>
        );
    }
}

export default Search;
