import React from 'react';
import TableCats from './purecomponents/tableCats';
import ActionButton from './purecomponents/actionButton';
import { ThemeContext, themes } from "../../data/themeContext";

import "./styles/index.scss";

import myData from '../../data/data.json';


// Контроль всего приложения: состояния таблицы и данных для кнопки
class PureApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            idRow: "",
            theme: themes.theme[3],
        };

        this.handleClickRow = this.handleClickRow.bind(this);
        // console.log(typeof(myData));
    }

    // обработчик клика на строке таблицы
    handleClickRow(id) {
        this.setState({
            idRow: id.toString(),       // хранение выбранной строки
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


export default PureApp;
