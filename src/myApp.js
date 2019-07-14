import React, { Component, useState } from 'react';
import './css/myApp.css';
import {
    Button,
    Modal,
    Table,
} from 'react-bootstrap';

import myData from './data/data.json';

// создание строки таблицы
function TableRow(props) {
    // случайный выбор класса для цвета фона строки
    const clr = ['clr-purple', 'clr-orange', 'clr-yellow', 'clr-green', 'clr-dark'];
    let clss = clr[Math.floor(Math.random()*(clr.length+1))];

    return (

        <tr id={props.id}
            onClick={(e) => props.click(e.currentTarget.id)}
            className={props.cname ? props.cname : clss}
        >
            <td>{props.name}</td>
            <td><img src={props.src} alt={props.name} /></td>
        </tr>
    );
}


// Рендеринг таблицы. Можно использовать функцию.
class TableCats extends Component{
    render(){
        const rows = this.props.rows;
        return (
            <Table bordered>
                <tbody>
                    {rows.map((row) =>
                        <TableRow
                            id={row.id}
                            key={row.id}
                            name={row.name}
                            src={row.imageUrl}
                            click={this.props.activeRow}
                            cname={(row.id.toString() === this.props.activeID) ? 'active' : ''}
                        />
                    )}
                </tbody>
            </Table>
        );
    }
}


// Рендеринг кнопки
function ActionButton(idRow) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { if (idRow.idRow) setShow(true);}

    return (
        <>
            <Button
                variant={'secondary'}
                size="md"
                onClick={handleShow}
            >
                Узнай ID
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ID select row</Modal.Title>
                </Modal.Header>
                <Modal.Body>ID select row is {idRow.idRow}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


// Контроль всего приложения: состояния таблицы и данных для кнопки
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {idRow: ""};

        this.handleClickRow = this.handleClickRow.bind(this);
    }

    // обработчик клика на строке таблицы
    handleClickRow(id) {
        this.setState({idRow: id.toString()});
    }

    render() {
        let rowsArray = myData;
        return (
            <div className="App">
                <header className="App-header">

                    <TableCats
                        rows={rowsArray}
                        activeRow={this.handleClickRow}
                        activeID={this.state.idRow}
                    />
                    {/*<ActionButton active={this.handleClickButton} />*/}
                    <ActionButton idRow={this.state.idRow}/>
                </header>
                {/*<AppStrap />*/}
            </div>
        );
    }
}

export default App;
