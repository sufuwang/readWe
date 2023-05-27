import {
  computed,
  h
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/_chunks/dep-f0c03047.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/utils/render-fn.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function camel2Kebab(camelString) {
  var covertArr = ["fillOpacity", "fillRule", "clipRule"];
  if (covertArr.includes(camelString)) {
    return camelString.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
  return camelString;
}
function renderFn(node, props) {
  var kebabAttrs = Object.keys(node.attrs).reduce((result, key) => {
    result[camel2Kebab(key)] = node.attrs[key];
    return result;
  }, {});
  return h(node.tag, _objectSpread(_objectSpread({}, kebabAttrs), props), (node.children || []).map((child) => renderFn(child, {})));
}

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/utils/config-context.js
var DEFAULT_CLASS_PREFIX = "t";
var DEFAULT_LOCALE = "zh-CN";
var ConfigContext = {
  classPrefix: DEFAULT_CLASS_PREFIX,
  locale: DEFAULT_LOCALE
};

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/utils/use-common-classname.js
function useCommonClassName() {
  var {
    classPrefix
  } = ConfigContext;
  return {
    SIZE: {
      default: "",
      xs: "".concat(classPrefix, "-size-xs"),
      small: "".concat(classPrefix, "-size-s"),
      medium: "".concat(classPrefix, "-size-m"),
      large: "".concat(classPrefix, "-size-l"),
      xl: "".concat(classPrefix, "-size-xl"),
      block: "".concat(classPrefix, "-size-full-width")
    },
    STATUS: {
      loading: "".concat(classPrefix, "-is-loading"),
      disabled: "".concat(classPrefix, "-is-disabled"),
      focused: "".concat(classPrefix, "-is-focused"),
      success: "".concat(classPrefix, "-is-success"),
      error: "".concat(classPrefix, "-is-error"),
      warning: "".concat(classPrefix, "-is-warning"),
      selected: "".concat(classPrefix, "-is-selected"),
      active: "".concat(classPrefix, "-is-active"),
      checked: "".concat(classPrefix, "-is-checked"),
      current: "".concat(classPrefix, "-is-current"),
      hidden: "".concat(classPrefix, "-is-hidden"),
      visible: "".concat(classPrefix, "-is-visible"),
      expanded: "".concat(classPrefix, "-is-expanded"),
      indeterminate: "".concat(classPrefix, "-is-indeterminate")
    }
  };
}

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/utils/use-size-props.js
function useSizeProps(size) {
  var COMMON_SIZE_CLASS_NAMES = useCommonClassName().SIZE;
  var className = computed(() => {
    if (size.value in COMMON_SIZE_CLASS_NAMES) {
      return COMMON_SIZE_CLASS_NAMES[size.value];
    }
    return "";
  });
  var style = computed(() => {
    if (size.value === void 0 || size.value in COMMON_SIZE_CLASS_NAMES) {
      return {};
    }
    return {
      fontSize: size.value
    };
  });
  return {
    style,
    className
  };
}

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/style/css.js
import "/Users/sufuwang/Downloads/Code/readWe/node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/style/index.css";

export {
  _defineProperty,
  renderFn,
  ConfigContext,
  useSizeProps
};
//# sourceMappingURL=chunk-2VIGZGTO.js.map
