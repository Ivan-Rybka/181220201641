import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AddComment extends Component {

    addNewComment = () => {
        let date = new Date().toLocaleString();
        let comment = document.getElementById('newComment').value;

        const element = (
            <section className='comment-item'>
  				    <div className='comment-item_info'>
                        <h2> Гость </h2>
  		  	    	    <p> {date} </p>
                    </div>
                    <div className='comment-item_text'>
                        <span />
  			  	           <p> {comment} </p>  			  	
                    </div>
  			</section>
        );
        if (comment !== ''){ReactDOM.render(element, document.getElementById('addedComments'));}
        document.getElementById('newComment').value = '';
    }

    keyDown = (e) => {
        if(e.keyCode===13 && e.ctrlKey) this.addNewComment()
    }


    render(){
        return (            
            <div className='new-comment'>
                <textarea id="newComment"  onKeyDown={this.keyDown}/>
                <button onClick={this.addNewComment}> Написать консультанту </button>
            </div>
        ); 
    }

};