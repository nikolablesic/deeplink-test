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