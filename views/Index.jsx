const React = require('react');
const Default = require("./Default")

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
      //const { pokemon } = this.props;
      return (
                <Default title={"Pokemon Index Page"}>

                  <h1 style={myStyle}>See All The Pokemon!</h1>
                    <ul>
                        {this.props.pokemon.map((pokemon, x) => {       
                                return (
                                    <>
                                        <li>
                                            <a href={`/pokemon/${pokemon.id}`}>{pokemon.name.substring(0,1).toUpperCase() + pokemon.name.substring(1)}</a>
                                        </li>

                                        <a href={`/pokemon/${pokemon.id}/edit`}>Edit</a>

                                        <form action={`/pokemon/${pokemon.id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="DELETE"/>
                                        </form>
                                    </>
                                )
                            })
                        }
                    </ul>
              </Default>
      );
  }
}
module.exports = Index;
