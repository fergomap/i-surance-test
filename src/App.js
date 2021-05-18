import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TweetComponent from './components/tweet/tweet.component';
import SearchInputComponent from './components/search-input/search-input.component';
import HeaderComponent from './components/header/header.component';
import { loadMoreTweetsAction } from './redux/actions';
import './App.scss';

const App = () => {
    const { error, loading, tweets, query } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && query && !loading) {
                dispatch(loadMoreTweetsAction(query, tweets[tweets.length - 1].id));
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [dispatch, loading, tweets, query]);

    return <div>
        <HeaderComponent />
        <div className="container">
            <SearchInputComponent />
            {tweets.map(tweet => <TweetComponent key={tweet.id} avatar={tweet.user.profile_image_url} name={tweet.user.name} text={tweet.text} />)}
            {!loading && !error && !tweets.length && <p className="centered">There are no results for your query!</p>}
            {loading && <p className="centered">Loading results...</p>}
            {error && <p className="centered error">{error}</p>}
        </div>
    </div>;
}

export default App;
