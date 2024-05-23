document.getElementById('generateButton').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    const account = document.getElementById('account').value;

    if (phone && account) {
		const qrLink = `https://nikolablesic.github.io/demo-placanje/payment.html?racun=${account}&telefon=${phone}`
        const qrCodeContainer = document.getElementById('qrcode');
        qrCodeContainer.innerHTML = '';

        new QRCode(qrCodeContainer, {
            text: qrLink,
            width: 256,
            height: 256
        });

        const nfcButton = document.getElementById('nfcButton');
        nfcButton.style.display = 'block';

        nfcButton.addEventListener('click', async () => {
            try {
                alert("Start");
                if ('NDEFWriter' in window) {
                    const ndef = new NDEFWriter();
                    await ndef.write(qrData);
                    alert("NFC tag written successfully!");
    
                    // Vibrate the device for feedback
                    if (navigator.vibrate) {
                        navigator.vibrate(200); // Vibrate for 200ms
                    }
                } else {
                    alert("Web NFC is not supported in this browser.");
                }
            } catch (error) {
                alert("Error writing to NFC tag:", error);
            }
        });

    } else {
        alert('Please fill in both fields.');
    }
});