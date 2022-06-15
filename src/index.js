let cheeses = [];

const renderCheeses = () => {
    const id = window.location.hash.slice(1);
    
    if (id != null) {
        const selectedCheese = cheeses.find(c => c.id == id);
    document.getElementById('active').innerHTML = `
            <h1>${selectedCheese.name}</h1>
            <h3>from ${selectedCheese.country}</h3>
            <p>Cost per lb ${selectedCheese.price}</p>
        `
        return;
    }
    document.getElementById('active').innerHTML = '';
}

window.addEventListener('hashchange', ()=> {
    renderCheeses();
})

const init = async ()=> {
        
    const response = await fetch('https://f373cc220b144f0c952db117bcb62e2b.vfs.cloud9.us-east-2.amazonaws.com/api/cheeses')
    cheeses = await response.json()
    document.getElementById('cheeses').innerHTML = cheeses.map(cheese => {
        return `
        <li>
        <a href='#${cheese.id}'>${cheese.name}</a>
        </li>
        `;
    }).join('')
    
    // Alt:
    // const response = fetch('https://f373cc220b144f0c952db117bcb62e2b.vfs.cloud9.us-east-2.amazonaws.com/api/cheeses')
    //     .then(response => response.json())
    //     .then(data => {
    //         const cheeses = data.map(cheese => {
    //             const listItem = document.createElement('li')
    //             const text = document.createTextNode(`${cheese.name} from ${cheese.country}`);
    //             listItem.appendChild(text);
    //             document.getElementById('cheeses').appendChild(listItem)
    //         })
    //     });
        
}

init();