const tabs = document.querySelectorAll('.tab')
const posts = document.querySelectorAll('.post');

// console.log(tabs);


tabs.forEach((tab,index) => {
    const post = posts[index];
    tab.addEventListener('click', function() {
        document.querySelector('.tab.active').classList.remove('active');
        document.querySelector('.post.active').classList.remove('active');

        tab.classList.add('active');
        post.classList.add('active');
    })
    
    
})


const theme = document.querySelector('.theme');
const section = document.getElementsByTagName('section')[0];
const left_main = document.querySelector('.left_main');

// console.log(theme.innerHTML);