import React from "react";

export const ProjectCard = () => {
  return (
    <div className="frame">
      <div className="picture"></div>
      <div className="social twitter">
        <a href="https://twitter.com/tamer_aka_remat" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
      </div>

      <div className="social linkedin">
        <a
          href="https://www.linkedin.com/in/amtamer/?locale=en_US"
          target="_blank"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </div>

      <div className="social codepen">
        <a href="https://codepen.io/tamer_aka_remat/" target="_blank">
          <i className="fa fa-codepen"></i>
        </a>
      </div>
    </div>
  );
};
