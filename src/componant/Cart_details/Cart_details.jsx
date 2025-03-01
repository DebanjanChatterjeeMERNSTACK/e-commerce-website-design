import "./Cart_details.css";
import img from "../../assets/image.jpg";

const Cart_details = () => {
  const str = "Imported Popcorn Stylish Shirts For Mens And Female";
  return (
    <>
      <div className="Cart_details_contaner">
        <div className="Cart_details_maxwidth">
          <div className="Cart_details_flex">
            <div className="cart_product">
              {[1, 2, 3, 4, 5, 6].map((e) => {
                return (
                  <>
                    <div className="cart_product_contant">
                      <img
                        src={img}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "5px",
                        }}
                      />
                      <div className="cart_product_contant_remove">
                        <p>{str.slice(0, 51)}...</p>
                        <div className="cart_product_price">
                          <p>$555</p>
                          <p>
                            <del>$222</del>{" "}
                          </p>
                          <p>5%</p>
                        </div>
                        <div className="cart_product_price_data">
                          <p>Size: Free Size</p>
                          <p>Qty: 2</p>
                        </div>
                        <button>X Remove</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="cart_product_cal"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart_details;
