/** 获取文件名称 */
export function getFileName(url: string) {
  const str = url.slice(0, url.lastIndexOf('?'));
  const dot = str.lastIndexOf('.');
  const end = str.lastIndexOf('/');
  return url.substring(end + 1, dot);
}

/**
 * 格式化文件大小
 * @param filesize 文件大小
 * @param Bytes bytes单位
 * @param decimalPoint 小数点
 * @returns 字符串
 */
export function formatFileSize(filesize: number, Bytes = 1024, decimalPoint = 2) {
  const format = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (filesize === 0) return `0${format[0]}`;
  const i = Math.floor(Math.log(filesize) / Math.log(Bytes));
  return Number.parseFloat((filesize / Bytes ** i).toFixed(decimalPoint)) + format[i];
}

/** 获取文件属性 */
export function getFileProp(file) {
  return new Promise(reslove => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const img: any = new Image();
      img.src = reader.result;
      img.onload = () => {
        reslove(img);
      };
    };
  });
}

/** base64格式转为File文件类型 */
export function base64ToFile(urlData, fileName) {
  const arr = urlData.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bytes = atob(arr[1]); // 解码base64
  let n = bytes.length;
  const ia = new Uint8Array(n);
  while (n--) {
    ia[n] = bytes.charCodeAt(n);
  }
  return new File([ia], fileName, {
    type: mime,
  });
}
