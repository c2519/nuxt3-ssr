import JSEncrypt from 'jsencrypt';

// 密钥对生成 http://web.chacuo.net/netrsakeypair
const publicKey =
  'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMg3wBznErIQm9ARyN+tJ3vVQTalyIjc\n' +
  's926LFDEpHlSlHUpP7m2BIXNPk2OGmP9FLrCfjLKmEpXZ6CLkKFvQxUCAwEAAQ==';

const privateKey =
  'MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAyDfAHOcSshCb0BHI\n' +
  '360ne9VBNqXIiNyz3bosUMSkeVKUdSk/ubYEhc0+TY4aY/0UusJ+MsqYSldnoIuQ\n' +
  'oW9DFQIDAQABAkAFSQN3P9pMfQe/7FhDH00FhdGc4a9zfW/6EGoPD8HPugRe2P5q\n' +
  'UWMRHFae7dY8MMwdlx2dOEqxpqBXZEqocPtBAiEA67QMgNrE6obvpAJu0xnqjdPL\n' +
  'OOylNjejV01RfsFC+R0CIQDZdXEzlBhCK/BJm0IHW/kHlbE/TiaUZMh8WHXYWijI\n' +
  'WQIhAJi17cfqddyxkkAD54PUbbh4OVnnUN9Ayw58JMnoMxktAiEApel27xVk1MfV\n' +
  'UzOD0z2W6PSLAXPM95dVZ5nOf716NDECIGHV99vyFuG/FZUBELrPDoH0kH/BVNdh\n' +
  'VG0qXAZjzftS';

// RSA加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对数据进行加密
}

// RSA解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt();
  encryptor.setPrivateKey(privateKey); // 设置私钥
  return encryptor.decrypt(txt); // 对数据进行解密
}
