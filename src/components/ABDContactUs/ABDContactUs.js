import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDContactUs.css";

const ABDContactUs = () => {
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
    <div className="abd-contact-us">
      <div className="hero-banner-group">
        <div className="hero-banner5">
          <div className="here-banner-data3">
            <b className="contact-us5">Contact Us</b>
          </div>
          <div className="header3">
            <div
              className="vecteezy-letter-a-c-b-creative-parent1"
              onClick={onFrameContainerClick}
            >
              <img
                className="vecteezy-letter-a-c-b-creative-icon3"
                alt=""
                src="/vecteezy-letteracbcreativelineartmodernuniquemonogramlogo-27768920-1@2x.png"
              />
              <b className="ab-dummy-pte3">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu3">
              <div className="about-us5" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us5" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout3" onClick={onLayoutContainerClick}>
                <div className="career6">Career</div>
                <img className="vector-icon22" alt="" src="/vector1.svg" />
              </div>
              <div className="layout3" onClick={onSalesContainerClick}>
                <div className="career6">Contact Us</div>
                <img className="vector-icon22" alt="" src="/vector1.svg" />
              </div>
              <div className="cart8" onClick={onCartContainerClick}>
                <div className="career6">Cart</div>
                <div className="cart-icon3">
                  <img className="vector-icon24" alt="" src="/vector2.svg" />
                  <div className="wrapper2">
                    <div className="career6">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent2">
          <div className="frame-wrapper3">
            <div className="lorem-ipsum-dolor-sit-amet-con-parent">
              <div className="lorem-ipsum-dolor16">
                Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed
                proin metus.
              </div>
              <div className="your-name-wrapper">
                <div className="your-name">Your Name</div>
              </div>
              <div className="your-name-wrapper">
                <div className="your-name">Your Name</div>
              </div>
              <div className="your-name-wrapper">
                <div className="your-name">Your Name</div>
              </div>
              <div className="button10">
                <img className="vector-icon25" alt="" src="/vector.svg" />
                <b className="primary-button10">Primary Button</b>
              </div>
            </div>
          </div>
          <img className="frame-child3" alt="" src="/rectangle-80@2x.png" />
        </div>
        <div className="rectangle-parent4">
          <img className="frame-child3" alt="" src="/rectangle-81@2x.png" />
          <div className="address-lorem-ipsum-container">
            <p className="address">Address</p>
            <p className="address">&nbsp;</p>
            <p className="address">
              Lorem ipsum dolor sit amet consectetur. Ultrices feugiat sed proin
              metus.
            </p>
            <p className="address">&nbsp;</p>
            <p className="address">Phone</p>
            <p className="address">&nbsp;</p>
            <p className="address">Email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDContactUs;
