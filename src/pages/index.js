import React from 'react'
import Link from 'gatsby-link';
import MovieTile from '../components/MovieTile/MovieTitle.jsx'

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {data.allTrelloCard.edges.map((edge, idx) => {
          console.log(edge);
        
        return <div>
         
          <MovieTile edge={edge} key={idx + 'a'} />


          <p key={idx}>{edge.node.name}</p>
        </div>
          })}
    </div>
  )
};

export const query = graphql`
query MyName {
  allTrelloCard {
    edges {
      node {
        id
        fields{
          imageUrl
        }
        name
      }
    }
  }
}
`;

export default IndexPage
