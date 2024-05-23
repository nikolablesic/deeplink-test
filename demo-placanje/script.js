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
    } else {
        alert('Please fill in both fields.');
    }
});

document.getElementById('generateButton').addEventListener('click', () => {
    const phone = document.getElementById('phone').value;
    const account = document.getElementById('account').value;
    const qrData = `Phone: ${phone}, Account: ${account}`;
    
    // Generate QR code
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, qrData);
    
    // Show NFC button
    const nfcButton = document.getElementById('nfcButton');
    nfcButton.style.display = 'block';

    // Add NFC write functionality
    nfcButton.addEventListener('click', async () => {
        try {
            if ('NDEFWriter' in window) {
                const ndef = new NDEFWriter();
                await ndef.write(qrData);
                console.log("NFC tag written successfully!");

                // Vibrate the device for feedback
                if (navigator.vibrate) {
                    navigator.vibrate(200); // Vibrate for 200ms
                }
            } else {
                console.log("Web NFC is not supported in this browser.");
            }
        } catch (error) {
            console.error("Error writing to NFC tag:", error);
        }
    });
});
