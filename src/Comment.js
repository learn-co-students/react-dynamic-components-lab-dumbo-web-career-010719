// add Comment component here
import React, { component } from 'react';

class Comment extends React.Component{
    render(){
        return(
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;