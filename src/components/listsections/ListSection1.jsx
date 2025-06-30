import './ListSection1.css';

const BenefitsList = () => {
  const benefits = [
    {
      title: "Free credits",
      description: "Empowering partners to scale.",
      icon: "💳" // Placeholder - replace with actual icon
    },
    {
      title: "Special developer access",
      description: "Get an all-access account to build unlimited POCs for your clients.",
      icon: "🔑"
    },
    {
      title: "Knowledge sessions",
      description: "Access to product and market sessions.",
      icon: "🎓"
    },
    {
      title: "Revenue share",
      description: "Get monthly recurring revenues when you refer clients.",
      icon: "💰"
    },
    {
      title: "Reduced time",
      description: "Deliver your products much faster with our partners' programs.",
      icon: "⏱️"
    },
    {
      title: "On-demand support",
      description: "Technical assistance for implementation.",
      icon: "🛟"
    },
    {
      title: "Training and mentoring sessions",
      description: "Enabling partners to deliver the best experience.",
      icon: "👨‍🏫"
    },
    {
      title: "Value addition to your users",
      description: "We need a 2 line text here",
      icon: "➕"
    },
    {
      title: "Significant passive income",
      description: "We need a 2 line text here",
      icon: "📈"
    }
  ];

  return (
    <section className="benefits-list">
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsList;