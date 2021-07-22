window.SoundsManager =
{
    beep: function () {
        window.SoundsManager.playSound("/ui/sounds/beep.mp3");
    },
    trash: function () {
        window.SoundsManager.playSound("/ui/sounds/trash.mp3");
    },
    toast: function () {
        window.SoundsManager.playSound("/ui/sounds/toast.mp3");
    },
    error: function () {
        window.SoundsManager.playSound("/ui/sounds/error.mp3");
    },
    playSound: function (src) {
        const sound = new Audio();
        sound.src = src;
        sound.play();
        sound.onended = () => delete (sound);
    },
}