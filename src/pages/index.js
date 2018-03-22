import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  console.log('data:', data);
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {data.allTrelloCard.edges.map((edge, idx) => {
        return <div>
          <p key={idx}>{edge.node.name}</p>
          <img src={edge.node.fields.imageUrl} />
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
