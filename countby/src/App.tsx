/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from 'reactxp'
import * as mt from 'mousetrap'
import Recorder from './Recorder'


import ToggleSwitch from './ToggleSwitch';
import AdditionProblem from './questions/addition';
import Multiplication from './questions/multiplication';

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
    currentQ: any
    sessionQcount: number
}

function randDigit() {
    return getRandomInt(0, 10);
};

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends RX.Component<null, AppState> {
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

    newQuestion() {

        this.setState({
            record: this.state ? this.state.record : Recorder.getRecord(),
            currentQ: [randDigit(), randDigit()],
            sessionQcount: this.state ? (this.state.sessionQcount + 1) : 0
        });

        console.log("a new question is being generated. " + this.state.sessionQcount + " questions completed.");


        if (this.state.sessionQcount >= 25){
            window.alert("You've done 25 questions! Great! Have some free time!");
        }
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

        this.state = {
            currentQ: [randDigit(), randDigit()],
            record: Recorder.getRecord(),
            sessionQcount: 0
        };

    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        }
        );

        animation.start();

        mt.bind('q', () => {
            console.log("mousetrap!");
            
            // alert(this.state.sessionQcount + " questions completed!");
        })
    }

    render(): JSX.Element | null {
        return (
            <RX.View style={styles.container}>
                <RX.Animated.Text style={[styles.helloWorld, this._animatedStyle]}>
                    Hello again!
                </RX.Animated.Text>
                <RX.Text style={styles.welcome}>
                    Let's get a little practice with our multiplication and division facts.
                </RX.Text>

                <RX.Text style={styles.toggleTitle}>
                    Use the RIGHT and LEFT Arrow Keys to move on the numberpad and help with counting-by!
                </RX.Text>

                {this.renderCurrentQ()}

            </RX.View>
        );
    }

    renderCurrentQ(): JSX.Element | null {
        console.log("Trying to render");
        let nums: Array<number>;
        if (this.state) {
            nums = this.state.currentQ;
        } else {
            nums = [randDigit(), randDigit()];
        }

        return <Multiplication a={nums[0]} b={nums[1]} onanswer={this.newQuestion.bind(this)} />
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
