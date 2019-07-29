import React from "react";
import {
    Card,
} from "react-bootstrap";

import MyButton from "./MyButton";


class Article extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }
    }

    render() {
        const {article, clickButton, isOpen} = this.props;
        const btn = isOpen ? 'Hide' : 'Show';
        const textArticle = isOpen && article.text;

        return(
            <Card className={'mb-3'} >
                <Card.Body>
                    <Card.Title>
                        <h4  className="bd-highlight">
                            <MyButton
                                className="float-right"
                                variant="outline-dark"
                                onClick={clickButton}
                                size={'sm'}
                            >
                                {btn}
                            </MyButton>
                            {article.title}
                        </h4>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" >{article.date}</Card.Subtitle>
                    <Card.Text>{textArticle}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Article;