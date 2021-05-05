import {Component} from 'react';
import {Header, Table} from 'semantic-ui-react';
import credentials from '../core/credentials';
import CauseSelector from './CauseSelector';
import PointsOverview from './PointsOverview';
import UserOverview from './UserOverview';
// https://github.com/FoldingAtHome/fah-web-client/blob/a5884b18195338baa7bf35c633152fc344a95239/src/fah/webclient/js/main.js#L785



class Dashboard extends Component {
    render() {
        return (
            <Table basic={'very'}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell verticalAlign={'top'} width={4}>
                            <Header as={'h5'} dividing>Points earned</Header>
                            <PointsOverview credentials={credentials}/></Table.Cell>
                        <Table.Cell verticalAlign={'top'} width={4}>
                            <Header as={'h5'} dividing>Folding as</Header>
                            <UserOverview credentials={credentials}/>
                        </Table.Cell>
                        <Table.Cell verticalAlign={'top'} width={2}>
                            <Header as={'h5'} dividing>I support research fighting</Header>
                            <CauseSelector/>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default Dashboard;