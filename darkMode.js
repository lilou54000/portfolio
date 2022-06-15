const darkMode = {

    //function darkmode

    dark: function () {
        let mode = document.querySelector('.mode-switch')
        mode.addEventListener('click', () => {
            mode.classList.toggle('active');
            document.body.classList.toggle('dark');
        })
    }

}