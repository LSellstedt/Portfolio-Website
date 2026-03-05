function changeImage(){
    let displayImage = document.getElementById('hero-image')
    if(displayImage.src.match('images/Screenshot_20260305_104714_Instagram.png')){
        displayImage.src = 'images/profile_picture.webp'
    } else {
        displayImage.src = 'images/Screenshot_20260305_104714_Instagram.png'
    }
}

let flipped = false;
let isAnimating = false;

function flipImage() {

    if (isAnimating) return;
    isAnimating = true;

    const img = document.getElementById('hero-image');

    img.style.transform = flipped 
        ? 'rotateY(0deg)' 
        : 'rotateY(180deg)';

    setTimeout(() => {
        img.src = flipped
            ? 'images/profile_picture.webp'
            : 'images/Screenshot_20260305_104714_Instagramflipped.png';

        flipped = !flipped;
    }, 200);

    setTimeout(() => {
        isAnimating = false;
    }, 400);
}