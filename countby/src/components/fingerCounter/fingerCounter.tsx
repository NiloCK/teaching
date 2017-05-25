import * as RX from 'reactxp';
// import img1 from './img/1.PNG'; // image-webpack-loader ?

export interface FingerCounterProps extends RX.CommonProps {
    counted: number;
}


class FingerCounter extends RX.Component<FingerCounterProps, null> {

    constructor(props: FingerCounterProps) {
        super(props);
    }


    render() {
        return (
            <RX.View>
                <img src={"img/fingerCounter/" + this.props.counted + ".PNG"} alt=""/>
            </RX.View>
            
        )
    }    
}

export default FingerCounter;