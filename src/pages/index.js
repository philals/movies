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
        return <p key={idx}>{edge.node.name}</p>
      })}
    </div>
  )
};

export const query = graphql`
query AllCards {
  allTrelloCard(filter: {idBoard: {eq: "59d2bbb9eb383dbdd9dfaff8"}}) {
    edges {
      node {
        id
        name
      }
    }
  }
}`;

export default IndexPage
