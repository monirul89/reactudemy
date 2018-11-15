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
    render(){
        return (
            <div>
                <Header/>
                <List news={this.state.news} donkey='Me' />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
