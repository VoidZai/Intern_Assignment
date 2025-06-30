import { useState } from 'react';
import './FaqSection.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "This is a frequently asked question?",
      answer: "Lorem ipsum dolor sit amet consectetur. Tellus eget consequat tortor odio maceenas cursus leo dui. Pulvinar quam sit quam feugiat laoreet morbi tellus dui massa."
    },
    {
      question: "This is a frequently asked question?",
      answer: "Answer to the second frequently asked question."
    },
    {
      question: "This is a very long frequently asked question about our services with more than one line?",
      answer: "Detailed answer explaining the solution to this longer question."
    },
    {
      question: "This is a frequently asked question?",
      answer: "Another answer for a common question."
    },
    {
      question: "This is a question?",
      answer: "Answer to this specific question."
    },
    {
      question: "This is a question?",
      answer: "Final answer in the FAQ section."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">FAQ's</h2>
          <p className="faq-subtitle">We want to help you with all your doubts</p>
        </div>
        
        <div className="faq-items">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <span className="faq-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className="faq-answer"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;