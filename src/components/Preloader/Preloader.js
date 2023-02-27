import {useSelector} from "react-redux";
import {selectorStatusLoading} from "../../ducks/listBook/selectors";
import './preloader.css'

export const Preloader = () => {

    const isLoading = useSelector(selectorStatusLoading);

    return isLoading && <div className='spinner'/>

}