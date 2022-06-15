const app = {

    init: function () {

        darkMode.dark();
        popup.speakPopup();
        telechargement.loadme();
    },
}

document.addEventListener('DOMContentLoaded', app.init);