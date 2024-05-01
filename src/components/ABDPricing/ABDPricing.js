import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDPricing.css";

const ABDPricing = () => {
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
    <div className="abd-pricing">
      <div className="hero-banner-parent1">
        <div className="hero-banner7">
          <div className="here-banner-data5">
            <b className="pricing7">Pricing</b>
          </div>
          <div className="header5">
            <div
              className="vecteezy-letter-a-c-b-creative-parent3"
              onClick={onFrameContainerClick}
            >
              <img
                className="vecteezy-letter-a-c-b-creative-icon5"
                alt=""
                src="/vecteezy-letteracbcreativelineartmodernuniquemonogramlogo-27768920-1@2x.png"
              />
              <b className="ab-dummy-pte5">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu5">
              <div className="about-us8" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us8" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout5" onClick={onLayoutContainerClick}>
                <div className="career8">Career</div>
                <img className="vector-icon29" alt="" src="/vector1.svg" />
              </div>
              <div className="layout5" onClick={onSalesContainerClick}>
                <div className="career8">Contact Us</div>
                <img className="vector-icon29" alt="" src="/vector1.svg" />
              </div>
              <div className="cart12" onClick={onCartContainerClick}>
                <div className="career8">Cart</div>
                <div className="cart-icon5">
                  <img className="vector-icon31" alt="" src="/vector2.svg" />
                  <div className="wrapper4">
                    <div className="career8">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-1">
          <div className="table">
            <div className="row">
              <div className="cell">
                <div className="content">
                  <div className="text" />
                </div>
              </div>
              <div className="cell">
                <div className="content">
                  <div className="text" />
                </div>
              </div>
              <div className="cell">
                <div className="content">
                  <div className="text" />
                </div>
              </div>
              <div className="cell">
                <div className="content">
                  <div className="text" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
              <div className="cell4">
                <div className="content">
                  <div className="text4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDPricing;
