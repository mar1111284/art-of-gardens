import React, { useState } from 'react';
import Up from "../assets/shared/up.png";
import Information from "../assets/shared/information.png";

const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqData = [
    {
      question: "What if the weather is wet?",
      answer: "If the weather is wet, don't worry! Our gardeners are equipped to work in various weather conditions. They'll ensure your garden receives the care it needs, rain or shine."
    },
    {
      question: "What about the winter?",
      answer: "During winter, our gardeners adapt their services to suit the season. They'll perform tasks such as pruning, preparing your garden for the colder months, and ensuring your plants are adequately protected from frost."
    },
    {
      question: "Will I have the same gardener every time?",
      answer: "We strive to provide consistency in service. While we cannot guarantee the same gardener every time due to scheduling and availability, we make every effort to assign the same professional to your garden whenever possible. Rest assured, all our gardeners are trained and experienced to meet our quality standards."
    },
    {
      question: "What if I want to cancel?",
      answer: "If you need to cancel your service, simply reach out to our customer support team. We understand that plans can change, and we're here to accommodate your needs. Please refer to our cancellation policy for any applicable terms and conditions."
    }
  ];

  const toggleQuestion = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className='faq-container'>
      <h2 className='faq-title'>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className={expandedQuestion === index ? 'question selected' : 'question'} key={index} onClick={() => toggleQuestion(index)}>
          <div className='question-header'>
            <p className='text-header'>{item.question}</p>
            <img className='icon' src={expandedQuestion === index ? Up : Information} alt="faq question icon" />
          </div>
          {expandedQuestion === index && <p className='question-answer'>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
