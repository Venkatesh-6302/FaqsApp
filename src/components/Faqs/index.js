// Write your code here.

import FaqsItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="card-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(eachFaq => (
            <FaqsItem faqDetails={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
