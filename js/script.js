function ocultar(event){
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    for(let i = 0 ; i < content.length; i++){
        content[i].style.display = 'none';
        if (content[i].getAttribute('id') == id){
            content[i].style.display = 'block';
        }
    }
}

const links = document.querySelectorAll('.tabs-tablist-item');

const content = document.querySelectorAll('.tabs-content-item');

for(let i = 0 ; i < content.length; i++){
    content[i].style.display = 'none';
}

content[0].style.display = 'block';

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', ocultar);
}