import Quagga from 'quagga';

const video = document.getElementById('camera');

Quagga.init({
    inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: video,
    },
    decoder: {
        readers: ['ean_reader']
    }
});

Quagga.onDetected((result) => {
    alert(`Código de Barras detectado: ${result.codeResult.code}`);
});

Quagga.start();