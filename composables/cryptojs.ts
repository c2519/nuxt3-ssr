import CryptoJS from 'crypto-js';

// https://www.mklab.cn/utils/aes
const SECRET_KEY = CryptoJS.enc.Utf8.parse('1234567890abcdef'); // 十六位十六进制数作为密钥
const SECRET_IV = CryptoJS.enc.Utf8.parse('1234567890abcdef'); // 十六位十六进制数作为密钥偏移量

// MD5 密钥
export function Md5(word: string) {
  return CryptoJS.MD5(word).toString().toUpperCase();
}

/**
 * CipherOption, 加密的一些选项:
 * mode: 加密模式, 可取值(CBC, CFB, CTR, CTRGladman, OFB, ECB), 都在 CryptoJS.mode 对象下
 * padding: 填充方式, 可取值(Pkcs7, AnsiX923, Iso10126, Iso97971, ZeroPadding, NoPadding), 都在 CryptoJS.pad 对象下
 * iv: 偏移量, mode === ECB 时, 不需要 iv
 * 返回的是一个加密对象
 */

// AES 加密
export function AesEncrypt(word: string) {
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  // 输出 Base64 密钥
  // return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  // 输出 32 位密钥
  return encrypted.ciphertext.toString().toUpperCase();
}

// AES 解密
export function AesDecrypt(word: string) {
  // 解析 Base64 密钥
  // const encryptedHexStr = CryptoJS.enc.Base64.parse(word)
  // 解析 32 位密钥
  const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(srcs, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}
