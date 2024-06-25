document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");

    function playAudio() {
        audio.currentTime = 0; // Reseta o áudio para o início
        audio.play();
    }

    // Reproduz o áudio após 2 segundos e depois a cada 6 segundos
    setTimeout(function() {
        playAudio();
        setInterval(playAudio, 6000); // Repetir a cada 6 segundos
    }, 2000); // Iniciar após 2 segundos (2000 ms = 2 segundos)

    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        document.getElementById("clock").textContent = hours + ':' + minutes;
    }

    // Atualiza o relógio imediatamente e depois a cada minuto
    updateClock();
    setInterval(updateClock, 60000); // Atualizar a cada 60 segundos (60000 ms)
});
