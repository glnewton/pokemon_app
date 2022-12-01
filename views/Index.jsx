const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div>
                  <h1 style={myStyle}>See All The Pokemon!</h1>
                  <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  The{' '}
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon.name}
                                  </a>{' '}
                                  is {pokemon.img} <br></br>

                                  <br />
                              </li>
                          );
                      })}
                  </ul>
              </div>
      );
  }
}
module.exports = Index;