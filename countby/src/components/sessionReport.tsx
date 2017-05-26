import * as RX from 'reactxp';
import Recorder from '../Recorder';

interface SessionReportProps{
    records: Array<any>
}

class SessionReport extends RX.Component<SessionReportProps, null> {

    constructor(props: any) {
        super(props);
    }


    render() {
        const recorps = Recorder.getRecord();

        return (
            <RX.View>
                <ul>
                    {this.props.records.map(
                        (record) => {
                            return (<li>{record.toString()}</li>)
                        }
                    )}
                </ul>
                
            </RX.View>
        )
    }    
}

export default SessionReport;