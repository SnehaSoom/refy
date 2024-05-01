import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDLandingPage.css";
import logo from './assets/logo.svg';
import heroBanner from './assets/hero_banner.svg';
import buildingExtendedTeam from './assets/building_extended_team.svg';
import leaderShipHiring from './assets/leaderShip_hiring.svg';
import thirdPartyArrangement from './assets/thirdParty_arrangement.svg';
import payrollManagement from './assets/payroll_management.svg';
import setUpOffice from './assets/setUp_office.svg';
import revolutionize from './assets/revolutionize.svg';
import clients from './assets/clients.svg';
import consultancy from './assets/consultancy.svg';
import titleLine from './assets/title_line.svg';
import dot from './assets/dot.svg';


const ABDLandingPage = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/abdaboutus");
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate("/abdpricing");
  }, [navigate]);

  const onLayoutContainerClick = useCallback(() => {
    navigate("/abdcareer");
  }, [navigate]);

  const onSalesContainerClick = useCallback(() => {
    navigate("/abdcontactus");
  }, [navigate]);

  const onCartContainerClick = useCallback(() => {
    navigate("/abdcart");
  }, [navigate]);

  const onAboutUSTextClick = useCallback(() => {
    navigate("/abdaboutus");
  }, [navigate]);

  const onCareerTextClick = useCallback(() => {
    navigate("/abdcareer");
  }, [navigate]);

  const onPricingText2Click = useCallback(() => {
    navigate("/abdpricing");
  }, [navigate]);

  const onCartTextClick = useCallback(() => {
    navigate("/abdcart");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/abdcontactus");
  }, [navigate]);

  return (
    <div className="abd-landing-page">
      <div className="hero-banner">
        <div className="hero-banner1">
          <div className="here-banner-data">
            <div className="provide-team-to-container">
              <p className="provide">
                <b>
                  <span>{`Provide `}</span>
                </b>
              </p>
              <p className="team-to-organizations-irrespec">
                <b>
                  <span>team</span>
                </b>
                <span>
                  <b>{` `}</b>
                  <span className="to-organizations-irrespective">
                    to organizations irrespective of their size
                  </span>
                </span>
              </p>
            </div>
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              pharetra sit amet aliquam id diam maecenas ultricies mi. Venenatis
              urna cursus eget nunc. Proin sedlie enim sed faucibus ture. Eget
              nunc lobortis mattis aliquam. Proin sedlie enim sede fure.
            </div>
            <div className="button">
              <img className="vector-icon" alt="" src="" />
              <b className="primary-button">Get Started</b>
            </div>
          </div>
          <img
            className="hero-banner-image"
            alt=""
            src={heroBanner}
          />
          <div className="header">
            <div className="creative-parent">
              <img
                className="creative-icon"
                alt=""
                src={logo}
              />
              <b className="ab-dummy-pte">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu">
              <div className="about-us" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout" onClick={onLayoutContainerClick}>
                <div className="career">Career</div>
                
              </div>
              <div className="layout" onClick={onSalesContainerClick}>
                <div className="career">Contact Us</div>
               
              </div>
              <div className="cart" onClick={onCartContainerClick}>
                <div className="career">Cart</div>
                <div className="cart-icon">
                  <img className="vector-icon3" alt="" src="/vector2.svg" />
                  <div className="wrapper">
                    <div className="career">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-data">
        <div className="team-building">
          <div className="title">
            <b className="team-building1">Team Building</b>
            <img className="title-line-icon" alt="" src={titleLine}/>
          </div>
          <div className="leadership-parent">
            <div className="leadership">
              <img
                className="leadership-child"
                alt=""
                src={leaderShipHiring}
              />
              <div className="title-data">
                <div className="parent">
                  <b className="ab-dummy-pte">01 <img className="dot_icon" alt="" src={dot}/></b>
                  
                </div>
                <b className="leadership-hiring">Leadership Hiring</b>
                <div className="bullet-points">
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Leadership Hiring</li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="building-extended-team">
              <div className="title-data">
                <div className="parent">
                  <b className="ab-dummy-pte">02<img className="dot_icon" alt="" src={dot} /></b>
                  
                </div>
                <b className="leadership-hiring">Building Extended Team</b>
                <div className="bullet-points">
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>
                        Hiring and setting up teams in different locations
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className="building-extended-team-child"
                alt=""
                src={buildingExtendedTeam}
              />
            </div>
            <div className="leadership">
              <img
                className="leadership-child"
                alt=""
                src={clients}
              />
              <div className="title-data">
                <div className="parent">
                  <b className="ab-dummy-pte">03<img className="dot_icon" alt="" src={dot} /></b>
                 
                </div>
                <b className="leadership-hiring">
                  Hiring Candidates for Clients
                </b>
                <div className="bullet-points">
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="lorem-ipsum-dolor-container">
                    <ul className="lorem-ipsum-dolor-sit-amet-con">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="left">
            <div className="title1">
              <b className="setup-office">Services</b>
              <img className="title-line-icon1" alt="" src={titleLine} />
            </div>
            <div className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
            </div>
            <div className="div1">
              <img className="child" alt="" src={setUpOffice}/>
              <b className="setup-office">Setup office</b>
              <div className="vendors-cafeteria-etc-container">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </div>
            </div>
            <div className="div2">
              <img className="child" alt="" src={payrollManagement} />
              <b className="setup-office">Payroll Management</b>
              <div className="vendors-cafeteria-etc-container">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="div3">
              <img className="inner" alt="" src={thirdPartyArrangement} />
              <b className="setup-office">Third-party Arrangement</b>
              <div className="vendors-cafeteria-etc-container">
                <p className="provide">{`Vendors, Cafeteria etc. `}</p>
                <p className="provide">
                  Lorem ipsum dolor sit amet consectetur. Purus tellus quam
                </p>
              </div>
            </div>
            <div className="div4">
              <img className="inner" alt="" src={consultancy} />
              <b className="setup-office">Consultancy</b>
              <div className="vendors-cafeteria-etc-container">
                <p className="provide">
                  Optimize cost, Execution strategy, Streamlining business
                </p>
                <p className="provide">
                  Lorem ipsum dolor sit amet consectetur purus tellus quam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="revolutionize">
          <div className="left">
            <div className="title2">
              <b className="setup-office">Let's Revolutionize Your Business</b>
              <img className="title-line-icon1" alt="" src={titleLine} />
            </div>
            <div className="ads-increasing-footprints-container">
              <ul className="lorem-ipsum-dolor-sit-amet-con">
                <li className="ads">Ads</li>
                <li>Increasing footprints</li>
              </ul>
            </div>
            <div className="ads-increasing-footprints-container">
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
            </div>
            <div className="button">
              <img className="vector-icon" alt="" src="/vector.svg" />
              <b className="primary-button">Contact Us</b>
            </div>
          </div>
          <div className="dot-h-parent">
            
            <img className="group-child" alt="" src={revolutionize} />
           
          </div>
        </div>
        <div className="footer">
          <div className="links">
            <div className="about-us1" onClick={onAboutUSTextClick}>
              About US
            </div>
            <div className="about-us1" onClick={onCareerTextClick}>
              Career
            </div>
            <div className="about-us1" onClick={onPricingText2Click}>
              Pricing
            </div>
            <div className="about-us1" onClick={onCartTextClick}>
              Cart
            </div>
            <div className="about-us1" onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDLandingPage;
