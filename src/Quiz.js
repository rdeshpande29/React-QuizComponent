import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let quizData= require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props)
        this.state={
            quiz_position:1
        }
        this.handleResetClick=this.handleResetClick.bind(this)
    }
    showNextQuestion(){
        this.setState(prevState=>{
            return{
                quiz_position:prevState.quiz_position+1
            }
        })
    }
 handleResetClick(){
    this.setState({
        quiz_position: 1
    })
 }
  render(){
     const isQuizEnd = quizData.quiz_questions.length == this.state.quiz_position -1? true :false

     if(isQuizEnd){
         return <QuizEnd resetClickHandler={this.handleResetClick}></QuizEnd>
     }
     else{
        return <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}></QuizQuestion>
     }
      
  }
}

export default Quiz