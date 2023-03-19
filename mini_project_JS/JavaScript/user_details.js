// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.
let title = document.createElement('h1');
title.classList.add('title')
title.innerText = 'User Details'
document.body.appendChild(title);

let res_key = JSON.parse(localStorage.getItem('key'))

let box_user = document.createElement('div')
box_user.classList.add('container')
for (const resKeyElement of res_key) {
    let block_user = document.createElement('div')
     block_user.innerText = `
     ID: ${resKeyElement.res.id}
     
     Name: ${resKeyElement.res.name}
     
     User Name: ${resKeyElement.res.username}
     
     Email: ${resKeyElement.res.email}
     
     -------------------------------------
     
     Street: ${resKeyElement.res.address.street}
     
     Suite: ${resKeyElement.res.address.suite}
     
     City: ${resKeyElement.res.address.city}
     
     Zip Code: ${resKeyElement.res.address.zipcode}
     
     -------------------------------------
     
     Lat: ${resKeyElement.res.address.geo.lat}
     
     Lng: ${resKeyElement.res.address.geo.lng}
     
     Phone: ${resKeyElement.res.phone}
     
     Web Site: ${resKeyElement.res.website}
     
     -------------------------------------
     
     Name: ${resKeyElement.res.company.name}
     
     Catch: ${resKeyElement.res.company.catchPhrase}
     
     BS: ${resKeyElement.res.company.bs}
     
     `;

    let btn_post = document.createElement('a');
    btn_post.classList.add('btn')
    btn_post.innerText = 'Показати пост';

    btn_post.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${resKeyElement.res.id}/posts`)
            .then(res => res.json())
            .then(posts => {
                const block_post = document.createElement('div');
                block_post.classList.add('block');

                const key_post = 'key_post';
                const localPost = (p) => {
                    let arrPost = JSON.parse(localStorage.getItem(key_post)) || [];
                    arrPost.push({p})
                    localStorage.setItem(key_post, JSON.stringify(arrPost))
                }

                btn_post.onclick = () => {
                    localPost(posts)
                    location.href = 'post-details.html'
                }
            })
    }

    box_user.append(block_user, btn_post)
    document.body.appendChild(box_user)
}




