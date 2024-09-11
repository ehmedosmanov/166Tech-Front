import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterCard = ({ number, text, duration, start, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="counter-card" ref={ref}>
      <div className="counter-content">
        {inView ? (
          <CountUp
            start={start || 0}
            end={number}
            duration={duration || 2}
            delay={delay || 0}
            className="number"
          />
        ) : (
          <span className="number">{start || 0}</span>
        )}
        <span className="plus">+</span>
      </div>
      <h4>{text}</h4>
    </div>
  );
};

export default CounterCard;
