import React from "react";
import Update from "./Update";
import Form from "./Form";

const updates = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

const Content = ({ setEmail }) => {
  return (
    <div className="main__content">
      <h1 className="main__content_heading">Stay Updated</h1>

      <p className="main__content_description">
        Join 60,000+ product managers receiving monthly updates on:
      </p>

      <div className="main__content_update">
        {updates.map((update) => {
          return <Update update={update} key={update} />;
        })}
      </div>

      <Form />
    </div>
  );
};

export default Content;
