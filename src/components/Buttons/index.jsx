import { useDispatch } from 'react-redux';
import { addNum, subNum } from '../../store/modules/counter/actions';
import { Button } from './style';

const Buttons = () => {
    
    const dispatch = useDispatch();

    return(
        <div>
            <Button onClick={() => dispatch(addNum(1))}>+1</Button>
            <Button onClick={() => dispatch(subNum(1))}>-1</Button>
        </div>
    )
}

export default Buttons;