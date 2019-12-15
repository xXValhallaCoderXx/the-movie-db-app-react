import React from "react";

const QUOTES_PER_PAGE = 3;

const Quote = ({text}) => <li>{text}</li>;

const Pagination = ({pages, goTo}) => {
  console.log("OAGES: ", pages);
  console.log("GO TO: ", goTo)
  return (
    <div>
    {pages.map((p, i) => (
      <button key={i} onClick={goTo} value={i}>
        {i + 1}
      </button>
    ))}
  </div>
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pagedQuoutes: this.divideQuoutesIntoPages(props.quotes)
    };
  }

  divideQuoutesIntoPages = quotes => {
    const pagedQuotes = [];
    [...Array(Math.ceil(quotes.length / QUOTES_PER_PAGE))].forEach((q, i) => {
      pagedQuotes.push(
        quotes.slice(
          0 + QUOTES_PER_PAGE * i,
          QUOTES_PER_PAGE + QUOTES_PER_PAGE * i
        )
      );
    });
    return pagedQuotes;
  };

  filterQuoutes = evt => {
    const filterValue = evt.target.value;
    const filteredQuoutes = this.props.quotes.filter(
      q => !filterValue || q.theme === filterValue
    );
    this.setState({
      pagedQuoutes: this.divideQuoutesIntoPages(filteredQuoutes)
    });
  };

  goToPage = evt => {
    this.setState({
      page: evt.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Quotes</h1>
        <div>
          Filters:
          <button onClick={this.filterQuoutes}>All Quotes</button>
          <button onClick={this.filterQuoutes} value="games">
            Games
          </button>
          <button onClick={this.filterQuoutes} value="movies">
            Movies
          </button>
        </div>
        {this.state.pagedQuoutes[this.state.page].map(q => (
          <ul>
            <Quote {...q} />
          </ul>
        ))}
        <Pagination pages={this.state.pagedQuoutes} goTo={this.goToPage} />
      </div>
    );
  }
}

export default App;
