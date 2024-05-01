import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABDAboutUs.css";
import logo from '../ABDLandingPage/assets/logo.svg'
import cart from '../ABDLandingPage/assets/cart.svg'
import aboutUs from './about_us.svg'
const ABDAboutUs = () => {
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
    <div className="abd-about-us">
      <div className="hero-banner-container">
        <div className="hero-banner6">
          <div className="here-banner-data4">
            <b className="about-us6">About Us</b>
          </div>
          <div className="header4">
            <div
              className="vecteezy-letter-a-c-b-creative-parent2"
              onClick={onFrameContainerClick}
            >
              <img
                className="creative-icon"
                alt=""
                src={logo}
              />
              <b className="ab-dummy-pte4">AB Dummy Ptv. Ltd</b>
            </div>
            <div className="menu4">
              <div className="about-us7" onClick={onAboutUsTextClick}>
                About Us
              </div>
              <div className="about-us7" onClick={onPricingTextClick}>
                Pricing
              </div>
              <div className="layout4" onClick={onLayoutContainerClick}>
                <div className="career7">Career</div>
                <img className="vector-icon26" alt="" src="/vector1.svg" />
              </div>
              <div className="layout4" onClick={onSalesContainerClick}>
                <div className="career7">Contact Us</div>
                <img className="vector-icon26" alt="" src="/vector1.svg" />
              </div>
              <div className="cart10" onClick={onCartContainerClick}>
                <div className="career7">Cart</div>
                <div className="cart-icon4">
                <img className="vector-icon3" alt="" src={cart} />
                  <div className="wrapper3">
                    <div className="career7">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
            <div className="lorem-ipsum-dolor18">
              Lorem ipsum dolor sit amet consectetur. Sagittis purus fames
              auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et
              odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
              Fermentum malesuada sed in erat mauris turpis. Praesent
              pellentesque aliquet pulvinar tristique pellentesque feugiat
              augue. Ultricies libero mi aliquam lectus eu habitant at. Blandit
              malesuada massa vitae a venenatis in at. Lobortis in lectus sem
              molestie aliquam diam. Justo sollicitudin sed aliquet a tincidunt
              eu vitae. Sed eget sed mauris est iaculis eu. Non nunc vitae ac
              magna tincidunt morbi feugiat. Et ipsum purus donec massa sapien.
              In odio feugiat risus massa mauris faucibus. Lectus varius
              tristique lacinia eleifend ac luctus suspendisse ut pellentesque.
            </div>
          </div>
          <img className="frame-child5" alt="" src={aboutUs} />
        </div>
        <div className="lorem-ipsum-dolor-container6">
          <span className="lorem-ipsum-dolor-container7">
            <p className="lorem-ipsum-dolor19">
              Lorem ipsum dolor sit amet consectetur. Sagittis purus fames
              auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et
              odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
              Fermentum malesuada sed in erat mauris turpis. Praesent
              pellentesque aliquet pulvinar tristique pellentesque feugiat
              augue. Ultricies libero mi aliquam lectus eu habitant at. Blandit
              malesuada massa vitae a venenatis in at. Lobortis in lectus sem
              molestie aliquam diam. Justo sollicitudin sed aliquet a tincidunt
              eu vitae. Sed eget sed mauris est iaculis eu. Non nunc vitae ac
              magna tincidunt morbi feugiat. Et ipsum purus donec massa sapien.
              In odio feugiat risus massa mauris faucibus. Lectus varius
              tristique lacinia eleifend ac luctus suspendisse ut pellentesque.
            </p>
            <p className="lorem-ipsum-dolor19">&nbsp;</p>
            <p className="lorem-ipsum-dolor19">
              Lorem ipsum dolor sit amet consectetur. Sagittis purus fames
              auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et
              odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
              Fermentum malesuada sed in erat mauris turpis. Praesent
              pellentesque aliquet pulvinar tristique pellentesque feugiat
              augue. Ultricies libero mi aliquam lectus eu habitant at. Blandit
              malesuada massa vitae a venenatis in at. Lobortis in lectus sem
              molestie aliquam diam. Justo sollicitudin sed aliquet a tincidunt
              eu vitae. Sed eget sed mauris est iaculis eu. Non nunc vitae ac
              magna tincidunt morbi feugiat. Et ipsum purus donec massa sapien.
              In odio feugiat risus massa mauris faucibus. Lectus varius
              tristique lacinia eleifend ac luctus suspendisse ut pellentesque.
            </p>
            <p className="lorem-ipsum-dolor19">&nbsp;</p>
            <p className="lorem-ipsum-dolor19">
              Lorem ipsum dolor sit amet consectetur. Sagittis purus fames
              auctor augue scelerisque urna tincidunt suscipit eu. Quis vitae et
              odio pretium maecenas sed. Amet quisque orci dolor ac vestibulum.
              Fermentum malesuada sed in erat mauris turpis. Praesent
              pellentesque aliquet pulvinar tristique pellentesque feugiat
              augue. Ultricies libero mi aliquam lectus eu habitant at. Blandit
              malesuada massa vitae a venenatis in at. Lobortis in lectus sem
              molestie aliquam diam. Justo sollicitudin sed aliquet a tincidunt
              eu vitae. Sed eget sed mauris est iaculis eu. Non nunc vitae ac
              magna tincidunt morbi feugiat. Et ipsum purus donec massa sapien.
              In odio feugiat risus massa mauris faucibus. Lectus varius
              tristique lacinia eleifend ac luctus suspendisse ut pellentesque.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ABDAboutUs;
