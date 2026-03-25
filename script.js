const gifts = document.getElementsByClassName("gift-container");
let cooldown = false;
Array.from(gifts).forEach(gift =>{
gift.addEventListener("click", () =>{
    if (!cooldown) {
        cooldown = true;
        const img = gift.querySelector("img");
        gift.classList.add("opened");
        img.classList.add("opened");
        setTimeout(() => {
            const video = gift.querySelector("video");
            video.play();
            video.addEventListener("ended", () =>{
                gift.classList.remove("opened");
                //img.classList.remove("opened");
                cooldown = false;
            });
        }, 1000);

    };
});
});
