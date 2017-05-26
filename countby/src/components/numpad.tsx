import * as RX from 'reactxp';
import * as mt from 'mousetrap';
import FingerCounter from './fingerCounter/fingerCounter'

export interface NumpadProps extends RX.CommonProps {
    num: number;
    // counted?: number;
}
interface NumpadState {
    counted?: number;
}

const styles = {
    row: RX.Styles.createViewStyle({
        flexDirection: 'row',
        backgroundColor: "white",
    })
}

const keys = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
];

const highlights: Array<Array<number>> = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    [2, 4, 6, 8, 0, 2, 4, 6, 8, 0],
    [3, 6, 9, 2, 5, 8, 1, 4, 7, 0],
    [4, 8, 2, 6, 0, 4, 8, 2, 6, 0],
    [5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [6, 2, 8, 4, 0, 6, 2, 8, 4, 0],
    [7, 4, 1, 8, 5, 2, 9, 6, 3, 0],
    [8, 6, 4, 2, 0, 8, 6, 4, 2, 0],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
]

class Numpad extends RX.Component<NumpadProps, NumpadState> {



    constructor(props: NumpadProps) {
        super();

        this.state = {
            counted: 0
        }
    }

    shouldComponentUpdate(nextProps: NumpadProps, nextState: NumpadState) {
        if (nextProps) {
            this.setState({
                counted: 0
            })
        }
        return true;
    }

    componentDidMount() {
        mt.bind('right',
            () => {
                this.setState({
                    counted: Math.min(10, (this.state.counted + 1) )
                });
            });

        mt.bind('left',
            () => {
                this.setState({
                    counted: Math.max(0, (this.state.counted - 1) )
                });
            })

        console.log("mousetrap should have bound here...");
    }

    render() {
        const num = this.props.num;
        const counted = this.state.counted;

        return (
            <RX.View>
                <div>
                    {keys.map((keyrow) => {
                        return this.renderKeyRow(keyrow);
                    })}
                </div>
                <FingerCounter counted={counted} />
            </RX.View>
        )
    }

    renderKeyRow(keys: Array<number>) {
        const style = RX.Styles.createViewStyle({
            flexDirection: "row",

        })

        return (
            <RX.View style={style}>
                {keys.map((key => { return this.renderKey(key); }))}
            </RX.View>
        )
    }

    renderKey(key: number) {
        return (
            <RX.Text style={this.getKeyStyle(key)}> {key} </RX.Text>
        );
    }
    getKeyStyle(key){
        return  RX.Styles.createTextStyle({
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 4,
            padding: 4,
            margin: 3,
            backgroundColor: this.getBackgroundColor(key)
        });
    }

    getBackgroundColor(key: number): string {
        if (highlights[this.props.num][this.state.counted - 1] == key) {
            return 'green';
        }

        return 'white';
    }
}

export default Numpad;