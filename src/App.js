import React, { Component } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  state = { search: "" };
  _handleChange = e => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
   
  };
  render() {
    const { search } = this.state;
    const lowercasedFilter = search.toLowerCase();
    const filteredData = posts.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });
    return (
      <div>
        <div className="filter">
          <input
            type="text"
            placeholder="Ingresa el término de búsqueda"
            onChange={this._handleChange}
            value={this.state.search}
          />
        </div>
        <ul>
          {filteredData.map(post => (
            <li key={post.url}>
              <a href={post.url}>
                <img src={post.image}
                alt={post.title} />
              </a>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
