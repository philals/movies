import React from 'react'
import Link from 'gatsby-link';
// import MovieGrid from '../components/MovieGrid/MovieGrid.jsx'
import { GridList, Card, Media, CardText } from 'react-md';

const IndexPage = ({ data }) => {
  return (
    <div style={{ 'textAlign': 'center' }}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>

      {/* <MovieGrid /> */}

        <GridList container="pictures" size={1} component="section" >
          {data.allTrelloCard.edges.map((edge, key) => {
            return (
              <Card key={key} style={{ minWidth: 380 }} >
                <div style={{ 'textAlign': 'center' }}>
                  <img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={edge.node.fields.imageUrl} alt="Something" />
                </div>
                <CardText expandable={false}>{edge.node.name}</CardText>
              </Card>
            )
          })
          }
        </GridList >

      <Link to="/page-2/">Go to page 2</Link>
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
