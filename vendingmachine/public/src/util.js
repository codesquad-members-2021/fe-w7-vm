const _ = {
  $: function (selector, base = document) {
    return base.querySelector(selector);
  },
};

export default _;
