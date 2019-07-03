import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './css/myApp.css';
import myData from './data/data.json';

function GetTable(props) {
    const rows = props.rows;
    let listRows = rows.map((row) =>
        <tr id={row.id} onClick={selectRow}>
            <td>{row.name}</td>
            <td><img src={row.imageUrl} /></td>
        </tr>
    )

    return (
        <table>
            {listRows}
        </table>
    );
}

function selectRow() {

}


class ActionButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {isSelectRow : false};

        this.handleClick = this.handleClick.bind(this);
    }

    setSelectedRow(props){
        if (props.id > 0) {
            this.setState(state => ({
                    isSelectRow: true
                })
            )
        }
    }


    handleClick(props){
        if (this.state.isSelectRow)
            alert(props.id);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Submit
            </button>
        );
    }
}

function App() {
    const rowsArray = myData;
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
                <GetTable rows={rowsArray} />
                <ActionButton />
            </header>
        </div>
    );
}

export default App;
