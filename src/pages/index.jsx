import React, { Component } from 'react'
import Link from 'gatsby-link';
import MovieGrid from '../components/MovieGrid/MovieGrid'
import { GridList, Card, Media, CardText } from 'react-md';

class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'recommended' };
    this.toggleState = this.toggleState.bind(this);
  }

  componentWillMount() {
    let recommendedMovies = this.props.data.recommended.edges.map((edge) => {
      return {
        name: edge.node.name,
        imageUrl: edge.node.fields.imageUrl
      }
    })

    let toWatchMovies = this.props.data.toWatch.edges.map((edge) => {
      return {
        name: edge.node.name,
        imageUrl: edge.node.fields.imageUrl
      }
    })

    this.setState({ recommendedMovies, toWatchMovies })
  }

  toggleState(selected) {
    this.setState({ selected: selected })
  }

  render() {

    let toRender = (this.state.selected == 'recommended') ?
      <MovieGrid movies={this.state.recommendedMovies} /> :
      <MovieGrid movies={this.state.toWatchMovies} />;

    return (
      <div>
        <a onClick={() => this.toggleState('recommended')}>Recommended</a>
        <br />        
        <a onClick={() => this.toggleState('toWatch')}>To Watch</a>
        <br/>
        <a onClick={() => this.toggleState('dontRecommend')}>Don't Recommend</a>
        <br/>
        <a onClick={() => this.toggleState('avoid')}>Recommend to avoid</a>
        <br />
        <div style={{ 'textAlign': 'center' }}>

          {toRender}

        </div >
      </div >
    )
  }
}




export const query = graphql`
query AllMovies {
  recommended: allTrelloCard(filter: {idList: {eq: "59d7e3d0d6d8239fd88a3a2c"}}) {
    edges {
      node {
        id
        idBoard
        idList
        fields {
          imageUrl
        }
        name
      }
    }
  }
  toWatch: allTrelloCard(filter: {idList: {eq: "59d2bbcddd34e46fd979e5d5"}}) {
    edges {
      node {
        id
        idList
        fields {
          imageUrl
        }
        name
      }
    }
  }
}

`;

export default IndexPage
