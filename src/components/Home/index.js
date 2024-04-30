import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import BookCard from "../BookCard";
import NavBar from "../Navbar";
import "./index.css";
import BookContext from "../context";

let books = [
  {
    id: 0,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-2.jpg",
    author: "Jessica Johnson",
    title: "Symphony Of Trilogy",
    price: 22.0,
  },
  {
    id: 1,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-3.jpg",
    author: "Jane Doe",
    title: "Wellness And Paradise",
    price: 67.0,
  },

  {
    id: 2,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-7.jpg",
    author: "James Hoffman",
    title: "Renaissance History",
    price: 47.0,
  },

  {
    id: 3,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-8.jpg",
    author: "Adam Strass",
    title: "Fantasy Storytelling",
    price: 29.0,
  },

  {
    id: 4,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-9.jpg",
    author: "James Hoffman",
    title: "Amster Hamster Trip",
    price: 69.0,
  },

  {
    id: 5,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-4.jpg",
    author: "John Strass",
    title: "Easy Fast Cooking",
    price: 78.0,
  },

  {
    id: 6,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-5.jpg",
    author: "Jane Doe",
    title: "Summertime Love Stories",
    price: 33.0,
  },

  {
    id: 7,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-6.jpg",
    author: "John Strass",
    title: "Japan Travel Stories",
    price: 56.0,
  },

  {
    id: 8,
    imgUrl:
      "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/product-10.jpg",
    author: "Jessica Johnson",
    title: "Learn To Love Yourself",
    price: 50.0,
  },

  {
    id: 9,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bookshelf-80a82.appspot.com/o/cover-4.jpg?alt=media&token=cf98c7fe-a7d8-4779-b1f9-ed502344ac95",
    author: "John Strass",
    title: "Japan Travel Stories",
    price: 80.0,
  },
  {
    id: 10,
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/bookshelf-80a82.appspot.com/o/book-13.png?alt=media&token=a2cb4bbf-f0cb-4fd7-b2f0-dc68a1fbc7ee",
    author: "James Hoffman",
    title: "Amster Hamster Trip",
    price: 45.0,
  },
];

const Home = () => {
  const [filterBooks, setFilterBooks] = useState([...books]);

  const changeSearchText = (value) => {
    console.log(value);
    setFilterBooks([
      ...books.filter((eachValue) => {
        if (
          eachValue.title.includes(value) ||
          eachValue.author.includes(value)
        ) {
          return eachValue;
        }
      }),
    ]);
  };

  return (
    <BookContext.Consumer>
      {(value) => {
        const { isDrakModeTrue } = value;
        return (
          <div
            className={`background-container ${
              isDrakModeTrue && "bg-color-og-dark-mode-home"
            }`}
          >
            <NavBar changeSearchText={changeSearchText} />
            <div className="input-container-sm">
              <IoSearch className="search-icon-sm" />
              <input
                type="search"
                placeholder="Search your book here"
                className="search-input-sm"
                onChange={(e) => changeSearchText(e.target.value)}
              />
            </div>
            <div className="banner-conatiner">
              <div className="heading-container">
                <p className="label-of-banner">
                  LET'S MAKE THE BEST INVESTMENT
                </p>
                <h1
                  className={`heading-of-banner ${
                    isDrakModeTrue && "dark-mode-color"
                  }`}
                >
                  There Is No Friend As Loyal As A Book
                </h1>
                <p
                  className={`description-of-banner ${
                    isDrakModeTrue && "dark-mode-color"
                  }`}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  harum quibusdam, assumenda quia explicabo.
                </p>
                <button className="shop-now-btn">Shop now</button>
              </div>
              <img
                src="https://bookshelf-snowy.vercel.app/assets/images/hero2.png"
                alt=""
                className="img-of-banner"
              />
            </div>

            <div
              className={`discount-container ${isDrakModeTrue && "bg-black"}`}
            >
              <div className="card-of-discount">
                <img
                  src="https://bookshelf-snowy.vercel.app/assets/images/book1.jpg"
                  className="img-of-discount"
                />
                <div className="text-container-of-discount">
                  <p className="text-of-discount">SALE UP TO 15%</p>
                  <p
                    className={`heading-of-discount ${
                      isDrakModeTrue && "dark-mode-color"
                    }`}
                  >
                    Innovation in Education (Hardcover)
                  </p>
                  <p
                    className={`discription-of-discount ${
                      isDrakModeTrue && "dark-mode-color"
                    }`}
                  >
                    Starting at:{" "}
                    <span className="text-of-discount">$69.09</span>
                  </p>
                </div>
              </div>

              <div className="card-of-discount">
                <img
                  src="https://bookshelf-snowy.vercel.app/assets/images/book2.jpg"
                  className="img-of-discount"
                />
                <div className="text-container-of-discount">
                  <p className="text-of-discount">SALE UP TO 10%</p>
                  <p
                    className={`heading-of-discount ${
                      isDrakModeTrue && "dark-mode-color"
                    }`}
                  >
                    Innovation in Education (Hardcover)
                  </p>
                  <p
                    className={`discription-of-discount ${
                      isDrakModeTrue && "dark-mode-color"
                    }`}
                  >
                    Starting at:{" "}
                    <span className="text-of-discount">$50.09</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="books-gallery-text">BOOKS GALLERY</p>
            <h1
              className={`popular-books-text ${
                isDrakModeTrue && "dark-mode-color"
              }`}
            >
              Popular Books
            </h1>

            <ul className="books-ul-list">
              {filterBooks.map((eachValue) => (
                <BookCard booksDetails={eachValue} key={eachValue.id} />
              ))}
            </ul>
          </div>
        );
      }}
    </BookContext.Consumer>
  );
};

export default Home;
