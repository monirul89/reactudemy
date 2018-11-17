import React, { Component } from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
// JSON File
import JSON from './List.json'

//component
import Header from './component/header';
import NewsList from './component/news_list';
// style
import './component/style.css';

class App extends Component{
=======
import JSON from './db.json';

// COMPONENTS
import Header from './components/header';
import NewsList from  './components/news_list';

class App extends Component {
>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7

    state = {
        news:JSON,
        filtered:[]
    }
<<<<<<< HEAD
    getKeyword = (event) => {
        
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{

            return item.title.indexOf(keyword) > -1

=======

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7
        });
        this.setState({
            filtered
        })
<<<<<<< HEAD
    }

    render(){ 

        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news; 
        let resultTitle = '';

            if(newsFiltered.length !== 0 ){
                resultTitle = <h1>This is Your Search Result: </h1>;;
            }
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <div className="artical">
                    <div className="container">
                        <NewsList news={ newsFiltered.length === 0 ? newsWhole : newsFiltered }>
                           { resultTitle }
                        </NewsList>
                    </div>
                </div>
            </div>
        )
    }
=======
       // console.log(filtered)
    }

    render(){
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news
        return (
            <div>
                 <Header keywords={this.getKeyword}/>
                 <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
                    <h3>
                        The news are:
                    </h3>
                 </NewsList>
            </div>
        )
    }  
>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7
}


ReactDOM.render(<App/>,document.querySelector('#root'));
