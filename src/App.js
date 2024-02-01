import React from "react";

import Content from "./components/Content";
import Image from "./components/Image";

const App = ({ setEmail }) => {
  return (
    <main className="main">
      <Content />
      <Image />
    </main>
  );
};

export default App;
