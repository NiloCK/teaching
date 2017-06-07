import * as RX from 'reactxp';
import Recorder from '../appUtilities/Recorder';
import Numpad from '../components/numpad';
import { QuestionView, QuestionProps } from '../skuilder-base/BaseClasses'

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


class SingleDigitMultiplicationProblem extends QuestionView<SingleDigitMultiplicationProblemProps, null> {

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
                        autoCorrect={false} >
                    </RX.TextInput>*/}

                </RX.View>
                <Numpad num={this.props.b} />
            </RX.View>
        );
    }

    submit(e) {
        e.preventDefault();
        this.attempts++;

        const input = document.getElementById('answer');
        const userans = parseInt(input.value);
        const isCorrect = this.isCorrect();

        Recorder.addRecord({
            q: 'multiplication',
            a: this.props.a,
            b: this.props.b,
            answer: userans,
            correct: isCorrect,
            attempts: this.attempts,
            time: this.timeSinceStart()
        });

        input.value = "";

        this.animate(isCorrect);

        if (isCorrect) { // only give a new question if this one was right
            this.props.onanswer();
        }

        // console.log(Recorder.getRecord());
    }

    isCorrect() {
        let input = document.getElementById('answer');
        let userans = parseInt(input.value);

        return (this.props.a * this.props.b === userans);
    }

    animate(correct: boolean) {//todo do this in a react-way
        let questionDiv = document.getElementById("question");

        questionDiv.classList.add("correct-" + correct); // see /src/styles/answerStyles.css

        setTimeout(function () { // remove the class so that it can be reapplied
            questionDiv.classList.remove("correct-true", "correct-false")
        }, 1000);
    }

}

export default SingleDigitMultiplicationProblem;