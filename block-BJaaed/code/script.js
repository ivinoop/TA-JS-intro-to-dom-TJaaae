let root = document.querySelector('.root');

books.forEach(element => {
   
    let div = document.createElement('div');
    div.classList.add(`book-card`, `flex-30`)
    let img = document.createElement('img');
    img.src= element.image;
    let h2 = document.createElement('h2');
    h2.innerText = element.title;
    let p = document.createElement('p');
    p.innerText = element.author;
    let button = document.createElement('button');
    button.innerText = 'Buy Now'
    div.append(img,h2,p,button);
    root.append(div);
});