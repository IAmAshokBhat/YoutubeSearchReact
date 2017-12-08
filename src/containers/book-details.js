import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component{
    render(){
      
            if(this.props.book){
                return ( <div>
                <h3>Book Details</h3>
                <p>{this.props.book.title}</p>
                <p>{this.props.book.pages}</p>
            </div> 
             );
            }else{
                return ( <div>
                    <h3>Select a Book to get started</h3>
                </div> );
            }
           
            
      
    }
}

function mapStatesToProps(state){
    return{
        book: state.activeBook
    }
}

export default connect(mapStatesToProps)(BookDetail);