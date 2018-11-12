import React, { Component } from 'react';
import '../css/style.css';

class Header extends Component {

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         keywords: 'Hello'
    //     }
    // }
    state = {
        title: 'The keywords are: ',
        keywords: ''
    }

    inputChangeHandler = (event) =>{
        // console.log(event.target.value)
        this.setState({
            keywords: event.target.value
        })
    }
    render() {
        console.log(this.state.keywords)
        return (
            <header>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
                <h2>{ this.state.title} {this.state.keywords }</h2>
            </header>
        )
    }
}

export default Header;