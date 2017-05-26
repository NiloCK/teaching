import * as RX from 'reactxp';
import Recorder from '../Recorder';
import Numpad from '../components/numpad';
import * as moment from 'moment'

interface SingleDigitMultiplicationProblemProps extends RX.CommonProps {
    a: number;
    b: number;
    onanswer: Function;
}

interface MultState {
    count: number;
}

const styles = {
    form: RX.Styles.createViewStyle({
        flexDirection: "row",
        padding: 15
    })
}

class SingleDigitMultiplicationProblem extends RX.Component<SingleDigitMultiplicationProblemProps, MultState> {
    startTime: moment.Moment;
    attempts: number;


    constructor(props: SingleDigitMultiplicationProblemProps) {
        super(props);
    
        this.attempts = 0;
        this.state = {
            count: 0
        }
    }

    
    componentDidMount(){
        this.startTimer();
    }
    componentDidUpdate(){
        this.startTimer();
    }

    startTimer(){
        this.startTime = moment();
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
                </RX.View>
                <Numpad num={this.props.b} />
            </RX.View>
        );
    }

    submit(e) {
        e.preventDefault();
        this.attempts++;

        let input = document.getElementById('answer');
        let userans = parseInt(input.value);
        let userTime = moment().diff(this.startTime) / 1000;
        let isCorrect = (this.props.a * this.props.b === userans);


        console.log("This question was answered in: " + userTime);
        Recorder.addRecord({
            q: 'multiplication',
            a: this.props.a,
            b: this.props.b,
            answer: userans,
            correct: isCorrect,
            attempts: this.attempts,
            time: userTime
        });

        input.value = "";

        this.animate(isCorrect);

        if (isCorrect){ // only give a new question if this one was right
            this.props.onanswer();
        }

        console.log(Recorder.getRecord());
    }

    animate(correct : boolean){//todo do this in a react-way
        let questionDiv = document.getElementById("question");

        questionDiv.classList.add("correct-"+correct); // see /src/styles/answerStyles.css

        setTimeout(function() { // remove the class so that it can be reapplied
            questionDiv.classList.remove("correct-true", "correct-false")
        }, 1000);
    }
    
}

export default SingleDigitMultiplicationProblem;