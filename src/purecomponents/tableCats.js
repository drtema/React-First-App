
import React from "react";
import { Table } from "react-bootstrap";
import { ThemeContext } from "../data/themeContext";

// создание строки таблицы
class TableRow extends React.PureComponent {
    render() {
        const theme = this.context;             // имя темы из App
        let isSelect = this.props.cname ? theme + ' ' + this.props.cname : theme; // добавление класса выделенной строки


        return (
            <tr id={this.props.id}
                onClick={(e) => this.props.click(e.currentTarget.id)}
                className={isSelect}
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
            <Table
                bordered
                hover
                className='table table-info'
            >
                <tbody className={'table'}>
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