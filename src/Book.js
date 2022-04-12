import React from "react";

export const Book = (props) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const { img, title, author } = props.book;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" height="200" width="300" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
