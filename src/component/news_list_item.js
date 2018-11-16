import React from 'react';
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
        </div>
    )
}

export default ListItem;

















