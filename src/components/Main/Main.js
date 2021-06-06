import React from 'react';
import CardInfo from './CardInfo/CardInfo';
import CardInfoTwo from './CardInfoTwo.js/CardInfoTwo';
import Nav from './Nav/Nav';
import Personal from './Personal/Personal';

function Main() {
    return (
      <div className="col-span-8">
            <Nav />
            <Personal />
        <CardInfo />
        <CardInfoTwo/>
      </div>
    );
}

export default Main
