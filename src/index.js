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
        var containerStyle = {
            width:'960px',
            margin: '0 auto'
        }
        return (
            <div className="container">
                <Header style={containerStyle}/>
                <div style={containerStyle}>
                    <NewsList news={ this.state.news} donkey="Me"/>
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
