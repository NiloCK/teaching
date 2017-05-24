import * as RX from 'reactxp';
import Recorder from '../Recorder';
import Numpad from '../components/numpad';

interface SingleDigitMultiplicationProblemProps extends RX.CommonProps {
    a: number;
    b: number;
    onanswer: Function;
}

const styles = {
    form: RX.Styles.createViewStyle({
        flexDirection: "row"
    })
}

class SingleDigitMultiplicationProblem extends RX.Component<SingleDigitMultiplicationProblemProps, null> {
    a: number;
    b: number;
    inputBox: any; // actually an HTMLInputElement

    constructor(props: SingleDigitMultiplicationProblemProps) {
        super(props);

        this.a = props.a;
        this.b = props.b;
    }

    render() {
        return (
            <RX.View>

                <RX.View style={styles.form}>

                    <div>
                        {this.a} &times; {this.b} =&nbsp;
                    </div>
                    <form onSubmit={this.submit.bind(this)}>
                        <input className="mousetrap"
                            ref={(input) => { this.inputBox = input; }}
                            id="answer" type="number" autoComplete={false} />
                        <button>Submit</button>
                    </form>
                </RX.View>
                <Numpad num={this.b} />
            </RX.View>
        );
    }

    componentDidMount() {
        this.inputBox.focus();
    }

    submit(e) {
        e.preventDefault();
        let userans = parseInt(document.getElementById('answer').value);

        console.log("I'm beind called!");
        Recorder.addRecord({
            q: 'multiplication',
            a: this.a,
            b: this.b,
            answer: userans,
            correct: (this.a * this.b === userans)
        });

        this.props.onanswer();

        console.log(Recorder.getRecord());
    }


}

export default SingleDigitMultiplicationProblem;