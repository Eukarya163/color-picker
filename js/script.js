const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    text.textContent = `カラーコード： ${color.value}`;
    document.body.style.backgroundColor = color.value;
};

color.addEventListener('input', colorBg);