const getElementByWord = (word) => {
    if (word.charAt(0) === '#' || word.charAt(0) === '@') {
        return <span className="hashtag">{word} </span>;
    } else if (word.startsWith('http')) {
        return <a href={word} rel="noopener noreferrer" target="_blank">{word} </a>;
    } else {
        return `${word} `;
    }
};

export const formatTweet = (text) => {
    return text.split(' ').map((word, i) => <span key={`${word}-${i}`}>
        { word.includes('\n') ? <>
            {getElementByWord(word.split('\n')[0])}
            <br />
            {getElementByWord(word.split('\n')[1])}
        </> : getElementByWord(word) }
    </span>);
};
