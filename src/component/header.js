import React from 'react';

const newYear = () => {
    const newDate = new Date();
    return newDate.getFullYear();
}

const user = {
    firstName:'Monirul',
    lastName:'Islam',
    age:'29'
}

<<<<<<< HEAD
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
=======
const Header = () => {
    return (
        <div>
            <div>
                This is my Header {newYear()}, {5 * 5}
            </div>
        </div>
    )
>>>>>>> e0df715c95e70705f1f5952918aa627c9dd24929
}

export default Header;