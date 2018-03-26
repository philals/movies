import React from 'react'
import Link from 'gatsby-link';
import MovieGrid from '../components/MovieGrid/MovieGrid'
import { GridList, Card, Media, CardText } from 'react-md';

const IndexPage = ({ data }) => {
  let recommendedMovies = data.recommended.edges.map((edge) => {
    return {
      name: edge.node.name,
      imageUrl: edge.node.fields.imageUrl
    }
  })

  let toWatchMovies = data.toWatch.edges.map((edge) => {
    return {
      name: edge.node.name,
      imageUrl: edge.node.fields.imageUrl
    }
  })
  
  return (
    <div style={{ 'textAlign': 'center' }}>

      <MovieGrid movies={ recommendedMovies}/>
      <MovieGrid movies={ toWatchMovies}/>

      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
};

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
