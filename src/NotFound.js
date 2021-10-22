import React from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h2>Page requested not found! <span role="img" aria-label="Cryingman">&#128557;</span></h2>
        <img src="https://c.tenor.com/4uPJsA8k1KEAAAAM/pokemon-pikachu.gif" alt="pikachu chorando" />
      </div>
    )
  }
}

export default NotFound;