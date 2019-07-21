import React from 'react';
import {
    Button,
    Modal,
} from 'react-bootstrap';


// Рендеринг кнопки и контроль модального окна
class ActionButton extends React.PureComponent {
    state = {
        show: false
    };

    render() {
        // управоение отображения модального окна
        const handleClose = () => this.setState({show: false});
        const handleShow = () => { this.props.idRow && this.setState({show:true})};

        return (
            <>
                <Button
                    variant={this.props.theme}
                    size="md"
                    onClick={handleShow}
                >
                    Узнай ID
                </Button>

                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ID select row</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>ID select row is {this.props.idRow}</Modal.Body>
                    <Modal.Footer>
                        <Button variant={this.props.theme} onClick={handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}


export default ActionButton;