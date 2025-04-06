function customRender(re,container){
    const dome=document.createElement(re.type)
    dome.innerHTML=reactElement.Children
    // dome.setAttribute('href',reactElement.props.href)
    // dome.setAttribute('target',reactElement.props.target)
    for (const prop in reactElement.props) {
        if(prop==='Children') continue;
        dome.setAttribute(prop,reactElement.props.prop)

    }
    container.appendChild(dome)
}

const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    Children:'Click me to visit google'
}


const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)