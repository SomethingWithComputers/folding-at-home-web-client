import PropTypes from 'prop-types';
import {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

class UserOverview extends Component {
    render() {
        const {team, user} = this.props.credentials;
        return (
            <Container fluid>
                <div><strong>{user}</strong></div>
                <div><strong>{team}</strong></div>
            </Container>
        );
    }
}

UserOverview.propTypes = {
    credentials: PropTypes.object.isRequired,
}

export default UserOverview;