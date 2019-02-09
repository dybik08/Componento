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
        )
    );
};

ComponentoDOM.render(Componento.createElement(MyCoolJSXQuoteComponent, {
    quote: "The only source of knowledge is experience.",
    author: "Albert Einstein" }), document.getElementById('root'));

