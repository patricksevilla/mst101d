import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Things to Check Out on Civil Engineering!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Explore the different techniques of surveying'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Perks of having a technical drawing skills'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Setting up Civil Engineering Softwares'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience experimentating and implementation'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Having a good Social Skills in the Fieldwork'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
