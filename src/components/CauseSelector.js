import {Component} from 'react';
import {Container, Dropdown} from 'semantic-ui-react';


class CauseSelector extends Component {
    constructor(props) {
        super(props);
        this.options = [
            {key: 'ANY', text: 'Any disease', value: 'ANY'},
            {key: 'COVID_19', text: 'COVID-19', value: 'COVID_19'},
            {key: 'ALZHEIMERS', text: 'Alzheimer\'s', value: 'ALZHEIMERS'},
            {key: 'CANCER', text: 'Cancer', value: 'CANCER'},
            {key: 'HUNTINGTONS', text: 'Huntington\'s', value: 'HUNTINGTONS'},
            {key: 'PARKINSONS', text: 'Parkinson\'s', value: 'PARKINSONS'},
            {key: 'HIGH_PRIORITY', text: 'High Priority', value: 'HIGH_PRIORITY'},
        ]
        this.state = {selected: 'ANY'};
    }

    render() {
        return (
            <Container fluid>
                <Dropdown
                    defaultValue={this.state.selected}
                    onChange={(event, {name, value}) => {
                        this.setState({selected: value});
                    }}
                    options={this.options}
                    selection
                />
            </Container>
        );
    }
};

export default CauseSelector;