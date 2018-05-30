import React from 'react';
import './main.css';
import OneContact from './OneContact';

const GetContact = ({ match: { params: { id } } }) => {
    const numID = Number(id);
    return (
        <OneContact id={numID} />
    )

}

export default GetContact;