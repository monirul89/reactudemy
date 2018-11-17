import React from 'react';
<<<<<<< HEAD



const NewsItem = ({item})=>{

    return (
 
        <div className="blogPost">
            <h2>{item.title}</h2>
            <div>
                <p>{item.shortDescription}</p>
                <p>{item.longDescription}</p>
            </div>
=======
import '../css/style.css';

const ListItem = ({item})=>{    
    var bottomStyle = {
        padding : '0 0 20px 0',
        borderBottom:'1px solid #ddd'
    }

    return(
        <div style={ bottomStyle }>
            <h2> { item.title } </h2>
            <p>{ item.feed }</p>
>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7
        </div>
    )
}

<<<<<<< HEAD
export default NewsItem;
=======
export default ListItem;
















>>>>>>> f438cbbe8cb4284edef76e3efe4f6d8c093feff7

