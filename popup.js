// function to show popup

//popup =object
const popup = {
    // select element to react

    speakPopup: function () {
        const flagSpain = document.getElementById('flagSpain');
        const flagUK = document.getElementById('flagUK');
        const flagPortugues = document.getElementById('flagPortugues');
        console.log(flagSpain, flagPortugues, flagUK);


        //put an event lister on the flag, to know if we have a a reaction  
        //call function handler situed on the object popup
        flagSpain.addEventListener('click', popup.handleOpenModalSpain);
        flagUK.addEventListener('click', popup.handleOpenModalUK);
        flagPortugues.addEventListener('click', popup.handleOpenModalPortugues);




        const crossSpain = document.getElementById('closeCrossSpain');
        const crossUK = document.getElementById('closeCrossUK');
        const crossPortugues = document.getElementById('closeCrossPortugues');
        console.log(crossSpain,crossPortugues,crossUK)

        crossSpain.addEventListener('click', popup.handleCloseModalSpain);
        crossUK.addEventListener('click', popup.handleCloseModalUK);
        crossPortugues.addEventListener('click', popup.handleCloseModalPortugues);
    },



    //function show popup
    //select in the DOM the element commentS to put in a class by classList.add    
    handleOpenModalSpain: function () {
        console.log();
        const commentSpain = document.getElementById('commentSpain');
        commentSpain.classList.add('popupActive');

    },

    handleOpenModalUK: function () {
        
        const commentUK = document.getElementById('commentUK');
        console.log(commentUK);
        commentUK.classList.add('popupActive');

    },

    handleOpenModalPortugues: function () {
        console.log();
        const commentPortugues = document.getElementById('commentPortugues');
        commentPortugues.classList.add('popupActive');

    },

    //function close popup
    handleCloseModalSpain: function () {
        
        const commentSpain = document.getElementById('commentSpain');
        console.log(commentSpain);
        commentSpain.classList.remove('popupActive');

    },

    handleCloseModalUK: function () {
        console.log();
        const commentUK = document.getElementById('commentUK');
        commentUK.classList.remove('popupActive');

    },

    handleCloseModalPortugues: function () {
        console.log();
        const commentPortugues = document.getElementById('commentPortugues');
        commentPortugues.classList.remove('popupActive');

    },
}

