import React from "react";

/* import { FaqSection } from "./sections/FaqSection";
import { Footer } from "./sections/Footer";
import { HeroForm } from "./sections/HeroForm";
import { LabelTitleWrapper } from "./sections/LabelTitleWrapper";
import { ListSection } from "./sections/ListSection";
import { ListSectionWrapper } from "./sections/ListSectionWrapper";
import { NavBar } from "./sections/NavBar";
import { PreFooter } from "./sections/PreFooter";
import { TitleBlock } from "./sections/TitleBlock"; */
import "./index.css";
import NavBar from "./components/Navbar";

export const App = () => {
  return (
    <div className="partners" data-model-id="1:6795">
      <div className="div-6">
        {/* <Footer /> */}
        <div className="overlap-6">
          {/* <HeroForm /> */}
          <NavBar />
        </div>

        {/* <PreFooter /> */}
        <div className="customers-section">
          <div className="brand-logos">
            <img
              className="image"
              alt="Image"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/image-202.png"
            />

            <img
              className="amazon-web-services"
              alt="Amazon web services"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/amazon-web-services-2-1.svg"
            />

            <img
              className="element-genomics"
              alt="Element genomics"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/10x-genomics--1--1.svg"
            />

            <img
              className="microsoft"
              alt="Microsoft"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/microsoft-1.svg"
            />

            <img
              className="path"
              alt="Path"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/path2.svg"
            />

            <img
              className="logo-3"
              alt="Logo"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/logo.png"
            />

            <img
              className="teknopoint-DEPT"
              alt="Teknopoint DEPT"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/teknopoint-dept--black-1.png"
            />

            <div className="logo-4">
              <div className="overlap-group-2">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/mc8ufun6NECYwc/img/vector.svg"
                />

                <img
                  className="group-2"
                  alt="Group"
                  src="https://c.animaapp.com/mc8ufun6NECYwc/img/group.png"
                />
              </div>
            </div>

            <img
              className="homemainlogo"
              alt="Homemainlogo"
              src="https://c.animaapp.com/mc8ufun6NECYwc/img/homemainlogo--1--1.png"
            />

            <div className="logo-5">
              <img
                className="seekpng"
                alt="Seekpng"
                src="https://c.animaapp.com/mc8ufun6NECYwc/img/seekpng-1.png"
              />

              <img
                className="seekpng-2"
                alt="Seekpng"
                src="https://c.animaapp.com/mc8ufun6NECYwc/img/seekpng-2.png"
              />
            </div>
          </div>
        </div>

{/*         <ListSection />
        <TitleBlock />
        <LabelTitleWrapper />
        <ListSectionWrapper />
        <FaqSection /> */}
      </div>
    </div>
  );
};

export default App;
