import React, { useState } from 'react';
import LandingNavbar from '../components/landing-navbar'
import Footer from '../components/landing-footer'

const faq = () => {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers((prevShowAnswers) => ({
      ...prevShowAnswers,
      [id]: !prevShowAnswers[id],
    }));
  };

  const faqData = [
    {
      id: 1,
      question: "What is this tool, and how does it work?",
      answer: "This tool is a web application built using ReactJS and Tailwind CSS, designed to simplify the process of splitting group expenses. // Add more details as needed",
    },
    {
      id: 2,
      question: "How do I use the Sliplicost tool?",
      answer: "Using the tool is simple. Navigate to the website, enter the total expenses and the names of the participants, specify who paid for each expense, and the tool will calculate each participant's share.",
    },
    {
      id: 3,
      question: "Is my data secure?",
      answer: "We prioritize the security of your data. The tool operates locally in your browser, and no data is stored on our servers. Your input remains confidential and is not shared or stored anywhere.",
    },
    {
      id: 4,
      question: "Can I customize the appearance of the expense-splitting interface?",
      answer: "While the tool comes with a clean and user-friendly interface, we currently don't offer extensive customization options. However, we welcome feedback and may consider additional features based on user suggestions.",
    },
  ];
  return (
    <div>
      <LandingNavbar />
      <div className=" flex items-center justify-center">
        <div className="container mx-auto py-8 max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

          {faqData.map((faq) => (
            <div key={faq.id} className="mb-4 bg-white p-4 rounded shadow-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleAnswer(faq.id)}>
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="text-blue-500">{showAnswers[faq.id] ? '−' : '+'}</span>
              </div>
              {showAnswers[faq.id] && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default faq