import React, { Component } from 'react'
import Link from 'gatsby-link';
import MovieGrid from '../components/MovieGrid/MovieGrid'
import { GridList, Card, Media, CardText, TabsContainer, Tabs, Tab } from 'react-md';

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
        imageUrl: edge.node.fields.imageUrl,
        imdburl: edge.node.fields.imdburl,
        rating: edge.node.fields.rating,
      }
    })

    let toWatchMovies = this.props.data.toWatch.edges.map((edge) => {
      return {
        name: edge.node.name,
        imageUrl: edge.node.fields.imageUrl,
        imdburl: edge.node.fields.imdburl,
        rating: edge.node.fields.rating,
      }
    })

    let dontRecommend = this.props.data.dontRecommend.edges.map((edge) => {
      return {
        name: edge.node.name,
        imageUrl: edge.node.fields.imageUrl,
        imdburl: edge.node.fields.imdburl,
        rating: edge.node.fields.rating,
      }
    })

    // let avoid = this.props.data.avoid.edges.map((edge) => {
    //   return {
    //     name: edge.node.name,
    //     imageUrl: edge.node.fields.imageUrl,
    //     imdburl: edge.node.fields.imdburl,
    //     rating: edge.node.fields.rating,
    //   }
    // })

    let avoid = [];

    this.setState({ recommendedMovies, toWatchMovies, dontRecommend, avoid })
  }

  toggleState(selected) {
    this.setState({ selected: selected })
  }

  render() {

    let toRender = null;

    switch (this.state.selected) {
      case 'recommended':
        toRender = <MovieGrid movies={this.state.recommendedMovies} />;
        break;
      case 'toWatch':
        toRender = <MovieGrid movies={this.state.toWatchMovies} />;
        break;
      case 'dontRecommend':
        toRender = <MovieGrid movies={this.state.dontRecommend} />;
        break;
      case 'avoid':
        toRender = <MovieGrid movies={this.state.avoid} />;
        break;
      default:
        toRender = <MovieGrid movies={this.state.recommendedMovies} />;
        break;
    }

    return (
      <div>
        <TabsContainer panelClassName="md-grid" colored >
          <Tabs tabId="simple-tab" mobile={true} style={{ background: '#9783ac' }}>
            <Tab label="Recommended" onClick={() => this.toggleState('recommended')}>
            </Tab>
            <Tab label="To Watch" onClick={() => this.toggleState('toWatch')}>
            </Tab>
            <Tab label="Don't Recommend" onClick={() => { this.toggleState('dontRecommend'); }}>
            </Tab>
            <Tab label="Avoid" onClick={() => { this.toggleState('avoid'); }}>
            </Tab>
          </Tabs>
        </TabsContainer>


        {toRender}

      </div >
    )
  }
}




export const query = graphql`
query AllMovies {
   avoid: allTrelloCard(filter: {idList: {eq: "5a53aacd2e413c0399532d42"}}) {
    edges {
      node {
        id
        idBoard
        idList
        fields {
          imageUrl
          rating
          imdburl
        }
        name
      }
    }
  }
   dontRecommend: allTrelloCard(filter: {idList: {eq: "5a53aac4bd0a8ea8ba877850"}}) {
    edges {
      node {
        id
        idBoard
        idList
        fields {
          imageUrl
          rating
          imdburl
        }
        name
      }
    }
  }
  recommended: allTrelloCard(filter: {idList: {eq: "59d7e3d0d6d8239fd88a3a2c"}}) {
    edges {
      node {
        id
        idBoard
        idList
        fields {
          imageUrl
          rating
          imdburl
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
          imdburl
          rating
        }
        name
      }
    }
  }
}

`;

export default IndexPage
