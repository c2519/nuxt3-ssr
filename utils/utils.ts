/**
 * 字符串中间星号
 * @returns 字符串
 */
export function stringStar(value = '默认内容', characters = '****', start = 3, end = 4) {
  const reg = new RegExp(`^(.{${start}}).*(.{${end}})$`);
  if (value) return value.replace(reg, `$1${characters}$2`);

  return '';
}

/**
 * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$uv.sleep(20)将会阻塞20ms
 * @param {number} value 堵塞时间 单位ms 毫秒
 * @returns {Promise} 返回promise
 */
export function sleep(value = 30) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null);
    }, value);
  });
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
  const config = {
    id: id || 'id',
    parentId: parentId || 'parentId',
    childrenList: children || 'children',
  };

  const childrenListMap = {};
  const nodeIds = {};
  const tree = [];

  for (const d of data) {
    const parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (const d of data) {
    const parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (const t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (const c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}

/**
 * 拆分树型结构数据
 * @param {Array} arrs 树形数据
 * @param {string} childs 树形数据子数据的属性名,常用'children'
 * @param {Array} attrArr 需要提取的公共属性数组(默认是除了childs的全部属性)
 * @returns
 */
export function extractTree(arrs, childs, attrArr?: any[]) {
  let attrList = [];
  if (!Array.isArray(arrs) && !arrs.length) return [];
  if (typeof childs !== 'string') return [];
  if (!Array.isArray(attrArr) || (Array.isArray(attrArr) && !attrArr.length)) {
    attrList = Object.keys(arrs[0]);
    attrList.splice(attrList.indexOf(childs), 1);
  } else {
    attrList = attrArr;
  }
  const list = [];
  const getObj = arr => {
    arr.forEach(row => {
      const obj = {};
      obj[childs] = [];
      attrList.forEach(item => {
        obj[item] = row[item];
      });
      list.push(obj);
      if (row[childs]) {
        getObj(row[childs]);
      }
    });
    return list;
  };
  return getObj(arrs);
}

/**
 * 数组对象去重
 * @param list 数组对象
 * @param value 根据字符串匹配
 * @returns
 */
export function uniqueFun(list, value) {
  const arr = list.reduce((prev, cur) => {
    const ids = prev.map(obj => obj[value]);
    if (!ids.includes(cur[value])) {
      prev.push(cur);
    }
    return prev;
  }, []);
  return arr;
}
