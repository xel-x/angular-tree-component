(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('mobx'), require('mobx-angular')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'mobx', 'mobx-angular'], factory) :
	(factory((global['angular-tree-component'] = global['angular-tree-component'] || {}),global.i0,global._angular_common,global.mobx,global.mobxAngular));
}(this, (function (exports,i0,_angular_common,mobx,mobxAngular) { 'use strict';

// import { mobxAngularDebug } from '../utils/mobx-angular-debug';
class MobxAutorunDirective {
  constructor(templateRef, viewContainer) {
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
    this.templateBindings = {};
  }
  ngOnInit() {
    this.view = this.viewContainer.createEmbeddedView(this.templateRef);
    if (this.dispose) this.dispose();
    if (this.shouldDetach()) {
      this.view.detach();
    }
    this.autoDetect(this.view);
    // mobxAngularDebug(this.view, this.dispose);
  }
  shouldDetach() {
    return this.mobxAutorun && this.mobxAutorun.detach;
  }
  autoDetect(view) {
    this.dispose = mobx.autorun(() => view.detectChanges());
  }
  ngOnDestroy() {
    if (this.dispose) this.dispose();
  }
}
MobxAutorunDirective.ɵfac = function MobxAutorunDirective_Factory(t) {
  return new (t || MobxAutorunDirective)(
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxAutorunDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxAutorunDirective,
  selectors: [['', 'mobxAutorun', '']],
  inputs: { mobxAutorun: 'mobxAutorun' }
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAutorunDirective,
    [
      {
        type: i0.Directive,
        args: [{ selector: '[mobxAutorun]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    {
      mobxAutorun: [
        {
          type: i0.Input
        }
      ]
    }
  );
})();

class MobxAutorunSyncDirective extends MobxAutorunDirective {
  constructor(templateRef, viewContainer) {
    super(templateRef, viewContainer);
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }
  autoDetect(view) {
    // prettier-ignore
    console.warn('mobxAutorunSync is deprecated, please use mobxAutorun instead - it\'s doing exactly the same thing');
    this.dispose = mobx.autorun(() => {
      view['detectChanges']();
    });
  }
}
MobxAutorunSyncDirective.ɵfac = function MobxAutorunSyncDirective_Factory(t) {
  return new (t || MobxAutorunSyncDirective)(
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxAutorunSyncDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxAutorunSyncDirective,
  selectors: [['', 'mobxAutorunSync', '']],
  features: [i0.ɵɵInheritDefinitionFeature]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAutorunSyncDirective,
    [
      {
        type: i0.Directive,
        args: [{ selector: '[mobxAutorunSync]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    null
  );
})();

class MobxReactionDirective extends MobxAutorunDirective {
  constructor(templateRef, viewContainer) {
    super(templateRef, viewContainer);
    this.templateRef = templateRef;
    this.viewContainer = viewContainer;
  }
  autoDetect(view) {
    this.dispose = mobx.reaction(
      this.mobxReaction,
      () => {
        view['detectChanges']();
      },
      { fireImmediately: true }
    );
  }
}
MobxReactionDirective.ɵfac = function MobxReactionDirective_Factory(t) {
  return new (t || MobxReactionDirective)(
    i0.ɵɵdirectiveInject(i0.TemplateRef),
    i0.ɵɵdirectiveInject(i0.ViewContainerRef)
  );
};
MobxReactionDirective.ɵdir = i0.ɵɵdefineDirective({
  type: MobxReactionDirective,
  selectors: [['', 'mobxReaction', '']],
  inputs: { mobxReaction: 'mobxReaction' },
  features: [i0.ɵɵInheritDefinitionFeature]
});
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxReactionDirective,
    [
      {
        type: i0.Directive,
        args: [{ selector: '[mobxReaction]' }]
      }
    ],
    function() {
      return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }];
    },
    {
      mobxReaction: [
        {
          type: i0.Input
        }
      ]
    }
  );
})();

class MobxAngularModule {}
MobxAngularModule.ɵmod = i0.ɵɵdefineNgModule({ type: MobxAngularModule });
MobxAngularModule.ɵinj = i0.ɵɵdefineInjector({
  factory: function MobxAngularModule_Factory(t) {
    return new (t || MobxAngularModule)();
  },
  imports: [[]]
});
(function() {
  (typeof ngJitMode === 'undefined' || ngJitMode) &&
    i0.ɵɵsetNgModuleScope(MobxAngularModule, {
      declarations: [
        MobxAutorunDirective,
        MobxAutorunSyncDirective,
        MobxReactionDirective
      ],
      exports: [
        MobxAutorunDirective,
        MobxAutorunSyncDirective,
        MobxReactionDirective
      ]
    });
})();
/*@__PURE__*/ (function() {
  i0.ɵsetClassMetadata(
    MobxAngularModule,
    [
      {
        type: i0.NgModule,
        args: [
          {
            declarations: [
              MobxAutorunDirective,
              MobxAutorunSyncDirective,
              MobxReactionDirective
            ],
            imports: [],
            exports: [
              MobxAutorunDirective,
              MobxAutorunSyncDirective,
              MobxReactionDirective
            ]
          }
        ]
      }
    ],
    null,
    null
  );
})();
function actionInternal(...args) {
  return mobx.action(...args);
}
const action$2 = Object.assign(actionInternal, mobx.action);
function computedInternal(...args) {
  return mobx.computed(...args);
}
const computed$2 = Object.assign(computedInternal, mobx.computed);
function observableInternal(...args) {
  return mobx.observable(...args);
}
const observable$2 = Object.assign(observableInternal, mobx.observable);

var KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32,
    CONTEXT_MENU: 32
};

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;

var apply$2 = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply$2(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal || freeSelf || Function('return this')();

var _root = root$1;

var root = _root;

/** Built-in value references. */
var Symbol$1 = root.Symbol;

var _Symbol = Symbol$1;

var Symbol$2 = _Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;

var Symbol = _Symbol;
var getRawTag = _getRawTag;
var objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag = _baseGetTag;
var isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

var root$2 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$2['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1;
var isMasked = _isMasked;
var isObject = isObject_1;
var toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative;
var getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$1;

var getNative = _getNative;

var defineProperty$1 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

var constant = constant_1;
var defineProperty = _defineProperty;
var identity$2 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString;
var shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var identity = identity_1;
var overRest = _overRest;
var setToString = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

var _baseRest = baseRest$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$1;

var assocIndexOf = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$3 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$3(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf$4 = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf$4(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear;
var listCacheDelete = _listCacheDelete;
var listCacheGet = _listCacheGet;
var listCacheHas = _listCacheHas;
var listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

var ListCache$2 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$2;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

var getNative$2 = _getNative;
var root$3 = _root;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative$2(root$3, 'Map');

var _Map = Map$1;

var getNative$3 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative$3(Object, 'create');

var _nativeCreate = nativeCreate$1;

var nativeCreate = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$3 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$3 ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate$4 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate$4 && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear;
var hashDelete = _hashDelete;
var hashGet = _hashGet;
var hashHas = _hashHas;
var hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash;
var ListCache$4 = _ListCache;
var Map$2 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$2 || ListCache$4),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$1;

var getMapData = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$3 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$3(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData$4 = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData$4(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear;
var mapCacheDelete = _mapCacheDelete;
var mapCacheGet = _mapCacheGet;
var mapCacheHas = _mapCacheHas;
var mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var ListCache$3 = _ListCache;
var Map = _Map;
var MapCache = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$3) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache;
var stackClear = _stackClear;
var stackDelete = _stackDelete;
var stackGet = _stackGet;
var stackHas = _stackHas;
var stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;

var defineProperty$2 = _defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue$1(object, key, value) {
  if (key == '__proto__' && defineProperty$2) {
    defineProperty$2(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue$1;

var baseAssignValue = _baseAssignValue;
var eq$2 = eq_1;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue$1(object, key, value) {
  if ((value !== undefined && !eq$2(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue$1;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
var root = _root;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$1;

var Uint8Array = _Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer$1(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer$1;

var cloneArrayBuffer = _cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray$1(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray$1;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var isObject$6 = isObject_1;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate$1 = (function() {
  function object() {}
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/** Built-in value references. */
var getPrototype$1 = overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype$1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype$1;

var baseCreate = _baseCreate;
var getPrototype = _getPrototype;
var isPrototype = _isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject$1(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$2;

var baseGetTag$2 = _baseGetTag;
var isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$1(value) && baseGetTag$2(value) == argsTag;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments;
var isObjectLike = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$1;

var isFunction$4 = isFunction_1;
var isLength = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction$4(value);
}

var isArrayLike_1 = isArrayLike$1;

var isArrayLike = isArrayLike_1;
var isObjectLike$3 = isObjectLike_1;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject$1(value) {
  return isObjectLike$3(value) && isArrayLike(value);
}

var isArrayLikeObject_1 = isArrayLikeObject$1;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});

var baseGetTag$3 = _baseGetTag;
var getPrototype$2 = _getPrototype;
var isObjectLike$4 = isObjectLike_1;

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject$1(value) {
  if (!isObjectLike$4(value) || baseGetTag$3(value) != objectTag) {
    return false;
  }
  var proto = getPrototype$2(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject$1;

var baseGetTag$4 = _baseGetTag;
var isLength$2 = isLength_1;
var isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag$1 = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) &&
    isLength$2(value.length) && !!typedArrayTags[baseGetTag$4(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = _freeGlobal;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var baseIsTypedArray = _baseIsTypedArray;
var baseUnary = _baseUnary;
var nodeUtil = _nodeUtil;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet$2(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet$2;

var baseAssignValue$3 = _baseAssignValue;
var eq$3 = eq_1;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue$1(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq$3(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue$3(object, key, value);
  }
}

var _assignValue = assignValue$1;

var assignValue = _assignValue;
var baseAssignValue$2 = _baseAssignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject$1(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$2(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

var baseTimes = _baseTimes;
var isArguments$2 = isArguments_1;
var isArray$2 = isArray_1;
var isBuffer$1 = isBuffer_1;
var isIndex = _isIndex;
var isTypedArray$2 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$2(value),
      isArg = !isArr && isArguments$2(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$2(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn$1;

var isObject$7 = isObject_1;
var isPrototype$2 = _isPrototype;
var nativeKeysIn = _nativeKeysIn;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn$1(object) {
  if (!isObject$7(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$2(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn$1;

var arrayLikeKeys = _arrayLikeKeys;
var baseKeysIn = _baseKeysIn;
var isArrayLike$2 = isArrayLike_1;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$3(object) {
  return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

var keysIn_1 = keysIn$3;

var copyObject = _copyObject;
var keysIn$2 = keysIn_1;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject$1(value) {
  return copyObject(value, keysIn$2(value));
}

var toPlainObject_1 = toPlainObject$1;

var assignMergeValue$2 = _assignMergeValue;
var cloneBuffer = _cloneBuffer;
var cloneTypedArray = _cloneTypedArray;
var copyArray = _copyArray;
var initCloneObject = _initCloneObject;
var isArguments = isArguments_1;
var isArray = isArray_1;
var isArrayLikeObject = isArrayLikeObject_1;
var isBuffer = isBuffer_1;
var isFunction$3 = isFunction_1;
var isObject$5 = isObject_1;
var isPlainObject = isPlainObject_1;
var isTypedArray = isTypedArray_1;
var safeGet$1 = _safeGet;
var toPlainObject = toPlainObject_1;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet$1(object, key),
      srcValue = safeGet$1(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue$2(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject$5(objValue) || isFunction$3(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue$2(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep$1;

var Stack = _Stack;
var assignMergeValue = _assignMergeValue;
var baseFor = _baseFor;
var baseMergeDeep = _baseMergeDeep;
var isObject$4 = isObject_1;
var keysIn$1 = keysIn_1;
var safeGet = _safeGet;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge$1(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject$4(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge$1, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$1);
}

var _baseMerge = baseMerge$1;

var baseMerge = _baseMerge;
var isObject$3 = isObject_1;

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
  if (isObject$3(objValue) && isObject$3(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge$1, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

var _customDefaultsMerge = customDefaultsMerge$1;

var eq$4 = eq_1;
var isArrayLike$3 = isArrayLike_1;
var isIndex$2 = _isIndex;
var isObject$8 = isObject_1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$1(value, index, object) {
  if (!isObject$8(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$3(object) && isIndex$2(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq$4(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$1;

var baseRest$2 = _baseRest;
var isIterateeCall = _isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner$1(assigner) {
  return baseRest$2(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner$1;

var baseMerge$2 = _baseMerge;
var createAssigner = _createAssigner;

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge$2(object, source, srcIndex, customizer);
});

var mergeWith_1 = mergeWith$1;

var apply = _apply;
var baseRest = _baseRest;
var customDefaultsMerge = _customDefaultsMerge;
var mergeWith = mergeWith_1;

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

var defaultsDeep_1 = defaultsDeep;

var baseGetTag$5 = _baseGetTag;
var isObjectLike$6 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$6(value) && baseGetTag$5(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

var isArray$4 = isArray_1;
var isSymbol = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$1(value, object) {
  if (isArray$4(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$1;

var MapCache$2 = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache$2;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$1;

var Symbol$3 = _Symbol;
var arrayMap = _arrayMap;
var isArray$5 = isArray_1;
var isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$3 ? Symbol$3.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$1(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$5(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString$1) + '';
  }
  if (isSymbol$2(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString$1;

var baseToString = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : baseToString(value);
}

var toString_1 = toString$1;

var isArray$3 = isArray_1;
var isKey = _isKey;
var stringToPath = _stringToPath;
var toString = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$1(value, object) {
  if (isArray$3(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

var _castPath = castPath$1;

var isSymbol$3 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$1(value) {
  if (typeof value == 'string' || isSymbol$3(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey$1;

var castPath = _castPath;
var toKey = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$1(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$1;

var baseGet = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

var overArg$2 = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg$2(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype$3 = _isPrototype;
var nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$11.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var arrayLikeKeys$2 = _arrayLikeKeys;
var baseKeys = _baseKeys;
var isArrayLike$4 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$2(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$2(object) : baseKeys(object);
}

var keys_1 = keys$2;

var copyObject$3 = _copyObject;
var keys$1 = keys_1;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$1(source), object);
}

var _baseAssign = baseAssign$1;

var copyObject$4 = _copyObject;
var keysIn$4 = keysIn_1;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn$1(object, source) {
  return object && copyObject$4(source, keysIn$4(source), object);
}

var _baseAssignIn = baseAssignIn$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter;
var stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$12.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

var copyObject$5 = _copyObject;
var getSymbols = _getSymbols;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols$1(source, object) {
  return copyObject$5(source, getSymbols(source), object);
}

var _copySymbols = copySymbols$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

var arrayPush = _arrayPush;
var getPrototype$3 = _getPrototype;
var getSymbols$2 = _getSymbols;
var stubArray$2 = stubArray_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn$1 = !nativeGetSymbols$1 ? stubArray$2 : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$2(object));
    object = getPrototype$3(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn$1;

var copyObject$6 = _copyObject;
var getSymbolsIn = _getSymbolsIn;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn$1(source, object) {
  return copyObject$6(source, getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn$1;

var arrayPush$2 = _arrayPush;
var isArray$7 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$7(object) ? result : arrayPush$2(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

var baseGetAllKeys = _baseGetAllKeys;
var getSymbols$3 = _getSymbols;
var keys$3 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$3, getSymbols$3);
}

var _getAllKeys = getAllKeys$1;

var baseGetAllKeys$2 = _baseGetAllKeys;
var getSymbolsIn$2 = _getSymbolsIn;
var keysIn$5 = keysIn_1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn$2(object) {
  return baseGetAllKeys$2(object, keysIn$5, getSymbolsIn$2);
}

var _getAllKeysIn = getAllKeysIn$2;

var getNative$4 = _getNative;
var root$5 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$5, 'DataView');

var _DataView = DataView$1;

var getNative$5 = _getNative;
var root$6 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$5(root$6, 'Promise');

var _Promise = Promise$2;

var getNative$6 = _getNative;
var root$7 = _root;

/* Built-in method references that are verified to be native. */
var Set$1 = getNative$6(root$7, 'Set');

var _Set = Set$1;

var getNative$7 = _getNative;
var root$8 = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative$7(root$8, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView;
var Map$3 = _Map;
var Promise$1 = _Promise;
var Set = _Set;
var WeakMap = _WeakMap;
var baseGetTag$6 = _baseGetTag;
var toSource$2 = _toSource;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';
var objectTag$3 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$2 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource$2(DataView);
var mapCtorString = toSource$2(Map$3);
var promiseCtorString = toSource$2(Promise$1);
var setCtorString = toSource$2(Set);
var weakMapCtorString = toSource$2(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$6;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (Map$3 && getTag$1(new Map$3) != mapTag$2) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set && getTag$1(new Set) != setTag$2) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag$2)) {
  getTag$1 = function(value) {
    var result = baseGetTag$6(value),
        Ctor = result == objectTag$3 ? value.constructor : undefined,
        ctorString = Ctor ? toSource$2(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$2;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray$1(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$10.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray$1;

var cloneArrayBuffer$3 = _cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView$1;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp$1;

var Symbol$4 = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$4 ? Symbol$4.prototype : undefined;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol$1;

var cloneArrayBuffer$2 = _cloneArrayBuffer;
var cloneDataView = _cloneDataView;
var cloneRegExp = _cloneRegExp;
var cloneSymbol = _cloneSymbol;
var cloneTypedArray$2 = _cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$2 = '[object Symbol]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer$2(object);

    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);

    case dataViewTag$3:
      return cloneDataView(object, isDeep);

    case float32Tag$2: case float64Tag$2:
    case int8Tag$2: case int16Tag$2: case int32Tag$2:
    case uint8Tag$2: case uint8ClampedTag$2: case uint16Tag$2: case uint32Tag$2:
      return cloneTypedArray$2(object, isDeep);

    case mapTag$3:
      return new Ctor;

    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);

    case regexpTag$2:
      return cloneRegExp(object);

    case setTag$3:
      return new Ctor;

    case symbolTag$2:
      return cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag$1;

var getTag$2 = _getTag;
var isObjectLike$7 = isObjectLike_1;

/** `Object#toString` result references. */
var mapTag$4 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap$1(value) {
  return isObjectLike$7(value) && getTag$2(value) == mapTag$4;
}

var _baseIsMap = baseIsMap$1;

var baseIsMap = _baseIsMap;
var baseUnary$2 = _baseUnary;
var nodeUtil$1 = _nodeUtil;

/* Node.js helper references. */
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;

var isMap_1 = isMap$1;

var getTag$3 = _getTag;
var isObjectLike$8 = isObjectLike_1;

/** `Object#toString` result references. */
var setTag$4 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet$1(value) {
  return isObjectLike$8(value) && getTag$3(value) == setTag$4;
}

var _baseIsSet = baseIsSet$1;

var baseIsSet = _baseIsSet;
var baseUnary$3 = _baseUnary;
var nodeUtil$2 = _nodeUtil;

/* Node.js helper references. */
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet$1 = nodeIsSet ? baseUnary$3(nodeIsSet) : baseIsSet;

var isSet_1 = isSet$1;

var Stack$2 = _Stack;
var arrayEach = _arrayEach;
var assignValue$2 = _assignValue;
var baseAssign = _baseAssign;
var baseAssignIn = _baseAssignIn;
var cloneBuffer$1 = _cloneBuffer;
var copyArray$2 = _copyArray;
var copySymbols = _copySymbols;
var copySymbolsIn = _copySymbolsIn;
var getAllKeys = _getAllKeys;
var getAllKeysIn$1 = _getAllKeysIn;
var getTag = _getTag;
var initCloneArray = _initCloneArray;
var initCloneByTag = _initCloneByTag;
var initCloneObject$2 = _initCloneObject;
var isArray$6 = isArray_1;
var isBuffer$2 = isBuffer_1;
var isMap = isMap_1;
var isObject$9 = isObject_1;
var isSet = isSet_1;
var keys = keys_1;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG$1 = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$2 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$2 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$1 = '[object Symbol]';
var weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] =
cloneableTags[boolTag$1] = cloneableTags[dateTag$1] =
cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] =
cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] =
cloneableTags[int32Tag$1] = cloneableTags[mapTag$1] =
cloneableTags[numberTag$1] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$1] = cloneableTags[setTag$1] =
cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] =
cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject$9(value)) {
    return value;
  }
  var isArr = isArray$6(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$2(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject$2(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack$2);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn$1 : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue$2(result, key, baseClone$1(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone$1;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last$1;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice$1;

var baseGet$2 = _baseGet;
var baseSlice = _baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent$1(object, path) {
  return path.length < 2 ? object : baseGet$2(object, baseSlice(path, 0, -1));
}

var _parent = parent$1;

var castPath$3 = _castPath;
var last = last_1;
var parent = _parent;
var toKey$2 = _toKey;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset$1(object, path) {
  path = castPath$3(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey$2(last(path))];
}

var _baseUnset = baseUnset$1;

var isPlainObject$2 = isPlainObject_1;

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone$1(value) {
  return isPlainObject$2(value) ? undefined : value;
}

var _customOmitClone = customOmitClone$1;

var Symbol$5 = _Symbol;
var isArguments$3 = isArguments_1;
var isArray$8 = isArray_1;

/** Built-in value references. */
var spreadableSymbol = Symbol$5 ? Symbol$5.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$8(value) || isArguments$3(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;

var arrayPush$3 = _arrayPush;
var isFlattenable = _isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$3(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$1;

var baseFlatten = _baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

var flatten_1 = flatten$1;

var flatten = flatten_1;
var overRest$2 = _overRest;
var setToString$2 = _setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest$1(func) {
  return setToString$2(overRest$2(func, undefined, flatten), func + '');
}

var _flatRest = flatRest$1;

var arrayMap$2 = _arrayMap;
var baseClone = _baseClone;
var baseUnset = _baseUnset;
var castPath$2 = _castPath;
var copyObject$2 = _copyObject;
var customOmitClone = _customOmitClone;
var flatRest = _flatRest;
var getAllKeysIn = _getAllKeysIn;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap$2(paths, function(path) {
    path = castPath$2(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject$2(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

var omit_1 = omit;

var baseGetTag$7 = _baseGetTag;
var isObjectLike$9 = isObjectLike_1;

/** `Object#toString` result references. */
var numberTag$3 = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike$9(value) && baseGetTag$7(value) == numberTag$3);
}

var isNumber_1 = isNumber;

var _a;
var ɵ0 = function (tree, node, $event) { return node && node.toggleActivated(); };
var ɵ1 = function (tree, node, $event) { return node && node.toggleActivated(true); };
var ɵ2 = function (tree, node, $event) { return node && node.toggleSelected(); };
var ɵ3 = function (tree, node, $event) { return node.setIsActive(true); };
var ɵ4 = function (tree, node, $event) { return node.setIsActive(false); };
var ɵ5 = function (tree, node, $event) { return node.setIsSelected(true); };
var ɵ6 = function (tree, node, $event) { return node.setIsSelected(false); };
var ɵ7 = function (tree, node, $event) { return node.focus(); };
var ɵ8 = function (tree, node, $event) { return node.hasChildren && node.toggleExpanded(); };
var ɵ9 = function (tree, node, $event) { return node.expand(); };
var ɵ10 = function (tree, node, $event) { return node.collapse(); };
var ɵ11 = function (tree, node, $event) { return tree.focusDrillDown(); };
var ɵ12 = function (tree, node, $event) { return tree.focusDrillUp(); };
var ɵ13 = function (tree, node, $event) { return tree.focusNextNode(); };
var ɵ14 = function (tree, node, $event) { return tree.focusPreviousNode(); };
var ɵ15 = function (tree, node, $event, _a) {
    var from = _a.from, to = _a.to;
    // default action assumes from = node, to = {parent, index}
    if ($event.ctrlKey) {
        tree.copyNode(from, to);
    }
    else {
        tree.moveNode(from, to);
    }
};
var TREE_ACTIONS = {
    TOGGLE_ACTIVE: ɵ0,
    TOGGLE_ACTIVE_MULTI: ɵ1,
    TOGGLE_SELECTED: ɵ2,
    ACTIVATE: ɵ3,
    DEACTIVATE: ɵ4,
    SELECT: ɵ5,
    DESELECT: ɵ6,
    FOCUS: ɵ7,
    TOGGLE_EXPANDED: ɵ8,
    EXPAND: ɵ9,
    COLLAPSE: ɵ10,
    DRILL_DOWN: ɵ11,
    DRILL_UP: ɵ12,
    NEXT_NODE: ɵ13,
    PREVIOUS_NODE: ɵ14,
    MOVE_NODE: ɵ15
};
var defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_ACTIVE,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        checkboxClick: TREE_ACTIONS.TOGGLE_SELECTED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: (_a = {},
        _a[KEYS.RIGHT] = TREE_ACTIONS.DRILL_DOWN,
        _a[KEYS.LEFT] = TREE_ACTIONS.DRILL_UP,
        _a[KEYS.DOWN] = TREE_ACTIONS.NEXT_NODE,
        _a[KEYS.UP] = TREE_ACTIONS.PREVIOUS_NODE,
        _a[KEYS.SPACE] = TREE_ACTIONS.TOGGLE_ACTIVE,
        _a[KEYS.ENTER] = TREE_ACTIONS.TOGGLE_ACTIVE,
        _a)
};
var TreeOptions = /** @class */ (function () {
    function TreeOptions(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.actionMapping = defaultsDeep_1({}, this.options.actionMapping, defaultActionMapping);
        if (options.rtl) {
            this.actionMapping.keys[KEYS.RIGHT] = get_1(options, ['actionMapping', 'keys', KEYS.RIGHT]) || TREE_ACTIONS.DRILL_UP;
            this.actionMapping.keys[KEYS.LEFT] = get_1(options, ['actionMapping', 'keys', KEYS.LEFT]) || TREE_ACTIONS.DRILL_DOWN;
        }
    }
    Object.defineProperty(TreeOptions.prototype, "hasChildrenField", {
        get: function () { return this.options.hasChildrenField || 'hasChildren'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "childrenField", {
        get: function () { return this.options.childrenField || 'children'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "displayField", {
        get: function () { return this.options.displayField || 'name'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "idField", {
        get: function () { return this.options.idField || 'id'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "isExpandedField", {
        get: function () { return this.options.isExpandedField || 'isExpanded'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "getChildren", {
        get: function () { return this.options.getChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "levelPadding", {
        get: function () { return this.options.levelPadding || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useVirtualScroll", {
        get: function () { return this.options.useVirtualScroll; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateExpand", {
        get: function () { return this.options.animateExpand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateSpeed", {
        get: function () { return this.options.animateSpeed || 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateAcceleration", {
        get: function () { return this.options.animateAcceleration || 1.2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollOnActivate", {
        get: function () { return this.options.scrollOnActivate === undefined ? true : this.options.scrollOnActivate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "rtl", {
        get: function () { return !!this.options.rtl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "rootId", {
        get: function () { return this.options.rootId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useCheckbox", {
        get: function () { return this.options.useCheckbox; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useTriState", {
        get: function () { return this.options.useTriState === undefined ? true : this.options.useTriState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollContainer", {
        get: function () { return this.options.scrollContainer; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "allowDragoverStyling", {
        get: function () { return this.options.allowDragoverStyling === undefined ? true : this.options.allowDragoverStyling; },
        enumerable: true,
        configurable: true
    });
    TreeOptions.prototype.getNodeClone = function (node) {
        if (this.options.getNodeClone) {
            return this.options.getNodeClone(node);
        }
        return omit_1(Object.assign({}, node.data), ['id']);
    };
    TreeOptions.prototype.allowDrop = function (element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    };
    TreeOptions.prototype.allowDrag = function (node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    };
    TreeOptions.prototype.nodeClass = function (node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    };
    TreeOptions.prototype.nodeHeight = function (node) {
        if (node.data.virtual) {
            return 0;
        }
        var nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    };
    Object.defineProperty(TreeOptions.prototype, "dropSlotHeight", {
        get: function () {
            return isNumber_1(this.options.dropSlotHeight) ? this.options.dropSlotHeight : 2;
        },
        enumerable: true,
        configurable: true
    });
    return TreeOptions;
}());

var TREE_EVENTS = {
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    nodeActivate: 'nodeActivate',
    nodeDeactivate: 'nodeDeactivate',
    select: 'select',
    deselect: 'deselect',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    copyNode: 'copyNode',
    event: 'event',
    loadNodeChildren: 'loadNodeChildren',
    changeFilter: 'changeFilter',
    stateChange: 'stateChange'
};

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

var head_1 = head;

var first = head_1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache$3 = _MapCache;
var setCacheAdd = _setCacheAdd;
var setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache$3;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache;
var arraySome$2 = _arraySome;
var cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$1(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome$2(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$6 = _Symbol;
var Uint8Array$2 = _Uint8Array;
var eq$5 = eq_1;
var equalArrays$2 = _equalArrays;
var mapToArray = _mapToArray;
var setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var errorTag$2 = '[object Error]';
var mapTag$5 = '[object Map]';
var numberTag$4 = '[object Number]';
var regexpTag$3 = '[object RegExp]';
var setTag$5 = '[object Set]';
var stringTag$3 = '[object String]';
var symbolTag$3 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = Symbol$6 ? Symbol$6.prototype : undefined;
var symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$4:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$3:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
        return false;
      }
      return true;

    case boolTag$3:
    case dateTag$3:
    case numberTag$4:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$5(+object, +other);

    case errorTag$2:
      return object.name == other.name && object.message == other.message;

    case regexpTag$3:
    case stringTag$3:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$5:
      var convert = mapToArray;

    case setTag$5:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$3:
      if (symbolValueOf$1) {
        return symbolValueOf$1.call(object) == symbolValueOf$1.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

var getAllKeys$2 = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1;

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4,
      objProps = getAllKeys$2(object),
      objLength = objProps.length,
      othProps = getAllKeys$2(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$12.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var Stack$4 = _Stack;
var equalArrays = _equalArrays;
var equalByTag = _equalByTag;
var equalObjects = _equalObjects;
var getTag$4 = _getTag;
var isArray$11 = isArray_1;
var isBuffer$3 = isBuffer_1;
var isTypedArray$3 = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var objectTag$4 = '[object Object]';

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$11(object),
      othIsArr = isArray$11(other),
      objTag = objIsArr ? arrayTag$2 : getTag$4(object),
      othTag = othIsArr ? arrayTag$2 : getTag$4(other);

  objTag = objTag == argsTag$3 ? objectTag$4 : objTag;
  othTag = othTag == argsTag$3 ? objectTag$4 : othTag;

  var objIsObj = objTag == objectTag$4,
      othIsObj = othTag == objectTag$4,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer$3(object)) {
    if (!isBuffer$3(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$4);
    return (objIsArr || isTypedArray$3(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$11.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$11.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$4);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$4);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep;
var isObjectLike$10 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike$10(value) && !isObjectLike$10(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual = baseIsEqual$1;

var Stack$3 = _Stack;
var baseIsEqual = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$3;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$10 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$1(value) {
  return value === value && !isObject$10(value);
}

var _isStrictComparable = isStrictComparable$1;

var isStrictComparable = _isStrictComparable;
var keys$4 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$4(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable$1(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$1;

var baseIsMatch = _baseIsMatch;
var getMatchData = _getMatchData;
var matchesStrictComparable = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath$4 = _castPath;
var isArguments$4 = isArguments_1;
var isArray$12 = isArray_1;
var isIndex$3 = _isIndex;
var isLength$3 = isLength_1;
var toKey$4 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$1(object, path, hasFunc) {
  path = castPath$4(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$4(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$3(length) && isIndex$3(key, length) &&
    (isArray$12(object) || isArguments$4(object));
}

var _hasPath = hasPath$1;

var baseHasIn = _baseHasIn;
var hasPath = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual$2 = _baseIsEqual;
var get$2 = get_1;
var hasIn = hasIn_1;
var isKey$2 = _isKey;
var isStrictComparable$2 = _isStrictComparable;
var matchesStrictComparable$2 = _matchesStrictComparable;
var toKey$3 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$2(path) && isStrictComparable$2(srcValue)) {
    return matchesStrictComparable$2(toKey$3(path), srcValue);
  }
  return function(object) {
    var objValue = get$2(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$3 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$3(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty;
var basePropertyDeep = _basePropertyDeep;
var isKey$3 = _isKey;
var toKey$5 = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey$3(path) ? baseProperty(toKey$5(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches;
var baseMatchesProperty = _baseMatchesProperty;
var identity$3 = identity_1;
var isArray$10 = isArray_1;
var property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$1(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$3;
  }
  if (typeof value == 'object') {
    return isArray$10(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$1;

var baseFor$2 = _baseFor;
var keys$5 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor$2(object, iteratee, keys$5);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$5 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$5(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn;
var createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;

var baseEach = _baseEach;

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome$1(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome$1;

var arraySome = _arraySome;
var baseIteratee = _baseIteratee;
var baseSome = _baseSome;
var isArray$9 = isArray_1;
var isIterateeCall$2 = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray$9(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall$2(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

var some_1 = some;

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

var _arrayEvery = arrayEvery$1;

var baseEach$2 = _baseEach;

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery$1(collection, predicate) {
  var result = true;
  baseEach$2(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

var _baseEvery = baseEvery$1;

var arrayEvery = _arrayEvery;
var baseEvery = _baseEvery;
var baseIteratee$2 = _baseIteratee;
var isArray$13 = isArray_1;
var isIterateeCall$3 = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray$13(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall$3(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee$2(predicate, 3));
}

var every_1 = every;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNode = /** @class */ (function () {
    function TreeNode(data, parent, treeModel, index) {
        var _this = this;
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = function (element, $event) {
            return _this.options.allowDrop(element, { parent: _this, index: 0 }, $event);
        };
        this.allowDragoverStyling = function () {
            return _this.options.allowDragoverStyling;
        };
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
        this.autoLoadChildren();
    }
    Object.defineProperty(TreeNode.prototype, "isHidden", {
        get: function () { return this.treeModel.isHidden(this); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this.treeModel.isExpanded(this); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this.treeModel.isActive(this); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.isNodeFocused(this); },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isSelected", {
        get: function () {
            if (this.isSelectable()) {
                return this.treeModel.isSelected(this);
            }
            else {
                return some_1(this.children, function (node) { return node.isSelected; });
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isAllSelected", {
        get: function () {
            if (this.isSelectable()) {
                return this.treeModel.isSelected(this);
            }
            else {
                return every_1(this.children, function (node) { return node.isAllSelected; });
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "isPartiallySelected", {
        get: function () {
            return this.isSelected && !this.isAllSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "level", {
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "path", {
        get: function () {
            return this.parent ? this.parent.path.concat([this.id]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "elementRef", {
        get: function () {
            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "originalNode", {
        get: function () { return this._originalNode; },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeNode.prototype, "hasChildren", {
        // helper get functions:
        get: function () {
            return !!(this.getField('hasChildren') || (this.children && this.children.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isCollapsed", {
        get: function () { return !this.isExpanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isLeaf", {
        get: function () { return !this.hasChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () { return this.parent.data.virtual; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "realParent", {
        get: function () { return this.isRoot ? null : this.parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "options", {
        // proxy functions:
        get: function () { return this.treeModel.options; },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.fireEvent = function (event) { this.treeModel.fireEvent(event); };
    Object.defineProperty(TreeNode.prototype, "displayField", {
        // field accessors:
        get: function () {
            return this.getField('display');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "id", {
        get: function () {
            return this.getField('id');
        },
        set: function (value) {
            this.setField('id', value);
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getField = function (key) {
        return this.data[this.options[key + "Field"]];
    };
    TreeNode.prototype.setField = function (key, value) {
        this.data[this.options[key + "Field"]] = value;
    };
    // traversing:
    TreeNode.prototype._findAdjacentSibling = function (steps, skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var siblings = this._getParentsChildren(skipHidden);
        var index = siblings.indexOf(this);
        return siblings.length > index + steps ? siblings[index + steps] : null;
    };
    TreeNode.prototype.findNextSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(+1, skipHidden);
    };
    TreeNode.prototype.findPreviousSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(-1, skipHidden);
    };
    TreeNode.prototype.getVisibleChildren = function () {
        return this.visibleChildren;
    };
    Object.defineProperty(TreeNode.prototype, "visibleChildren", {
        get: function () {
            return (this.children || []).filter(function (node) { return !node.isHidden; });
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getFirstChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return first(children || []);
    };
    TreeNode.prototype.getLastChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return last_1(children || []);
    };
    TreeNode.prototype.findNextNode = function (goInside, skipHidden) {
        if (goInside === void 0) { goInside = true; }
        if (skipHidden === void 0) { skipHidden = false; }
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    };
    TreeNode.prototype.findPreviousNode = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getLastOpenDescendant = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getParentsChildren = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    };
    TreeNode.prototype.getIndexInParent = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden).indexOf(this);
    };
    TreeNode.prototype.isDescendantOf = function (node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    };
    TreeNode.prototype.getNodePadding = function () {
        return this.options.levelPadding * (this.level - 1) + 'px';
    };
    TreeNode.prototype.getClass = function () {
        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(' ');
    };
    TreeNode.prototype.onDrop = function ($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    };
    TreeNode.prototype.allowDrag = function () {
        return this.options.allowDrag(this);
    };
    // helper methods:
    TreeNode.prototype.loadNodeChildren = function () {
        var _this = this;
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then(function (children) {
            if (children) {
                _this.setField('children', children);
                _this._initChildren();
                if (_this.options.useTriState && _this.treeModel.isSelected(_this)) {
                    _this.setIsSelected(true);
                }
                _this.children.forEach(function (child) {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                });
            }
        }).then(function () {
            _this.fireEvent({
                eventName: TREE_EVENTS.loadNodeChildren,
                node: _this
            });
        });
    };
    TreeNode.prototype.expand = function () {
        if (!this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.collapse = function () {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.doForAll = function (fn) {
        var _this = this;
        Promise.resolve(fn(this)).then(function () {
            if (_this.children) {
                _this.children.forEach(function (child) { return child.doForAll(fn); });
            }
        });
    };
    TreeNode.prototype.expandAll = function () {
        this.doForAll(function (node) { return node.expand(); });
    };
    TreeNode.prototype.collapseAll = function () {
        this.doForAll(function (node) { return node.collapse(); });
    };
    TreeNode.prototype.ensureVisible = function () {
        if (this.realParent) {
            this.realParent.expand();
            this.realParent.ensureVisible();
        }
        return this;
    };
    TreeNode.prototype.toggleExpanded = function () {
        this.setIsExpanded(!this.isExpanded);
        return this;
    };
    TreeNode.prototype.setIsExpanded = function (value) {
        if (this.hasChildren) {
            this.treeModel.setExpandedNode(this, value);
        }
        return this;
    };
    
    TreeNode.prototype.autoLoadChildren = function () {
        var _this = this;
        this.handler =
            mobx.reaction(function () { return _this.isExpanded; }, function (isExpanded) {
                if (!_this.children && _this.hasChildren && isExpanded) {
                    _this.loadNodeChildren();
                }
            }, { fireImmediately: true });
    };
    TreeNode.prototype.dispose = function () {
        if (this.children) {
            this.children.forEach(function (child) { return child.dispose(); });
        }
        if (this.handler) {
            this.handler();
        }
        this.parent = null;
        this.children = null;
    };
    TreeNode.prototype.setIsActive = function (value, multi) {
        if (multi === void 0) { multi = false; }
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.focus(this.options.scrollOnActivate);
        }
        return this;
    };
    TreeNode.prototype.isSelectable = function () {
        return this.isLeaf || !this.children || !this.options.useTriState;
    };
    TreeNode.prototype.setIsSelected = function (value) {
        if (this.isSelectable()) {
            this.treeModel.setSelectedNode(this, value);
        }
        else {
            this.visibleChildren.forEach(function (child) { return child.setIsSelected(value); });
        }
        return this;
    };
    TreeNode.prototype.toggleSelected = function () {
        this.setIsSelected(!this.isSelected);
        return this;
    };
    TreeNode.prototype.toggleActivated = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(!this.isActive, multi);
        return this;
    };
    TreeNode.prototype.setActiveAndVisible = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(true, multi)
            .ensureVisible();
        setTimeout(this.scrollIntoView.bind(this));
        return this;
    };
    TreeNode.prototype.scrollIntoView = function (force) {
        if (force === void 0) { force = false; }
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    };
    TreeNode.prototype.focus = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        if (scroll) {
            this.scrollIntoView();
        }
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.blur, node: previousNode });
        }
        this.fireEvent({ eventName: TREE_EVENTS.focus, node: this });
        return this;
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: TREE_EVENTS.blur, node: this });
        }
        return this;
    };
    TreeNode.prototype.setIsHidden = function (value) {
        this.treeModel.setIsHidden(this, value);
    };
    TreeNode.prototype.hide = function () {
        this.setIsHidden(true);
    };
    TreeNode.prototype.show = function () {
        this.setIsHidden(false);
    };
    TreeNode.prototype.mouseAction = function (actionName, $event, data) {
        if (data === void 0) { data = null; }
        this.treeModel.setFocus(true);
        var actionMapping = this.options.actionMapping.mouse;
        var action$$1 = actionMapping[actionName];
        if (action$$1) {
            action$$1(this.treeModel, this, $event, data);
        }
    };
    TreeNode.prototype.getSelfHeight = function () {
        return this.options.nodeHeight(this);
    };
    TreeNode.prototype._initChildren = function () {
        var _this = this;
        this.children = this.getField('children')
            .map(function (c, index) { return new TreeNode(c, _this, _this.treeModel, index); });
    };
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isHidden", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isExpanded", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isActive", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isFocused", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isSelected", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isAllSelected", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "isPartiallySelected", null);
    __decorate$2([
        mobx.observable,
        __metadata$1("design:type", Array)
    ], TreeNode.prototype, "children", void 0);
    __decorate$2([
        mobx.observable,
        __metadata$1("design:type", Number)
    ], TreeNode.prototype, "index", void 0);
    __decorate$2([
        mobx.observable,
        __metadata$1("design:type", Object)
    ], TreeNode.prototype, "position", void 0);
    __decorate$2([
        mobx.observable,
        __metadata$1("design:type", Number)
    ], TreeNode.prototype, "height", void 0);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Number),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "level", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Array),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "path", null);
    __decorate$2([
        mobx.computed,
        __metadata$1("design:type", Object),
        __metadata$1("design:paramtypes", [])
    ], TreeNode.prototype, "visibleChildren", null);
    __decorate$2([
        mobx.action,
        __metadata$1("design:type", Function),
        __metadata$1("design:paramtypes", [Object]),
        __metadata$1("design:returntype", void 0)
    ], TreeNode.prototype, "setIsSelected", null);
    __decorate$2([
        mobx.action,
        __metadata$1("design:type", Function),
        __metadata$1("design:paramtypes", []),
        __metadata$1("design:returntype", void 0)
    ], TreeNode.prototype, "_initChildren", null);
    return TreeNode;
}());
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var compact_1 = compact;

var baseIteratee$3 = _baseIteratee;
var isArrayLike$6 = isArrayLike_1;
var keys$6 = keys_1;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind$1(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike$6(collection)) {
      var iteratee = baseIteratee$3(predicate, 3);
      collection = keys$6(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind$1;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$1;

var isObject$11 = isObject_1;
var isSymbol$4 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$4(value)) {
    return NAN;
  }
  if (isObject$11(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$11(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$1(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$1;

var baseFindIndex = _baseFindIndex;
var baseIteratee$4 = _baseIteratee;
var toInteger = toInteger_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee$4(predicate, 3), index);
}

var findIndex_1 = findIndex$1;

var createFind = _createFind;
var findIndex = findIndex_1;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

var find_1 = find;

var baseGetTag$8 = _baseGetTag;
var isArray$14 = isArray_1;
var isObjectLike$11 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag$4 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray$14(value) && isObjectLike$11(value) && baseGetTag$8(value) == stringTag$4);
}

var isString_1 = isString;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeModel = /** @class */ (function () {
    function TreeModel() {
        this.options = new TreeOptions();
        this.eventNames = Object.keys(TREE_EVENTS);
        this.expandedNodeIds = {};
        this.selectedLeafNodeIds = {};
        this.activeNodeIds = {};
        this.hiddenNodeIds = {};
        this.focusedNodeId = null;
        this.firstUpdate = true;
        this.subscriptions = [];
    }
    TreeModel_1 = TreeModel;
    // events
    TreeModel.prototype.fireEvent = function (event) {
        event.treeModel = this;
        this.events[event.eventName].emit(event);
        this.events.event.emit(event);
    };
    TreeModel.prototype.subscribe = function (eventName, fn) {
        var subscription = this.events[eventName].subscribe(fn);
        this.subscriptions.push(subscription);
    };
    // getters
    TreeModel.prototype.getFocusedNode = function () {
        return this.focusedNode;
    };
    TreeModel.prototype.getActiveNode = function () {
        return this.activeNodes[0];
    };
    TreeModel.prototype.getActiveNodes = function () {
        return this.activeNodes;
    };
    TreeModel.prototype.getVisibleRoots = function () {
        return this.virtualRoot.visibleChildren;
    };
    TreeModel.prototype.getFirstRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return first(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    TreeModel.prototype.getLastRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return last_1(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    Object.defineProperty(TreeModel.prototype, "isFocused", {
        get: function () {
            return TreeModel_1.focusedTree === this;
        },
        enumerable: true,
        configurable: true
    });
    TreeModel.prototype.isNodeFocused = function (node) {
        return this.focusedNode === node;
    };
    TreeModel.prototype.isEmptyTree = function () {
        return this.roots && this.roots.length === 0;
    };
    Object.defineProperty(TreeModel.prototype, "focusedNode", {
        get: function () {
            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "expandedNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.expandedNodeIds)
                .filter(function (id) { return _this.expandedNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact_1(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "activeNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.activeNodeIds)
                .filter(function (id) { return _this.activeNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact_1(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "hiddenNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.hiddenNodeIds)
                .filter(function (id) { return _this.hiddenNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact_1(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "selectedLeafNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.selectedLeafNodeIds)
                .filter(function (id) { return _this.selectedLeafNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact_1(nodes);
        },
        enumerable: true,
        configurable: true
    });
    // locating nodes
    TreeModel.prototype.getNodeByPath = function (path, startNode) {
        if (startNode === void 0) { startNode = null; }
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        var childId = path.shift();
        var childNode = find_1(startNode.children, { id: childId });
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
    };
    TreeModel.prototype.getNodeById = function (id) {
        var idStr = id.toString();
        return this.getNodeBy(function (node) { return node.id.toString() === idStr; });
    };
    TreeModel.prototype.getNodeBy = function (predicate, startNode) {
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        var found = find_1(startNode.children, predicate);
        if (found) { // found in children
            return found;
        }
        else { // look in children's children
            for (var _i = 0, _a = startNode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var foundInChildren = this.getNodeBy(predicate, child);
                if (foundInChildren)
                    return foundInChildren;
            }
        }
    };
    TreeModel.prototype.isExpanded = function (node) {
        return this.expandedNodeIds[node.id];
    };
    TreeModel.prototype.isHidden = function (node) {
        return this.hiddenNodeIds[node.id];
    };
    TreeModel.prototype.isActive = function (node) {
        return this.activeNodeIds[node.id];
    };
    TreeModel.prototype.isSelected = function (node) {
        return this.selectedLeafNodeIds[node.id];
    };
    TreeModel.prototype.ngOnDestroy = function () {
        this.dispose();
        this.unsubscribeAll();
    };
    TreeModel.prototype.dispose = function () {
        // Dispose reactions of the replaced nodes
        if (this.virtualRoot) {
            this.virtualRoot.dispose();
        }
    };
    TreeModel.prototype.unsubscribeAll = function () {
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
        this.subscriptions = [];
    };
    // actions
    TreeModel.prototype.setData = function (_a) {
        var nodes = _a.nodes, _b = _a.options, options = _b === void 0 ? null : _b, _c = _a.events, events = _c === void 0 ? null : _c;
        if (options) {
            this.options = new TreeOptions(options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    };
    TreeModel.prototype.update = function () {
        var _a;
        // Rebuild tree:
        var virtualRootConfig = (_a = {
                id: this.options.rootId,
                virtual: true
            },
            _a[this.options.childrenField] = this.nodes,
            _a);
        this.dispose();
        this.virtualRoot = new TreeNode(virtualRootConfig, null, this, 0);
        this.roots = this.virtualRoot.children;
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.updateData });
        }
    };
    TreeModel.prototype.setFocusedNode = function (node) {
        this.focusedNodeId = node ? node.id : null;
    };
    TreeModel.prototype.setFocus = function (value) {
        TreeModel_1.focusedTree = value ? this : null;
    };
    TreeModel.prototype.doForAll = function (fn) {
        this.roots.forEach(function (root) { return root.doForAll(fn); });
    };
    TreeModel.prototype.focusNextNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.focusDrillUp = function () {
        var previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode.realParent;
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.setActiveNode = function (node, value, multi) {
        if (multi === void 0) { multi = false; }
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
        if (value) {
            node.focus(this.options.scrollOnActivate);
            this.fireEvent({ eventName: TREE_EVENTS.activate, node: node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeActivate, node: node }); // For IE11
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deactivate, node: node });
            this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node: node }); // For IE11
        }
    };
    TreeModel.prototype.setSelectedNode = function (node, value) {
        var _a;
        this.selectedLeafNodeIds = Object.assign({}, this.selectedLeafNodeIds, (_a = {}, _a[node.id] = value, _a));
        if (value) {
            node.focus();
            this.fireEvent({ eventName: TREE_EVENTS.select, node: node });
        }
        else {
            this.fireEvent({ eventName: TREE_EVENTS.deselect, node: node });
        }
    };
    TreeModel.prototype.setExpandedNode = function (node, value) {
        var _a;
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[node.id] = value, _a));
        this.fireEvent({ eventName: TREE_EVENTS.toggleExpanded, node: node, isExpanded: value });
    };
    TreeModel.prototype.expandAll = function () {
        this.roots.forEach(function (root) { return root.expandAll(); });
    };
    TreeModel.prototype.collapseAll = function () {
        this.roots.forEach(function (root) { return root.collapseAll(); });
    };
    TreeModel.prototype.setIsHidden = function (node, value) {
        var _a;
        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, (_a = {}, _a[node.id] = value, _a));
    };
    TreeModel.prototype.setHiddenNodeIds = function (nodeIds) {
        this.hiddenNodeIds = nodeIds.reduce(function (hiddenNodeIds, id) {
            var _a;
            return Object.assign(hiddenNodeIds, (_a = {},
                _a[id] = true,
                _a));
        }, {});
    };
    TreeModel.prototype.performKeyAction = function (node, $event) {
        var action$$1 = this.options.actionMapping.keys[$event.keyCode];
        if (action$$1) {
            $event.preventDefault();
            action$$1(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    };
    TreeModel.prototype.filterNodes = function (filter, autoShow) {
        var _this = this;
        if (autoShow === void 0) { autoShow = true; }
        var filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        // support function and string filter
        if (isString_1(filter)) {
            filterFn = function (node) { return node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1; };
        }
        else if (isFunction_1(filter)) {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function');
            return;
        }
        var ids = {};
        this.roots.forEach(function (node) { return _this._filterNode(ids, node, filterFn, autoShow); });
        this.hiddenNodeIds = ids;
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    };
    TreeModel.prototype.clearFilter = function () {
        this.hiddenNodeIds = {};
        this.fireEvent({ eventName: TREE_EVENTS.changeFilter });
    };
    TreeModel.prototype.moveNode = function (node, to) {
        var fromIndex = node.getIndexInParent();
        var fromParent = node.parent;
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        var fromChildren = fromParent.getField('children');
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        var toChildren = to.parent.getField('children');
        var originalNode = fromChildren.splice(fromIndex, 1)[0];
        // Compensate for index if already removed from parent:
        var toIndex = (fromParent === to.parent && to.index > fromIndex) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, originalNode);
        fromParent.treeModel.update();
        if (to.parent.treeModel !== fromParent.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({
            eventName: TREE_EVENTS.moveNode,
            node: originalNode,
            to: { parent: to.parent.data, index: toIndex },
            from: { parent: fromParent.data, index: fromIndex }
        });
    };
    TreeModel.prototype.copyNode = function (node, to) {
        var fromIndex = node.getIndexInParent();
        if (!this.canMoveNode(node, to, fromIndex))
            return;
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        var toChildren = to.parent.getField('children');
        var nodeCopy = this.options.getNodeClone(node);
        toChildren.splice(to.index, 0, nodeCopy);
        node.treeModel.update();
        if (to.parent.treeModel !== node.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({ eventName: TREE_EVENTS.copyNode, node: nodeCopy, to: { parent: to.parent.data, index: to.index } });
    };
    TreeModel.prototype.getState = function () {
        return {
            expandedNodeIds: this.expandedNodeIds,
            selectedLeafNodeIds: this.selectedLeafNodeIds,
            activeNodeIds: this.activeNodeIds,
            hiddenNodeIds: this.hiddenNodeIds,
            focusedNodeId: this.focusedNodeId
        };
    };
    TreeModel.prototype.setState = function (state) {
        if (!state)
            return;
        Object.assign(this, {
            expandedNodeIds: state.expandedNodeIds || {},
            selectedLeafNodeIds: state.selectedLeafNodeIds || {},
            activeNodeIds: state.activeNodeIds || {},
            hiddenNodeIds: state.hiddenNodeIds || {},
            focusedNodeId: state.focusedNodeId
        });
    };
    TreeModel.prototype.subscribeToState = function (fn) {
        var _this = this;
        mobx.autorun(function () { return fn(_this.getState()); });
    };
    TreeModel.prototype.canMoveNode = function (node, to, fromIndex) {
        if (fromIndex === void 0) { fromIndex = undefined; }
        var fromNodeIndex = fromIndex || node.getIndexInParent();
        // same node:
        if (node.parent === to.parent && fromIndex === to.index) {
            return false;
        }
        return !to.parent.isDescendantOf(node);
    };
    TreeModel.prototype.calculateExpandedNodes = function () {
        this._calculateExpandedNodes();
    };
    // private methods
    TreeModel.prototype._filterNode = function (ids, node, filterFn, autoShow) {
        var _this = this;
        // if node passes function then it's visible
        var isVisible = filterFn(node);
        if (node.children) {
            // if one of node's children passes filter then this node is also visible
            node.children.forEach(function (child) {
                if (_this._filterNode(ids, child, filterFn, autoShow)) {
                    isVisible = true;
                }
            });
        }
        // mark node as hidden
        if (!isVisible) {
            ids[node.id] = true;
        }
        // auto expand parents to make sure the filtered nodes are visible
        if (autoShow && isVisible) {
            node.ensureVisible();
        }
        return isVisible;
    };
    TreeModel.prototype._calculateExpandedNodes = function (startNode) {
        var _a;
        var _this = this;
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[startNode.id] = true, _a));
        }
        if (startNode.children) {
            startNode.children.forEach(function (child) { return _this._calculateExpandedNodes(child); });
        }
    };
    TreeModel.prototype._setActiveNodeSingle = function (node, value) {
        var _a;
        var _this = this;
        // Deactivate all other nodes:
        this.activeNodes
            .filter(function (activeNode) { return activeNode !== node; })
            .forEach(function (activeNode) {
            _this.fireEvent({ eventName: TREE_EVENTS.deactivate, node: activeNode });
            _this.fireEvent({ eventName: TREE_EVENTS.nodeDeactivate, node: activeNode }); // For IE11
        });
        if (value) {
            this.activeNodeIds = (_a = {}, _a[node.id] = true, _a);
        }
        else {
            this.activeNodeIds = {};
        }
    };
    TreeModel.prototype._setActiveNodeMulti = function (node, value) {
        var _a;
        this.activeNodeIds = Object.assign({}, this.activeNodeIds, (_a = {}, _a[node.id] = value, _a));
    };
    var TreeModel_1;
    TreeModel.focusedTree = null;
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Array)
    ], TreeModel.prototype, "roots", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Object)
    ], TreeModel.prototype, "expandedNodeIds", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Object)
    ], TreeModel.prototype, "selectedLeafNodeIds", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Object)
    ], TreeModel.prototype, "activeNodeIds", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Object)
    ], TreeModel.prototype, "hiddenNodeIds", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", Object)
    ], TreeModel.prototype, "focusedNodeId", void 0);
    __decorate$1([
        mobx.observable,
        __metadata("design:type", TreeNode)
    ], TreeModel.prototype, "virtualRoot", void 0);
    __decorate$1([
        mobx.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "focusedNode", null);
    __decorate$1([
        mobx.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "expandedNodes", null);
    __decorate$1([
        mobx.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "activeNodes", null);
    __decorate$1([
        mobx.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "hiddenNodes", null);
    __decorate$1([
        mobx.computed,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TreeModel.prototype, "selectedLeafNodes", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setData", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "update", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setFocusedNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setFocus", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "doForAll", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusNextNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusPreviousNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusDrillDown", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "focusDrillUp", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setActiveNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setSelectedNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setExpandedNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "expandAll", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "collapseAll", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setIsHidden", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setHiddenNodeIds", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "filterNodes", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "clearFilter", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "moveNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "copyNode", null);
    __decorate$1([
        mobx.action,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TreeModel.prototype, "setState", null);
    TreeModel = TreeModel_1 = __decorate$1([
        i0.Injectable()
    ], TreeModel);
    return TreeModel;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TreeDraggedElement = /** @class */ (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    TreeDraggedElement = __decorate$3([
        i0.Injectable()
    ], TreeDraggedElement);
    return TreeDraggedElement;
}());

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Y_OFFSET = 500; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 150; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = /** @class */ (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [mobx.autorun(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            mobx.reaction(function () { return _this.treeModel.roots; }, fn),
            mobx.reaction(function () { return _this.treeModel.expandedNodeIds; }, fn),
            mobx.reaction(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(TREE_EVENTS.loadNodeChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) { // TBD: consider loading component as well
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect ? viewport.getBoundingClientRect().height : 0
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (node.options.scrollContainer) {
            var scrollContainer = node.options.scrollContainer;
            var scrollContainerHeight = scrollContainer.getBoundingClientRect().height;
            var scrollContainerTop = scrollContainer.getBoundingClientRect().top;
            var nodeTop = this.viewport.getBoundingClientRect().top + node.position - scrollContainerTop;
            if (force || // force scroll to node
                nodeTop < scrollContainer.scrollTop || // node is above scroll container
                nodeTop + node.getSelfHeight() > scrollContainer.scrollTop + scrollContainerHeight) { // node is below container
                scrollContainer.scrollTop = scrollToMiddle ?
                    nodeTop - scrollContainerHeight / 2 : // scroll to middle
                    nodeTop; // scroll to start
            }
        }
        else {
            if (force || // force scroll to node
                node.position < this.y || // node is above viewport
                node.position + node.getSelfHeight() > this.y + this.viewportHeight) { // node is below viewport
                if (this.viewport) {
                    this.viewport.scrollTop = scrollToMiddle ?
                        node.position - this.viewportHeight / 2 : // scroll to middle
                        node.position; // scroll to start
                    this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
                }
            }
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        // Loading async top nodes' children is too long.
        // It happens when first node is visible withing viewport range (including Y_OFFSET).
        // In that case firstIndex == 0 and lastIndex == visibleNodes.length - 1 (e.g. 1000),
        // which means that it loops through every visibleNodes item and push them into viewportNodes array.
        // lastIndex should not equal visibleNodes.length - 1, but something around 50-100 (depending on the viewport)
        var nodeHeight = visibleNodes[0].treeModel.options.options.nodeHeight;
        var renderedNodesMaxLength = (Y_OFFSET * 2 + this.viewportHeight) / nodeHeight;
        // Something is probably wrong, prevent nodes from being pushed to an array.
        if (lastIndex - firstIndex > renderedNodesMaxLength) {
            return [];
        }
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    __decorate$4([
        mobx.observable,
        __metadata$2("design:type", Object)
    ], TreeVirtualScroll.prototype, "yBlocks", void 0);
    __decorate$4([
        mobx.observable,
        __metadata$2("design:type", Object)
    ], TreeVirtualScroll.prototype, "x", void 0);
    __decorate$4([
        mobx.observable,
        __metadata$2("design:type", Object)
    ], TreeVirtualScroll.prototype, "viewportHeight", void 0);
    __decorate$4([
        mobx.computed,
        __metadata$2("design:type", Object),
        __metadata$2("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "y", null);
    __decorate$4([
        mobx.computed,
        __metadata$2("design:type", Object),
        __metadata$2("design:paramtypes", [])
    ], TreeVirtualScroll.prototype, "totalHeight", null);
    __decorate$4([
        mobx.action,
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "_setYBlocks", null);
    __decorate$4([
        mobx.action,
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", []),
        __metadata$2("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "recalcPositions", null);
    __decorate$4([
        mobx.action,
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object]),
        __metadata$2("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "setViewport", null);
    __decorate$4([
        mobx.action,
        __metadata$2("design:type", Function),
        __metadata$2("design:paramtypes", [Object, Object, Object]),
        __metadata$2("design:returntype", void 0)
    ], TreeVirtualScroll.prototype, "scrollIntoView", null);
    TreeVirtualScroll = __decorate$4([
        i0.Injectable(),
        __metadata$2("design:paramtypes", [TreeModel])
    ], TreeVirtualScroll);
    return TreeVirtualScroll;
}());
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate$5([
        i0.Input(),
        __metadata$3("design:type", i0.TemplateRef)
    ], LoadingComponent.prototype, "template", void 0);
    __decorate$5([
        i0.Input(),
        __metadata$3("design:type", TreeNode)
    ], LoadingComponent.prototype, "node", void 0);
    LoadingComponent = __decorate$5([
        i0.Component({
            encapsulation: i0.ViewEncapsulation.None,
            selector: 'tree-loading-component',
            template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngTemplateOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  ",
        })
    ], LoadingComponent);
    return LoadingComponent;
}());

var root$9 = _root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root$9.Date.now();
};

var now_1 = now$1;

var isObject$13 = isObject_1;
var now = now_1;
var toNumber$2 = toNumber_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber$2(wait) || 0;
  if (isObject$13(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$2(toNumber$2(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce$1;

var debounce = debounce_1;
var isObject$12 = isObject_1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$12(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeViewportComponent = /** @class */ (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        var _this = this;
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        this.setViewport = throttle_1(function () {
            _this.virtualScroll.setViewport(_this.elementRef.nativeElement);
        }, 17);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: TREE_EVENTS.initialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype.onScroll = function (event) {
        this.setViewport();
    };
    __decorate$7([
        i0.HostListener('scroll', ['$event']),
        __metadata$5("design:type", Function),
        __metadata$5("design:paramtypes", [Event]),
        __metadata$5("design:returntype", void 0)
    ], TreeViewportComponent.prototype, "onScroll", null);
    TreeViewportComponent = __decorate$7([
        i0.Component({
            selector: 'tree-viewport',
            styles: [],
            providers: [TreeVirtualScroll],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
        }),
        __metadata$5("design:paramtypes", [i0.ElementRef,
            TreeVirtualScroll])
    ], TreeViewportComponent);
    return TreeViewportComponent;
}());

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN$1(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN$1;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf$1;

var baseFindIndex$2 = _baseFindIndex;
var baseIsNaN = _baseIsNaN;
var strictIndexOf = _strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$1(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex$2(array, baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf$1;

var arrayMap$3 = _arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues$1(object, props) {
  return arrayMap$3(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues$1;

var baseValues = _baseValues;
var keys$7 = keys_1;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values$1(object) {
  return object == null ? [] : baseValues(object, keys$7(object));
}

var values_1 = values$1;

var baseIndexOf = _baseIndexOf;
var isArrayLike$7 = isArrayLike_1;
var isString$2 = isString_1;
var toInteger$2 = toInteger_1;
var values = values_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike$7(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger$2(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax$3(length + fromIndex, 0);
  }
  return isString$2(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

var includes_1 = includes;

var assignValue$3 = _assignValue;
var castPath$6 = _castPath;
var isIndex$4 = _isIndex;
var isObject$14 = isObject_1;
var toKey$6 = _toKey;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet$1(object, path, value, customizer) {
  if (!isObject$14(object)) {
    return object;
  }
  path = castPath$6(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey$6(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject$14(objValue)
          ? objValue
          : (isIndex$4(path[index + 1]) ? [] : {});
      }
    }
    assignValue$3(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet$1;

var baseGet$4 = _baseGet;
var baseSet = _baseSet;
var castPath$5 = _castPath;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy$1(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet$4(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath$5(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy$1;

var basePickBy = _basePickBy;
var hasIn$2 = hasIn_1;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick$1(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn$2(object, path);
  });
}

var _basePick = basePick$1;

var basePick = _basePick;
var flatRest$2 = _flatRest;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest$2(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

var pick_1 = pick;

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeComponent = /** @class */ (function () {
    function TreeComponent(treeModel, treeDraggedElement) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        treeModel.eventNames.forEach(function (name) { return _this[name] = new i0.EventEmitter(); });
        treeModel.subscribeToState(function (state) { return _this.stateChange.emit(state); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) {
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) {
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "state", {
        set: function (state) {
            this.treeModel.setState(state);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes_1(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        function isOutsideClick(startElement, nodeName) {
            return !startElement ? true : startElement.localName === nodeName ? false : isOutsideClick(startElement.parentElement, nodeName);
        }
        if (isOutsideClick($event.target, 'tree-root')) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.options || changes.nodes) {
            this.treeModel.setData({
                options: changes.options && changes.options.currentValue,
                nodes: changes.nodes && changes.nodes.currentValue,
                events: pick_1(this, this.treeModel.eventNames)
            });
        }
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    __decorate$6([
        i0.ContentChild('loadingTemplate', { static: false }),
        __metadata$4("design:type", i0.TemplateRef)
    ], TreeComponent.prototype, "loadingTemplate", void 0);
    __decorate$6([
        i0.ContentChild('treeNodeTemplate', { static: false }),
        __metadata$4("design:type", i0.TemplateRef)
    ], TreeComponent.prototype, "treeNodeTemplate", void 0);
    __decorate$6([
        i0.ContentChild('treeNodeWrapperTemplate', { static: false }),
        __metadata$4("design:type", i0.TemplateRef)
    ], TreeComponent.prototype, "treeNodeWrapperTemplate", void 0);
    __decorate$6([
        i0.ContentChild('treeNodeFullTemplate', { static: false }),
        __metadata$4("design:type", i0.TemplateRef)
    ], TreeComponent.prototype, "treeNodeFullTemplate", void 0);
    __decorate$6([
        i0.ViewChild('viewport', { static: false }),
        __metadata$4("design:type", TreeViewportComponent)
    ], TreeComponent.prototype, "viewportComponent", void 0);
    __decorate$6([
        i0.Input(),
        __metadata$4("design:type", Array),
        __metadata$4("design:paramtypes", [Array])
    ], TreeComponent.prototype, "nodes", null);
    __decorate$6([
        i0.Input(),
        __metadata$4("design:type", TreeOptions),
        __metadata$4("design:paramtypes", [TreeOptions])
    ], TreeComponent.prototype, "options", null);
    __decorate$6([
        i0.Input(),
        __metadata$4("design:type", Boolean),
        __metadata$4("design:paramtypes", [Boolean])
    ], TreeComponent.prototype, "focused", null);
    __decorate$6([
        i0.Input(),
        __metadata$4("design:type", Object),
        __metadata$4("design:paramtypes", [Object])
    ], TreeComponent.prototype, "state", null);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "toggleExpanded", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "activate", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "deactivate", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "nodeActivate", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "nodeDeactivate", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "select", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "deselect", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "focus", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "blur", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "updateData", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "initialized", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "moveNode", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "copyNode", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "loadNodeChildren", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "changeFilter", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "event", void 0);
    __decorate$6([
        i0.Output(),
        __metadata$4("design:type", Object)
    ], TreeComponent.prototype, "stateChange", void 0);
    __decorate$6([
        i0.HostListener('body: keydown', ['$event']),
        __metadata$4("design:type", Function),
        __metadata$4("design:paramtypes", [Object]),
        __metadata$4("design:returntype", void 0)
    ], TreeComponent.prototype, "onKeydown", null);
    __decorate$6([
        i0.HostListener('body: mousedown', ['$event']),
        __metadata$4("design:type", Function),
        __metadata$4("design:paramtypes", [Object]),
        __metadata$4("design:returntype", void 0)
    ], TreeComponent.prototype, "onMousedown", null);
    TreeComponent = __decorate$6([
        i0.Component({
            selector: 'Tree, tree-root',
            providers: [TreeModel],
            styles: [],
            template: "\n      <tree-viewport #viewport>\n          <div\n                  class=\"angular-tree-component\"\n                  [class.node-dragging]=\"treeDraggedElement.isDragging()\"\n                  [class.angular-tree-component-rtl]=\"treeModel.options.rtl\">\n              <tree-node-collection\n                      *ngIf=\"treeModel.roots\"\n                      [nodes]=\"treeModel.roots\"\n                      [treeModel]=\"treeModel\"\n                      [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n              </tree-node-collection>\n              <tree-node-drop-slot\n                      class=\"empty-tree-drop-slot\"\n                      *ngIf=\"treeModel.isEmptyTree()\"\n                      [dropIndex]=\"0\"\n                      [node]=\"treeModel.virtualRoot\">\n              </tree-node-drop-slot>\n          </div>\n      </tree-viewport>\n  "
        }),
        __metadata$4("design:paramtypes", [TreeModel,
            TreeDraggedElement])
    ], TreeComponent);
    return TreeComponent;
}());

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeComponent = /** @class */ (function () {
    function TreeNodeComponent() {
    }
    __decorate$8([
        i0.Input(),
        __metadata$6("design:type", TreeNode)
    ], TreeNodeComponent.prototype, "node", void 0);
    __decorate$8([
        i0.Input(),
        __metadata$6("design:type", Number)
    ], TreeNodeComponent.prototype, "index", void 0);
    __decorate$8([
        i0.Input(),
        __metadata$6("design:type", Object)
    ], TreeNodeComponent.prototype, "templates", void 0);
    TreeNodeComponent = __decorate$8([
        i0.Component({
            selector: 'TreeNode, tree-node',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n        >\n\n        <tree-node-drop-slot *ngIf=\"index === 0\" [dropIndex]=\"node.index\" [node]=\"node.parent\"></tree-node-drop-slot>\n\n        <tree-node-wrapper [node]=\"node\" [index]=\"index\" [templates]=\"templates\"></tree-node-wrapper>\n\n        <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        <tree-node-drop-slot [dropIndex]=\"node.index + 1\" [node]=\"node.parent\"></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n    </ng-container>"
        })
    ], TreeNodeComponent);
    return TreeNodeComponent;
}());

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeContent = /** @class */ (function () {
    function TreeNodeContent() {
    }
    __decorate$9([
        i0.Input(),
        __metadata$7("design:type", TreeNode)
    ], TreeNodeContent.prototype, "node", void 0);
    __decorate$9([
        i0.Input(),
        __metadata$7("design:type", Number)
    ], TreeNodeContent.prototype, "index", void 0);
    __decorate$9([
        i0.Input(),
        __metadata$7("design:type", i0.TemplateRef)
    ], TreeNodeContent.prototype, "template", void 0);
    TreeNodeContent = __decorate$9([
        i0.Component({
            selector: 'tree-node-content',
            encapsulation: i0.ViewEncapsulation.None,
            template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
        })
    ], TreeNodeContent);
    return TreeNodeContent;
}());

var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeDropSlot = /** @class */ (function () {
    function TreeNodeDropSlot() {
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    __decorate$10([
        i0.Input(),
        __metadata$8("design:type", TreeNode)
    ], TreeNodeDropSlot.prototype, "node", void 0);
    __decorate$10([
        i0.Input(),
        __metadata$8("design:type", Number)
    ], TreeNodeDropSlot.prototype, "dropIndex", void 0);
    TreeNodeDropSlot = __decorate$10([
        i0.Component({
            selector: 'TreeNodeDropSlot, tree-node-drop-slot',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\"\n      [allowDragoverStyling]=\"true\">\n    </div>\n  "
        })
    ], TreeNodeDropSlot);
    return TreeNodeDropSlot;
}());

var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeExpanderComponent = /** @class */ (function () {
    function TreeNodeExpanderComponent() {
    }
    __decorate$11([
        i0.Input(),
        __metadata$9("design:type", TreeNode)
    ], TreeNodeExpanderComponent.prototype, "node", void 0);
    TreeNodeExpanderComponent = __decorate$11([
        i0.Component({
            selector: 'tree-node-expander',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\">\n\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span\n        *ngIf=\"!node.hasChildren\"\n        class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
        })
    ], TreeNodeExpanderComponent);
    return TreeNodeExpanderComponent;
}());

var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeChildrenComponent = /** @class */ (function () {
    function TreeNodeChildrenComponent() {
    }
    __decorate$12([
        i0.Input(),
        __metadata$10("design:type", TreeNode)
    ], TreeNodeChildrenComponent.prototype, "node", void 0);
    __decorate$12([
        i0.Input(),
        __metadata$10("design:type", Object)
    ], TreeNodeChildrenComponent.prototype, "templates", void 0);
    TreeNodeChildrenComponent = __decorate$12([
        i0.Component({
            selector: 'tree-node-children',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateSpeed;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
        })
    ], TreeNodeChildrenComponent);
    return TreeNodeChildrenComponent;
}());

var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeCollectionComponent = /** @class */ (function () {
    function TreeNodeCollectionComponent() {
        this._dispose = [];
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this.setNodes(nodes); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = (firstNode && firstNode.parent)
                ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight()
                : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            mobx.reaction(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            mobx.reaction(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    __decorate$13([
        i0.Input(),
        __metadata$11("design:type", Object),
        __metadata$11("design:paramtypes", [Object])
    ], TreeNodeCollectionComponent.prototype, "nodes", null);
    __decorate$13([
        i0.Input(),
        __metadata$11("design:type", TreeModel)
    ], TreeNodeCollectionComponent.prototype, "treeModel", void 0);
    __decorate$13([
        mobxAngular.observable,
        __metadata$11("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
    __decorate$13([
        i0.Input(),
        __metadata$11("design:type", Object)
    ], TreeNodeCollectionComponent.prototype, "templates", void 0);
    __decorate$13([
        mobxAngular.observable,
        __metadata$11("design:type", Array)
    ], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
    __decorate$13([
        mobxAngular.computed,
        __metadata$11("design:type", String),
        __metadata$11("design:paramtypes", [])
    ], TreeNodeCollectionComponent.prototype, "marginTop", null);
    __decorate$13([
        mobxAngular.action,
        __metadata$11("design:type", Function),
        __metadata$11("design:paramtypes", [Object]),
        __metadata$11("design:returntype", void 0)
    ], TreeNodeCollectionComponent.prototype, "setNodes", null);
    TreeNodeCollectionComponent = __decorate$13([
        i0.Component({
            selector: 'tree-node-collection',
            encapsulation: i0.ViewEncapsulation.None,
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
        })
    ], TreeNodeCollectionComponent);
    return TreeNodeCollectionComponent;
}());

var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeWrapperComponent = /** @class */ (function () {
    function TreeNodeWrapperComponent() {
    }
    __decorate$14([
        i0.Input(),
        __metadata$12("design:type", TreeNode)
    ], TreeNodeWrapperComponent.prototype, "node", void 0);
    __decorate$14([
        i0.Input(),
        __metadata$12("design:type", Number)
    ], TreeNodeWrapperComponent.prototype, "index", void 0);
    __decorate$14([
        i0.Input(),
        __metadata$12("design:type", Object)
    ], TreeNodeWrapperComponent.prototype, "templates", void 0);
    TreeNodeWrapperComponent = __decorate$14([
        i0.Component({
            selector: 'tree-node-wrapper',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n          <tree-node-checkbox *ngIf=\"node.options.useCheckbox\" [node]=\"node\"></tree-node-checkbox>\n          <tree-node-expander [node]=\"node\"></tree-node-expander>\n          <div class=\"node-content-wrapper\"\n               [class.node-content-wrapper-active]=\"node.isActive\"\n               [class.node-content-wrapper-focused]=\"node.isFocused\"\n               (click)=\"node.mouseAction('click', $event)\"\n               (dblclick)=\"node.mouseAction('dblClick', $event)\"\n               (mouseover)=\"node.mouseAction('mouseOver', $event)\"\n               (mouseout)=\"node.mouseAction('mouseOut', $event)\"\n               (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n               (treeDrop)=\"node.onDrop($event)\"\n               (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n               (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n               (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n               [treeAllowDrop]=\"node.allowDrop\"\n               [allowDragoverStyling]=\"node.allowDragoverStyling()\"\n               [treeDrag]=\"node\"\n               [treeDragEnabled]=\"node.allowDrag()\">\n\n              <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n              </tree-node-content>\n          </div>\n      </div>\n      <ng-container\n              [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\"\n              [ngTemplateOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n  "
        }),
        __metadata$12("design:paramtypes", [])
    ], TreeNodeWrapperComponent);
    return TreeNodeWrapperComponent;
}());

var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeNodeCheckboxComponent = /** @class */ (function () {
    function TreeNodeCheckboxComponent() {
    }
    __decorate$15([
        i0.Input(),
        __metadata$13("design:type", TreeNode)
    ], TreeNodeCheckboxComponent.prototype, "node", void 0);
    TreeNodeCheckboxComponent = __decorate$15([
        i0.Component({
            selector: 'tree-node-checkbox',
            encapsulation: i0.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ng-container *mobxAutorun=\"{dontDetach: true}\">\n      <input\n        class=\"tree-node-checkbox\"\n        type=\"checkbox\"\n        (click)=\"node.mouseAction('checkboxClick', $event)\"\n        [checked]=\"node.isSelected\"\n        [indeterminate]=\"node.isPartiallySelected\"/>\n    </ng-container>\n  "
        })
    ], TreeNodeCheckboxComponent);
    return TreeNodeCheckboxComponent;
}());

var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DRAG_OVER_CLASS = 'is-dragging-over';
var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
var TreeDropDirective = /** @class */ (function () {
    function TreeDropDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.allowDragoverStyling = true;
        this.onDropCallback = new i0.EventEmitter();
        this.onDragOverCallback = new i0.EventEmitter();
        this.onDragLeaveCallback = new i0.EventEmitter();
        this.onDragEnterCallback = new i0.EventEmitter();
        this._allowDrop = function (element, $event) { return true; };
        this.dragOverEventHandler = this.onDragOver.bind(this);
        this.dragEnterEventHandler = this.onDragEnter.bind(this);
        this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    Object.defineProperty(TreeDropDirective.prototype, "treeAllowDrop", {
        set: function (allowDrop) {
            if (allowDrop instanceof Function) {
                this._allowDrop = allowDrop;
            }
            else
                this._allowDrop = function (element, $event) { return allowDrop; };
        },
        enumerable: true,
        configurable: true
    });
    TreeDropDirective.prototype.allowDrop = function ($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    };
    TreeDropDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('dragover', _this.dragOverEventHandler);
            el.addEventListener('dragenter', _this.dragEnterEventHandler);
            el.addEventListener('dragleave', _this.dragLeaveEventHandler);
        });
    };
    TreeDropDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('dragover', this.dragOverEventHandler);
        el.removeEventListener('dragenter', this.dragEnterEventHandler);
        el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    };
    TreeDropDirective.prototype.onDragOver = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.addDisabledClass();
            }
            return;
        }
        
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        if (this.allowDragoverStyling) {
            this.addClass();
        }
    };
    TreeDropDirective.prototype.onDragEnter = function ($event) {
        if (!this.allowDrop($event))
            return;
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    };
    TreeDropDirective.prototype.onDragLeave = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
            }
            return;
        }
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
    };
    TreeDropDirective.prototype.onDrop = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
        this.treeDraggedElement.set(null);
    };
    TreeDropDirective.prototype.addClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.removeClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.addDisabledClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    TreeDropDirective.prototype.removeDisabledClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    __decorate$16([
        i0.Input(),
        __metadata$14("design:type", Object)
    ], TreeDropDirective.prototype, "allowDragoverStyling", void 0);
    __decorate$16([
        i0.Output('treeDrop'),
        __metadata$14("design:type", Object)
    ], TreeDropDirective.prototype, "onDropCallback", void 0);
    __decorate$16([
        i0.Output('treeDropDragOver'),
        __metadata$14("design:type", Object)
    ], TreeDropDirective.prototype, "onDragOverCallback", void 0);
    __decorate$16([
        i0.Output('treeDropDragLeave'),
        __metadata$14("design:type", Object)
    ], TreeDropDirective.prototype, "onDragLeaveCallback", void 0);
    __decorate$16([
        i0.Output('treeDropDragEnter'),
        __metadata$14("design:type", Object)
    ], TreeDropDirective.prototype, "onDragEnterCallback", void 0);
    __decorate$16([
        i0.Input(),
        __metadata$14("design:type", Object),
        __metadata$14("design:paramtypes", [Object])
    ], TreeDropDirective.prototype, "treeAllowDrop", null);
    __decorate$16([
        i0.HostListener('drop', ['$event']),
        __metadata$14("design:type", Function),
        __metadata$14("design:paramtypes", [Object]),
        __metadata$14("design:returntype", void 0)
    ], TreeDropDirective.prototype, "onDrop", null);
    TreeDropDirective = __decorate$16([
        i0.Directive({
            selector: '[treeDrop]'
        }),
        __metadata$14("design:paramtypes", [i0.ElementRef, i0.Renderer2, TreeDraggedElement, i0.NgZone])
    ], TreeDropDirective);
    return TreeDropDirective;
}());

var __decorate$17 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TreeDragDirective = /** @class */ (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.dragEventHandler = this.onDrag.bind(this);
    }
    TreeDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('drag', _this.dragEventHandler);
        });
    };
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('drag', this.dragEventHandler);
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        this.treeDraggedElement.set(this.draggedElement);
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragStart', ev);
        }
    };
    TreeDragDirective.prototype.onDrag = function (ev) {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('drag', ev);
        }
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    __decorate$17([
        i0.Input('treeDrag'),
        __metadata$15("design:type", Object)
    ], TreeDragDirective.prototype, "draggedElement", void 0);
    __decorate$17([
        i0.Input(),
        __metadata$15("design:type", Object)
    ], TreeDragDirective.prototype, "treeDragEnabled", void 0);
    __decorate$17([
        i0.HostListener('dragstart', ['$event']),
        __metadata$15("design:type", Function),
        __metadata$15("design:paramtypes", [Object]),
        __metadata$15("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragStart", null);
    __decorate$17([
        i0.HostListener('dragend'),
        __metadata$15("design:type", Function),
        __metadata$15("design:paramtypes", []),
        __metadata$15("design:returntype", void 0)
    ], TreeDragDirective.prototype, "onDragEnd", null);
    TreeDragDirective = __decorate$17([
        i0.Directive({
            selector: '[treeDrag]'
        }),
        __metadata$15("design:paramtypes", [i0.ElementRef, i0.Renderer2, TreeDraggedElement, i0.NgZone])
    ], TreeDragDirective);
    return TreeDragDirective;
}());

var __decorate$18 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var EASE_ACCELERATION = 1.005;
var TreeAnimateOpenDirective = /** @class */ (function () {
    function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TreeAnimateOpenDirective.prototype, "isOpen", {
        set: function (value) {
            if (value) {
                this._show();
                if (this.isEnabled && this._isOpen === false) {
                    this._animateOpen();
                }
            }
            else {
                this.isEnabled ? this._animateClose() : this._hide();
            }
            this._isOpen = !!value;
        },
        enumerable: true,
        configurable: true
    });
    
    TreeAnimateOpenDirective.prototype._show = function () {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    };
    TreeAnimateOpenDirective.prototype._hide = function () {
        this.viewContainerRef.clear();
        this.innerElement = null;
    };
    TreeAnimateOpenDirective.prototype._animateOpen = function () {
        var _this = this;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var maxHeight = 0;
        // set height to 0
        this.renderer.setStyle(this.innerElement, 'max-height', "0");
        // increase maxHeight until height doesn't change
        setTimeout(function () {
            var i = setInterval(function () {
                if (!_this._isOpen || !_this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                var roundedMaxHeight = Math.round(maxHeight);
                _this.renderer.setStyle(_this.innerElement, 'max-height', roundedMaxHeight + "px");
                var height = _this.innerElement.getBoundingClientRect ? _this.innerElement.getBoundingClientRect().height : 0; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    _this.renderer.setStyle(_this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    };
    TreeAnimateOpenDirective.prototype._animateClose = function () {
        var _this = this;
        if (!this.innerElement)
            return;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        var i = setInterval(function () {
            if (_this._isOpen || !_this.innerElement)
                return clearInterval(i);
            height -= delta;
            _this.renderer.setStyle(_this.innerElement, 'max-height', height + "px");
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                _this.viewContainerRef.clear();
                _this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    };
    __decorate$18([
        i0.Input('treeAnimateOpenSpeed'),
        __metadata$16("design:type", Number)
    ], TreeAnimateOpenDirective.prototype, "animateSpeed", void 0);
    __decorate$18([
        i0.Input('treeAnimateOpenAcceleration'),
        __metadata$16("design:type", Number)
    ], TreeAnimateOpenDirective.prototype, "animateAcceleration", void 0);
    __decorate$18([
        i0.Input('treeAnimateOpenEnabled'),
        __metadata$16("design:type", Boolean)
    ], TreeAnimateOpenDirective.prototype, "isEnabled", void 0);
    __decorate$18([
        i0.Input('treeAnimateOpen'),
        __metadata$16("design:type", Boolean),
        __metadata$16("design:paramtypes", [Boolean])
    ], TreeAnimateOpenDirective.prototype, "isOpen", null);
    TreeAnimateOpenDirective = __decorate$18([
        i0.Directive({
            selector: '[treeAnimateOpen]'
        }),
        __metadata$16("design:paramtypes", [i0.Renderer2,
            i0.TemplateRef,
            i0.ViewContainerRef])
    ], TreeAnimateOpenDirective);
    return TreeAnimateOpenDirective;
}());

// element-closest | CC0-1.0 | github.com/jonathantneal/closest
if (typeof Element !== 'undefined') {
    if (typeof Element.prototype.matches !== 'function') {
        Element.prototype.matches = Element.prototype.msMatchesSelector ||
            Element.prototype['mozMatchesSelector'] ||
            Element.prototype.webkitMatchesSelector ||
            function matches(selector) {
                var element = this;
                var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
                var index = 0;
                while (elements[index] && elements[index] !== element) {
                    ++index;
                }
                return Boolean(elements[index]);
            };
    }
    if (typeof Element.prototype['closest'] !== 'function') {
        Element.prototype['closest'] = function closest(selector) {
            var element = this;
            while (element && element.nodeType === 1) {
                if (element.matches(selector)) {
                    return element;
                }
                element = element.parentNode;
            }
            return null;
        };
    }
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TreeModule = /** @class */ (function () {
    function TreeModule() {
    }
    TreeModule_1 = TreeModule;
    TreeModule.forRoot = function () {
        return {
            ngModule: TreeModule_1,
            providers: [TreeDraggedElement]
        };
    };
    var TreeModule_1;
    TreeModule = TreeModule_1 = __decorate([
        i0.NgModule({
            declarations: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            exports: [
                TreeComponent,
                TreeNodeComponent,
                TreeNodeContent,
                LoadingComponent,
                TreeDropDirective,
                TreeDragDirective,
                TreeNodeExpanderComponent,
                TreeNodeChildrenComponent,
                TreeNodeDropSlot,
                TreeNodeCollectionComponent,
                TreeViewportComponent,
                TreeNodeWrapperComponent,
                TreeNodeCheckboxComponent,
                TreeAnimateOpenDirective
            ],
            imports: [
                _angular_common.CommonModule,
                MobxAngularModule
            ],
            providers: []
        })
    ], TreeModule);
    return TreeModule;
}());

exports.TreeModule = TreeModule;
exports.TreeModel = TreeModel;
exports.TreeNode = TreeNode;
exports.TreeDraggedElement = TreeDraggedElement;
exports.TreeVirtualScroll = TreeVirtualScroll;
exports.TREE_ACTIONS = TREE_ACTIONS;
exports.KEYS = KEYS;
exports.LoadingComponent = LoadingComponent;
exports.TreeAnimateOpenDirective = TreeAnimateOpenDirective;
exports.TreeComponent = TreeComponent;
exports.TreeNodeComponent = TreeNodeComponent;
exports.TreeNodeWrapperComponent = TreeNodeWrapperComponent;
exports.TreeNodeContent = TreeNodeContent;
exports.TreeDropDirective = TreeDropDirective;
exports.TreeDragDirective = TreeDragDirective;
exports.TreeNodeExpanderComponent = TreeNodeExpanderComponent;
exports.TreeNodeChildrenComponent = TreeNodeChildrenComponent;
exports.TreeNodeDropSlot = TreeNodeDropSlot;
exports.TreeNodeCollectionComponent = TreeNodeCollectionComponent;
exports.TreeViewportComponent = TreeViewportComponent;
exports.TreeNodeCheckboxComponent = TreeNodeCheckboxComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-tree-component.umd.js.map
