import React, {Component} from "react";
import { Button } from 'react-bootstrap';

export default class MyButton extends Component {
    render() {
        // console.log('^^^', this.props);
        return(
            <Button {...this.props}>
                {this.props.children}
            </Button>
        )
    }
}

