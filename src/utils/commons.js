import { KEY_CRYPTO } from '@Const/enviroments';
import CryptoJS from 'crypto-js';

export const cuentaRegresiva = ({ fechaEvento }) => {
  const fechaActual = new Date().getTime();
  const diferencia = fechaEvento - fechaActual;

  if (diferencia < 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  return { dias, horas, minutos, segundos };
};

export const extractFirstCharacters = ({ phrase = "" }) => {
  const words = phrase.split(" ");
  let characters = "";
  words.map((word) => (characters += word.charAt(0)));
  return characters;
};

export const encryptMessage = (message) => {
  const msg = message.toString();
  const encrypted = CryptoJS.AES.encrypt(msg, KEY_CRYPTO).toString();
  const encryptedBase64 = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encrypted));
  return encryptedBase64
};

export const decryptMessage = (message) => {
  const decryptedBase64 = CryptoJS.enc.Base64.parse(message).toString(CryptoJS.enc.Utf8);
  const decrypted = CryptoJS.AES.decrypt(decryptedBase64, KEY_CRYPTO).toString(CryptoJS.enc.Utf8);
  return decrypted
};
