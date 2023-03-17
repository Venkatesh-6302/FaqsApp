// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerShow: false}

  updateStateValue = () => {
    this.setState(prevStat => ({isAnswerShow: !prevStat.isAnswerShow}))
  }

  render() {
    const {isAnswerShow} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const imgUrl = isAnswerShow
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altValue = isAnswerShow ? 'minus' : 'plus'
    return (
      <li className="item-container">
        <div className="question-icon-container">
          <h1 className="question-text">{questionText}</h1>
          <button
            type="button"
            className="icon-btn"
            onClick={this.updateStateValue}
          >
            <img src={imgUrl} alt={altValue} className="icon-img" />
          </button>
        </div>
        {isAnswerShow && (
          <>
            <hr className="hr-line" />

            <p className="answer-txt">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}
export default FaqItem
