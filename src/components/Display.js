import React, { Component } from 'react';
import '../index.css';

export default class Display extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlight: false,
            loader: false,
            data: [],
            postData: [],
        }

    }

    //  Use of Life Cycle Method and fetch data from API 
    // The below life Cycle method is called after the component is rendered so you can place your fetched data in this method
    componentDidMount() {
        var info = this;
        var url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url).then(function (response) {
            return response.json()
        })
            .then(function (json) {
                info.setState({ data: json })
                info.setState({ loader: false })
            })
            .catch(function (ex) {
                console.log('data fetching failed', ex)
            })
    }

    handleClick(id) {
        this.setState({ loader: true })
        if (id > 0) { 
            this.setState({ highlight: true })
            var info = this;
            var url = 'https://jsonplaceholder.typicode.com/posts/' + id;
            fetch(url).then(function (response) {
                return response.json()
            })
                .then(function (json) {
                    info.setState({ postData: json })
                    info.setState({ loader: false })
                })
                .catch(function (ex) {
                    alert(ex)
                })
        } else { 
            this.setState({ highlight: false })
            this.setState({ loader: false })
        }

    }





    render() {
        const { loader } = this.state;

        if (loader) {
            return <div>loading..</div>;
        }

        const highlight = this.state.highlight;
        let showData = null;

        if (highlight) {
            const jsondata = this.state.postData;
            showData = <div >
                <div className="fullWidth dataListing">
                    <h2>
                        {jsondata.title}</h2>
                    <p class="mb-4">{jsondata.body}</p>
                    <div class="text-center">
                        <button className="btn-back" onClick={() => this.handleClick(0)}>BACK</button>
                    </div>
                </div>
            </div>
        }
         else {
            const jsondata = this.state.data;
            showData = jsondata.map((jsond, index) => {
                return (
                    <div className="fullWidth dataListing" key={index}>
                        <h2 onClick={() => this.handleClick(jsond.id)} id={jsond.id}>{jsond.title}</h2>
                        <p>{jsond.body}</p>
                    </div>
                )
            })
        }
        return (
            <>
                <div >
                    <div className="mainDiv">
                        <div className="custom-container">
                            <div className="fullWidth">
                                {showData}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
