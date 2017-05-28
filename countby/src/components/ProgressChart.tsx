import * as RX from 'reactxp';
import Grader from '../appUtilities/Grader'


const styles = {

}
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface ComponentChartProps {
    questionType: string;
}

class ProgressChart extends RX.Component<ComponentChartProps, null> {

    render() {
        return (
            <RX.View>
                <RX.Text>Progress Report for {this.props.questionType}</RX.Text>
                <table>
                    {this.renderTableBody()}
                </table>
            </RX.View>
        )
    }

    renderTableBody(): JSX.Element {
        return (
            <tbody>
                <tr>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
                {rows.map((row, index) => {
                    this.renderRow(row, index);
                })}
            </tbody>
        )
    }
    renderRow(b: number, index: number): JSX.Element {
        console.log("Rendering row " + b);

        return (
            <tr>
                <td>{b}</td>
                {rows.map((row, rowIndex) => {
                    this.renderGrade(row, b, rowIndex);
                })}
            </tr>
        )
    }
    renderGrade(a: number, b: number, index: number): JSX.Element {
        console.log("\tRendering grade " + a + ", " + b);

        return (
            <td>
                {/*{(Grader.Grade(this.props.questionType, a, b).toString())}?*/}
            </td>
        )
    }
}


export default ProgressChart;

