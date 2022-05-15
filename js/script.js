console.log("Cześć!")


{
    let changePictureButton = document.querySelector(".js-changePictureButton");

    changePictureButton.addEventListener("click", () => {

        const momo = document.querySelector(".js-momo");
        const momoLeży = document.querySelector(".js-momoLeży");

        momo.classList.toggle("hide");
        momoLeży.classList.toggle("hide");

    });
}

changePictureButton();


