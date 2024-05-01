import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDCareer.css";

const ABDCareer = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

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

  return (
    <div className="abd-career">
      <div className="hero-banner-parent">
        <div className="hero-banner4">
          <div className="here-banner-data2">
            <b className="career4">Career</b>
          </div>
          <div className="header2">
            <div
              className="vecteezy-letter-a-c-b-creative-container"
              onClick={onFrameContainerClick}
            >
              <img
                className="vecteezy-letter-a-c-b-creative-icon2"
                alt=""
                src="/vecteezy-letteracbcreativelineartmodernuniquemonogramlogo-27768920-1@2x.png"
              />
              <b className="filter">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu2">
              <div className="about-us4" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us4" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout2" onClick={onLayoutContainerClick}>
                <div className="career5">Career</div>
                <img className="vector-icon10" alt="" src="/vector1.svg" />
              </div>
              <div className="layout2" onClick={onSalesContainerClick}>
                <div className="career5">Contact Us</div>
                <img className="vector-icon10" alt="" src="/vector1.svg" />
              </div>
              <div className="cart6" onClick={onCartContainerClick}>
                <div className="career5">Cart</div>
                <div className="cart-icon2">
                  <img className="vector-icon12" alt="" src="/vector2.svg" />
                  <div className="wrapper1">
                    <div className="career5">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="filter-parent">
                <b className="filter">Filter</b>
                <div className="search">
                  <div className="search-child" />
                  <img className="uilsearch-icon" alt="" src="/uilsearch.svg" />
                </div>
              </div>
            </div>
            <div className="frame-container">
              <div className="filter-option-parent">
                <div className="filter">Filter Option</div>
                <img className="vector-icon13" alt="" src="/vector7.svg" />
              </div>
            </div>
            <div className="frame-container">
              <div className="filter-option-parent">
                <div className="filter">Filter Option</div>
                <img className="vector-icon13" alt="" src="/vector7.svg" />
              </div>
            </div>
            <div className="frame-container">
              <div className="filter-option-parent">
                <div className="filter">Filter Option</div>
                <img className="vector-icon13" alt="" src="/vector7.svg" />
              </div>
            </div>
          </div>
          <div className="frame-parent1">
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="name-parent">
                <b className="name">Name</b>
                <div className="description">Description</div>
                <div className="button4">
                  <img className="vector-icon16" alt="" src="/vector.svg" />
                  <b className="primary-button4">Primary Button</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDCareer;
