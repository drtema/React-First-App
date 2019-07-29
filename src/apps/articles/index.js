import React from "react";
import {
    Button,
    Jumbotron,
} from "react-bootstrap";
import ArticleList from './components/ArticleList';

import "./styles/index.scss";

import art from "../../data/articles.json";


class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            reversed: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState({
            reversed: !this.state.reversed,
        })
    };

    render() {
        const articles = art;
        const articleList = this.state.reversed ? articles.slice().reverse() : articles
        const btn = this.state.reversed ? 'Direct' : 'Reverse';

        return(
            <>
                <Jumbotron fluid>
                    <h1 className={'text-center'}>
                        Articles App
                        <Button onClick={this.handleClick} className="ml-5">
                            {btn}
                        </Button>
                    </h1>
                </Jumbotron>

                <ArticleList articles={articleList} />
            </>
        )
    }
}

export default Articles;