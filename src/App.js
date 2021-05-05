import {Container, Header} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Container fluid>
            <Container>
                <Header as={'h1'} textAlign={'center'}>Folding@home</Header>
                <Dashboard/>
            </Container>
        </Container>
    );
}

export default App;
