import * as RX from 'reactxp';
import Recorder from '../appUtilities/Recorder';

interface SessionReportProps {
    records: Array<any>
}

const styles = {
    correct: RX.Styles.createTextStyle({
        backgroundColor: "green"
    }),
    incorrect: RX.Styles.createTextStyle({
        backgroundColor: 'purple'
    })
}

class SessionReport extends RX.Component<SessionReportProps, null> {

    constructor(props: SessionReportProps) {
        super(props);
    }

    truncatedRecords() {
        return this.props.records.slice(
            Math.max(0, this.props.records.length - 24),
            this.props.records.length - 1
        );
    }
    truncateRecords(records: Array<any>) {
        return records.slice(
            Math.max(0, records.length - 24),
            records.length - 1
        );
    }

    componentWillReceiveProps() {
        console.log("New props incoming");

    }

    render() {
        const records = this.truncatedRecords(Recorder.getRecord());

        return (
            <RX.View>
                <ul>
                    {records.map(
                        (record, index) => {
                            return (<li key={index}>{this.renderRecord(record)}</li>)
                        }
                    )}
                </ul>

            </RX.View>
        )
    }
    renderRecord(record: Object): JSX.Element {
        if (record.q === 'multiplication') {
            return (
                <RX.Text style={record.correct ? styles.correct : styles.incorrect}>
                    {record.a} &times; {record.b} = {record.answer}   (in {record.time} s)
                </RX.Text>
            )
        } else {
            return (
                <RX.Text style={record.correct ? styles.correct : styles.incorrect}>
                    {record.a * record.b} &#247; {record.b} = {record.answer}   (in {record.time} s)
                </RX.Text>
            )
        }
    }
}

export default SessionReport;