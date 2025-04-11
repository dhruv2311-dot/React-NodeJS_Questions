import React, { useState } from 'react';

const data = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
    },
    {
        question: "What is a component?",
        answer: "A component is a reusable piece of UI in React.",
    },
    {
        question: "What is useState?",
        answer: "useState is a Hook that lets you add React state to functional components.",
    },
];

const Q8 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <h2>FAQs</h2>
            {data.map((item, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <button
                        onClick={() => handleAccordion(index)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            textAlign: 'left',
                            backgroundColor: '#f0f0f0',
                            border: '1px solid #ccc',
                        }}
                    >
                        {item.question}
                    </button>
                    {activeIndex === index && (
                        <div
                            style={{
                                padding: '10px',
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                            }}
                        >
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default Q8;