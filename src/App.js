import React, {useState} from 'react';
import logo from './photo.png';
import like from './like.png';
import image from './comment.png';
import './App.css';
import AddComment from './components/add-comment';

function App() {

  return (
    <div className="App">
      <div className='header'>
        <img src={logo} alt="manager" className='manager-photo' />
		  	<div>
		  		<h1>Вероника Ростова</h1>
		  		<p className='header-status'>Менеджер по продажам</p>
		  		<p className='header-offer'>Подберу для вас самые лучшие предложения. <br />
		  			Мои услуги абсолютно бесплатны</p>
			  </div>
      </div>
		  <div className='services'>
        <p className='services-header'> Услуг </p>
        <div className='service-table'>
          <div className='service-names'>
            <p className='service-booking'> Ручное бронирование </p>
            <p className='service-tours'> Пакетные туры </p>
            <p className='service-hotels'> Отели </p>
          </div>
          <div className='service-numbers'>
            <p className='service-number'> 11 </p>          
            <p className='service-number'> 3 </p>          
            <p className='service-number'> 1 </p>
          </div>
        </div>
			  <div className='all-services'>
          <p> Всего </p>
          <p className='service-number'> 15 </p>
        </div>
		  </div>
      <div className='reviews' id='reviews'>
        <div className='reviews-header'>
          <div className="reviews-header_links">
            <h1> Последние отзывы </h1>
  		    	<a href="#"> Все отзывы </a>
          </div>
          <div className="reviews-header_images">
            <img src={like} alt="like" /> <p>131</p>
            <img src={image} alt="comment" /> <p>14</p>
          </div>      
      </div>
        <section className="comment-item">
            <div className="comment-item_info">
              <h2> Самуил </h2>
              <p> 13 октября 2014 </p>
            </div>
            <div className="comment-item_text">
              <span />
              <p> Привет, Верунь! ниче себе ты крутая. фотка класс!!!! </p>
            </div>
        </section>
        <section className="comment-item">
            <div className="comment-item_info">
              <h2> Лилия Семёновна </h2>
              <p> 14 октября 2014 </p>
            </div>
            <div className="comment-item_text">
              <span />
              <p> Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами? </p>
            </div>
        </section>
        <section className="comment-item">
            <div className="comment-item_info">
              <h2> Лилия Семёновна </h2>
              <p> 14 октября 2014 </p>
            </div>
            <div className="comment-item_text">
              <span />
              <p> Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент? </p>
            </div>
        </section>
        <div id="addedComments">
          <span></span>
        </div>
      </div>
      <AddComment />
    </div>
  );
}

export default App;
