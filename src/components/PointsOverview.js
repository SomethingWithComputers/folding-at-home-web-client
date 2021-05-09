import jsonp from 'jsonp-modernized';
import PropTypes from 'prop-types';
import {Component} from 'react';
import {Container, Header, Loader} from 'semantic-ui-react';

class PointsOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            statistics: {
                contributed: 0,
                earned: 0,
                team_total: 0
            }
        };
    }

    componentDidMount() {
        jsonp('https://stats.foldingathome.org/user', {parameters: this.props.credentials})
            .then(response => {
                // console.log(response[0][1]);
                this.setState({
                    isLoading: false,
                    statistics: response[0][1]
                });
            })
            .catch(error => {
                this.setState({
                    isLoading: true
                });
            });
    }

    render() {
        if (this.state.isLoading) {
            return <Loader active inline={'centered'}/>;
        }
        const {contributed, earned, team_name, team_total, team_url} = this.state.statistics;
        return (
            <Container fluid>
                <Header as={'h1'}>{earned.toLocaleString()}</Header>
                <strong>{contributed.toLocaleString()}</strong> go to team <a href={team_url}>{team_name}</a>'s total
                of <strong>{team_total.toLocaleString()}</strong>
            </Container>
        );
    }
}

PointsOverview.propTypes = {
    credentials: PropTypes.object.isRequired,
}

export default PointsOverview;