import { formatTweet } from '../../services/tweet.service';
import './tweet.component.scss';

const TweetComponent = (props) => {
    return <div className="tweet-component">
        <div className="user-info">
            <img alt="Avatar" src={props.avatar} />
            <span className="user-name">{props.name}</span>
        </div>
        <p>{formatTweet(props.text)}</p>
    </div>;
}

export default TweetComponent;
