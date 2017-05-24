import * as RX from 'reactxp';
import Recorder from '../Recorder';
import Numpad from '../components/numpad';

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
        flexDirection: "row"
    })
}

class SingleDigitMultiplicationProblem extends RX.Component<SingleDigitMultiplicationProblemProps, MultState> {
    a: number;
    b: number;


    constructor(props: SingleDigitMultiplicationProblemProps) {
        super(props);

        this.a = props.a;
        this.b = props.b;

        this.state = {
            count: 0
        }
    }



    shouldComponentUpdate(nextProps: SingleDigitMultiplicationProblemProps) {
        console.log("considering an update...");
        console.log(this.props);
        console.log(this.state);

        this.forceUpdate();
        return true;
    }

    render() {
        return (
            <RX.View>

                <RX.View style={styles.form}>

                    <div>
                        {this.props.a} &times; {this.props.b} =&nbsp;
                    </div>
                    <form onSubmit={this.submit.bind(this)}>
                        <input className="mousetrap"
                            autoFocus
                            id="answer" type="number" autoComplete={false} />
                        <button>Submit</button>
                    </form>
                </RX.View>
                <Numpad num={this.props.b} />
            </RX.View>
        );
    }

    submit(e) {
        e.preventDefault();
        let input = document.getElementById('answer');
        let userans = parseInt(input.value);

        console.log("I'm beind called!");
        Recorder.addRecord({
            q: 'multiplication',
            a: this.props.a,
            b: this.props.b,
            answer: userans,
            correct: (this.props.a * this.props.b === userans)
        });

        input.value = "";

        this.props.onanswer();

        console.log(Recorder.getRecord());
    }


}

export default SingleDigitMultiplicationProblem;