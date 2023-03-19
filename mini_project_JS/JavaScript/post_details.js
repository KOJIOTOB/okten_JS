
//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .

let title = document.createElement('h1');
title.classList.add('title')
title.innerText = 'Post Details'
document.body.appendChild(title);

let post_details = JSON.parse(localStorage.getItem('key_post'));

let block_post = document.createElement('div');
block_post.classList.add('block');

for (const postDetail of post_details) {

    const box_post = document.createElement('div')
    box_post.classList.add('box_');

    box_post.innerText = `
    User ID: ${postDetail.p[length].userId}

    ID: ${postDetail.p[length].id}

    Title: ${postDetail.p[length].title}

    Body: ${postDetail.p[length].body}
    
    ------------------------------------------------------------------------------------------------------

    `;

    let btn_comment = document.createElement('a');
    btn_comment.classList.add('btn');
    btn_comment.innerText = 'Коментар'

    btn_comment.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postDetail.p[length].id}/comments`)
            .then(res => res.json())
            .then(comments => {

                const block_comment = document.createElement('div');
                block_comment.classList.add('block_comment');

                const key_comment = 'key_comment';
                const localComment = (c) => {
                    let arrComment = JSON.parse(localStorage.getItem(key_comment)) || [];
                    arrComment.push({c})
                    localStorage.setItem(key_comment, JSON.stringify(arrComment))
                }

                btn_comment.onclick = () => {
                    localComment(comments)
                    location.href = 'comments.html'
                }

            })
    }


    block_post.append(box_post, btn_comment)
    document.body.appendChild(block_post)
}

