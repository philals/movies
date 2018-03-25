import { GridList, Card, Media, CardText } from 'react-md';

class MovieGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (<GridList container="pictures" size={1} component="section" >
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
        </GridList >)
    }
};