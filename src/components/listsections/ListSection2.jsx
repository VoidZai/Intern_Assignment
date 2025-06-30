import './ListSection2.css';
import affiliateIcon from './assets/listsection2/affiliationicon.png';
import techIcon from './assets/listsection2/techicon.png';
import startupIcon from './assets/listsection2/startupicon.png';

const ProgramCards = () => {
  const programs = [
    {
      title: "Affiliate partner program",
      description: "Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement and retention. Get incentivized for referring CometChat to any of your customers.",
      icon: affiliateIcon
    },
    {
      title: "Technology partner program",
      description: "Development teams can use our plug and play solution to build top class chat solutions for their clients using our SDKs and APIs. It's simple, safe and secure!",
      icon: techIcon
    },
    {
      title: "Start up growth program",
      description: "We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
      icon: startupIcon
    }
  ];

  return (
    <section className="program-cards">
      <div className="programs-container">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <div className="program-icon-container">
              <img src={program.icon} alt="" className="program-icon" />
            </div>
            <h3 className="program-title">{program.title}</h3>
            <p className="program-description">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramCards;