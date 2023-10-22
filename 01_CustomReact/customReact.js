function customRender(elem,container){
    const createdElem = document.createElement(elem.type)
    createdElem.innerHTML = elem.child
    createdElem.setAttribute('href',elem.properties.href)
    createdElem.setAttribute('target',elem.properties.target)
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