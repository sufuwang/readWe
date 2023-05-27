import {
  _defineProperty,
  renderFn,
  useSizeProps
} from "./chunk-2VIGZGTO.js";
import {
  computed,
  defineComponent
} from "./chunk-JKV2V35Q.js";

// node_modules/.pnpm/tdesign-icons-vue-next@0.1.11_vue@3.3.4/node_modules/tdesign-icons-vue-next/esm/components/usergroup.js
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
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 16 16",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M6 1c.53 0 1.02.12 1.46.35l-.63.8a2.24 2.24 0 00-3.08 2.1c0 1.23.98 2.22 2.2 2.25v1A3.25 3.25 0 016 1zM.54 9.44c1.65-.78 3.48-1.21 5.41-1.22v1c-1.77 0-3.44.4-4.95 1.1V12h1.86v1H.5a.5.5 0 01-.5-.5v-2.2c0-.36.2-.7.54-.86z"
    }
  }, {
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M10 8.31a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm0-1a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM16 11.52c0-.37-.2-.72-.54-.87a12.83 12.83 0 00-10.92 0 .96.96 0 00-.54.87V14c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-2.48zm-1 .01v1.97H5v-1.97a11.83 11.83 0 0110 0z"
    }
  }]
};
var usergroup = defineComponent({
  name: "UsergroupIcon",
  props: {
    size: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  setup(props, _ref) {
    var {
      attrs
    } = _ref;
    var propsSize = computed(() => props.size);
    var {
      className,
      style
    } = useSizeProps(propsSize);
    var finalCls = computed(() => ["t-icon", "t-icon-usergroup", className.value]);
    var finalStyle = computed(() => _objectSpread(_objectSpread({}, style.value), attrs.style));
    var finalProps = computed(() => ({
      class: finalCls.value,
      style: finalStyle.value,
      onClick: (e) => {
        var _props$onClick;
        return (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, {
          e
        });
      }
    }));
    return () => renderFn(element, finalProps.value);
  }
});

export {
  usergroup
};
//# sourceMappingURL=chunk-67YTMZJN.js.map
