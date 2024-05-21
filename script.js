document.getElementById('generateButton').addEventListener('click', function() {
    const phone = document.getElementById('phone').value;
    const account = document.getElementById('account').value;

    if (phone && account) {
        const qrData = `Phone:${phone};Account:${account}`;
        const qrCodeContainer = document.getElementById('qrcode');
        qrCodeContainer.innerHTML = '';

        new QRCode(qrCodeContainer, {
            text: qrData,
            width: 256,
            height: 256
        });
    } else {
        alert('Please fill in both fields.');
    }
});
