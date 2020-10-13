import React, { Component } from 'react'

class QuizEnd extends Component{
    constructor(props){
        super(props)
        this.handleResetLink=this.handleResetLink.bind(this)
    }
    handleResetLink(){
        this.props.resetLinkHandler()
    }
    render(){
        return( 
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetLink}>Reset Quiz</a>
          </div>
        )
    }
}
export default QuizEnd