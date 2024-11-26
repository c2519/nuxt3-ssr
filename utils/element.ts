export function validate(formRef, key?: string) {
  return new Promise(reslove => {
    if (key) {
      formRef?.validateField(key, fields => {
        if (!fields) {
          console.log('error submit!', fields);
          return new Promise(() => {});
        }
        reslove(fields);
      });
    } else {
      formRef?.validate((valid, fields) => {
        if (!valid) {
          console.log('error submit!', fields);
          return new Promise(() => {});
        }
        reslove(valid);
      });
    }
  });
}
