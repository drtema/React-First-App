import React, { useState } from 'react';
import {
    Button,
    Modal,
} from 'react-bootstrap';


// Рендеринг кнопки и контроль модального окна
function ActionButton(props) {
    const [show, setShow] = useState(false);

    // управоение отображения модального окна
    const handleClose = () => setShow(false);
    const handleShow = () => { if (props.idRow) setShow(true);};

    return (
        <>
            <Button
                variant={props.theme}
                size="md"
                onClick={handleShow}
            >
                Узнай ID
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ID select row</Modal.Title>
                </Modal.Header>
                <Modal.Body>ID select row is {props.idRow}</Modal.Body>
                <Modal.Footer>
                    <Button variant={props.theme} onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ActionButton;