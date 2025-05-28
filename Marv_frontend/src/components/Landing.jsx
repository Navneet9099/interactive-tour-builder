import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="tour-header">
        <h1>Interactive Product<br />Tour Builder</h1>
        <p>Create engaging, step-by-step product demos in minutes.</p>
        <button className="start-demo">Start Demo</button>
      </div>

      <div className="tour-steps">
        <div className="tour-step">
          <p className="step-label">Step 1</p>
          <img src="/assets/step1.png" alt="Step 1" />
          <p>This is the first step of the tour</p>
        </div>
        <div className="tour-step">
          <p className="step-label">Step 2</p>
          <img src="/assets/step2.png" alt="Step 2" />
          <p>Here’s the second step</p>
        </div>
        <div className="tour-step">
          <p className="step-label">Step 3</p>
          <img src="/assets/step3.png" alt="Step 3" />
          <p>Finally, this is the third step</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
