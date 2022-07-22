import React from "react";
import { PropTypes } from "prop-types";

function ContentRowMovies(props) {
  return (
    <div className="row">
      {props.styles.map((movie, i) => (
        <div key={i} className="col-md-4 mb-4">
          <div
            className={` card border-left-${movie.borderColor} shadow h-100 py-2 `}
          >
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {" "}
                    {movie.title}{" "}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {" "}
                    {movie.number}{" "}
                  </div>
                </div>
                <div className="col-auto">
                  <i
                    className={` fas fa-${movie.icon} fa-2x text-gray-300 `}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
ContentRowMovies.defaultProps = {
  styles: {
    borderColor: "secondary",
    title: "Titulo default",
    number: 420,
    icon: "exclamation",
  },
};

ContentRowMovies.propTypes = {
  styles: PropTypes.arrayOf(
    PropTypes.shape({
      borderColor: PropTypes.string,
      title: PropTypes.string,
      number: PropTypes.number,
      icon: PropTypes.string,
    })
  ),
};

export default ContentRowMovies;
