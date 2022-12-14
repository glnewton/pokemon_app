const React = require('react');
const Header = require('./Header')
//import '../public/style.css'


class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
        </head>
        <body>
            <Header></Header>
            <main>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </main> 
        </body>
        <footer>
            Footer Stuff
        </footer>
      </html>
    );
  }
}

module.exports = Default;