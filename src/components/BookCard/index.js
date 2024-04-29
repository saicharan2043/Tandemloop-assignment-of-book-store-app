import { RiShoppingCartLine } from "react-icons/ri";
import { MdOutlineZoomOutMap } from "react-icons/md";
import "./index.css";

const BookCard = (props) => {
  const { booksDetails } = props;
  const { title, author, imgUrl, price, id } = booksDetails;
  return (
    <li className="list-container">
      <img src={imgUrl} className="img-od-list" alt="" />
      <div className="label-container">-10%</div>
      <div className="cart-label-container">
        <RiShoppingCartLine className="icons-of-cart-and-zoom" />
      </div>
      <div className="zoom-label-container">
        <MdOutlineZoomOutMap className="icons-of-cart-and-zoom" />
      </div>
      <div className="book-details-container">
        <h1 className="book-title">{title}</h1>
        <p className="book-author">
          By: <span className="span-of-author">{author}</span>
        </p>
        <p className="price-text">
          Price: <span className="span-of-discount">$55</span>{" "}
          <span className="span-of-price">${price}</span>
        </p>
        <button className="add-cart-btn">
          <RiShoppingCartLine className="cart-iocon-btn" /> Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookCard;
