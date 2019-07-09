import React from 'react';
<<<<<<< HEAD
import './css/myApp.css';
import myData from './data/data.json';

// создание строки таблицы
=======
// import logo from './logo.svg';
// import './App.css';
import './css/myApp.css';
import myData from './data/data.json';


>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
function TableRow(props) {
    return (
        <tr id={props.id}
            onClick={(e) => props.click(e.currentTarget.id)}
<<<<<<< HEAD

// ??? как написать так, чтобы класс отображался в теге HTML только если он установлен???
=======
>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
            className={props.cname}
        >
            <td>{props.name}</td>
            <td><img src={props.src} alt={props.name} /></td>
        </tr>
    );
}


<<<<<<< HEAD
// Рендеринг таблицы. Можно использовать функцию.
=======
// Рендеринг одной строки таблицы
>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
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


<<<<<<< HEAD
// Рендеринг кнопки
=======
// Рендеринг таблицы и контроль состояния строк таблицы
>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
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

<<<<<<< HEAD
    // обработчик клика на строке таблицы
=======
>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
    handleClickRow(id) {
        this.setState({idRow: id.toString()});
    }

<<<<<<< HEAD
    // обработчик нажатия кнопки
=======
>>>>>>> 50083245c50c0c8902b1b9a26dba084e8dd93d25
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
