document.getElementById("generate").addEventListener("click", function () {
    const text = document.getElementById("text").value;
    const qrCodeDiv = document.getElementById("qrcode");

    qrCodeDiv.innerHTML = "";

    if (text.trim() === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    new QRCode(qrCodeDiv, {
        text: text,
        width: 200,
        height: 200,
    });
});
