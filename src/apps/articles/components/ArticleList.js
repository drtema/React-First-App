import React from "react";
import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import Article from "./Article"

export default class ArticleList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            openArticleID: null,
        };

        // привязка метода здесь - приложение НЕ работает
        // this.handleClick=this.handleClick.bind(this);
    }

    handleClick = openArticleID => {
        this.setState({
            openArticleID: (this.state.openArticleID !== openArticleID ? openArticleID : null)
        })
    };

    render() {
        const articleElements = this.props.articles.map((article) => (
            <Article
                article={article}
                key={article.id}
                isOpen={this.state.openArticleID === article.id}

                //так выглядит передача пропса, при нерабочей привязке метода
                // clickButton={this.handleClick(article.id)}

                // привязка метода здесь - приложение работает
                clickButton={this.handleClick.bind(this, article.id)}
            /> )
        );

        return(
            <>
                <Container>
                    <Row className="justify-content-end">
                        <Col md={5} sm={6}>
                        {articleElements}
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}