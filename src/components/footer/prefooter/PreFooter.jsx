import './PreFooter.css';
import planet1 from './assets/planet1.svg';
import planet2 from './assets/planet2.svg';
/* import comet from './assets/comet.svg'; */

const PreFooter = () => {
  return (
    <section className="pre-footer">
      {/* Background elements */}
      <img src={planet1} alt="" className="bg-planet planet-1" />
      <img src={planet2} alt="" className="bg-planet planet-2" />
      {/* <img src={comet} alt="" className="bg-comet" /> */}
      
      <div className="pre-footer-content">
        <h2 className="pre-footer-title">
          Get started<br />for free
        </h2>
        <p className="pre-footer-text">
          Build and test for as long as you need.<br />
          Pick a plan when you're ready.
        </p>
        <div className="pre-footer-buttons">
          <button className="pre-footer-button primary">
            Start free trial
          </button>
          <button className="pre-footer-button secondary">
            Schedule a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;