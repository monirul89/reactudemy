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
        const value = event.target.value === '' ? false : true;
        this.setState({
            active: value,
            keywords: event.target.value
        });
    }
    render() {

        // const style = {
        //     background:'red'
        // }

        // if(this.state.keywords !== ''){
        //     style.background = 'blue'
        // }else{
        //     style.background = 'red'
        // }

        return (
            <header style={{background:'red'}}>
                <div className="logo">Logo</div>
                <input type="text" onChange={this.inputChangeHandler}/>
                <h2>{ this.state.title} {this.state.keywords }</h2>
            </header>
        );
    }
}

export default Header;