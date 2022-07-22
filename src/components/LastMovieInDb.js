import React from "react";
import PropTypes from "prop-types";

function LastMovieInDb(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Titulo</th>
          <th scope="col">Duracion</th>
          <th scope="col">Rating</th>
          <th scope="col">Genero</th>
          <th scope="col">Premios</th>
        </tr>
      </thead>
      <tbody>
     { props.peliculas.map((pelicula, i) =>
         
            <tr key={i}>
              <td>{pelicula.title}</td>
              <td>{pelicula.duration}</td>
              <td>{pelicula.rating}</td>
              <td>{pelicula.genre}</td>
              <td>{pelicula.awards}</td>
            </tr>
          
        )}
        {/* <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr>
        <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr>
        <tr>
        <td>Billy Elliot</td>
          <td>123</td>
          <td>5</td>
          <td>Comedia</td>
          <td>5</td>
        </tr> */}
      </tbody>
    </table>
  );
}
LastMovieInDb.defaultProps = {
  styles: {
      borderColor: "secondary",
      title: "Titulo default",
      number: 420,
      icon: "exclamation"
  }
  
}

LastMovieInDb.propTypes = {

      duration:PropTypes.number,
      title: PropTypes.string,
      rating: PropTypes.number,
      genre: PropTypes.string,
      awards: PropTypes.number
      

  
}
export default LastMovieInDb;
