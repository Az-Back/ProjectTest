window.addEventListener('click', index)
window.addEventListener('keydown', truc);

alert("Appuie sur B pour avoir ton message de Bienvenue :)")
function truc(b){
    const sound1 = document.querySelector(`audio[data-key1="${b.key}"]`);
    sound1.play();
}

function index()
{
    document.location.href = "index.html";
}