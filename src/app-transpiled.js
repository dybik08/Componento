"use strict";

var MyCoolJSXQuoteComponent = function MyCoolJSXQuoteComponent(_ref) {
    var quote = _ref.quote,
        author = _ref.author;

    return Componento.createElement(
        "div",
        { className: "quote-container" },
        Componento.createElement(
            "h4",
            { className: "quote" },
            "\"",
            quote,
            "\""
        ),
        Componento.createElement(
            "div",
            { className: "author" },
            "- ",
            author
        ),
        Componento.createElement(Logger, null)
    );
};

var clicked = function clicked() {
    console.log('clicked2');
};

var Logger = function Logger() {
    return Componento.createElement(
        "div",
        null,
        Componento.createElement(
            "button",
            { onClick: clicked },
            "Click me!"
        )
    );
};

ComponentoDOM.render(Componento.createElement(MyCoolJSXQuoteComponent, {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein" }), document.getElementById('root'));

