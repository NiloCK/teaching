import * as RX from 'reactxp';
import Recorder from '../appUtilities/Recorder';
import Numpad from '../components/numpad';
import { QuestionView, QuestionProps } from '../skuilder-base/BaseClasses'

interface SingleDigitDivisionProblemProps extends QuestionProps {
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

class SingleDigitDivisionProblem extends QuestionView<SingleDigitDivisionProblemProps> {
    getName(): string {
        return "SingleDigitDivisionProblem";
    }
    static getProps(): SingleDigitDivisionProblemProps {
        return {
            a: getRandomInt(0, 10),
            b: getRandomInt(1, 10),
            onanswer: null
        };
    }

    constructor(props: SingleDigitDivisionProblemProps) {
        super(props);
    }

    render() {
        let { a, b } = this.props;

        return (
            <RX.View>

                <RX.View style={styles.form}>

                    <div id="question">
                        {a * b} &#247; {b} =&nbsp;
                    </div>
                    <form onSubmit={this.submit.bind(this)}>
                        <input className="mousetrap"
                            autoFocus
                            id="answer" type="number" autoComplete={false} />
                    </form>
                </RX.View>
                <Numpad num={this.props.b} />
            </RX.View>
        );
    }

    isCorrect() {
        let input = document.getElementById('answer');
        let userans = parseInt(input.value);

        return (this.props.a === userans);
    }

    animate(correct: boolean) {//todo do this in a react-way
        let questionDiv = document.getElementById("question");

        questionDiv.classList.add("correct-" + correct); // see /src/styles/answerStyles.css

        setTimeout(function () { // remove the class so that it can be reapplied
            questionDiv.classList.remove("correct-true", "correct-false")
        }, 1000);
    }

}

export default SingleDigitDivisionProblem;