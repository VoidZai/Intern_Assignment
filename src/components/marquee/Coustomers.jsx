import './Coustomers.css';

// Import logos - you'll need to add the actual logo files
import microsoftLogo from './logos/microsoft.png';
import nasscomLogo from './logos/nasscom.png';
import techstarsLogo from './logos/techstars.png';
import oxceramicsLogo from './logos/10xGenomics.png';
import teknoPointLogo from './logos/Teknopoint.png';
import awsLogo from './logos/aws.png';

const Customers = () => {
  const logos = [
    { src: awsLogo, alt: 'AWS' },
    { src: oxceramicsLogo, alt: 'OX Ceramics' },
    { src: microsoftLogo, alt: 'Microsoft' },
    { src: nasscomLogo, alt: 'NASSCOM' },
    { src: techstarsLogo, alt: 'Techstars' },
    { src: teknoPointLogo, alt: 'Tekno Point' },
  ];

  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="customers-section">
      <div className="customers-container">
        <div className="customers-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="customer-logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;