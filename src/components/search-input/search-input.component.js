import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useDebounce from '../../hooks/use-debounce';
import { loadTweets } from '../../redux/actions';
import './search-input.component.scss';

const SearchInputComponent = () => {
    const dispatch = useDispatch();
    const [ value, setValue ] = useState('#hulk');
    const debouncedSearchTerm = useDebounce(value, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(loadTweets(debouncedSearchTerm));
        }
    }, [debouncedSearchTerm, dispatch]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return <input className="search-input-component" value={value} onChange={handleChange} />;
}

export default SearchInputComponent;
