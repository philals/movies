import { GridList, Card, Media, CardText } from 'react-md';
import React, { Component } from "react";

import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


// Card[] {
// imageUrl
// name
// }


class MovieGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (<GridList container="pictures" size={1} component="section" >
            {this.props.movies.map((card, key) => {
                return (
                    <Card key={key} style={{ minWidth: 380 }} >
                        <div style={{ 'textAlign': 'center' }}>
                            <img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={card.imageUrl} alt="Something" />
                        </div>
                        <CardText expandable={false}>{card.name}</CardText>
                    </Card>
                )
            })
            }
        </GridList >)
    }
};


export default MovieGrid;
