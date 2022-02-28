const input = document.getElementById('input');
function clickAlert() {
    alert('Owwie, my bewwy!');
}
function addingEventListener() {
    input.addEventListener('click', clickAlert);
}
