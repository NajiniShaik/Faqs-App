// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isPlusClicked: false}

  updateState = () => {
    this.setState(prevState => ({isPlusClicked: !prevState.isPlusClicked}))
  }

  answerCard = answerText => (
    <div className="answer-card">
      <p className="answer-text">{answerText}</p>
    </div>
  )

  render() {
    const {isPlusClicked} = this.state

    const {faqDetails} = this.props

    const {questionText, answerText} = faqDetails

    const getUrl = isPlusClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    return (
      <li className="faq-card">
        <div className="question-card">
          <h1 className="question-text">{questionText}</h1>
          <button className="button" type="button" onClick={this.updateState}>
            <img
              src={getUrl}
              alt={isPlusClicked ? 'minus' : 'plus'}
              className="img"
            />
          </button>
        </div>
        {isPlusClicked && this.answerCard(answerText)}
      </li>
    )
  }
}

export default FaqItem
