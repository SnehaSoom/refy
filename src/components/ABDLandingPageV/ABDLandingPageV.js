import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDLandingPageV.css";

const ABDLandingPageV = () => {
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
    <div className="abd-landing-page-v2">
      <div className="hero-banner2">
        <div className="hero-banner3">
          <div className="here-banner-data1">
            <div className="provide-team-to-container1">
              <p className="provide1">
                <b>
                  <span>{`Provide `}</span>
                </b>
              </p>
              <p className="team-to-organizations-irrespec1">
                <b>
                  <span>team</span>
                </b>
                <span>
                  <b>{` `}</b>
                  <span className="to-organizations-irrespective1">
                    to organizations irrespective of their size
                  </span>
                </span>
              </p>
            </div>
            <div className="lorem-ipsum-dolor8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              pharetra sit amet aliquam id diam maecenas ultricies mi. Venenatis
              urna cursus eget nunc. Proin sedlie enim sed faucibus ture. Eget
              nunc lobortis mattis aliquam. Proin sedlie enim sede fure.
            </div>
            <div className="button2">
              <img className="vector-icon5" alt="" src="/vector.svg" />
              <b className="primary-button2">Get Started</b>
            </div>
          </div>
          <img
            className="hero-banner-image1"
            alt=""
            src="/hero-banner-image@2x.png"
          />
          <div className="header1">
            <div className="vecteezy-letter-a-c-b-creative-group">
              <img className="vecteezy-letter-a-c-b-creative-icon1" alt="" />
              <b className="ab-dummy-pte1">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu1">
              <div className="about-us2" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us2" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout1" onClick={onLayoutContainerClick}>
                <div className="career2">Career</div>
                <img className="vector-icon6" alt="" />
              </div>
              <div className="layout1" onClick={onSalesContainerClick}>
                <div className="career2">Contact Us</div>
                <img className="vector-icon6" alt="" />
              </div>
              <div className="cart3" onClick={onCartContainerClick}>
                <div className="career2">Cart</div>
                <div className="cart-icon1">
                  <img className="vector-icon8" alt="" />
                  <div className="frame">
                    <div className="career2">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-data1">
        <div className="team-building2">
          <div className="title3">
            <b className="team-building3">Team Building</b>
            <img className="title-line-icon3" alt="" />
          </div>
          <div className="leadership-group">
            <div className="leadership1">
              <img className="leadership-item" alt="" />
              <div className="title-data3">
                <div className="frame-div">
                  <b className="ab-dummy-pte1">01</b>
                  <div className="dot-h4">
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                  </div>
                </div>
                <b className="leadership-hiring3">Leadership Hiring</b>
                <div className="bullet-points3">
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Leadership Hiring</li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="building-extended-team2">
              <div className="title-data3">
                <div className="frame-div">
                  <b className="ab-dummy-pte1">02</b>
                  <div className="dot-h4">
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                  </div>
                </div>
                <b className="leadership-hiring3">Building Extended Team</b>
                <div className="bullet-points3">
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>
                        Hiring and setting up teams in different locations
                      </li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img className="leadership-item" alt="" />
            </div>
            <div className="leadership1">
              <img className="leadership-item" alt="" />
              <div className="title-data3">
                <div className="frame-div">
                  <b className="ab-dummy-pte1">03</b>
                  <div className="dot-h4">
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                    <div className="dot-h-child206" />
                  </div>
                </div>
                <b className="leadership-hiring3">
                  Hiring Candidates for Clients
                </b>
                <div className="bullet-points3">
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>
                        Tincidunt eget tincidunt porttitor proin tortor mattis
                        sodales id rhoncus
                      </li>
                    </ul>
                  </div>
                  <div className="leadership-hiring4">
                    <ul className="leadership-hiring5">
                      <li>Cras tincidunt felis tortor lacus felis libero</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services2">
          <div className="left2">
            <div className="title4">
              <b className="services3">Services</b>
              <img className="title-line-icon4" alt="" />
            </div>
            <div className="lorem-ipsum-dolor9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="lorem-ipsum-dolor9">
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
            </div>
            <div className="div6">
              <img className="child1" alt="" />
              <b className="services3">Setup office</b>
              <div className="lorem-ipsum-dolor11">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </div>
            </div>
            <div className="div7">
              <img className="child1" alt="" />
              <b className="services3">Payroll Management</b>
              <div className="lorem-ipsum-dolor11">
                Lorem ipsum dolor sit amet consectetur. Purus tellus quam magna
                sed gravida sed elementum amet.
              </div>
            </div>
          </div>
          <div className="right1">
            <div className="div8">
              <img className="child1" alt="" />
              <b className="services3">Third-party Arrangement</b>
              <div className="lorem-ipsum-dolor11">
                <p className="provide1">{`Vendors, Cafeteria etc. `}</p>
                <p className="provide1">
                  Lorem ipsum dolor sit amet consectetur. Purus tellus quam
                </p>
              </div>
            </div>
            <div className="div9">
              <img className="child1" alt="" />
              <b className="services3">Consultancy</b>
              <div className="lorem-ipsum-dolor11">
                <p className="provide1">
                  Optimize cost, Execution strategy, Streamlining business
                </p>
                <p className="provide1">
                  Lorem ipsum dolor sit amet consectetur purus tellus quam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="revolutionize1">
          <div className="left2">
            <div className="title5">
              <b className="services3">Let's Revolutionize Your Business</b>
              <img className="title-line-icon4" alt="" />
            </div>
            <div className="ads-increasing-footprints-container1">
              <ul className="leadership-hiring5">
                <li className="ads1">Ads</li>
                <li>Increasing footprints</li>
              </ul>
            </div>
            <div className="ads-increasing-footprints-container1">
              Lorem ipsum dolor sit amet consectetur. In eget facilisi porta
              amet tincidunt sed tempor. Morbi habitant erat vitae odio.
              Maecenas orci pellentesque sapien id non velit adipiscing mi. Eget
              ultrices viverra duis ut bibendum neque penatibus tempus justo.
            </div>
            <div className="button2">
              <img className="vector-icon5" alt="" />
              <b className="primary-button2">Contact Us</b>
            </div>
          </div>
          <div className="dot-h-group">
            <div className="dot-h7">
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
              <div className="dot-h-child206" />
            </div>
            <img className="group-item" alt="" />
            <img className="fluentarrow-growth-24-filled-icon1" alt="" />
          </div>
        </div>
        <div className="footer1">
          <div className="links1">
            <div className="about-us3" onClick={onAboutUSTextClick}>
              About US
            </div>
            <div className="about-us3" onClick={onCareerTextClick}>
              Career
            </div>
            <div className="about-us3" onClick={onPricingText2Click}>
              Pricing
            </div>
            <div className="about-us3" onClick={onCartTextClick}>
              Cart
            </div>
            <div className="about-us3" onClick={onContactUsTextClick}>
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDLandingPageV;
