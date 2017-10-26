import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';

//connect la 1 function va no return ra 1 function 

class List extends React.Component {
    // remove(index){
    //     this.props.mang.splice(index, 1);
    //     this.setState(this.state);
    // }
    // add(data){
    //     this.props.mang.push(data);
    //     this.setState(this.state);
    // }
  render() {
    return (
    <div>
        <NoteForm /*handleAdd={this.add.bind(this)}*//>
        {this.props.mang.map((e, i)=> <Note 
        index={1} 
        /*handleRemove={this.remove.bind(this)}*/ key={i}>{e}</Note>)}
    </div>
    );
  }
}

export default connect(function(state){
return { mang : state.mang}
}) (List);
