import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

export const useRedux = (selector, actions) => {
    const state = useSelector(selector);
    const dispatch = useDispatch();
    const boundActions = bindActionCreators(actions, dispatch);

    return [state, boundActions];
};
