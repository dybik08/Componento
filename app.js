
const Hello = ({name}) => {
    return Componento.createElement('div', null, `Hello ${name}`);
};

const helloWorld = Componento.createElement(Hello, {name: 'Ofir'}, null);
ComponentoDOM.render(helloWorld, document.getElementById('root'));