import { Grid, Cell, CardText, Button, Avatar, Badge } from 'react-md';
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
                                <a href={card.imdburl}><img className={'md-cell--middle'} style={{ 'margin': 'auto', 'minHeight': 445 }} src={card.imageUrl} alt={card.name} /></a>
                            </div>

                            {/* <div style={{marginLeft: 'auto', marginRight: 'auto'}} > */}
                            <div style={{ 'textAlign': 'center' }}>

                                <a href={card.imdburl} target="_blank" > <Button raised >{card.name}</Button></a>

                                <Avatar style={{ marginLeft:'15px'}}>{card.rating}</Avatar>
                            </div>
                        </Cell>
                    )
                })}
            </Grid >)
    }
};


export default MovieGrid;
