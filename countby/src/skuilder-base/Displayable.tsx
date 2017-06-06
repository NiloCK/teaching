import * as RX from 'reactxp';
import * as Moment from 'moment';

abstract class Displayable<Props, State> extends RX.Component<RX.CommonProps, null> {
    startTime: Moment.Moment;

    abstract render(): JSX.Element;

    init(): void {
        this.startTime = Moment();
    }
    timeSinceStart(): number {
        const now = Moment();
        const milliseconds = now.diff(this.startTime)
        return milliseconds / 1000;
    }

    constructor(props: RX.CommonProps) {
        super(props);
    }
}

export abstract class Question<P, S> extends Displayable<QuestionProps, null> {
    attempts: number;
    static readonly staticThing: number = 5; //?

    init(): void {
        super.init();
        this.attempts = 0;
    }

    readonly componentDidMount = (): void => {
        this.init();
    }

    abstract isCorrect(): boolean;

    constructor(props: RX.CommonProps) {
        super(props);
    }
}

export interface QuestionProps extends RX.CommonProps {
    onanswer: Function
}

class SubtractionProb extends Question<RX.CommonProps, null> {
    /**
     *
     */
    constructor() {
        super();

    }
    render() { return (<div></div>); }
}

// interface QuestionProps {
//     props: Array<Property>
// }

interface Property {

}

/**
 * The record of a completed question.
 */
interface QuestionRecord {
    q: string, // the ClassName of the question (?)
    props: QuestionProps,
    answer: any,
    isCorrect: boolean,
    attempts: number,
    time: number // milliseconds
}