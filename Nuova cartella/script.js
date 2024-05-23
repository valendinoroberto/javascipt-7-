var button1 = document.querySelector('.submit1');

button1.addEventListener('click', function(name) {
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        //console.log(typeof(data))
        for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            for (var key in obj) {
                var value = obj[key];
                if (key == "title") {
                    console.log(value);
                }
            }
        }
    });
});

document.getElementById('search-button').addEventListener('click', function() {
    const title = document.getElementById('search-title').value;
    const url = `https://librarymanagementpw.azurewebsites.net/api/Book?title=${title}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('books');
            bookList.innerHTML = '';
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `Title: ${book.title}`;
                bookList.appendChild(li);
            });
        });
});

document.getElementById('add-button').addEventListener('click', function() {
    const title = document.getElementById('add-title').value;

    fetch('https://librarymanagementpw.azurewebsites.net/api/Book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Book added:', data);
    });
});