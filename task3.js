document.getElementById("submit").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let event = document.getElementById("event").value;

    let greetingCard = document.querySelector(".greeting");
    greetingCard.innerHTML = `<h2>${event}</h2>

<p>'From the bottom of my heart,I send you endless love and warm wishes!${message}</p>
<p>May your day be filled with joy, laughter, and all the happiness you deserve! Know that you are deeply cherished, and my best wishes will always be with you.

<h3>From, ${name}</h3>`;
});