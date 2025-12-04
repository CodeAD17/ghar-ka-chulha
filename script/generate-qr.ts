import QRCode from 'qrcode';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://gharkachulha.in';
const outputPath = path.join(__dirname, '../client/public/qr-code.png');

QRCode.toFile(outputPath, url, {
    color: {
        dark: '#000000',  // Black dots
        light: '#FFFFFF' // White background
    },
    width: 1000, // High resolution
    margin: 2
}, function (err) {
    if (err) throw err;
    console.log('QR code generated successfully at ' + outputPath);
});
