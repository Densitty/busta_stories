import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SHOW_FAQ } from "../../utils/actions";
import { useServicesContext } from "../../utils/otherContexts/ServicesFAQContext";

const ServicesFAQ = () => {
  const faqData = useServicesContext();
  const { state } = faqData;

  const [activeIndex, setActiveIndex] = useState(0);

  const showDetails = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {state.questions.map((question, index) => {
        return (
          <div key={question.id} className="services__list animate">
            <div
              className="services__list__heading"
              onClick={() => showDetails(question.id)}
            >
              <h4>{question.question}</h4>
              {activeIndex === index + 1 ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </div>
            <p
              className={`services__list__details ${
                activeIndex === index + 1 ? " active" : ""
              }`}
            >
              {question.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesFAQ;
