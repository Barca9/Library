import {useSelector} from "react-redux";
import {selectorErrorMessage} from "../../ducks/listBook/selectors";

export const ErrMessage = () => {

    const message = useSelector(selectorErrorMessage);

    return !!message && <div>Ошибка {message}</div>

}