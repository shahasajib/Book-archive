/*............................
..... Input Part Start........
.............................. */
const searchBooks = () => {
    const searchInput = document.getElementById('input');
    const searchText = searchInput.value;
    searchInput.value = ""
    if (searchText === "") {
        document.getElementById('error').innerText = `Search Something`;
        document.getElementById('books-details').textContent = "";
    }
    else {
        document.getElementById('error').innerText = "";
        document.getElementById('books-details').textContent = "";
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayData(data.docs));
    }
}
/*............................
....... Input Part End........
.............................. */



/* ......................................
..........Display Data Part Start........
......................................... */

const displayData = booksData => {
    document.getElementById('error').innerText = `${booksData.length}search Result Found`
    const bookDetails = document.getElementById("books-details");
    if (booksData.length === 0) {
        document.getElementById('error').innerText = `No Result Found`;
    }
    /*....................
    ..forEach Part Start..
    ......................*/
    else {
        booksData.forEach(book => {
            const div = document.createElement("div");
            div.innerHTML = `
            <div class="col">
                    <div class="card p-2 m-3">
                        <img style="height: 15rem;" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <h5 class="card-title">${book.author_name}</h5>
                            <p class="card-text"><span>${book.publisher}</span></p>
                            <p class="card-text">${book.first_publish_year}</p>
                        </div>
                    </div>
                </div>`
            bookDetails.appendChild(div)

        })
    }
    /*...................
    ...forEach Part End..
    ..................... */
}
/* ......................................
..........Display Data Part End..........
......................................... */