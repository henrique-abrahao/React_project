import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const baseUrl = 'http://localhost:3001/card'

class CardInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { card: { name: '' } };

    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`${baseUrl}/${id}`)
            .then(({ data: card }) => {
                this.setState({ card });
            });
    }


    render() {
        const { card } = this.state;

        return (
            <Modal open dimmer="blurring" centered={false}>
                <Modal.Header>{card.name}</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='small' src='https://pm1.narvii.com/6355/5dd251152c01afd219840753c1cff058de4a7a95_hq.jpg' />
                    <Modal.Description>
                        <p>Força de Ataque: {card.forcaAtq}</p>
                        <p>Força de Defesa: {card.forcaDef}</p>
                        <p>Tipo: {card.typeCard}</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Link to={`/card/${card.id}`}>
                        <Button positive>Edit</Button>
                    </Link>
                    <Link to='/deck'>
                        <Button>Close</Button>
                    </Link>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default CardInfo;
