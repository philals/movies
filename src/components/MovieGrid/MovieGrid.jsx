import { Grid, Cell, CardText } from 'react-md';
import React, { Component } from "react";

class MovieGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Grid container="pictures" component="section" >
                {this.props.movies.map((card, key) => {
                    return (
                        <Cell key={key} style={{ minWidth: 380, marginLeft: 'auto', marginRight: 'auto' }} >
                            <div style={{ 'textAlign': 'center' }}>
                                <img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={card.imageUrl} alt={card.name} />
                            </div>
                            <CardText expandable={false}>{card.name}</CardText>
                        </Cell>
                    )
                })}
            </Grid >)
    }
};


export default MovieGrid;
