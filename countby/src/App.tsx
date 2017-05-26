/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from 'reactxp'
import * as mt from 'mousetrap'
import Recorder from './Recorder'

import ToggleSwitch from './ToggleSwitch';
import SessionReport from './components/sessionReport';

import AdditionProblem from './questions/addition';
import Multiplication from './questions/multiplication';
import Division from './questions/division';

const qTypes = [
    Multiplication,
    Division
]

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

enum ViewState {
    QUESTIONS,
    REPORT
}

interface AppState {
    record?: Array<object>
    sessionQcount?: number
    viewState?: ViewState
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
            sessionQcount: this.state ? (this.state.sessionQcount + 1) : 0
        });

        if (this.state.sessionQcount >= 25){
            window.alert("You've done " + this.state.sessionQcount + " questions! Great! Have some free time!");
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
            record: Recorder.getRecord(),
            sessionQcount: 0,
            viewState: ViewState.QUESTIONS
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

        // mt.bind('r', () => {
        //     console.log("Toggling state...");
            
        //     this.setState({
        //         viewState: ViewState.REPORT
        //     })
        // })
        // mt.bind('q', () => {
        //     console.log("Toggling state...");
            
        //     this.setState({
        //         viewState: ViewState.QUESTIONS
        //     })
        // })
    }

    render(): JSX.Element | null {
        switch (this.state.viewState){
            case ViewState.QUESTIONS:
                return (
                    
                    <RX.View style={styles.container}>
                        <RX.Animated.Text style={[styles.helloWorld, this._animatedStyle]}>
                            AHHHHHH!
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
            case ViewState.REPORT:
                return (
                    <SessionReport records={this.state.record} />
                );
        }
    }

    renderCurrentQ(): JSX.Element | null {
        console.log("Trying to render");
        
        const Question = qTypes[getRandomInt(0,1)];        
        const questionProps = Question.getProps();

        return <Question {...questionProps} onanswer={this.newQuestion.bind(this)} />
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
