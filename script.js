
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
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        //star.style.width = `${size}px`;
        //star.style.height = `${size}px`;
        starContainer.appendChild(star);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById('backgroundMusic');
    const toggleSwitch = document.getElementById('toggleMusic');
    music.volume = 0.4;
    toggleSwitch.addEventListener("change", function () {
        music.muted = false;
        if (toggleSwitch.checked) {
            music.play();
        }
        else {
            music.pause();
        }
    });
});
