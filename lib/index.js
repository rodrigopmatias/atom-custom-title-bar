import Package from './package';

let pack;
const entry = {
  initialize() {
    pack = new Package();
  },
};

module.exports = new Proxy(entry, {
  get(target, name) {
    if (pack && Reflect.has(pack, name)) {
      let item = pack[name];
      if (typeof item === 'function') {
        item = item.bind(pack);
      }
      return item;
    } else {
      return target[name];
    }
  },
});
