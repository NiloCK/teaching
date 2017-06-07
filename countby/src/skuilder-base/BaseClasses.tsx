import * as RX from 'reactxp';
import * as Moment from 'moment';

abstract class Viewable<Props> extends RX.Component<RX.CommonProps, null> {
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

interface PropsDefinition {
    props: Array<PropDefinition<any>>;
}

interface NumberPropDefinition extends PropDefinition<number> {
    min: number;
    max: number;

    int?: boolean;
}

interface PropDefinition<T> {
    name: string; // the name of the property
}

abstract class Question {
    static PropsDefinition: PropsDefinition;
}


// spitballing....
class Subtraction extends Question {
    static PropDefinition = {
        props: [
            { name: 'minuend', max: 18, min: 0 },
            { name: 'subtrahend', min: '0', max: 'minuend' }
        ]
    }
}


export abstract class QuestionView<P, S> extends Viewable<QuestionProps> {
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

    // submit():void {

    // }
}

export interface QuestionProps extends RX.CommonProps {
    onanswer: Function
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