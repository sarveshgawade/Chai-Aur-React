function customRender(elem,container){

    // meth-1
    // const createdElem = document.createElement(elem.type)
    // createdElem.innerHTML = elem.child
    // createdElem.setAttribute('href',elem.properties.href)
    // createdElem.setAttribute('target',elem.properties.target)
    // container.appendChild(createdElem)

    // meth-2 optimized
    const createdElem = document.createElement(elem.type)
    createdElem.innerHTML = elem.child
    
    for (const prop in elem.properties) {
        createdElem.setAttribute(prop,elem.properties[prop])
    }

    container.appendChild(createdElem)
}

const rootContainer = document.querySelector('#root')

const reactElement = {
    type: 'a',
    properties: {
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Visit google'
}

customRender(reactElement,rootContainer)