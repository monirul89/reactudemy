import React from 'react';

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
}

export default NewsList;