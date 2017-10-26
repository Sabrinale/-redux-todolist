import React from 'react';
import { connect } from 'react-redux';

class Note extends React.Component{
removeList() {
    const { index, dispatch } = this.props; 
    dispatch({type: 'REMOVE_ITEM', index})

}
 render() {
    return (
        <div>
            <p>
            {this.props.children}</p>
            <button onClick={this.removeList.bind(this)}>Delete</button>
            
        </div>
    )
  }
}

export default connect()(Note);
