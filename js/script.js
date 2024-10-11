const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

text.textContent = 'を検索';

const colorBg = () => {
    document.body.style.backgroundColor = color.value;

    if (color.value === '#ffffff') {
        text.textContent = `: ${color.value} (white)`;
    } else if (color.value === '#000000') {
        text.tectContent = `: ${color.value} (black)`
    }
    else{
        text.textContent = `: ${color.value}`;
    }
};

color.addEventListener('input', colorBg);