import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// JSON File
import JSON from './List.json'

//component
import Header from './component/header';
import List from './component/news_list';

class App extends Component{
    state = {
        news:JSON
    }
<<<<<<< HEAD


=======
>>>>>>> e0df715c95e70705f1f5952918aa627c9dd24929
    render(){
        var containerStyle = {
            width:'960px',
            margin: '0 auto'
        }
        return (
<<<<<<< HEAD
            <div className="container">
                <Header style={containerStyle}/>
                <div style={containerStyle}>
                    <NewsList news={ this.state.news} donkey="Me"/>
                </div>

=======
            <div>
                <Header/>
                <List news={this.state.news} donkey='Me' />
>>>>>>> e0df715c95e70705f1f5952918aa627c9dd24929
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
