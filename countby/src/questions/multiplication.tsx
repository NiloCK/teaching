import * as RX from 'reactxp';
import Recorder from '../appUtilities/Recorder';
import Numpad from '../components/numpad';
import { QuestionView, QuestionProps, TextInput } from '../skuilder-base/BaseClasses'

interface SingleDigitMultiplicationProblemProps extends QuestionProps {
    a: number;
    b: number;
}

const styles = {
    form: RX.Styles.createViewStyle({
        flexDirection: "row",
        padding: 15
    })
}

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


class SingleDigitMultiplicationProblem extends QuestionView<SingleDigitMultiplicationProblemProps> {
    getName(): string {
        return "SingleDigitMultiplicationProblem";
    }
    static getProps(): SingleDigitMultiplicationProblemProps {
        return {
            a: getRandomInt(0, 10),
            b: getRandomInt(1, 10),
            onanswer: null
        };
    }

    constructor(props: SingleDigitMultiplicationProblemProps) {
        super(props);
    }

    render() {
        return (
            <RX.View>

                <RX.View style={styles.form}>

                    <div id="question">
                        {this.props.a} &times; {this.props.b} =&nbsp;
                    </div>
                    <form onSubmit={this.submit.bind(this)}>
                        <input className="mousetrap"
                            autoFocus
                            id="answer" type="number" autoComplete={false} />
                    </form>
                    {/*<RX.TextInput ref="answer2"
                        onSubmitEditing={() => console.log("I'm being submitted")}
                        autoFocus
                        keyboardType="numeric"
                        autoCorrect={false}
                        onKeyPress={null}>
                    </RX.TextInput>
                    <TextInput > </TextInput>*/}

                </RX.View>
                <Numpad num={this.props.b} />
            </RX.View>
        );
    }

    isCorrect() {
        let input = document.getElementById('answer');
        let userans = parseInt(input.value);

        return (this.props.a * this.props.b === userans);
    }



}

export default SingleDigitMultiplicationProblem;