import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json'
//component
import Header from './component/header';
import NewsList from './component/news_list'


class  App extends Component{

    state = {
        news:JSON
    }

    render(){
        return (
            <div>
                <Header/>
                <NewsList news={ this.state.news} donkey="Me"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
