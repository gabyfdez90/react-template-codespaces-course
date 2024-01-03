/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/faux_code.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Harry Potter and the SOLID Principles",
    description:
      "An approach to these programming principles through the popular fantasy saga.",
    url: "https://www.linkedin.com/pulse/harry-potter-y-los-principios-solid-gabriela-m-fern%25C3%25A1ndez/?trackingId=4jwfI1U8SFe2mUQhi2h%2FKw%3D%3D",
  },
  {
    title: "A journalist enters The New York Times through their API",
    description:
      "Notes on a journalist's journey into the tech industry.",
    url: "https://www.linkedin.com/pulse/una-periodista-entra-new-york-times-trav%25C3%25A9s-de-su-api-fern%25C3%25A1ndez/?trackingId=MwEGmVEAQmW%2FneiP2x6g1g%3D%3D",
  },
  {
    title: "Github Bio",
    description:
      "Check out some of the technologies and repositories I have touched so far.",
    url: "https://github.com/gabyfdez90",
  },
  {
    title: "A frameworks story",
    description:
      "A point of view on frameworks and their pro and cons for newbie devs.",
    url: "https://www.linkedin.com/pulse/una-historia-de-frameworks-gabriela-m-fern%25C3%25A1ndez/?trackingId=MwEGmVEAQmW%2FneiP2x6g1g%3D%3D",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
