import { GridList, Grid, Cell, Card, Media, CardText } from 'react-md';
import React, { Component } from "react";

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


// Card[] {
// imageUrl
// name
// }

{/* <Grid className="grid-example">
    <Cell size={6} tabletSize={8}>6 (8 tablet)</Cell>
    <Cell size={4} tabletSize={6}>4 (6 tablet)</Cell>
    <Cell size={2} phoneSize={4}>2 (4 phone)</Cell>
</Grid> */}


class MovieGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <Grid container="pictures" size={1} component="section" >
                {this.props.movies.map((card, key) => {
                    return (
                        <Cell key={key} style={{ minWidth: 380 }} >
                            <div style={{ 'textAlign': 'center' }}>
                                <img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={card.imageUrl} alt="Something" />
                            </div>
                            <CardText expandable={false}>{card.name}</CardText>
                        </Cell>
                    )
                })}
            </Grid >)
    }
};


export default MovieGrid;
