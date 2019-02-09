
(() => {
    let rootDOMElement, rootReactElement;
    const classMap = {};
    let classCounter = 0;
    const COMPONENTO_CLASS = 'COMPONENTO_CLASS';

    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element, props);
        } else if (isStateLessComponent(element)) {
            return element(props);
        } else {
            return handleHtmlElement(element, props, children);
        }
    }

    function createElement(el, props, ...children) {
        return anElement(el, props, children);
    }

    function handleClass(clazz, props, children) {
        classCounter++;
        if (classMap[classCounter]) {
            return classMap[classCounter];
        }
        const ComponentoElement = new clazz(props);
        ComponentoElement.children = children;
        ComponentoElement.type = COMPONENTO_CLASS;
        classMap[classCounter] = ComponentoElement;
        return ComponentoElement;
    }

    function handleHtmlElement(element, props, children) {
        const anElement = document.createElement(element);
        children.forEach(child => appendChild(anElement, child));
        _.forEach(props, (value, name) => appendProp(anElement, name, value));
        return anElement;
    }

    function appendChild(element, child) {
        if (child.type === COMPONENTO_CLASS) {
            appendChild(element, child.render());
        } else if (Array.isArray(child)) {
            child.forEach(ch => appendChild(element, ch));
        } else if (typeof(child) === 'object') {
            element.appendChild(child);
        } else {
            element.innerHTML += child;
        }
    }

    function appendProp(element, propName, propVal) {
        if (shouldAddEventListener(propName)) {
            element.addEventListener(propName.substring(2).toLowerCase(), propVal);
        } else {
            if (propName === 'className') {
                propName = 'class';
            }
            element.setAttribute(propName, propVal);
        }
    }

    class Component {
        constructor(props) {
            this.props = props;
        }
        setState(state) {
            this.state = Object.assign({}, this.state, state);
            reRender();
        }
    }

    function reRender() {
        while (rootDOMElement.hasChildNodes()) {
            rootDOMElement.removeChild(rootDOMElement.lastChild);
        }

        classCounter = 1;
        ComponentoDOM.render(rootReactElement, rootDOMElement);
    }

    window.Componento = {
        createElement,
        Component
    };
    window.ComponentoDOM = {
        render: (el, domEl) => {
            rootReactElement = el;
            rootDOMElement = domEl;
            const currentDOM = rootReactElement.type === COMPONENTO_CLASS ? rootReactElement.render() : rootReactElement;
            rootDOMElement.appendChild(currentDOM);
        }
    };

})();
