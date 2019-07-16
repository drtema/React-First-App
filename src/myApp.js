import React from 'react';
import TableCats from './tableCats';
import ActionButton from './actionButton';
import { ThemeContext, themes } from "./themeContext";
import './css/myApp.css';

import myData from './data/data.json';




// Контроль всего приложения: состояния таблицы и данных для кнопки
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            idRow: "",
            theme: themes.theme[3],
        };


        this.handleClickRow = this.handleClickRow.bind(this);
    }
    // обработчик клика на строке таблицы
    handleClickRow(id) {
        this.setState({
            idRow: id.toString(),       // хранение выбранной строки
            theme: themes.theme[id-1],  // устновка состояния Темы
        });
    }

    render() {
        let rowsArray = myData;
        return (
            <div className="App">
                <header className="App-header">
                    <ThemeContext.Provider value={this.state.theme}>
                        <TableCats
                            rows={rowsArray}
                            activeRow={this.handleClickRow}
                            activeID={this.state.idRow}
                        />
                        <ActionButton
                            idRow={this.state.idRow}
                            theme={this.state.theme}
                        />
                    </ThemeContext.Provider>

                </header>
            </div>
        );
    }
}

export default App;
