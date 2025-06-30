import './ListSection1.css';
import Icon1 from './assets/listsection1/Icon3.png';
import Icon2 from './assets/listsection1/Icon4.png';
import Icon3 from './assets/listsection1/Icon5.png';
import Icon4 from './assets/listsection1/Icon6.png';
import Icon5 from './assets/listsection1/Icon7.png';
import Icon6 from './assets/listsection1/Icon8.png';
import Icon7 from './assets/listsection1/Icon9.png';
import Icon8 from './assets/listsection1/Icon10.png';
import Icon9 from './assets/listsection1/Icon11.png';

const BenefitsList = () => {
  const benefits = [
    {
      title: "Free credits",
      description: "Empowering partners to scale.",
      icon: Icon1 // Placeholder - replace with actual icon
    },
    {
      title: "Special developer access",
      description: "Get an all-access account to build unlimited POCs for your clients.",
      icon: Icon2
    },
    {
      title: "Knowledge sessions",
      description: "Access to product and market sessions.",
      icon: Icon3
    },
    {
      title: "Revenue share",
      description: "Get monthly recurring revenues when you refer clients.",
      icon: Icon4
    },
    {
      title: "Reduced time",
      description: "Deliver your products much faster with our partners' programs.",
      icon: Icon5
    },
    {
      title: "On-demand support",
      description: "Technical assistance for implementation.",
      icon: Icon6
    },
    {
      title: "Training and mentoring sessions",
      description: "Enabling partners to deliver the best experience.",
      icon: Icon7
    },
    {
      title: "Value addition to your users",
      description: "We need a 2 line text here",
      icon: Icon8
    },
    {
      title: "Significant passive income",
      description: "We need a 2 line text here",
      icon: Icon9
    }
  ];

  return (
    <section className="benefits-list">
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon-container">
              <img src={benefit.icon} alt="" className="benefit-icon" />
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsList;