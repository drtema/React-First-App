
import React from "react";
import { Table } from "react-bootstrap";
import { ThemeContext } from "./themeContext";

// создание строки таблицы
class TableRow extends React.Component {
    render() {
        const theme = this.context;             // имя темы из App
        const bgColor = 'bg-' + theme;          // имя класса темы
        let isSelect = bgColor + ' ' + this.props.cname; // добавление класса выделенной строки


        return (

            <tr id={this.props.id}
                onClick={(e) => this.props.click(e.currentTarget.id)}
                className={this.props.cname ? isSelect : bgColor}
            >
                <td>{this.props.name}</td>
                <td><img src={this.props.src} alt={this.props.name} /></td>
            </tr>
        );
    }
}
TableRow.contextType = ThemeContext;

// Рендеринг таблицы. Можно использовать функцию.
class TableCats extends React.Component{
    render(){
        const rows = this.props.rows;
        return (
            <Table bordered hover>
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


export default TableCats;