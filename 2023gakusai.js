const timer = (time) => new Promise((resolve) => setTimeout(resolve, time));

    window.onload=async ()=>{
    const $circle =document.querySelector('.circle img');
    const $catch = document.querySelector('.catch');
    await timer(500);
    $circle.classList.add('is-visible');
    await timer(2000);
    $catch.classList.add('is-visible');
    };
