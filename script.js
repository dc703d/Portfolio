
function openBox1() {
    if (document.getElementById('educationPara').style.display == 'block') {
        document.getElementById('educationPara').style.display = 'none';
    }
    else {
        document.getElementById('educationPara').style.display = 'block';
    }  
}
function openBox2() {
    if (document.getElementById('workPara').style.display == 'block') {
        document.getElementById('workPara').style.display = 'none';
    }
    else {
        document.getElementById('workPara').style.display = 'block';
    }  
}

document.addEventListener("DOMContentLoaded", () => {
    const starContainer = document.querySelector('.stars');
    const starCount = 200;
    //const size = Math.random() * 2 + 1;
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        //star.style.width = `${size}px`;
        //star.style.height = `${size}px`;
        starContainer.appendChild(star);
    }
});