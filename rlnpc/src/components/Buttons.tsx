import * as React from 'react';

class Controls extends React.Component {

    render() {
        return (
            <Play click={() => { }} />
        );
    }
}

class Button extends React.Component {

}

class Play extends Button {
    props: {
        click: () => void;
    };

    handleClick = () => {
        alert('Hi again');
    }
    constructor(props: { click: Function }) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.click}>
                Run Code
            </div>
        );
    }
}

export { Play, Button };