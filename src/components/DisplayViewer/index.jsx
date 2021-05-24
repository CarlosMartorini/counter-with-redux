import { useSelector } from 'react-redux';
import { Display } from './style';

const DisplayViewer = () => {
    const value = useSelector((store) => store.value); 
    return (
        <Display>{value}</Display>
    )
}

export default DisplayViewer;