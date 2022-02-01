import GoogleService from './google-service.js';

let service = new GoogleService();

document.getElementById("search").addEventListener("click", () => {
    service.search(document.getElementById("term").value)
    .then((books) => {
        clear();
        renderBooks(books);
    }, error => {
        console.log("error:" + error);
    })
});

function renderBooks(books) {
    let results = document.getElementById("results");
    console.log(books);
    books.forEach(book => {
        const node = document.createElement("LI");
        var picture = document.createElement("img");
        picture.src = book.thumbnail;
        node.appendChild(picture);
        const textnode = document.createTextNode(`Title: ${book.title} | Author(s): ${book.authors} | Published Date: ${book.publishedDate}`);
        node.appendChild(textnode);
        results.appendChild(node);
    });
}
function clear() {
    document.getElementById("results").innerHTML = "";
}