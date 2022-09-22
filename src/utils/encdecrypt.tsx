
import CryptoJS from 'crypto-js';

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJS.AES.encrypt(plainText, 'key').toString();
    return cipherText
}

export const decrypt = (ciphertext: string) => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, 'key');
    const plainText = bytes.toString(CryptoJS.enc.Utf8);
    return plainText
}