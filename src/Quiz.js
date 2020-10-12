import React, { Component } from 'react'

let quizData= require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state={
            quiz_position:1
        }
    }
  render(){
     
      return(
          <div className="QuizQuestion">
              {quizData.quiz_questions.map((quiz)=>{
                 return(
                <p>{quiz.instruction_text}</p>
                  )
              })}
          
          </div>
      )
  }
}

export default Quiz