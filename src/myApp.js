import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import './css/myApp.css';
import myData from './data/data.json';


function TableRow(props) {
    return (
        <tr id={props.id}
            onClick={(e) => props.click(e.currentTarget.id)}
            className={props.cname}
        >
            <td>{props.name}</td>
            <td><img src={props.src} alt={props.name} /></td>
        </tr>
    );
}


// Рендеринг одной строки таблицы
class TableCats extends React.Component{
    render(){
        const rows = this.props.rows;
        return (
            <table>
                {rows.map((row) =>
                    <TableRow
                        id={row.id}
                        name={row.name}
                        src={row.imageUrl}
                        click={this.props.activeRow}
                        cname={(row.id.toString() === this.props.activeID) ? 'active' : ''}
                    />
                )}
            </table>
        );
    }
}


// Рендеринг таблицы и контроль состояния строк таблицы
function ActionButton(props) {
    return (
        <button onClick={props.active}>
            Узнай ID
        </button>
    );
}


// Контроль всего приложения: состояния таблицы и данных для кнопки
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {idRow: ""};

        this.handleClickButton = this.handleClickButton.bind(this);
        this.handleClickRow = this.handleClickRow.bind(this);
    }

    handleClickRow(id) {
        this.setState({idRow: id.toString()});
    }

    handleClickButton() {
        if (this.state.idRow !== '') {
            alert('ID row: ' + this.state.idRow);
        }
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
                    <ActionButton active={this.handleClickButton} />
                </header>
            </div>
        );
    }
}

export default App;
