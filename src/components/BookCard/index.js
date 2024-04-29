import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import "./index.css";
import BookContext from "../context";

const BookCard = (props) => {
  const { booksDetails } = props;
  const { title, author, imgUrl, price, id } = booksDetails;

  return (
    <BookContext.Consumer>
      {(value) => {
        const {
          increaseBtn,
          decreaseBtn,
          deleteBtn,
          addCartBtn,
          bookCartList,
          isDrakModeTrue,
        } = value;
        const filterList = bookCartList.filter(
          (eachValue) => eachValue.id === id
        );
        return (
          <li className="list-container">
            <img src={imgUrl} className="img-of-list" alt="" />
            <div className="label-container">-10%</div>
            <div className="cart-label-container">
              <RiShoppingCartLine className="icons-of-cart-and-zoom" />
            </div>
            <div className="zoom-label-container">
              <MdOutlineZoomOutMap className="icons-of-cart-and-zoom" />
            </div>

            <div
              className={`book-details-container ${
                isDrakModeTrue && "bg-black"
              }`}
            >
              <h1
                className={`book-title ${isDrakModeTrue && "dark-mode-color"}`}
              >
                {title}
              </h1>
              <p
                className={`book-author ${isDrakModeTrue && "dark-mode-color"}`}
              >
                By: <span className="span-of-author">{author}</span>
              </p>
              <p
                className={`price-text ${isDrakModeTrue && "dark-mode-color"}`}
              >
                Price: <span className="span-of-discount">${price + 20}</span>{" "}
                <span className="span-of-price">${price}</span>
              </p>
              {filterList.length === 0 ? (
                <button
                  className="add-cart-btn"
                  onClick={() => addCartBtn({ id, quantity: 1 })}
                >
                  <RiShoppingCartLine className="cart-iocon-btn" /> Add to cart
                </button>
              ) : (
                <div className="increase-and-price-container ">
                  <div
                    className={`container-of-increase-decrease-delete-container ${
                      isDrakModeTrue && "white-bg"
                    }`}
                  >
                    {filterList[0].quantity === 1 ? (
                      <MdDelete
                        className={`icons-of-delete-pluse ${
                          isDrakModeTrue && "black-color"
                        }`}
                        onClick={() => deleteBtn(id)}
                      />
                    ) : (
                      <HiMinusSm
                        className={`icons-of-delete-pluse ${
                          isDrakModeTrue && "black-color"
                        }`}
                        onClick={() => decreaseBtn(id)}
                      />
                    )}
                    <p className="">{filterList[0].quantity}</p>
                    <GoPlus
                      className={`icons-of-delete-pluse ${
                        isDrakModeTrue && "black-color"
                      }`}
                      onClick={() => increaseBtn(id)}
                    />
                  </div>
                  <p
                    className={`sub-title ${
                      isDrakModeTrue && "dark-mode-color"
                    }`}
                  >
                    ${price * filterList[0].quantity}
                  </p>
                </div>
              )}
            </div>
          </li>
        );
      }}
    </BookContext.Consumer>
  );
};

export default BookCard;
