class Hello extends Componento.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return Componento.createElement('div', null, `Hello ${this.props.name}`);
    }
}
const helloWorld = Componento.createElement(Hello, {name: 'Ofir'}, null);

ComponentoDOM.render(helloWorld, document.getElementById('root'));