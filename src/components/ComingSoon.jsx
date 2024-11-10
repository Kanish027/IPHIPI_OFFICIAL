import React from "react";
import "./styles.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="heading-container">
        <h1 className="heading mb-10 lg:mb-20">
          Introducing our new TWS Upcoming Features
        </h1>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <div
              className="slide-content flex items-center lg:px-20 px-4 sm:px-6 h-full rounded-3xl"
              style={{ backgroundColor: "#F0E8DF" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 text-red-500 font-bold"
                  // style={{ color: "#423f3f" }}
                >
                  Two-Way Conversation Sensor
                </h2>
                <p
                  className="text-sm lg:text-md text-red-500 font-medium"
                  // style={{ color: "#423f3f" }}
                >
                  Detects conversation when the user starts speaking and when
                  someone calls the user with a registered name. Pauses music
                  and switches on transparency mode with vocal boost to ensure
                  the user never misses important interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src="CardImage12.jpeg" alt="" />
          </div>
          <div className="slide">
            <div
              className="slide-content flex items-center  lg:px-20 px-4 sm:px-6 h-full rounded-3xl"
              style={{ backgroundColor: "#F0E8DF" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 text-red-500 font-bold"
                  // style={{ color: "#423f3f" }}
                >
                  AI Spatial Audio
                </h2>
                <p
                  className="text-sm lg:text-md text-red-500 font-medium"
                  // style={{ color: "#423f3f" }}
                >
                  Utilizes HRTF based algorithms to create a 3D audio effect.
                  Provides an immersive{" "}
                  <span className="text-xs lg:text-sm">experience</span> for
                  movies and music recorded in spatial audio formats.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src="CardImage13.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
