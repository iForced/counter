import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";
import {Screen} from "./Screen";

type mapStateToPropsType = {
    counterValue: number
    maxValue: number
    error: boolean
}
export type ScreenPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        counterValue: state.counter.counterValue,
        maxValue: state.counter.maxValue,
        error: state.counter.error,
    }
}

export const ScreenContainer = connect(mapStateToProps)(Screen)