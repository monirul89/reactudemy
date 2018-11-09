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

const Header = () => {
    return (
        <div>
            <div>
                This is my Header {newYear()}, {5 * 5}
            </div>

            <div>
                <li>User Name : { user.firstName }</li>
                <li>User Last Name : { user.lastName }</li>
                <li>User Age : { user.age }</li>
            </div>

        </div>
    )
}

export default Header;