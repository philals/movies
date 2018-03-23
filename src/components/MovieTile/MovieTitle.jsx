import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Button from "react-md/lib/Buttons";
import Avatar from "react-md/lib/Avatars";
import CardText from "react-md/lib/Cards/CardText";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import Media, { MediaOverlay } from "react-md/lib/Media";
import "./MovieTile.scss";

class MovieTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: true
        };
        // this.handleResize = this.handleResize.bind(this);
    }
    componentDidMount() {
        this.handleResize();
        // window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        // window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        if (window.innerWidth >= 640) {
            this.setState({ mobile: false });
        } else {
            this.setState({ mobile: true });
        }
    }
    render() {
        console.log('------->', this.props)
        const { mobile } = this.state;
        const expand = mobile;
        /* eslint no-undef: "off"*/
        const cover = '';
        const coverHeight = mobile ? 445 : 300;
        return (
            <Card key={1} raise className="md-grid md-cell md-cell--12">
                {/* <Link style={{ textDecoration: "none" }} to={'#'}>
                    <Media
                        style={{
                            backgroundImage: `url('${this.props.edge.node.fields.imageUrl ? this.props.edge.node.fields.imageUrl : '/'}')`,
                            height: `${coverHeight}px`
                        }}
                        className="post-preview-cover"
                    >
                        <img src="https://ia.media-imdb.com/images/M/MV5BMTc5Mzg3NjI4OF5BMl5BanBnXkFtZTgwNzA3Mzg4MDI@._V1_SX300.jpg" />
                    
                    </Media>
                </Link> */}
                <CardText expandable={expand}>
                    <img src={this.props.edge.node.fields.imageUrl} />
                <br/>
                    {this.props.edge.node.name}
                     <Button raised secondary className="md-cell--right">IMDB</Button>
                    <Button raised secondary className="md-cell--right">Rotten Tomatoes</Button>
                </CardText>
            </Card>
        );
    }
}

export default MovieTile;
