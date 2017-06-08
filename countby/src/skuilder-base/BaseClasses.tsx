import * as RX from 'reactxp';
import * as Moment from 'moment';
import Recorder from '../appUtilities/Recorder'

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
    type: keyof T;
    name: string; // the name of the property
}

abstract class Question {
    static PropsDefinition: PropsDefinition;
}

// spitballing....
// class Subtraction extends Question<{
//     props: [
//         { type: keyof number, name: 'minuend', max: 10 }
//     ]
// }>
// {
//     listProps() {
//         let c = (typeof this);

//     }

// }


export abstract class QuestionView<QuestionProps> extends Viewable<QuestionProps> {
    attempts: number;
    static readonly staticThing: number = 5; //?
    question: Question;

    init(): void {
        super.init();
        this.attempts = 0;
    }

    readonly componentDidMount = (): void => {
        this.init();
    }

    userAnswer(): any {
        let input = document.getElementById('answer');
        return parseInt(input.value);
    };
    abstract isCorrect(): boolean;
    abstract getName(): string;

    constructor(props: RX.CommonProps) {
        super(props);
    }

    submit(e): void {
        e.preventDefault();
        this.attempts++;

        const input = document.getElementById('answer');
        const userans = parseInt(input.value);
        const isCorrect = this.isCorrect();

        Recorder.addRecord({
            q: this.getName(),
            props: this.strippedProps(),
            answer: this.userAnswer(),
            isCorrect: isCorrect,
            attempts: this.attempts,
            time: this.timeSinceStart()
        })

        input.value = "";
        this.animate(isCorrect);

        if (isCorrect) {
            this.props.onanswer();
        }
    }


    /**
     * Removes functions from the components props, so that the props can be pouched
     */
    strippedProps(): Object {
        let ret = {};

        Object.keys(this.props).forEach((key) => {
            if (typeof (this.props[key]) != 'function') {
                ret[key] = this.props[key];
            }
        })

        return ret;
    }

    animate(correct: boolean) {//todo do this in a react-way
        let questionDiv = document.getElementById("question");

        questionDiv.classList.add("correct-" + correct); // see /src/styles/answerStyles.css

        setTimeout(function () { // remove the class so that it can be reapplied
            questionDiv.classList.remove("correct-true", "correct-false")
        }, 1000);
    }
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


interface TextBoxProps extends RX.Types.TextInputProps {
    onsubmit: Function;
}

export class TextInput extends RX.TextInput {

    constructor(props: TextBoxProps) {
        super(props);
        this.props.onKeyPress = (e: RX.Types.KeyboardEvent) => {
            if (e.keyCode === 13) { // 'enter'
                console.log("TextInput is being entered!");
            }
        }
    }
}