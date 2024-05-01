import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDCart.css";
import logo from '../ABDLandingPage/assets/logo.svg'
import cart from '../ABDLandingPage/assets/cart.svg'

const ABDCart = () => {
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
    <div className="abd-cart">
      <div className="hero-banner-parent2">
        <div className="hero-banner8">
          <div className="here-banner-data6">
            <b className="order-summary">Cart</b>
          </div>
          <div className="header6">
            <div
              className="vecteezy-letter-a-c-b-creative-parent4"
              onClick={onFrameContainerClick}
            >
              <img
                className="creative-icon"
                alt=""
                src={logo}
              />
              <b className="ab-dummy-pte6">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu6">
              <div className="about-us9" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us9" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout6" onClick={onLayoutContainerClick}>
                <div className="career9">Career</div>
                <img className="vector-icon32" alt="" src="/vector1.svg" />
              </div>
              <div className="layout6" onClick={onSalesContainerClick}>
                <div className="career9">Contact Us</div>
                <img className="vector-icon32" alt="" src="/vector1.svg" />
              </div>
              <div className="cart15" onClick={onCartContainerClick}>
                <div className="career9">Cart</div>
                <div className="cart-icon6">
                  <img className="vector-icon34" alt="" src={cart} />
                  <div className="wrapper5">
                    <div className="career9">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent4">
          <div className="frame-parent5">
            <div className="frame-wrapper4">
              <div className="rectangle-parent5">
                <div className="frame-child6" />
                <div className="service-name-wrapper">
                  <b className="service-name">Service Name</b>
                </div>
              </div>
            </div>
            <div className="frame-wrapper4">
              <div className="rectangle-parent5">
                <div className="frame-child6" />
                <div className="service-name-wrapper">
                  <b className="service-name">Service Name</b>
                </div>
              </div>
            </div>
          </div>
          <div className="order-summary-parent">
            <b className="order-summary">Order Summary</b>
            <b className="order-summary">Delivery Cost</b>
            <b className="order-summary">Subtotal</b>
            <b className="order-summary">Grand Total</b>
            <div className="button11">
              <img className="vector-icon35" alt="" src="/vector.svg" />
              <b className="primary-button11">Proceed to Checkout</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ABDCart;
