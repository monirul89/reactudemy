<<<<<<< HEAD


import React from 'react';
import NewsItem from './news_list_item';


const NewsList = (props)=>{

    const itms = props.news.map((item)=>{
        return(
            <NewsItem key={item.id} item = {item}/>
        )
    });

    return(
        <div>
                {props.children}
                {itms}
        </div>
    )    
=======
import React from 'react';

<<<<<<< HEAD


// import component
import ListItem from './news_list_item';

const NewsList = (props) => {

    var items = props.news.map((item) => {
        
        return (
             <ListItem key={item.id} item={ item } />
        )
    });
    return (
        <div>
            {items}
        </div>
    );
=======
const NewsList = (props)=>{

    const itms = this.props.map((item)=>{
        return(
            <div>
                {item.title}             
            </div>
        )
    })

    return (
        <div>
            itms
        </div>
    )
>>>>>>> e0df715c95e70705f1f5952918aa627c9dd24929
>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7
}

export default NewsList;