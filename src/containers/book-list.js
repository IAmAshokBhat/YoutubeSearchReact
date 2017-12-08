import React,{Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
    renderListItems(){
        return this.props.books.map((book) =>{
            return (
            <li
             key={book.title}
             onClick = {()=>this.props.selectBook(book)}
             className="list-group-item">
             {book.title}
            </li>
        );
        });
    }
    render(){
        return (
            <ul className="col-sm-4 list-group">
                {this.renderListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    //whatever is returned will show up in props inside booklist
    return {
        books:state.books
    }
}

//anything returned  from this function ends up as props  on the booklist container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all reducers 
    //first arg is props here and secnd arg selectBook is action creator we imported from /action/index
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//Promot e Booklist from component to container - it needs to know  about dispacth method  selectBook make it available  as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

