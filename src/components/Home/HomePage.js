import React, { useEffect } from "react";
// import NavBar from '../Nav/NavBar';
import "./style.css";

const HomePage = () => {
  return (
    <>
      <div className="HomePage">
        <h1>
          MyRetailo...
          <br />
          "Making Life's Easier For Everyone"
        </h1>
        <a class="btn btn-full" href="/about">
          {" "}
          See About...
        </a>
      </div>
    </>
  );
};
export default HomePage;
