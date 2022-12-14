const React = require('react');
const Default = require('./Default.jsx')

class Edit extends React.Component {
    render() {
      return (
          <>
            <Default title="Edit Page">      
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
            <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
                Image: <input type="text" name="image"  defaultValue={this.props.pokemon.img}/><br/>
                Color: <input type="text" name="color"  defaultValue={this.props.pokemon.color}/><br/>
                Is Caught:
                    { this.props.pokemon.isCaught? <input type="checkbox" name="isCaught" defaultChecked />: <input type="checkbox" name="isCaught"/> }
                <br/>
                <input type="submit" value="Submit Changes"/>
            </form>
            </Default>
          </>
      );
    }
  }
  
  module.exports = Edit;

