const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
      //const { pokemon } = this.props;
      return (
              <div>
                  <h1 style={myStyle}>See All The Pokemon!</h1>
                    <ul>
                        {this.props.pokemon.map((pokemon, x) => {
                            return (
                                <li>
                                    <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.substring(0,1).toUpperCase() + pokemon.name.substring(1)}</a>
                                </li>
                            )
                            {/* return (
                                <li>
                                    The{' '}
                                    <a href={`/pokemon/${x}`}>
                                        {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                                    </a>{' '}
                                    is {pokemon.img} <br></br>
                                    <br />
                                </li>
                            ); */}
                        })}
                    </ul>
              </div>
      );
  }
}
module.exports = Index;
