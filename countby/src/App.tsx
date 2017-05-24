/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from 'reactxp'
import * as pouch from 'pouchdb-browser'
import Recorder from './Recorder'


import ToggleSwitch from './ToggleSwitch';
import AdditionProblem from './questions/addition';
import Multiplication from './questions/multiplication';
import Numpad from './components/numpad';

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 40
    }),
    toggleTitle: RX.Styles.createTextStyle({
        fontSize: 16,
        color: 'black'
    })
};

interface AppState {
    record: Array<object>
}

class App extends RX.Component<null, AppState> {
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

    newQuestion() {
        console.log("a new question is being generated"); //todo
    }

    constructor() {
        super();

        this._translationValue = new RX.Animated.Value(-10);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });

    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        }
        );

        animation.start();
    }

    render(): JSX.Element | null {
        return (
            <RX.View style={styles.container}>
                <RX.Animated.Text style={[styles.helloWorld, this._animatedStyle]}>
                    Hi there!
                </RX.Animated.Text>
                <RX.Text style={styles.welcome}>
                    Let's get a little practice with our multiplication and division facts.
                </RX.Text>


                <RX.Text style={styles.toggleTitle}>
                    Here is a work-in-progress implementation of a count-by numberpad visualization aide.
                </RX.Text>

                <Multiplication a={3} b={7} onanswer={this.newQuestion.bind(this)} />

            </RX.View>
        );
    }

    // Note that we define this as a variable rather than a normal method. Using this
    // method, we prebind the method to this component instance. This prebinding ensures
    // that each time we pass the variable as a prop in the render function, it will
    // not change. We want to avoid unnecessary prop changes because this will trigger
    // extra work within React's virtual DOM diffing mechanism.
    // private _onChangeToggle = (newValue: boolean) => {
    //     this.setState({ toggleValue: newValue });
    // }
}

export = App;
