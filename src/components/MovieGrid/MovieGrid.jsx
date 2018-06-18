import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from "react";
import { Avatar, Button, Cell, Grid } from 'react-md';

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
                                <OutboundLink href={card.imdburl}><img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={card.imageUrl} alt={card.name} /></OutboundLink>
                            </div>

                            {/* <div style={{marginLeft: 'auto', marginRight: 'auto'}} > */}
                            <div style={{ 'textAlign': 'center' }}>

                                <OutboundLink href={card.imdburl} target="_blank" > <Button raised >{card.name}</Button></OutboundLink>

                                <Avatar style={{ marginLeft: '15px' }}>{card.rating}</Avatar>
                            </div>
                        </Cell>
                    )
                })}
            </Grid >)
    }
};


export default MovieGrid;
