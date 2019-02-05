(() => {
    function anElement(element, props, children) {
        if (isClass(element)) {
            return handleClass(element);
        } else if (isStateLessComponent(element)) {
            return element(props);
        } else {
            return handleHtmlElement(element, children);
        }
    }

    function createElement(el, props, ...children) {
        return anElement(el, props, children);
    }

    function handleClass(clazz) {
        const component = new clazz();
        return component.render();
    }

    function handleHtmlElement(element, children) {
        const anElement = document.createElement(element);
        children.forEach(child => {
            if (typeof(child) === 'object') {
                anElement.appendChild(child);
            } else {
                anElement.innerHTML += child;
            }
        });
        return anElement;
    }

    function isClass(func) {
        return typeof func === 'function'
            && /^class\s/.test(Function.prototype.toString.call(func));
    }

    function isStateLessComponent(element) {
        return !isClass(element) && typeof element === 'function'
    }

    window.Componento = {
        createElement
    };
    window.ComponentoDOM = {
        render: (el, domEl) => {
            domEl.appendChild(el);
        }
    };
})();