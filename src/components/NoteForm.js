import React from 'react';
import { connect } from 'react-redux';

class NoteForm extends React.Component{
handleSubmit(e){
e.preventDefault();
// this.props.handleAdd(this.refs.txt.value);
// this.refs.txt.value='';
// this.toggle();
var {dispatch} = this.props;
dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});
dispatch({type: 'TOGGLE'})
}
toggle() {
    // this.state.isAdding = !this.state.isAdding;
    // this.setState(this.state);
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE'})
}
 render() {
        if (this.props.isAdding) return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' placeholder='enter text' ref='txt' />
            <button>Add</button>
        </form>
        )
        return <button onClick={this.toggle.bind(this)}>+</button>
       
  }
}

export default connect(function(state){
    return { isAdding: state.isAdding }
})(NoteForm);
