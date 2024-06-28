function generateQRCode() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;

    const qrcodeContainer = document.getElementById("qrcode");
    new QRCode(qrcodeContainer, {
      text: url,
      width: 200,
      height: 200,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L,
      margin: 0,
    });
  });
}

document.addEventListener("DOMContentLoaded", generateQRCode);