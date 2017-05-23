import * as RX from 'reactxp';
import * as mt from 'mousetrap';

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

    componentDidMount() {
        mt.bind('right',
            () => {
                this.setState({
                    counted: (this.state.counted + 1)
                });
            });

        mt.bind('left',
            () => {
                this.setState({
                    counted: (this.state.counted - 1)
                });
            })

        console.log("mousetrap should have bound here...");
    }

    render() {
        const num = this.props.num;
        const counted = this.state.counted;

        return (
            <RX.View>
                <RX.Text> {num} * {counted} = {num * counted} </RX.Text>
                <div>
                    {keys.map((keyrow) => {
                        return this.renderKeyRow(keyrow);
                    })}
                </div>
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
        const style = RX.Styles.createTextStyle({
            backgroundColor: this.getBackgroundColor(key)
        })

        return (
            <RX.Text style={style}> {key} </RX.Text>
        );
    }

    getBackgroundColor(key: number): string {
        if (highlights[this.props.num][this.state.counted - 1] == key) {
            return 'green';
        }

        return 'white';
    }
}

export default Numpad;