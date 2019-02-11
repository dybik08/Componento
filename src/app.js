
const MyCoolJSXQuoteComponent = ({quote, author}) => {
    return (
        <div className="quote-container">
            <h4 className="quote">"{quote}"</h4>
            <div className="author">- {author}</div>
            <Logger/>
        </div>
    );
};

const clicked = () => {
    console.log('clicked2')
};

const Logger = () => {
    return (
        <div>
            <button onClick={clicked}>Click me!</button>
        </div>
    );
};


ComponentoDOM.render(
    <MyCoolJSXQuoteComponent
        quote="The only source of knowledge is experience."
        author="Albert Einstein"/>,
    document.getElementById('root'));