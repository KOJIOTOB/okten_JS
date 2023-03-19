// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let title = document.createElement('h1');
title.classList.add('title')
title.innerText = 'Comments'
document.body.appendChild(title);

let comments = JSON.parse(localStorage.getItem('key_comment'));




let block_comment = document.createElement('div');
block_comment.classList.add('block');

let btn_BackHome = document.createElement('a');
btn_BackHome.classList.add('btn');
btn_BackHome.innerText = 'На головну';

btn_BackHome.onclick = () => {
    location.href = 'index.html'
    localStorage.clear()
};




for (const comment of comments) {

    let box_comment = document.createElement('div')
    box_comment.classList.add('box_comment')

    box_comment.innerText = `
    Post ID: ${comment.c[length].postId}

    ID: ${comment.c[length].id}

    Name: ${comment.c[length].name}

    Email: ${comment.c[length].email}

    Body: ${comment.c[length].body}

    ------------------------------------------------------------------------------------------------------

    `;

    document.body.appendChild(block_comment);
    block_comment.append(box_comment, btn_BackHome)

}