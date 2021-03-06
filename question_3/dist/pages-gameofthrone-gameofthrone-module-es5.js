function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gameofthrone-gameofthrone-module"], {
  /***/
  "./node_modules/@angular/common/fesm2015/http.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/common/fesm2015/http.js ***!
    \*******************************************************/

  /*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */

  /***/
  function node_modulesAngularCommonFesm2015HttpJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
      return NoopInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
      return JsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
      return jsonpCallbackContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
      return BrowserXhr;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
      return HttpXsrfCookieExtractor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
      return HttpXsrfInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
      return XSRF_COOKIE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
      return XSRF_HEADER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
      return HttpBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
      return HttpHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
      return HttpClient;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
      return HttpHeaders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
      return HTTP_INTERCEPTORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
      return JsonpClientBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
      return JsonpInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
      return HttpClientJsonpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
      return HttpClientModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
      return HttpClientXsrfModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
      return HttpInterceptingHandler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
      return HttpParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
      return HttpUrlEncodingCodec;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
      return HttpRequest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
      return HttpErrorResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
      return HttpEventType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
      return HttpHeaderResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
      return HttpResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
      return HttpResponseBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
      return HttpXhrBackend;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
      return XhrFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
      return HttpXsrfTokenExtractor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @license Angular v8.2.14
     * (c) 2010-2019 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
     * `HttpResponse`.
     *
     * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
     * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
     * `HttpBackend`.
     *
     * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpHandler = function HttpHandler() {
      _classCallCheck(this, HttpHandler);
    };

    if (false) {}
    /**
     * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
     *
     * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
     *
     * When injected, `HttpBackend` dispatches requests directly to the backend, without going
     * through the interceptor chain.
     *
     * \@publicApi
     * @abstract
     */


    var HttpBackend = function HttpBackend() {
      _classCallCheck(this, HttpBackend);
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @record
     */


    function Update() {}

    if (false) {}
    /**
     * Represents the header configuration options for an HTTP request.
     * Instances are immutable. Modifying methods return a cloned
     * instance with the change. The original object is never changed.
     *
     * \@publicApi
     */


    var HttpHeaders = /*#__PURE__*/function () {
      /**
       * Constructs a new HTTP header object with the given values.
       * @param {?=} headers
       */
      function HttpHeaders(headers) {
        var _this2 = this;

        _classCallCheck(this, HttpHeaders);

        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */

        this.lazyUpdate = null;

        if (!headers) {
          this.headers = new Map();
        } else if (typeof headers === 'string') {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            headers.split('\n').forEach(
            /**
            * @param {?} line
            * @return {?}
            */
            function (line) {
              /** @type {?} */
              var index = line.indexOf(':');

              if (index > 0) {
                /** @type {?} */
                var name = line.slice(0, index);
                /** @type {?} */

                var key = name.toLowerCase();
                /** @type {?} */

                var value = line.slice(index + 1).trim();

                _this2.maybeSetNormalizedName(name, key);

                if (_this2.headers.has(key)) {
                  /** @type {?} */
                  _this2.headers.get(key).push(value);
                } else {
                  _this2.headers.set(key, [value]);
                }
              }
            });
          };
        } else {
          this.lazyInit =
          /**
          * @return {?}
          */
          function () {
            _this2.headers = new Map();
            Object.keys(headers).forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              /** @type {?} */
              var values = headers[name];
              /** @type {?} */

              var key = name.toLowerCase();

              if (typeof values === 'string') {
                values = [values];
              }

              if (values.length > 0) {
                _this2.headers.set(key, values);

                _this2.maybeSetNormalizedName(name, key);
              }
            });
          };
        }
      }
      /**
       * Checks for existence of a given header.
       *
       * @param {?} name The header name to check for existence.
       *
       * @return {?} True if the header exists, false otherwise.
       */


      _createClass(HttpHeaders, [{
        key: "has",
        value: function has(name) {
          this.init();
          return this.headers.has(name.toLowerCase());
        }
        /**
         * Retrieves the first value of a given header.
         *
         * @param {?} name The header name.
         *
         * @return {?} The value string if the header exists, null otherwise
         */

      }, {
        key: "get",
        value: function get(name) {
          this.init();
          /** @type {?} */

          var values = this.headers.get(name.toLowerCase());
          return values && values.length > 0 ? values[0] : null;
        }
        /**
         * Retrieves the names of the headers.
         *
         * @return {?} A list of header names.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(this.normalizedNames.values());
        }
        /**
         * Retrieves a list of values for a given header.
         *
         * @param {?} name The header name from which to retrieve values.
         *
         * @return {?} A string of values if the header exists, null otherwise.
         */

      }, {
        key: "getAll",
        value: function getAll(name) {
          this.init();
          return this.headers.get(name.toLowerCase()) || null;
        }
        /**
         * Appends a new value to the existing set of values for a header
         * and returns them in a clone of the original instance.
         *
         * @param {?} name The header name for which to append the value or values.
         * @param {?} value The new value or array of values.
         *
         * @return {?} A clone of the HTTP headers object with the value appended to the given header.
         */

      }, {
        key: "append",
        value: function append(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'a'
          });
        }
        /**
         * Sets or modifies a value for a given header in a clone of the original instance.
         * If the header already exists, its value is replaced with the given value
         * in the returned object.
         *
         * @param {?} name The header name.
         * @param {?} value The value or values to set or overide for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the newly set header value.
         */

      }, {
        key: "set",
        value: function set(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 's'
          });
        }
        /**
         * Deletes values for a given header in a clone of the original instance.
         *
         * @param {?} name The header name.
         * @param {?=} value The value or values to delete for the given header.
         *
         * @return {?} A clone of the HTTP headers object with the given value deleted.
         */

      }, {
        key: "delete",
        value: function _delete(name, value) {
          return this.clone({
            name: name,
            value: value,
            op: 'd'
          });
        }
        /**
         * @private
         * @param {?} name
         * @param {?} lcName
         * @return {?}
         */

      }, {
        key: "maybeSetNormalizedName",
        value: function maybeSetNormalizedName(name, lcName) {
          if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this3 = this;

          if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
              this.copyFrom(this.lazyInit);
            } else {
              this.lazyInit();
            }

            this.lazyInit = null;

            if (!!this.lazyUpdate) {
              this.lazyUpdate.forEach(
              /**
              * @param {?} update
              * @return {?}
              */
              function (update) {
                return _this3.applyUpdate(update);
              });
              this.lazyUpdate = null;
            }
          }
        }
        /**
         * @private
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "copyFrom",
        value: function copyFrom(other) {
          var _this4 = this;

          other.init();
          Array.from(other.headers.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this4.headers.set(key,
            /** @type {?} */
            other.headers.get(key));

            _this4.normalizedNames.set(key,
            /** @type {?} */
            other.normalizedNames.get(key));
          });
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpHeaders();
          clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
          clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "applyUpdate",
        value: function applyUpdate(update) {
          /** @type {?} */
          var key = update.name.toLowerCase();

          switch (update.op) {
            case 'a':
            case 's':
              /** @type {?} */
              var value =
              /** @type {?} */
              update.value;

              if (typeof value === 'string') {
                value = [value];
              }

              if (value.length === 0) {
                return;
              }

              this.maybeSetNormalizedName(update.name, key);
              /** @type {?} */

              var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
              base.push.apply(base, _toConsumableArray(value));
              this.headers.set(key, base);
              break;

            case 'd':
              /** @type {?} */
              var toDelete =
              /** @type {?} */
              update.value;

              if (!toDelete) {
                this.headers["delete"](key);
                this.normalizedNames["delete"](key);
              } else {
                /** @type {?} */
                var existing = this.headers.get(key);

                if (!existing) {
                  return;
                }

                existing = existing.filter(
                /**
                * @param {?} value
                * @return {?}
                */
                function (value) {
                  return toDelete.indexOf(value) === -1;
                });

                if (existing.length === 0) {
                  this.headers["delete"](key);
                  this.normalizedNames["delete"](key);
                } else {
                  this.headers.set(key, existing);
                }
              }

              break;
          }
        }
        /**
         * \@internal
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "forEach",
        value: function forEach(fn) {
          var _this5 = this;

          this.init();
          Array.from(this.normalizedNames.keys()).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return fn(
            /** @type {?} */
            _this5.normalizedNames.get(key),
            /** @type {?} */
            _this5.headers.get(key));
          });
        }
      }]);

      return HttpHeaders;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A codec for encoding and decoding parameters in URLs.
     *
     * Used by `HttpParams`.
     *
     * \@publicApi
     *
     * @record
     */


    function HttpParameterCodec() {}

    if (false) {}
    /**
     * Provides encoding and decoding of URL parameter and query-string values.
     *
     * Serializes and parses URL parameter keys and values to encode and decode them.
     * If you pass URL query parameters without encoding,
     * the query parameters can be misinterpreted at the receiving end.
     *
     *
     * \@publicApi
     */


    var HttpUrlEncodingCodec = /*#__PURE__*/function () {
      function HttpUrlEncodingCodec() {
        _classCallCheck(this, HttpUrlEncodingCodec);
      }

      _createClass(HttpUrlEncodingCodec, [{
        key: "encodeKey",

        /**
         * Encodes a key name for a URL parameter or query-string.
         * @param {?} key The key name.
         * @return {?} The encoded key name.
         */
        value: function encodeKey(key) {
          return standardEncoding(key);
        }
        /**
         * Encodes the value of a URL parameter or query-string.
         * @param {?} value The value.
         * @return {?} The encoded value.
         */

      }, {
        key: "encodeValue",
        value: function encodeValue(value) {
          return standardEncoding(value);
        }
        /**
         * Decodes an encoded URL parameter or query-string key.
         * @param {?} key The encoded key name.
         * @return {?} The decoded key name.
         */

      }, {
        key: "decodeKey",
        value: function decodeKey(key) {
          return decodeURIComponent(key);
        }
        /**
         * Decodes an encoded URL parameter or query-string value.
         * @param {?} value The encoded value.
         * @return {?} The decoded value.
         */

      }, {
        key: "decodeValue",
        value: function decodeValue(value) {
          return decodeURIComponent(value);
        }
      }]);

      return HttpUrlEncodingCodec;
    }();
    /**
     * @param {?} rawParams
     * @param {?} codec
     * @return {?}
     */


    function paramParser(rawParams, codec) {
      /** @type {?} */
      var map = new Map();

      if (rawParams.length > 0) {
        /** @type {?} */
        var params = rawParams.split('&');
        params.forEach(
        /**
        * @param {?} param
        * @return {?}
        */
        function (param) {
          /** @type {?} */
          var eqIdx = param.indexOf('=');

          var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
              _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              val = _ref2[1];
          /** @type {?} */


          var list = map.get(key) || [];
          list.push(val);
          map.set(key, list);
        });
      }

      return map;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function standardEncoding(v) {
      return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
    }
    /**
     * @record
     */


    function Update$1() {}

    if (false) {}
    /**
     * Options used to construct an `HttpParams` instance.
     *
     * \@publicApi
     * @record
     */


    function HttpParamsOptions() {}

    if (false) {}
    /**
     * An HTTP request/response body that represents serialized parameters,
     * per the MIME type `application/x-www-form-urlencoded`.
     *
     * This class is immutable; all mutation operations return a new instance.
     *
     * \@publicApi
     */


    var HttpParams = /*#__PURE__*/function () {
      /**
       * @param {?=} options
       */
      function HttpParams() {
        var _this6 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] :
        /** @type {?} */
        {};

        _classCallCheck(this, HttpParams);

        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();

        if (!!options.fromString) {
          if (!!options.fromObject) {
            throw new Error("Cannot specify both fromString and fromObject.");
          }

          this.map = paramParser(options.fromString, this.encoder);
        } else if (!!options.fromObject) {
          this.map = new Map();
          Object.keys(options.fromObject).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var value =
            /** @type {?} */
            options.fromObject[key];

            /** @type {?} */
            _this6.map.set(key, Array.isArray(value) ? value : [value]);
          });
        } else {
          this.map = null;
        }
      }
      /**
       * Reports whether the body includes one or more values for a given parameter.
       * @param {?} param The parameter name.
       * @return {?} True if the parameter has one or more values,
       * false if it has no value or is not present.
       */


      _createClass(HttpParams, [{
        key: "has",
        value: function has(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.has(param)
          );
        }
        /**
         * Retrieves the first value for a parameter.
         * @param {?} param The parameter name.
         * @return {?} The first value of the given parameter,
         * or `null` if the parameter is not present.
         */

      }, {
        key: "get",
        value: function get(param) {
          this.init();
          /** @type {?} */

          var res =
          /** @type {?} */
          this.map.get(param);
          return !!res ? res[0] : null;
        }
        /**
         * Retrieves all values for a  parameter.
         * @param {?} param The parameter name.
         * @return {?} All values in a string array,
         * or `null` if the parameter not present.
         */

      }, {
        key: "getAll",
        value: function getAll(param) {
          this.init();
          return (
            /** @type {?} */
            this.map.get(param) || null
          );
        }
        /**
         * Retrieves all the parameters for this body.
         * @return {?} The parameter names in a string array.
         */

      }, {
        key: "keys",
        value: function keys() {
          this.init();
          return Array.from(
          /** @type {?} */
          this.map.keys());
        }
        /**
         * Appends a new value to existing values for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value to add.
         * @return {?} A new body with the appended value.
         */

      }, {
        key: "append",
        value: function append(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'a'
          });
        }
        /**
         * Replaces the value for a parameter.
         * @param {?} param The parameter name.
         * @param {?} value The new value.
         * @return {?} A new body with the new value.
         */

      }, {
        key: "set",
        value: function set(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 's'
          });
        }
        /**
         * Removes a given value or all values from a parameter.
         * @param {?} param The parameter name.
         * @param {?=} value The value to remove, if provided.
         * @return {?} A new body with the given value removed, or with all values
         * removed if no value is specified.
         */

      }, {
        key: "delete",
        value: function _delete(param, value) {
          return this.clone({
            param: param,
            value: value,
            op: 'd'
          });
        }
        /**
         * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
         * separated by `&`s.
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          var _this7 = this;

          this.init();
          return this.keys().map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var eKey = _this7.encoder.encodeKey(key);

            return (
              /** @type {?} */

              /** @type {?} */
              _this7.map.get(key).map(
              /**
              * @param {?} value
              * @return {?}
              */
              function (value) {
                return eKey + '=' + _this7.encoder.encodeValue(value);
              }).join('&')
            );
          }).join('&');
        }
        /**
         * @private
         * @param {?} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(update) {
          /** @type {?} */
          var clone = new HttpParams(
          /** @type {?} */
          {
            encoder: this.encoder
          });
          clone.cloneFrom = this.cloneFrom || this;
          clone.updates = (this.updates || []).concat([update]);
          return clone;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var _this8 = this;

          if (this.map === null) {
            this.map = new Map();
          }

          if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return (
                /** @type {?} */
                _this8.map.set(key,
                /** @type {?} */

                /** @type {?} */

                /** @type {?} */
                _this8.cloneFrom.map.get(key))
              );
            });

            /** @type {?} */
            this.updates.forEach(
            /**
            * @param {?} update
            * @return {?}
            */
            function (update) {
              switch (update.op) {
                case 'a':
                case 's':
                  /** @type {?} */
                  var base = (update.op === 'a' ?
                  /** @type {?} */
                  _this8.map.get(update.param) : undefined) || [];
                  base.push(
                  /** @type {?} */
                  update.value);

                  /** @type {?} */
                  _this8.map.set(update.param, base);

                  break;

                case 'd':
                  if (update.value !== undefined) {
                    /** @type {?} */
                    var _base =
                    /** @type {?} */
                    _this8.map.get(update.param) || [];
                    /** @type {?} */


                    var idx = _base.indexOf(update.value);

                    if (idx !== -1) {
                      _base.splice(idx, 1);
                    }

                    if (_base.length > 0) {
                      /** @type {?} */
                      _this8.map.set(update.param, _base);
                    } else {
                      /** @type {?} */
                      _this8.map["delete"](update.param);
                    }
                  } else {
                    /** @type {?} */
                    _this8.map["delete"](update.param);

                    break;
                  }

              }
            });
            this.cloneFrom = this.updates = null;
          }
        }
      }]);

      return HttpParams;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Construction interface for `HttpRequest`s.
     *
     * All values are optional and will override default values if provided.
     * @record
     */


    function HttpRequestInit() {}

    if (false) {}
    /**
     * Determine whether the given HTTP method may include a body.
     * @param {?} method
     * @return {?}
     */


    function mightHaveBody(method) {
      switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
          return false;

        default:
          return true;
      }
    }
    /**
     * Safely assert whether the given value is an ArrayBuffer.
     *
     * In some execution environments ArrayBuffer is not defined.
     * @param {?} value
     * @return {?}
     */


    function isArrayBuffer(value) {
      return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
    }
    /**
     * Safely assert whether the given value is a Blob.
     *
     * In some execution environments Blob is not defined.
     * @param {?} value
     * @return {?}
     */


    function isBlob(value) {
      return typeof Blob !== 'undefined' && value instanceof Blob;
    }
    /**
     * Safely assert whether the given value is a FormData instance.
     *
     * In some execution environments FormData is not defined.
     * @param {?} value
     * @return {?}
     */


    function isFormData(value) {
      return typeof FormData !== 'undefined' && value instanceof FormData;
    }
    /**
     * An outgoing HTTP request with an optional typed body.
     *
     * `HttpRequest` represents an outgoing request, including URL, method,
     * headers, body, and other request configuration options. Instances should be
     * assumed to be immutable. To modify a `HttpRequest`, the `clone`
     * method should be used.
     *
     * \@publicApi
     * @template T
     */


    var HttpRequest = /*#__PURE__*/function () {
      /**
       * @param {?} method
       * @param {?} url
       * @param {?=} third
       * @param {?=} fourth
       */
      function HttpRequest(method, url, third, fourth) {
        _classCallCheck(this, HttpRequest);

        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */

        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */

        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */

        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */

        this.responseType = 'json';
        this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.

        /** @type {?} */

        var options; // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.

        if (mightHaveBody(this.method) || !!fourth) {
          // Body is the third argument, options are the fourth.
          this.body = third !== undefined ?
          /** @type {?} */
          third : null;
          options = fourth;
        } else {
          // No body required, options are the third argument. The body stays null.
          options =
          /** @type {?} */
          third;
        } // If options have been passed, interpret them.


        if (options) {
          // Normalize reportProgress and withCredentials.
          this.reportProgress = !!options.reportProgress;
          this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

          if (!!options.responseType) {
            this.responseType = options.responseType;
          } // Override headers if they're provided.


          if (!!options.headers) {
            this.headers = options.headers;
          }

          if (!!options.params) {
            this.params = options.params;
          }
        } // If no headers have been passed in, construct a new HttpHeaders instance.


        if (!this.headers) {
          this.headers = new HttpHeaders();
        } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


        if (!this.params) {
          this.params = new HttpParams();
          this.urlWithParams = url;
        } else {
          // Encode the parameters to a string in preparation for inclusion in the URL.

          /** @type {?} */
          var params = this.params.toString();

          if (params.length === 0) {
            // No parameters, the visible URL is just the URL given at creation time.
            this.urlWithParams = url;
          } else {
            // Does the URL already have query parameters? Look for '?'.

            /** @type {?} */
            var qIdx = url.indexOf('?'); // There are 3 cases to handle:
            // 1) No existing parameters -> append '?' followed by params.
            // 2) '?' exists and is followed by existing query string ->
            //    append '&' followed by params.
            // 3) '?' exists at the end of the url -> append params directly.
            // This basically amounts to determining the character, if any, with
            // which to join the URL and parameters.

            /** @type {?} */

            var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
            this.urlWithParams = url + sep + params;
          }
        }
      }
      /**
       * Transform the free-form body into a serialized format suitable for
       * transmission to the server.
       * @return {?}
       */


      _createClass(HttpRequest, [{
        key: "serializeBody",
        value: function serializeBody() {
          // If no body is present, no need to serialize it.
          if (this.body === null) {
            return null;
          } // Check whether the body is already in a serialized form. If so,
          // it can just be returned directly.


          if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
            return this.body;
          } // Check whether the body is an instance of HttpUrlEncodedParams.


          if (this.body instanceof HttpParams) {
            return this.body.toString();
          } // Check whether the body is an object or array, and serialize with JSON if so.


          if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
            return JSON.stringify(this.body);
          } // Fall back on toString() for everything else.


          return (
            /** @type {?} */
            this.body.toString()
          );
        }
        /**
         * Examine the body and attempt to infer an appropriate MIME type
         * for it.
         *
         * If no such type can be inferred, this method will return `null`.
         * @return {?}
         */

      }, {
        key: "detectContentTypeHeader",
        value: function detectContentTypeHeader() {
          // An empty body has no content type.
          if (this.body === null) {
            return null;
          } // FormData bodies rely on the browser's content type assignment.


          if (isFormData(this.body)) {
            return null;
          } // Blobs usually have their own content type. If it doesn't, then
          // no type can be inferred.


          if (isBlob(this.body)) {
            return this.body.type || null;
          } // Array buffers have unknown contents and thus no type can be inferred.


          if (isArrayBuffer(this.body)) {
            return null;
          } // Technically, strings could be a form of JSON data, but it's safe enough
          // to assume they're plain strings.


          if (typeof this.body === 'string') {
            return 'text/plain';
          } // `HttpUrlEncodedParams` has its own content-type.


          if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
          } // Arrays, objects, and numbers will be encoded as JSON.


          if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
            return 'application/json';
          } // No type could be inferred.


          return null;
        }
        /**
         * @param {?=} update
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // For method, url, and responseType, take the current value unless
          // it is overridden in the update hash.

          /** @type {?} */
          var method = update.method || this.method;
          /** @type {?} */

          var url = update.url || this.url;
          /** @type {?} */

          var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
          // whatever current body is present is being overridden with an empty
          // body, whereas an `undefined` value in update.body implies no
          // override.

          /** @type {?} */

          var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
          // `false` and `undefined` in the update args.

          /** @type {?} */

          var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
          /** @type {?} */

          var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
          // `setParams` are used.

          /** @type {?} */

          var headers = update.headers || this.headers;
          /** @type {?} */

          var params = update.params || this.params; // Check whether the caller has asked to add headers.

          if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers = Object.keys(update.setHeaders).reduce(
            /**
            * @param {?} headers
            * @param {?} name
            * @return {?}
            */
            function (headers, name) {
              return headers.set(name,
              /** @type {?} */
              update.setHeaders[name]);
            }, headers);
          } // Check whether the caller has asked to set params.


          if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams).reduce(
            /**
            * @param {?} params
            * @param {?} param
            * @return {?}
            */
            function (params, param) {
              return params.set(param,
              /** @type {?} */
              update.setParams[param]);
            }, params);
          } // Finally, construct the new HttpRequest using the pieces from above.


          return new HttpRequest(method, url, body, {
            params: params,
            headers: headers,
            reportProgress: reportProgress,
            responseType: responseType,
            withCredentials: withCredentials
          });
        }
      }]);

      return HttpRequest;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var HttpEventType = {
      /**
       * The request was sent out over the wire.
       */
      Sent: 0,

      /**
       * An upload progress event was received.
       */
      UploadProgress: 1,

      /**
       * The response status code and headers were received.
       */
      ResponseHeader: 2,

      /**
       * A download progress event was received.
       */
      DownloadProgress: 3,

      /**
       * The full response including the body was received.
       */
      Response: 4,

      /**
       * A custom event from an interceptor or a backend.
       */
      User: 5
    };
    HttpEventType[HttpEventType.Sent] = 'Sent';
    HttpEventType[HttpEventType.UploadProgress] = 'UploadProgress';
    HttpEventType[HttpEventType.ResponseHeader] = 'ResponseHeader';
    HttpEventType[HttpEventType.DownloadProgress] = 'DownloadProgress';
    HttpEventType[HttpEventType.Response] = 'Response';
    HttpEventType[HttpEventType.User] = 'User';
    /**
     * Base interface for progress events.
     *
     * \@publicApi
     * @record
     */

    function HttpProgressEvent() {}

    if (false) {}
    /**
     * A download progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpDownloadProgressEvent() {}

    if (false) {}
    /**
     * An upload progress event.
     *
     * \@publicApi
     * @record
     */


    function HttpUploadProgressEvent() {}

    if (false) {}
    /**
     * An event indicating that the request was sent to the server. Useful
     * when a request may be retried multiple times, to distinguish between
     * retries on the final event stream.
     *
     * \@publicApi
     * @record
     */


    function HttpSentEvent() {}

    if (false) {}
    /**
     * A user-defined event.
     *
     * Grouping all custom events under this type ensures they will be handled
     * and forwarded by all implementations of interceptors.
     *
     * \@publicApi
     * @record
     * @template T
     */


    function HttpUserEvent() {}

    if (false) {}
    /**
     * An error that represents a failed attempt to JSON.parse text coming back
     * from the server.
     *
     * It bundles the Error object with the actual response body that failed to parse.
     *
     *
     * @record
     */


    function HttpJsonParseError() {}

    if (false) {}
    /**
     * Base class for both `HttpResponse` and `HttpHeaderResponse`.
     *
     * \@publicApi
     * @abstract
     */


    var HttpResponseBase =
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init) {
      var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

      _classCallCheck(this, HttpResponseBase);

      // If the hash has values passed, use them to initialize the response.
      // Otherwise use the default values.
      this.headers = init.headers || new HttpHeaders();
      this.status = init.status !== undefined ? init.status : defaultStatus;
      this.statusText = init.statusText || defaultStatusText;
      this.url = init.url || null; // Cache the ok value to avoid defining a getter.

      this.ok = this.status >= 200 && this.status < 300;
    };

    if (false) {}
    /**
     * A partial HTTP response which only includes the status and header data,
     * but no response body.
     *
     * `HttpHeaderResponse` is a `HttpEvent` available on the response
     * event stream, only when progress events are requested.
     *
     * \@publicApi
     */


    var HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase) {
      _inherits(HttpHeaderResponse, _HttpResponseBase);

      var _super = _createSuper(HttpHeaderResponse);

      /**
       * Create a new `HttpHeaderResponse` with the given parameters.
       * @param {?=} init
       */
      function HttpHeaderResponse() {
        var _this9;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpHeaderResponse);

        _this9 = _super.call(this, init);
        _this9.type = HttpEventType.ResponseHeader;
        return _this9;
      }
      /**
       * Copy this `HttpHeaderResponse`, overriding its contents with the
       * given parameter hash.
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpHeaderResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          // Perform a straightforward initialization of the new HttpHeaderResponse,
          // overriding the current parameters with new ones if given.
          return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpHeaderResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A full HTTP response, including a typed response body (which may be `null`
     * if one was not returned).
     *
     * `HttpResponse` is a `HttpEvent` available on the response event
     * stream.
     *
     * \@publicApi
     * @template T
     */


    var HttpResponse = /*#__PURE__*/function (_HttpResponseBase2) {
      _inherits(HttpResponse, _HttpResponseBase2);

      var _super2 = _createSuper(HttpResponse);

      /**
       * Construct a new `HttpResponse`.
       * @param {?=} init
       */
      function HttpResponse() {
        var _this10;

        var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, HttpResponse);

        _this10 = _super2.call(this, init);
        _this10.type = HttpEventType.Response;
        _this10.body = init.body !== undefined ? init.body : null;
        return _this10;
      }
      /**
       * @param {?=} update
       * @return {?}
       */


      _createClass(HttpResponse, [{
        key: "clone",
        value: function clone() {
          var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new HttpResponse({
            body: update.body !== undefined ? update.body : this.body,
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined
          });
        }
      }]);

      return HttpResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * A response that represents an error or failure, either from a
     * non-successful HTTP status, an error while executing the request,
     * or some other failure which occurred during the parsing of the response.
     *
     * Any error returned on the `Observable` response stream will be
     * wrapped in an `HttpErrorResponse` to provide additional context about
     * the state of the HTTP layer when the error occurred. The error property
     * will contain either a wrapped Error object or the error response returned
     * from the server.
     *
     * \@publicApi
     */


    var HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase3) {
      _inherits(HttpErrorResponse, _HttpResponseBase3);

      var _super3 = _createSuper(HttpErrorResponse);

      /**
       * @param {?} init
       */
      function HttpErrorResponse(init) {
        var _this11;

        _classCallCheck(this, HttpErrorResponse);

        // Initialize with a default status of 0 / Unknown Error.
        _this11 = _super3.call(this, init, 0, 'Unknown Error');
        _this11.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */

        _this11.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.

        if (_this11.status >= 200 && _this11.status < 300) {
          _this11.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
        } else {
          _this11.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
        }

        _this11.error = init.error || null;
        return _this11;
      }

      return HttpErrorResponse;
    }(HttpResponseBase);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
     * the given `body`. This function clones the object and adds the body.
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * @template T
     * @param {?} options
     * @param {?} body
     * @return {?}
     */


    function addBody(options, body) {
      return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials
      };
    }
    /**
     * Performs HTTP requests.
     * This service is available as an injectable class, with methods to perform HTTP requests.
     * Each request method has multiple signatures, and the return type varies based on
     * the signature that is called (mainly the values of `observe` and `responseType`).
     *
     * Note that the `responseType` *options* value is a String that identifies the
     * single data type of the response.
     * A single overload version of the method handles each response type.
     * The value of `responseType` cannot be a union, as the combined signature could imply.
     *
     * \@usageNotes
     * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
     *
     * ### HTTP Request Example
     *
     * ```
     *  // GET heroes whose name contains search term
     * searchHeroes(term: string): observable<Hero[]>{
     *
     *  const params = new HttpParams({fromString: 'name=term'});
     *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
     * }
     * ```
     * ### JSONP Example
     * ```
     * requestJsonp(url, callback = 'callback') {
     *  return this.httpClient.jsonp(this.heroesURL, callback);
     * }
     * ```
     *
     * ### PATCH Example
     * ```
     * // PATCH one of the heroes' name
     * patchHero (id: number, heroName: string): Observable<{}> {
     * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
     *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
     *    .pipe(catchError(this.handleError('patchHero')));
     * }
     * ```
     *
     * @see [HTTP Guide](guide/http)
     *
     * \@publicApi
     */


    var HttpClient = /*#__PURE__*/function () {
      /**
       * @param {?} handler
       */
      function HttpClient(handler) {
        _classCallCheck(this, HttpClient);

        this.handler = handler;
      }
      /**
       * Constructs an observable for a generic HTTP request that, when subscribed,
       * fires the request through the chain of registered interceptors and on to the
       * server.
       *
       * You can pass an `HttpRequest` directly as the only parameter. In this case,
       * the call returns an observable of the raw `HttpEvent` stream.
       *
       * Alternatively you can pass an HTTP method as the first parameter,
       * a URL string as the second, and an options hash containing the request body as the third.
       * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
       * type of returned observable.
       *   * The `responseType` value determines how a successful response body is parsed.
       *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
       * object as a type parameter to the call.
       *
       * The `observe` value determines the return type, according to what you are interested in
       * observing.
       *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
       * progress events by default.
       *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
       * where the `T` parameter depends on the `responseType` and any optionally provided type
       * parameter.
       *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
       *
       * @param {?} first
       * @param {?=} url
       * @param {?=} options
       * @return {?}
       */


      _createClass(HttpClient, [{
        key: "request",
        value: function request(first, url) {
          var _this12 = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var req; // First, check whether the primary argument is an instance of `HttpRequest`.

          if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req =
            /** @type {?} */
            first;
          } else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.

            /** @type {?} */
            var headers = undefined;

            if (options.headers instanceof HttpHeaders) {
              headers = options.headers;
            } else {
              headers = new HttpHeaders(options.headers);
            } // Sort out parameters.

            /** @type {?} */


            var params = undefined;

            if (!!options.params) {
              if (options.params instanceof HttpParams) {
                params = options.params;
              } else {
                params = new HttpParams(
                /** @type {?} */
                {
                  fromObject: options.params
                });
              }
            } // Construct the request.


            req = new HttpRequest(first,
            /** @type {?} */
            url, options.body !== undefined ? options.body : null, {
              headers: headers,
              params: params,
              reportProgress: options.reportProgress,
              // By default, JSON is assumed to be returned for all calls.
              responseType: options.responseType || 'json',
              withCredentials: options.withCredentials
            });
          } // Start with an Observable.of() the initial request, and run the handler (which
          // includes all interceptors) inside a concatMap(). This way, the handler runs
          // inside an Observable chain, which causes interceptors to be re-run on every
          // subscription (this also makes retries re-run the handler, including interceptors).

          /** @type {?} */


          var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(
          /**
          * @param {?} req
          * @return {?}
          */
          function (req) {
            return _this12.handler.handle(req);
          })); // If coming via the API signature which accepts a previously constructed HttpRequest,
          // the only option is to get the event stream. Otherwise, return the event stream if
          // that is what was requested.

          if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
          } // The requested stream contains either the full response or the body. In either
          // case, the first step is to filter the event stream to extract a stream of
          // responses(s).

          /** @type {?} */


          var res$ =
          /** @type {?} */
          events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event instanceof HttpResponse;
          })); // Decide which stream to return.

          switch (options.observe || 'body') {
            case 'body':
              // The requested stream is the body. Map the response stream to the response
              // body. This could be done more simply, but a misbehaving interceptor might
              // transform the response body into a different format and ignore the requested
              // responseType. Guard against this by validating that the response is of the
              // requested type.
              switch (req.responseType) {
                case 'arraybuffer':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is an ArrayBuffer.
                    if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                      throw new Error('Response is not an ArrayBuffer.');
                    }

                    return res.body;
                  }));

                case 'blob':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a Blob.
                    if (res.body !== null && !(res.body instanceof Blob)) {
                      throw new Error('Response is not a Blob.');
                    }

                    return res.body;
                  }));

                case 'text':
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    // Validate that the body is a string.
                    if (res.body !== null && typeof res.body !== 'string') {
                      throw new Error('Response is not a string.');
                    }

                    return res.body;
                  }));

                case 'json':
                default:
                  // No validation needed for JSON responses, as they can be of any type.
                  return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
                  /**
                  * @param {?} res
                  * @return {?}
                  */
                  function (res) {
                    return res.body;
                  }));
              }

            case 'response':
              // The response stream was requested directly, so return it.
              return res$;

            default:
              // Guard against new future observe types being added.
              throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
          }
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `DELETE` request to execute on the server. See the individual overloads for
         * details on the return type.
         *
         * @param {?} url     The endpoint URL.
         * @param {?=} options The HTTP options to send with the request.
         *
         * @return {?}
         */

      }, {
        key: "delete",
        value: function _delete(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('DELETE', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `GET` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "get",
        value: function get(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('GET', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `HEAD` request to execute on the server. The `HEAD` method returns
         * meta information about the resource without transferring the
         * resource itself. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "head",
        value: function head(url) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.request('HEAD', url,
          /** @type {?} */
          options);
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes a request with the special method
         * `JSONP` to be dispatched via the interceptor pipeline.
         * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
         * API endpoints that don't support newer,
         * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
         * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
         * requests even if the API endpoint is not located on the same domain (origin) as the client-side
         * application making the request.
         * The endpoint API must support JSONP callback for JSONP requests to work.
         * The resource API returns the JSON response wrapped in a callback function.
         * You can pass the callback function name as one of the query parameters.
         * Note that JSONP requests can only be used with `GET` requests.
         *
         * @template T
         * @param {?} url The resource URL.
         * @param {?} callbackParam The callback function name.
         *
         * @return {?}
         */

      }, {
        key: "jsonp",
        value: function jsonp(url, callbackParam) {
          return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json'
          });
        }
        /**
         * Constructs an `Observable` that, when subscribed, causes the configured
         * `OPTIONS` request to execute on the server. This method allows the client
         * to determine the supported HTTP methods and other capabilites of an endpoint,
         * without implying a resource action. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "options",
        value: function options(url) {
          var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          return this.request('OPTIONS', url,
          /** @type {?} */
          _options);
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PATCH` request to execute on the server. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "patch",
        value: function patch(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PATCH', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `POST` request to execute on the server. The server responds with the location of
         * the replaced resource. See the individual overloads for
         * details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "post",
        value: function post(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('POST', url, addBody(options, body));
        }
        /**
         * Constructs an observable that, when subscribed, causes the configured
         * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
         * with a new set of values.
         * See the individual overloads for details on the return type.
         * @param {?} url
         * @param {?} body
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "put",
        value: function put(url, body) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.request('PUT', url, addBody(options, body));
        }
      }]);

      return HttpClient;
    }();

    HttpClient.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpClient.ctorParameters = function () {
      return [{
        type: HttpHandler
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Intercepts and handles an `HttpRequest` or `HttpResponse`.
     *
     * Most interceptors transform the outgoing request before passing it to the
     * next interceptor in the chain, by calling `next.handle(transformedReq)`.
     * An interceptor may transform the
     * response event stream as well, by applying additional RxJS operators on the stream
     * returned by `next.handle()`.
     *
     * More rarely, an interceptor may handle the request entirely,
     * and compose a new event stream instead of invoking `next.handle()`. This is an
     * acceptable behavior, but keep in mind that further interceptors will be skipped entirely.
     *
     * It is also rare but valid for an interceptor to return multiple responses on the
     * event stream for a single request.
     *
     * \@publicApi
     *
     * @see [HTTP Guide](guide/http#intercepting-requests-and-responses)
     *
     * \@usageNotes
     *
     * To use the same instance of `HttpInterceptors` for the entire app, import the `HttpClientModule`
     * only in your `AppModule`, and add the interceptors to the root application injector .
     * If you import `HttpClientModule` multiple times across different modules (for example, in lazy
     * loading modules), each import creates a new copy of the `HttpClientModule`, which overwrites the interceptors
     * provided in the root module.
     *
     * @record
     */


    function HttpInterceptor() {}

    if (false) {}
    /**
     * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
     *
     *
     */


    var HttpInterceptorHandler = /*#__PURE__*/function () {
      /**
       * @param {?} next
       * @param {?} interceptor
       */
      function HttpInterceptorHandler(next, interceptor) {
        _classCallCheck(this, HttpInterceptorHandler);

        this.next = next;
        this.interceptor = interceptor;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptorHandler, [{
        key: "handle",
        value: function handle(req) {
          return this.interceptor.intercept(req, this.next);
        }
      }]);

      return HttpInterceptorHandler;
    }();

    if (false) {}
    /**
     * A multi-provider token that represents the array of registered
     * `HttpInterceptor` objects.
     *
     * \@publicApi
     * @type {?}
     */


    var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

    var NoopInterceptor = /*#__PURE__*/function () {
      function NoopInterceptor() {
        _classCallCheck(this, NoopInterceptor);
      }

      _createClass(NoopInterceptor, [{
        key: "intercept",

        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        value: function intercept(req, next) {
          return next.handle(req);
        }
      }]);

      return NoopInterceptor;
    }();

    NoopInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Every request made through JSONP needs a callback name that's unique across the
    // whole page. Each request is assigned an id and the callback name is constructed
    // from that. The next id to be assigned is tracked in a global variable here that
    // is shared among all applications on the page.

    /** @type {?} */

    var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
    // passed in its URL.

    /** @type {?} */

    var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
    // have a request method JSONP.

    /** @type {?} */

    var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
    /** @type {?} */

    var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
    /**
     * DI token/abstract type representing a map of JSONP callbacks.
     *
     * In the browser, this should always be the `window` object.
     *
     *
     * @abstract
     */

    var JsonpCallbackContext = function JsonpCallbackContext() {
      _classCallCheck(this, JsonpCallbackContext);
    };
    /**
     * Processes an `HttpRequest` with the JSONP method,
     * by performing JSONP style requests.
     * @see `HttpHandler`
     * @see `HttpXhrBackend`
     *
     * \@publicApi
     */


    var JsonpClientBackend = /*#__PURE__*/function () {
      /**
       * @param {?} callbackMap
       * @param {?} document
       */
      function JsonpClientBackend(callbackMap, document) {
        _classCallCheck(this, JsonpClientBackend);

        this.callbackMap = callbackMap;
        this.document = document;
      }
      /**
       * Get the name of the next callback method, by incrementing the global `nextRequestId`.
       * @private
       * @return {?}
       */


      _createClass(JsonpClientBackend, [{
        key: "nextCallback",
        value: function nextCallback() {
          return "ng_jsonp_callback_".concat(nextRequestId++);
        }
        /**
         * Processes a JSONP request and returns an event stream of the results.
         * @param {?} req The request object.
         * @return {?} An observable of the response events.
         *
         */

      }, {
        key: "handle",
        value: function handle(req) {
          var _this13 = this;

          // Firstly, check both the method and response type. If either doesn't match
          // then the request was improperly routed here and cannot be handled.
          if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
          } else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
          } // Everything else happens inside the Observable boundary.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.

            /** @type {?} */
            var callback = _this13.nextCallback();
            /** @type {?} */


            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

            /** @type {?} */

            var node = _this13.document.createElement('script');

            node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.

            /** @type {?} */

            var body = null; // Whether the response callback has been called.

            /** @type {?} */

            var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.

            /** @type {?} */

            var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.

            _this13.callbackMap[callback] =
            /**
            * @param {?=} data
            * @return {?}
            */
            function (data) {
              // Data has been received from the JSONP script. Firstly, delete this callback.
              delete _this13.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

              if (cancelled) {
                return;
              } // Set state to indicate data was received.


              body = data;
              finished = true;
            }; // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.

            /** @type {?} */


            var cleanup =
            /**
            * @return {?}
            */
            function cleanup() {
              // Remove the <script> tag if it's still on the page.
              if (node.parentNode) {
                node.parentNode.removeChild(node);
              } // Remove the response callback from the callbackMap (window object in the
              // browser).


              delete _this13.callbackMap[callback];
            }; // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.

            /** @type {?} */


            var onLoad =
            /**
            * @param {?} event
            * @return {?}
            */
            function onLoad(event) {
              // Do nothing if the request has been cancelled.
              if (cancelled) {
                return;
              } // Cleanup the page.


              cleanup(); // Check whether the response callback has run.

              if (!finished) {
                // It hasn't, something went wrong with the request. Return an error via
                // the Observable error path. All JSONP errors have status 0.
                observer.error(new HttpErrorResponse({
                  url: url,
                  status: 0,
                  statusText: 'JSONP Error',
                  error: new Error(JSONP_ERR_NO_CALLBACK)
                }));
                return;
              } // Success. body either contains the response body or null if none was
              // returned.


              observer.next(new HttpResponse({
                body: body,
                status: 200,
                statusText: 'OK',
                url: url
              })); // Complete the stream, the response is over.

              observer.complete();
            }; // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              // If the request was already cancelled, no need to emit anything.
              if (cancelled) {
                return;
              }

              cleanup(); // Wrap the error in a HttpErrorResponse.

              observer.error(new HttpErrorResponse({
                error: error,
                status: 0,
                statusText: 'JSONP Error',
                url: url
              }));
            }; // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.


            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);

            _this13.document.body.appendChild(node); // The request has now been successfully sent.


            observer.next({
              type: HttpEventType.Sent
            }); // Cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              }
            );
          });
        }
      }]);

      return JsonpClientBackend;
    }();

    JsonpClientBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpClientBackend.ctorParameters = function () {
      return [{
        type: JsonpCallbackContext
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    if (false) {}
    /**
     * Identifies requests with the method JSONP and
     * shifts them to the `JsonpClientBackend`.
     *
     * @see `HttpInterceptor`
     *
     * \@publicApi
     */


    var JsonpInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} jsonp
       */
      function JsonpInterceptor(jsonp) {
        _classCallCheck(this, JsonpInterceptor);

        this.jsonp = jsonp;
      }
      /**
       * Identifies and handles a given JSONP request.
       * @param {?} req The outgoing request object to handle.
       * @param {?} next The next interceptor in the chain, or the backend
       * if no interceptors remain in the chain.
       * @return {?} An observable of the event stream.
       */


      _createClass(JsonpInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          if (req.method === 'JSONP') {
            return this.jsonp.handle(
            /** @type {?} */
            req);
          } // Fall through for normal HTTP requests.


          return next.handle(req);
        }
      }]);

      return JsonpInterceptor;
    }();

    JsonpInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    JsonpInterceptor.ctorParameters = function () {
      return [{
        type: JsonpClientBackend
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSSI_PREFIX = /^\)\]\}',?\n/;
    /**
     * Determine an appropriate URL for the response, by checking either
     * XMLHttpRequest.responseURL or the X-Request-URL header.
     * @param {?} xhr
     * @return {?}
     */

    function getResponseUrl(xhr) {
      if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
      }

      if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
      }

      return null;
    }
    /**
     * A wrapper around the `XMLHttpRequest` constructor.
     *
     * \@publicApi
     * @abstract
     */


    var XhrFactory = function XhrFactory() {
      _classCallCheck(this, XhrFactory);
    };

    if (false) {}
    /**
     * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
     *
     */


    var BrowserXhr = /*#__PURE__*/function () {
      function BrowserXhr() {
        _classCallCheck(this, BrowserXhr);
      }
      /**
       * @return {?}
       */


      _createClass(BrowserXhr, [{
        key: "build",
        value: function build() {
          return (
            /** @type {?} */
            new XMLHttpRequest()
          );
        }
      }]);

      return BrowserXhr;
    }();

    BrowserXhr.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BrowserXhr.ctorParameters = function () {
      return [];
    };
    /**
     * Tracks a response from the server that does not yet have a body.
     * @record
     */


    function PartialResponse() {}

    if (false) {}
    /**
     * Uses `XMLHttpRequest` to send requests to a backend server.
     * @see `HttpHandler`
     * @see `JsonpClientBackend`
     *
     * \@publicApi
     */


    var HttpXhrBackend = /*#__PURE__*/function () {
      /**
       * @param {?} xhrFactory
       */
      function HttpXhrBackend(xhrFactory) {
        _classCallCheck(this, HttpXhrBackend);

        this.xhrFactory = xhrFactory;
      }
      /**
       * Processes a request and returns a stream of response events.
       * @param {?} req The request object.
       * @return {?} An observable of the response events.
       */


      _createClass(HttpXhrBackend, [{
        key: "handle",
        value: function handle(req) {
          var _this14 = this;

          // Quick check to give a better error message when a user attempts to use
          // HttpClient.jsonp() without installing the JsonpClientModule
          if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
          } // Everything happens on Observable subscription.


          return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.

            /** @type {?} */
            var xhr = _this14.xhrFactory.build();

            xhr.open(req.method, req.urlWithParams);

            if (!!req.withCredentials) {
              xhr.withCredentials = true;
            } // Add all the requested headers.


            req.headers.forEach(
            /**
            * @param {?} name
            * @param {?} values
            * @return {?}
            */
            function (name, values) {
              return xhr.setRequestHeader(name, values.join(','));
            }); // Add an Accept header if one isn't present already.

            if (!req.headers.has('Accept')) {
              xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            } // Auto-detect the Content-Type header if one isn't present already.


            if (!req.headers.has('Content-Type')) {
              /** @type {?} */
              var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

              if (detectedType !== null) {
                xhr.setRequestHeader('Content-Type', detectedType);
              }
            } // Set the responseType if one was requested.


            if (req.responseType) {
              /** @type {?} */
              var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
              // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
              // xhr.response will be null, and xhr.responseText cannot be accessed to
              // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
              // is parsed by first requesting text and then applying JSON.parse.

              xhr.responseType =
              /** @type {?} */
              responseType !== 'json' ? responseType : 'text';
            } // Serialize the request body if one is present. If not, this will be set to null.

            /** @type {?} */


            var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.

            /** @type {?} */

            var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.

            /** @type {?} */

            var partialFromXhr =
            /**
            * @return {?}
            */
            function partialFromXhr() {
              if (headerResponse !== null) {
                return headerResponse;
              } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).

              /** @type {?} */


              var status = xhr.status === 1223 ? 204 : xhr.status;
              /** @type {?} */

              var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

              /** @type {?} */

              var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
              // request URL.

              /** @type {?} */

              var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

              headerResponse = new HttpHeaderResponse({
                headers: headers,
                status: status,
                statusText: statusText,
                url: url
              });
              return headerResponse;
            }; // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.

            /** @type {?} */


            var onLoad =
            /**
            * @return {?}
            */
            function onLoad() {
              // Read response state from the memoized partial data.
              var _partialFromXhr = partialFromXhr(),
                  headers = _partialFromXhr.headers,
                  status = _partialFromXhr.status,
                  statusText = _partialFromXhr.statusText,
                  url = _partialFromXhr.url; // The body will be read out if present.

              /** @type {?} */


              var body = null;

              if (status !== 204) {
                // Use XMLHttpRequest.response if set, responseText otherwise.
                body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
              } // Normalize another potential bug (this one comes from CORS).


              if (status === 0) {
                status = !!body ? 200 : 0;
              } // ok determines whether the response will be transmitted on the event or
              // error channel. Unsuccessful status codes (not 2xx) will always be errors,
              // but a successful status code can still result in an error if the user
              // asked for JSON data and the body cannot be parsed as such.

              /** @type {?} */


              var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
              // will have done that already).

              if (req.responseType === 'json' && typeof body === 'string') {
                // Save the original body, before attempting XSSI prefix stripping.

                /** @type {?} */
                var originalBody = body;
                body = body.replace(XSSI_PREFIX, '');

                try {
                  // Attempt the parse. If it fails, a parse error should be delivered to the user.
                  body = body !== '' ? JSON.parse(body) : null;
                } catch (error) {
                  // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                  // JSON response. Restore the original body (including any XSSI prefix) to deliver
                  // a better error response.
                  body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                  // just isn't JSON. Otherwise, deliver the parsing error to the user.

                  if (ok) {
                    // Even though the response status was 2xx, this is still an error.
                    ok = false; // The parse error contains the text of the body that failed to parse.

                    body =
                    /** @type {?} */
                    {
                      error: error,
                      text: body
                    };
                  }
                }
              }

              if (ok) {
                // A successful response is delivered on the event stream.
                observer.next(new HttpResponse({
                  body: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                })); // The full body has been received and delivered, no further events
                // are possible. This request is complete.

                observer.complete();
              } else {
                // An unsuccessful request is delivered on the error channel.
                observer.error(new HttpErrorResponse({
                  // The error in this case is the response body (error from the server).
                  error: body,
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url || undefined
                }));
              }
            }; // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.

            /** @type {?} */


            var onError =
            /**
            * @param {?} error
            * @return {?}
            */
            function onError(error) {
              var _partialFromXhr2 = partialFromXhr(),
                  url = _partialFromXhr2.url;
              /** @type {?} */


              var res = new HttpErrorResponse({
                error: error,
                status: xhr.status || 0,
                statusText: xhr.statusText || 'Unknown Error',
                url: url || undefined
              });
              observer.error(res);
            }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.

            /** @type {?} */


            var sentHeaders = false; // The download progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */

            var onDownProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onDownProgress(event) {
              // Send the HttpResponseHeaders event if it hasn't been sent already.
              if (!sentHeaders) {
                observer.next(partialFromXhr());
                sentHeaders = true;
              } // Start building the download progress event to deliver on the response
              // event stream.

              /** @type {?} */


              var progressEvent = {
                type: HttpEventType.DownloadProgress,
                loaded: event.loaded
              }; // Set the total number of bytes in the event if it's available.

              if (event.lengthComputable) {
                progressEvent.total = event.total;
              } // If the request was for text content and a partial response is
              // available on XMLHttpRequest, include it in the progress event
              // to allow for streaming reads.


              if (req.responseType === 'text' && !!xhr.responseText) {
                progressEvent.partialText = xhr.responseText;
              } // Finally, fire the event.


              observer.next(progressEvent);
            }; // The upload progress event handler, which is only registered if
            // progress events are enabled.

            /** @type {?} */


            var onUpProgress =
            /**
            * @param {?} event
            * @return {?}
            */
            function onUpProgress(event) {
              // Upload progress events are simpler. Begin building the progress
              // event.

              /** @type {?} */
              var progress = {
                type: HttpEventType.UploadProgress,
                loaded: event.loaded
              }; // If the total number of bytes being uploaded is available, include
              // it.

              if (event.lengthComputable) {
                progress.total = event.total;
              } // Send the event.


              observer.next(progress);
            }; // By default, register for load and error events.


            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

            if (req.reportProgress) {
              // Download progress is always enabled if requested.
              xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

              if (reqBody !== null && xhr.upload) {
                xhr.upload.addEventListener('progress', onUpProgress);
              }
            } // Fire the request, and notify the event stream that it was fired.


            xhr.send(
            /** @type {?} */
            reqBody);
            observer.next({
              type: HttpEventType.Sent
            }); // This is the return from the Observable function, which is the
            // request cancellation handler.

            return (
              /**
              * @return {?}
              */
              function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                xhr.abort();
              }
            );
          });
        }
      }]);

      return HttpXhrBackend;
    }();

    HttpXhrBackend.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXhrBackend.ctorParameters = function () {
      return [{
        type: XhrFactory
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
    /** @type {?} */

    var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
    /**
     * Retrieves the current XSRF token to use with the next outgoing request.
     *
     * \@publicApi
     * @abstract
     */

    var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
      _classCallCheck(this, HttpXsrfTokenExtractor);
    };

    if (false) {}
    /**
     * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
     */


    var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
      /**
       * @param {?} doc
       * @param {?} platform
       * @param {?} cookieName
       */
      function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        _classCallCheck(this, HttpXsrfCookieExtractor);

        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */

        this.parseCount = 0;
      }
      /**
       * @return {?}
       */


      _createClass(HttpXsrfCookieExtractor, [{
        key: "getToken",
        value: function getToken() {
          if (this.platform === 'server') {
            return null;
          }
          /** @type {?} */


          var cookieString = this.doc.cookie || '';

          if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
          }

          return this.lastToken;
        }
      }]);

      return HttpXsrfCookieExtractor;
    }();

    HttpXsrfCookieExtractor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfCookieExtractor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_COOKIE_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
     */


    var HttpXsrfInterceptor = /*#__PURE__*/function () {
      /**
       * @param {?} tokenService
       * @param {?} headerName
       */
      function HttpXsrfInterceptor(tokenService, headerName) {
        _classCallCheck(this, HttpXsrfInterceptor);

        this.tokenService = tokenService;
        this.headerName = headerName;
      }
      /**
       * @param {?} req
       * @param {?} next
       * @return {?}
       */


      _createClass(HttpXsrfInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          /** @type {?} */
          var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
          // Non-mutating requests don't require a token, and absolute URLs require special handling
          // anyway as the cookie set
          // on our origin is not the same as the token expected by another origin.

          if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
            return next.handle(req);
          }
          /** @type {?} */


          var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

          if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({
              headers: req.headers.set(this.headerName, token)
            });
          }

          return next.handle(req);
        }
      }]);

      return HttpXsrfInterceptor;
    }();

    HttpXsrfInterceptor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpXsrfInterceptor.ctorParameters = function () {
      return [{
        type: HttpXsrfTokenExtractor
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [XSRF_HEADER_NAME]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An injectable `HttpHandler` that applies multiple interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * The interceptors are loaded lazily from the injector, to allow
     * interceptors to themselves inject classes depending indirectly
     * on `HttpInterceptingHandler` itself.
     * @see `HttpInterceptor`
     */


    var HttpInterceptingHandler = /*#__PURE__*/function () {
      /**
       * @param {?} backend
       * @param {?} injector
       */
      function HttpInterceptingHandler(backend, injector) {
        _classCallCheck(this, HttpInterceptingHandler);

        this.backend = backend;
        this.injector = injector;
        this.chain = null;
      }
      /**
       * @param {?} req
       * @return {?}
       */


      _createClass(HttpInterceptingHandler, [{
        key: "handle",
        value: function handle(req) {
          if (this.chain === null) {
            /** @type {?} */
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(
            /**
            * @param {?} next
            * @param {?} interceptor
            * @return {?}
            */
            function (next, interceptor) {
              return new HttpInterceptorHandler(next, interceptor);
            }, this.backend);
          }

          return this.chain.handle(req);
        }
      }]);

      return HttpInterceptingHandler;
    }();

    HttpInterceptingHandler.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    HttpInterceptingHandler.ctorParameters = function () {
      return [{
        type: HttpBackend
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    if (false) {}
    /**
     * Constructs an `HttpHandler` that applies interceptors
     * to a request before passing it to the given `HttpBackend`.
     *
     * Use as a factory function within `HttpClientModule`.
     *
     *
     * @param {?} backend
     * @param {?=} interceptors
     * @return {?}
     */


    function interceptingHandler(backend) {
      var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!interceptors) {
        return backend;
      }

      return interceptors.reduceRight(
      /**
      * @param {?} next
      * @param {?} interceptor
      * @return {?}
      */
      function (next, interceptor) {
        return new HttpInterceptorHandler(next, interceptor);
      }, backend);
    }
    /**
     * Factory function that determines where to store JSONP callbacks.
     *
     * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
     * in test environments. In that case, callbacks are stored on an anonymous object instead.
     *
     *
     * @return {?}
     */


    function jsonpCallbackContext() {
      if (typeof window === 'object') {
        return window;
      }

      return {};
    }
    /**
     * Configures XSRF protection support for outgoing requests.
     *
     * For a server that supports a cookie-based XSRF protection system,
     * use directly to configure XSRF protection with the correct
     * cookie and header names.
     *
     * If no names are supplied, the default cookie name is `XSRF-TOKEN`
     * and the default header name is `X-XSRF-TOKEN`.
     *
     * \@publicApi
     */


    var HttpClientXsrfModule = /*#__PURE__*/function () {
      function HttpClientXsrfModule() {
        _classCallCheck(this, HttpClientXsrfModule);
      }

      _createClass(HttpClientXsrfModule, null, [{
        key: "disable",

        /**
         * Disable the default XSRF protection.
         * @return {?}
         */
        value: function disable() {
          return {
            ngModule: HttpClientXsrfModule,
            providers: [{
              provide: HttpXsrfInterceptor,
              useClass: NoopInterceptor
            }]
          };
        }
        /**
         * Configure XSRF protection.
         * @param {?=} options An object that can specify either or both
         * cookie name or header name.
         * - Cookie name default is `XSRF-TOKEN`.
         * - Header name default is `X-XSRF-TOKEN`.
         *
         * @return {?}
         */

      }, {
        key: "withOptions",
        value: function withOptions() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: HttpClientXsrfModule,
            providers: [options.cookieName ? {
              provide: XSRF_COOKIE_NAME,
              useValue: options.cookieName
            } : [], options.headerName ? {
              provide: XSRF_HEADER_NAME,
              useValue: options.headerName
            } : []]
          };
        }
      }]);

      return HttpClientXsrfModule;
    }();

    HttpClientXsrfModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientModule = function HttpClientModule() {
      _classCallCheck(this, HttpClientModule);
    };

    HttpClientModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        /**
         * Optional configuration for XSRF protection.
         */
        imports: [HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })],

        /**
         * Configures the [dependency injector](guide/glossary#injector) where it is imported
         * with supporting services for HTTP communications.
         */
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }]
      }]
    }];
    /**
     * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
     * with supporting services for JSONP.
     * Without this module, Jsonp requests reach the backend
     * with method JSONP, where they are rejected.
     *
     * You can add interceptors to the chain behind `HttpClient` by binding them to the
     * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
     *
     * \@publicApi
     */

    var HttpClientJsonpModule = function HttpClientJsonpModule() {
      _classCallCheck(this, HttpClientJsonpModule);
    };

    HttpClientJsonpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=http.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js":
  /*!************************************************************!*\
    !*** ./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js ***!
    \************************************************************/

  /*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesNg2CkeditorFesm2015Ng2CkeditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CKEditorModule", function () {
      return CKEditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CKEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CKButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CKGroupDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
     *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
     *      </ckbutton>
     *   </ckeditor>
     */


    var CKButtonDirective = /*#__PURE__*/function () {
      /**
       * CKGroup component
       * Usage :
       *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
       *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
       *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
       *      </ckbutton>
       *   </ckeditor>
       */
      function CKButtonDirective() {
        _classCallCheck(this, CKButtonDirective);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CKButtonDirective, [{
        key: "initialize",
        value: function initialize(editor) {
          var _this15 = this;

          editor.instance.addCommand(this.command, {
            exec: function exec(evt) {
              _this15.click.emit(evt);
            }
          });
          editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.name) throw new Error('Attribute "name" is required on <ckbutton>');
          if (!this.command) throw new Error('Attribute "command" is required on <ckbutton>');
        }
      }]);

      return CKButtonDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKButtonDirective.prototype, "click", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "command", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckbutton'
    })], CKButtonDirective);
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
     *          .
     *          .
     *      </ckgroup>
     *   </ckeditor>
     */

    var CKGroupDirective = /*#__PURE__*/function () {
      function CKGroupDirective() {
        _classCallCheck(this, CKGroupDirective);
      }

      _createClass(CKGroupDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this16 = this;

          // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
          this.toolbarButtons.forEach(function (button) {
            return button.toolbar = _this16.name;
          });
        }
      }, {
        key: "initialize",
        value: function initialize(editor) {
          editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf); // Initialize each button within ckgroup

          this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
          });
        }
      }]);

      return CKGroupDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKGroupDirective.prototype, "previous", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "subgroupOf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckgroup'
    })], CKGroupDirective);
    var CKEditorComponent_1;
    /**
     * CKEditor component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
     */

    var CKEditorComponent = CKEditorComponent_1 = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function CKEditorComponent(zone) {
        _classCallCheck(this, CKEditorComponent);

        this.zone = zone;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = '';
      }

      _createClass(CKEditorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
          }
        }
        /**
         * On component destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this17 = this;

          if (this.instance) {
            setTimeout(function () {
              if (_this17.instance) {
                _this17.instance.removeAllListeners();

                CKEDITOR.instances[_this17.instance.name].destroy();

                _this17.instance.destroy();

                _this17.instance = null;
              }
            });
          }
        }
        /**
         * On component view init
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * On component view checked
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * Value update process
         */

      }, {
        key: "updateValue",
        value: function updateValue(value) {
          var _this18 = this;

          this.zone.run(function () {
            _this18.value = value;

            _this18.onChange(value);

            _this18.onTouched();

            _this18.change.emit(value);
          });
        }
        /**
         * CKEditor init
         */

      }, {
        key: "ckeditorInit",
        value: function ckeditorInit(config) {
          var _this19 = this;

          if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
          } else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
              return;
            }

            if (this.readonly) {
              config.readOnly = this.readonly;
            } // CKEditor replace textarea


            this.instance = CKEDITOR.replace(this.host.nativeElement, config); // Set initial value

            this.instance.setData(this.value); // listen for instanceReady event

            this.instance.on('instanceReady', function (evt) {
              // if value has changed while instance loading
              // update instance with current component value
              if (_this19.instance.getData() !== _this19.value) {
                _this19.instance.setData(_this19.value);
              } // send the evt to the EventEmitter


              _this19.ready.emit(evt);
            }); // CKEditor change event

            this.instance.on('change', function (evt) {
              _this19.onTouched();

              var value = _this19.instance.getData();

              if (_this19.value !== value) {
                // Debounce update
                if (_this19.debounce) {
                  if (_this19.debounceTimeout) clearTimeout(_this19.debounceTimeout);
                  _this19.debounceTimeout = setTimeout(function () {
                    _this19.updateValue(value);

                    _this19.debounceTimeout = null;
                  }, parseInt(_this19.debounce)); // Live update
                } else {
                  _this19.updateValue(value);
                }
              } // Original ckeditor event dispatch


              _this19.editorChange.emit(evt);
            }); // CKEditor blur event

            this.instance.on('blur', function (evt) {
              _this19.blur.emit(evt);
            }); // CKEditor focus event

            this.instance.on('focus', function (evt) {
              _this19.focus.emit(evt);
            }); // CKEditor contentDom event

            this.instance.on('contentDom', function (evt) {
              _this19.contentDom.emit(evt);
            }); // CKEditor fileUploadRequest event

            this.instance.on('fileUploadRequest', function (evt) {
              _this19.fileUploadRequest.emit(evt);
            }); // CKEditor fileUploadResponse event

            this.instance.on('fileUploadResponse', function (evt) {
              _this19.fileUploadResponse.emit(evt);
            }); // CKEditor paste event

            this.instance.on('paste', function (evt) {
              _this19.paste.emit(evt);
            }); // CKEditor drop event

            this.instance.on('drop', function (evt) {
              _this19.drop.emit(evt);
            }); // Add Toolbar Groups to Editor. This will also add Buttons within groups.

            this.toolbarGroups.forEach(function (group) {
              group.initialize(_this19);
            }); // Add Toolbar Buttons to Editor.

            this.toolbarButtons.forEach(function (button) {
              button.initialize(_this19);
            });
          }
        }
        /**
         * Implements ControlValueAccessor
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._value = value;
          if (this.instance) this.instance.setData(value);
        }
      }, {
        key: "onChange",
        value: function onChange(_) {}
      }, {
        key: "onTouched",
        value: function onTouched() {}
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "documentContains",
        value: function documentContains(node) {
          return document.contains ? document.contains(node) : document.body.contains(node);
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (v !== this._value) {
            this._value = v;
            this.onChange(v);
          }
        }
      }]);

      return CKEditorComponent;
    }();

    CKEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CKEditorComponent.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKEditorComponent.prototype, "debounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "editorChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "ready", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "contentDom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "paste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "drop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('host', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "host", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarButtons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKGroupDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ckeditor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CKEditorComponent_1;
        }),
        multi: true
      }],
      template: "\n    <textarea #host></textarea>\n  "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CKEditorComponent);
    /**
     * CKEditorModule
     */

    var CKEditorModule = function CKEditorModule() {
      _classCallCheck(this, CKEditorModule);
    };

    CKEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
      exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
    })], CKEditorModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-ckeditor.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-pagination/dist/ngx-pagination.js":
  /*!************************************************************!*\
    !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
    \************************************************************/

  /*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */

  /***/
  function node_modulesNgxPaginationDistNgxPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DEFAULT_STYLES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DEFAULT_TEMPLATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function () {
      return NgxPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationService", function () {
      return PaginationService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function () {
      return PaginationControlsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function () {
      return PaginationControlsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PaginationService =
    /** @class */
    function () {
      function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
      }

      PaginationService.prototype.defaultId = function () {
        return this.DEFAULT_ID;
      };

      PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
          instance.id = this.DEFAULT_ID;
        }

        if (!this.instances[instance.id]) {
          this.instances[instance.id] = instance;
          this.change.emit(instance.id);
        } else {
          var changed = this.updateInstance(instance);

          if (changed) {
            this.change.emit(instance.id);
          }
        }
      };
      /**
       * Check each property of the instance and update any that have changed. Return
       * true if any changes were made, else return false.
       */


      PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;

        for (var prop in this.instances[instance.id]) {
          if (instance[prop] !== this.instances[instance.id][prop]) {
            this.instances[instance.id][prop] = instance[prop];
            changed = true;
          }
        }

        return changed;
      };
      /**
       * Returns the current page number.
       */


      PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
          return this.instances[id].currentPage;
        }
      };
      /**
       * Sets the current page number.
       */


      PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
          var instance = this.instances[id];
          var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);

          if (page <= maxPage && 1 <= page) {
            this.instances[id].currentPage = page;
            this.change.emit(id);
          }
        }
      };
      /**
       * Sets the value of instance.totalItems
       */


      PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
          this.instances[id].totalItems = totalItems;
          this.change.emit(id);
        }
      };
      /**
       * Sets the value of instance.itemsPerPage.
       */


      PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
          this.instances[id].itemsPerPage = itemsPerPage;
          this.change.emit(id);
        }
      };
      /**
       * Returns a clone of the pagination instance object matching the id. If no
       * id specified, returns the instance corresponding to the default id.
       */


      PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) {
          id = this.DEFAULT_ID;
        }

        if (this.instances[id]) {
          return this.clone(this.instances[id]);
        }

        return {};
      };
      /**
       * Perform a shallow clone of an object.
       */


      PaginationService.prototype.clone = function (obj) {
        var target = {};

        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            target[i] = obj[i];
          }
        }

        return target;
      };

      return PaginationService;
    }();

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;

    var PaginatePipe =
    /** @class */
    function () {
      function PaginatePipe(service) {
        this.service = service; // store the values from the last time the pipe was invoked

        this.state = {};
      }

      PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (!(collection instanceof Array)) {
          var _id = args.id || this.service.defaultId();

          if (this.state[_id]) {
            return this.state[_id].slice;
          } else {
            return collection;
          }
        }

        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);

        if (!serverSideMode && collection instanceof Array) {
          perPage = +perPage || LARGE_NUMBER;
          start = (instance.currentPage - 1) * perPage;
          end = start + perPage;
          var isIdentical = this.stateIsIdentical(id, collection, start, end);

          if (isIdentical) {
            return this.state[id].slice;
          } else {
            var slice = collection.slice(start, end);
            this.saveState(id, collection, slice, start, end);
            this.service.change.emit(id);
            return slice;
          }
        } // save the state for server-side collection to avoid null
        // flash as new data loads.


        this.saveState(id, collection, collection, start, end);
        return collection;
      };
      /**
       * Create an PaginationInstance object, using defaults for any optional properties not supplied.
       */


      PaginatePipe.prototype.createInstance = function (collection, config) {
        this.checkConfig(config);
        return {
          id: config.id != null ? config.id : this.service.defaultId(),
          itemsPerPage: +config.itemsPerPage || 0,
          currentPage: +config.currentPage || 1,
          totalItems: +config.totalItems || collection.length
        };
      };
      /**
       * Ensure the argument passed to the filter contains the required properties.
       */


      PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) {
          return !(prop in config);
        });

        if (0 < missing.length) {
          throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
      };
      /**
       * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
       * array for a given id. This means that the next time the pipe is run on this collection & id, we just
       * need to check that the collection, start and end points are all identical, and if so, return the
       * last sliced array.
       */


      PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
          collection: collection,
          size: collection.length,
          slice: slice,
          start: start,
          end: end
        };
      };
      /**
       * For a given id, returns true if the collection, size, start and end values are identical.
       */


      PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];

        if (!state) {
          return false;
        }

        var isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;

        if (!isMetaDataIdentical) {
          return false;
        }

        return state.slice.every(function (element, index) {
          return element === collection[start + index];
        });
      };

      PaginatePipe = __decorate$1([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'paginate',
        pure: false
      }), __metadata("design:paramtypes", [PaginationService])], PaginatePipe);
      return PaginatePipe;
    }();
    /**
     * The default template and styles for the pagination links are borrowed directly
     * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
     */


    var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
    var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xAB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xBB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function coerceToBoolean(input) {
      return !!input && input !== 'false';
    }
    /**
     * The default pagination controls component. Actually just a default implementation of a custom template.
     */


    var PaginationControlsComponent =
    /** @class */
    function () {
      function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
      }

      Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function get() {
          return this._directionLinks;
        },
        set: function set(value) {
          this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function get() {
          return this._autoHide;
        },
        set: function set(value) {
          this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function get() {
          return this._responsive;
        },
        set: function set(value) {
          this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
      });

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "id", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Number)], PaginationControlsComponent.prototype, "maxSize", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "directionLinks", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "autoHide", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", Boolean), __metadata$1("design:paramtypes", [Boolean])], PaginationControlsComponent.prototype, "responsive", null);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "previousLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "nextLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPaginationLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderPageLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$1("design:type", String)], PaginationControlsComponent.prototype, "screenReaderCurrentLabel", void 0);

      __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$1("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsComponent.prototype, "pageChange", void 0);

      PaginationControlsComponent = __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'pagination-controls',
        template: DEFAULT_TEMPLATE,
        styles: [DEFAULT_STYLES],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      })], PaginationControlsComponent);
      return PaginationControlsComponent;
    }();

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    /**
     * This directive is what powers all pagination controls components, including the default one.
     * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
     * with the pagination controls.
     */


    var PaginationControlsDirective =
    /** @class */
    function () {
      function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;

        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change.subscribe(function (id) {
          if (_this.id === id) {
            _this.updatePageLinks();

            _this.changeDetectorRef.markForCheck();

            _this.changeDetectorRef.detectChanges();
          }
        });
      }

      PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
          this.id = this.service.defaultId();
        }

        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
      };

      PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
      };
      /**
       * Go to the previous page
       */


      PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
      };
      /**
       * Go to the next page
       */


      PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
      };
      /**
       * Returns true if current page is first page
       */


      PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
      };
      /**
       * Returns true if current page is last page
       */


      PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
      };
      /**
       * Set the current page number.
       */


      PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
      };
      /**
       * Get the current page number.
       */


      PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
      };
      /**
       * Returns the last page number
       */


      PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);

        if (inst.totalItems < 1) {
          // when there are 0 or fewer (an error case) items, there are no "pages" as such,
          // but it makes sense to consider a single, empty page as the last page.
          return 1;
        }

        return Math.ceil(inst.totalItems / inst.itemsPerPage);
      };

      PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
      };

      PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
          console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
      };
      /**
       * Updates the page links and checks that the current page is valid. Should run whenever the
       * PaginationService.change stream emits a value matching the current ID, or when any of the
       * input values changes.
       */


      PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;

        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);

        if (correctedCurrentPage !== inst.currentPage) {
          setTimeout(function () {
            _this.setCurrent(correctedCurrentPage);

            _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
          });
        } else {
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
      };
      /**
       * Checks that the instance.currentPage property is within bounds for the current page range.
       * If not, return a correct value for currentPage, or the current value if OK.
       */


      PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);

        if (totalPages < instance.currentPage && 0 < totalPages) {
          return totalPages;
        } else if (instance.currentPage < 1) {
          return 1;
        }

        return instance.currentPage;
      };
      /**
       * Returns an array of Page objects to use in the pagination controls.
       */


      PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;

        while (i <= totalPages && i <= paginationRange) {
          var label = void 0;
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
          var closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);

          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
            label = '...';
          } else {
            label = pageNumber;
          }

          pages.push({
            label: label,
            value: pageNumber
          });
          i++;
        }

        return pages;
      };
      /**
       * Given the position in the sequence of pagination links [i],
       * figure out what page number corresponds to that position.
       */


      PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);

        if (i === paginationRange) {
          return totalPages;
        } else if (i === 1) {
          return i;
        } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
            return totalPages - paginationRange + i;
          } else if (halfWay < currentPage) {
            return currentPage - halfWay + i;
          } else {
            return i;
          }
        } else {
          return i;
        }
      };

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], PaginationControlsDirective.prototype, "id", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Number)], PaginationControlsDirective.prototype, "maxSize", void 0);

      __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata$2("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PaginationControlsDirective.prototype, "pageChange", void 0);

      PaginationControlsDirective = __decorate$3([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: 'pagination-template,[pagination-template]',
        exportAs: 'paginationApi'
      }), __metadata$2("design:paramtypes", [PaginationService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], PaginationControlsDirective);
      return PaginationControlsDirective;
    }();

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var NgxPaginationModule =
    /** @class */
    function () {
      function NgxPaginationModule() {}

      NgxPaginationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective],
        providers: [PaginationService],
        exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
      })], NgxPaginationModule);
      return NgxPaginationModule;
    }();
    /**
     * Generated bundle index. Do not edit.
     */

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/books/books.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/books/books.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGameofthroneBooksBooksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>a:hover {\n    text-decoration: underline; // changed from text:decoration:none\n}</style>\n\n<div class=\"row mb-1\" *ngIf=\"showList\">\n    <div class=\"col\">\n        <div class=\"input-group mb-3 box-shadow\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i\n                        class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search client by ID Number...\"\n                   class=\"form-control border-0\">\n            <div class=\"input-group-append\">\n                <span (click)=\"toggleShow()\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-user-plus\"></i></span>\n                <span (click)=\"toggle('grid')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-th\"></i></span>\n                <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-list\"></i></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"type=='list' || showList\" class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"table-responsive bg-white box-shadow\">\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Aliasis</th>\n                    <th>Name</th>\n                    <th>Gender</th>\n                    <th>Culture</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let book of books  | ClientSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">\n                    <td class=\"align-middle text-truncate\"><a href={{book.url}} target=\"_blank\">{{book.name}}</a></td>\n                    <td class=\"align-middle text-truncate\">{{book.isbn}}</td>\n                    <td class=\"align-middle text-truncate\">{{book.country}}</td>\n                    <td class=\"align-middle text-truncate\">{{book.mediaType}}</td>\n\n                    <td class=\"align-middle\">\n                        <div class=\"btn-group\" role=\"group\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"editBooks(book)\"><i\n                                    class=\"fa fa-eye\"></i> View</button>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showList\">\n    <div class=\"col-12\">\n        <div class=\"bg-white text-center\">\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showDetails\">\n    <div class=\"col-lg-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Book Details</h5>\n                <div class=\"widget-controls\">\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                </div>\n            </div>\n            <div class=\"card-body pt-0 widget-body\">\n                <form [formGroup]=\"bookForm\" >\n                    <div style=\"border: 0.5px solid #c2c2c2; border-radius: 5px; padding: 5px\">\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Name</label>\n                                    <input formControlName=\"name\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">ISBN</label>\n                                    <input formControlName=\"isbn\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray\">Country</label>\n                                        <input formControlName=\"country\" class=\"form-control\" type=\"text\"  >\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Number Of Pages</label>\n                                    <input formControlName=\"numberOfPages\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Publisher</label>\n                                    <input formControlName=\"publisher\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Released</label>\n                                    <input formControlName=\"released\" class=\"form-control\" type=\"text\"  >\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Media Type</label>\n                                    <input formControlName=\"mediaType\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" style=\"margin-top: 6px\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Authors</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <div class=\"table-responsive bg-white box-shadow\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Desc</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td>{{authors}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"authors ===null\" ><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Characters</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Description</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let char of characters | paginate: { itemsPerPage: 6, currentPage: p }\">\n                                        <td ><a href=\"{{char.url}}\">Book-{{char.name}}</a></td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"row\" *ngIf=\"showDetails\">\n                                    <div class=\"col-12\">\n                                        <div class=\"bg-white text-center\">\n                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" >\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">POVCharacters</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Description</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let pov of povCharacters | paginate: { itemsPerPage: 6, currentPage: p } \">\n                                        <td ><a href=\"{{pov.url}}\">Pov Character-{{pov.name}}</a></td>\n                                    </tr>\n                                    <tr *ngIf=\"povCharacters.length === 0\"><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"row\" *ngIf=\"showDetails\">\n                                    <div class=\"col-12\">\n                                        <div class=\"bg-white text-center\">\n                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-center\">\n\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelBooks()\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/character/character.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/character/character.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGameofthroneCharacterCharacterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>a:hover {\n    text-decoration: underline; // changed from text:decoration:none\n}</style>\n\n<div class=\"row mb-1\" *ngIf=\"showList\">\n    <div class=\"col\">\n        <div class=\"input-group mb-3 box-shadow\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i\n                        class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search client by ID Number...\"\n                   class=\"form-control border-0\">\n            <div class=\"input-group-append\">\n                <span (click)=\"toggleShow()\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-user-plus\"></i></span>\n                <span (click)=\"toggle('grid')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-th\"></i></span>\n                <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-list\"></i></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"type=='list' || showList\" class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"table-responsive bg-white box-shadow\">\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Aliasis</th>\n                    <th>Name</th>\n                    <th>Gender</th>\n                    <th>Culture</th>\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let character of characters  | ClientSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">\n                    <td class=\"align-middle text-truncate\"><a href={{character.url}} target=\"_blank\">{{character.aliases}}</a></td>\n                    <td class=\"align-middle text-truncate\">{{character.name}}</td>\n                    <td class=\"align-middle text-truncate\">{{character.gender}}</td>\n                    <td class=\"align-middle text-truncate\">{{character.culture}}</td>\n\n                    <td class=\"align-middle\">\n                        <div class=\"btn-group\" role=\"group\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"openModal(modalContent,character)\"><i\n                                    class=\"fa fa-eye\"></i> View</button>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showList\">\n    <div class=\"col-12\">\n        <div class=\"bg-white text-center\">\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n        </div>\n    </div>\n</div>\n<ng-template #modalContent>\n    <div class=\"modal-body bg-gray\">\n<div class=\"row\" >\n    <div class=\"col-lg-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">Character Details</h5>\n                <div class=\"widget-controls\">\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                </div>\n            </div>\n            <div class=\"card-body pt-0 widget-body\">\n                <form [formGroup]=\"personalForm\" >\n                    <div style=\"border: 0.5px solid #c2c2c2; border-radius: 5px; padding: 5px\">\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Aliases</label>\n                                    <input formControlName=\"aliases\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Name</label>\n                                    <input formControlName=\"name\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                                <div class=\"col-sm-3\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray\">Gender</label>\n                                        <input formControlName=\"gender\" class=\"form-control\" type=\"text\"  >\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Culture</label>\n                                    <input formControlName=\"culture\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Born</label>\n                                    <input formControlName=\"born\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Died</label>\n                                    <input formControlName=\"died\" class=\"form-control\" type=\"text\"  >\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Father</label>\n                                    <input formControlName=\"father\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Mother</label>\n                                    <input formControlName=\"mother\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Spouse</label>\n                                    <input formControlName=\"spouse\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Titles</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Desc</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n\n                                    <tr>\n                                        <td >{{titles}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"titles ===null\" ><td>No Records Found</td></tr>\n\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Books</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Book Number</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let book of books  ; let id = index\">\n                                        <td ><a href=\"{{book.url}}\">Book-{{book.name}}</a></td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" >\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">POVBooks</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Book Number</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let book of povbooks  ; let id = index\">\n                                        <td>{{book}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"povbooks.length === 0\"><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" >\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">TV Series</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Name</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let tvser of tvSeries  ; let id = index\">\n                                        <td>{{tvser}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"tvSeries.length === 0\"><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" >\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Played By</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Name</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngIf=\"playedBy === null\"><td>No Records Found</td></tr>\n                                    <tr *ngIf=\"playedBy != null\">\n                                        <td >{{playedBy}}</td>\n                                    </tr>\n\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-center\">\n\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelCharacter()\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n</div>\n    </div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/houses/houses.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/houses/houses.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGameofthroneHousesHousesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>a:hover {\n    text-decoration: underline; // changed from text:decoration:none\n}</style>\n\n<div class=\"row mb-1\" *ngIf=\"showList\">\n    <div class=\"col\">\n        <div class=\"input-group mb-3 box-shadow\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text border-top-0 border-left-0 border-bottom-0\"><i\n                        class=\"fa fa-search\"></i></span>\n            </div>\n            <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search client by ID Number...\"\n                   class=\"form-control border-0\">\n            <div class=\"input-group-append\">\n                <span (click)=\"toggleShow()\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-user-plus\"></i></span>\n                <span (click)=\"toggle('grid')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-th\"></i></span>\n                <span (click)=\"toggle('list')\" class=\"input-group-text border-top-0 border-right-0 border-bottom-0\"><i\n                        class=\"fa fa-list\"></i></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"type=='list' || showList\" class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"table-responsive bg-white box-shadow\">\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Region</th>\n                    <th>Coat Of Arms</th>\n                    <th>Words</th>\n\n\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let house of houses  | ClientSearchPipe : searchText | paginate: { itemsPerPage: 6, currentPage: p }\">\n                    <td class=\"align-middle text-truncate\"><a href={{house.url}} target=\"_blank\">{{house.name}}</a></td>\n                    <td class=\"align-middle text-truncate\">{{house.region}}</td>\n                    <td class=\"align-middle text-truncate\">{{house.coatOfArms}}</td>\n                    <td class=\"align-middle text-truncate\">{{house.words}}</td>\n                    <td class=\"align-middle\">\n                        <div class=\"btn-group\" role=\"group\">\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"editHouse(house)\"><i\n                                    class=\"fa fa-eye\"></i> View</button>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showList\">\n    <div class=\"col-12\">\n        <div class=\"bg-white text-center\">\n            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" *ngIf=\"showDetails\">\n    <div class=\"col-lg-12 mb-4\">\n        <div widget class=\"card border-0 box-shadow\">\n            <div class=\"card-header transparent border-0 text-muted\">\n                <h5 class=\"mb-0\">House Details</h5>\n                <div class=\"widget-controls\">\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\n                </div>\n            </div>\n            <div class=\"card-body pt-0 widget-body\">\n                <form [formGroup]=\"houseForm\" >\n                    <div style=\"border: 0.5px solid #c2c2c2; border-radius: 5px; padding: 5px\">\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Name</label>\n                                    <input formControlName=\"name\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Region</label>\n                                    <input formControlName=\"isbn\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                                <div class=\"col-sm-4\">\n                                    <div class=\"form-group\">\n                                        <label class=\"text-gray\">Coat Of Arms</label>\n                                        <input formControlName=\"country\" class=\"form-control\" type=\"text\"  >\n                                    </div>\n                                </div>\n                        </div>\n                        <div class=\"row\">\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Words</label>\n                                    <input formControlName=\"numberOfPages\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Current Lord</label>\n                                    <input formControlName=\"publisher\" class=\"form-control\" type=\"text\" >\n                                </div>\n                            </div>\n\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Heir</label>\n                                    <input formControlName=\"released\" class=\"form-control\" type=\"text\"  >\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Over Lord</label>\n                                    <input formControlName=\"mediaType\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Founded</label>\n                                    <input formControlName=\"mediaType\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label class=\"text-gray\">Founder</label>\n                                    <input formControlName=\"mediaType\" class=\"form-control\" type=\"text\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"form-group\">\n                            <label class=\"text-gray\">Died Out</label>\n                            <input formControlName=\"mediaType\" class=\"form-control\" type=\"text\">\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" style=\"margin-top: 6px\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Titles</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <div class=\"table-responsive bg-white box-shadow\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Desc</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td>{{titles}}</td>\n                                    </tr>\n                                    <tr *ngIf=\"titles ===null\" ><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" style=\"margin-top: 6px\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Seats</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <div class=\"table-responsive bg-white box-shadow\">\n                                    <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                        <thead>\n                                        <tr>\n                                            <th>Desc</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr>\n                                            <td>{{seats}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"seats ===null\" ><td>No Records Found</td></tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" style=\"margin-top: 6px\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">Ancestral Weapons</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <div class=\"table-responsive bg-white box-shadow\">\n                                    <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                        <thead>\n                                        <tr>\n                                            <th>Desc</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr>\n                                            <td>{{ancestralWeapons}}</td>\n                                        </tr>\n                                        <tr *ngIf=\"ancestralWeapons ===null\" ><td>No Records Found</td></tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\">\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\"></h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Description</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let cadet of cadetBranches | paginate: { itemsPerPage: 6, currentPage: p }\">\n                                        <td ><a href=\"{{cadet.url}}\">Cadet Branch House-{{cadet.name}}</a></td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"row\" *ngIf=\"showDetails\">\n                                    <div class=\"col-12\">\n                                        <div class=\"bg-white text-center\">\n                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12 mb-4\" >\n                        <div widget class=\"card border-0 box-shadow\">\n                            <div class=\"card-header transparent border-0 text-muted\">\n                                <h5 class=\"mb-0\">POVCharacters</h5>\n                            </div>\n                            <div class=\"card-body pt-0 widget-body\">\n\n                                <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\n                                    <thead>\n                                    <tr>\n                                        <th>Description</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let member of swornMembers  | paginate: { itemsPerPage: 6, currentPage: p}\">\n                                        <td ><a href=\"{{member.url}}\">Sworn Member Character-{{member.name}}</a></td>\n                                    </tr>\n                                    <tr *ngIf=\"swornMembers.length === 0\"><td>No Records Found</td></tr>\n                                    </tbody>\n                                </table>\n                                <div class=\"row\" *ngIf=\"showDetails\">\n                                    <div class=\"col-12\">\n                                        <div class=\"bg-white text-center\">\n                                            <pagination-controls autoHide=\"true\" (pageChange)=\"p = $event\" maxSize=\"3\"></pagination-controls>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row justify-content-center\">\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancelHouses()\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/books/books.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gameofthrone/books/books.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGameofthroneBooksBooksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem;\n}\n.step .step-content .step-name {\n  font-size: 14px;\n}\n.step .step-content.confirmed {\n  background-color: #4BAE4F !important;\n}\n.confirmed-content .fa-check {\n  font-size: 120px;\n}\n.confirmed-content .fa-print {\n  font-size: 24px;\n}\n@media print {\n  body * {\n    visibility: hidden;\n  }\n\n  #section-to-print, #section-to-print * {\n    visibility: visible;\n  }\n\n  #section-to-print {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2Jvb2tzL0E6XFxpJm1fY29kZV90ZXN0XFxjb2RlX3Rlc3Qvc3JjXFxhcHBcXHBhZ2VzXFxnYW1lb2Z0aHJvbmVcXGJvb2tzXFxib29rcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FEQ1E7RUFDSSxvQ0FBQTtBQ0NaO0FES0k7RUFDSSxnQkFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0FDRlI7QURLQTtFQUNJO0lBQ0ksa0JBQUE7RUNGTjs7RURLRTtJQUNJLG1CQUFBO0VDRk47O0VES0U7SUFDSSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0VDRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbWVvZnRocm9uZS9ib29rcy9ib29rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwe1xuICAgIC5zdGVwLWNvbnRlbnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIC5zdGVwLW5hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5jb25maXJtZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJBRTRGICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb25maXJtZWQtY29udGVudHtcbiAgICAuZmEtY2hlY2t7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgfVxuICAgIC5mYS1wcmludHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gICAgYm9keSAqIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAvL3RyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIH1cbiAgICAjc2VjdGlvbi10by1wcmludCwgI3NlY3Rpb24tdG8tcHJpbnQgKiB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbiAgICB9XG4gICAgI3NlY3Rpb24tdG8tcHJpbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgLy90YWJsZSB7cGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO31cbn1cblxuIiwiLnN0ZXAgLnN0ZXAtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uc3RlcCAuc3RlcC1jb250ZW50IC5zdGVwLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc3RlcCAuc3RlcC1jb250ZW50LmNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QkFFNEYgIWltcG9ydGFudDtcbn1cblxuLmNvbmZpcm1lZC1jb250ZW50IC5mYS1jaGVjayB7XG4gIGZvbnQtc2l6ZTogMTIwcHg7XG59XG4uY29uZmlybWVkLWNvbnRlbnQgLmZhLXByaW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICBib2R5ICoge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gICNzZWN0aW9uLXRvLXByaW50LCAjc2VjdGlvbi10by1wcmludCAqIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgI3NlY3Rpb24tdG8tcHJpbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/books/books.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/gameofthrone/books/books.component.ts ***!
    \*************************************************************/

  /*! exports provided: BooksComponent */

  /***/
  function srcAppPagesGameofthroneBooksBooksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksComponent", function () {
      return BooksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./books.service */
    "./src/app/pages/gameofthrone/books/books.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BooksComponent = /*#__PURE__*/function () {
      function BooksComponent(formBuilder, modalService, booksService, router) {
        _classCallCheck(this, BooksComponent);

        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.booksService = booksService;
        this.router = router;
        this.showDetails = false; // hidden by default

        this.showList = true;
        this.selected = [];
        this.characters = [];
        this.povCharacters = [];
        this.authors = [];
      }

      _createClass(BooksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBooks();
          this.bookForm = this.formBuilder.group({
            'name': [''],
            'isbn': [''],
            'numberOfPages': [''],
            'publisher': [''],
            'country': [''],
            'mediaType': null,
            'released': null
          });
        }
      }, {
        key: "cancelInvoice",
        value: function cancelInvoice() {
          this.showList = true;
          this.characters = [];
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this20 = this;

          this.booksService.getBooks().subscribe(function (books) {
            return _this20.books = books;
          });
        }
      }, {
        key: "editBooks",
        value: function editBooks(book) {
          this.showList = false;
          this.showDetails = true;
          this.bookForm.controls['name'].setValue(book.name === '' ? 'NA' : book.name);

          if (book.authors.length > 0) {
            this.authors.push(book.authors);
          }

          var _iterator = _createForOfIteratorHelper(book.povCharacters),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var povCharObj = _step.value;
              // character.books[i].split('books/', 2)[1]
              this.characters.push({
                'name': povCharObj.split('characters/', 2)[1],
                'url': povCharObj
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var _iterator2 = _createForOfIteratorHelper(book.characters),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var charObj = _step2.value;
              // character.books[i].split('books/', 2)[1]
              this.characters.push({
                'name': charObj.split('characters/', 2)[1],
                'url': charObj
              });
            } // this.router.navigate([]).then(result => {  window.open('/gameofthrone/character', '_blank'); });

          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }]);

      return BooksComponent;
    }();

    BooksComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-books',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./books.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/books/books.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      providers: [_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./books.component.scss */
      "./src/app/pages/gameofthrone/books/books.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], BooksComponent);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/books/books.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/gameofthrone/books/books.service.ts ***!
    \***********************************************************/

  /*! exports provided: BooksService */

  /***/
  function srcAppPagesGameofthroneBooksBooksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooksService", function () {
      return BooksService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var BooksService = /*#__PURE__*/function () {
      function BooksService(http) {
        _classCallCheck(this, BooksService);

        this.http = http;
      }

      _createClass(BooksService, [{
        key: "getBooks",
        value: function getBooks() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL + 'books');
        }
      }]);

      return BooksService;
    }();

    BooksService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], BooksService);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/character/character.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/gameofthrone/character/character.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGameofthroneCharacterCharacterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem;\n}\n.step .step-content .step-name {\n  font-size: 14px;\n}\n.step .step-content.confirmed {\n  background-color: #4BAE4F !important;\n}\n.confirmed-content .fa-check {\n  font-size: 120px;\n}\n.confirmed-content .fa-print {\n  font-size: 24px;\n}\n@media print {\n  body * {\n    visibility: hidden;\n  }\n\n  #section-to-print, #section-to-print * {\n    visibility: visible;\n  }\n\n  #section-to-print {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2NoYXJhY3Rlci9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFxwYWdlc1xcZ2FtZW9mdGhyb25lXFxjaGFyYWN0ZXJcXGNoYXJhY3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURDUTtFQUNJLG9DQUFBO0FDQ1o7QURLSTtFQUNJLGdCQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7QUNGUjtBREtBO0VBQ0k7SUFDSSxrQkFBQTtFQ0ZOOztFREtFO0lBQ0ksbUJBQUE7RUNGTjs7RURLRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2NoYXJhY3Rlci9jaGFyYWN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHtcbiAgICAuc3RlcC1jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAuc3RlcC1uYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgICYuY29uZmlybWVke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRCQUU0RiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29uZmlybWVkLWNvbnRlbnR7XG4gICAgLmZhLWNoZWNre1xuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgIH1cbiAgICAuZmEtcHJpbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAgIGJvZHkgKiB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLy90cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgICB9XG4gICAgI3NlY3Rpb24tdG8tcHJpbnQsICNzZWN0aW9uLXRvLXByaW50ICoge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG4gICAgfVxuICAgICNzZWN0aW9uLXRvLXByaW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC8vdGFibGUge3BhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDt9XG59XG5cbiIsIi5zdGVwIC5zdGVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN0ZXAgLnN0ZXAtY29udGVudC5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJBRTRGICFpbXBvcnRhbnQ7XG59XG5cbi5jb25maXJtZWQtY29udGVudCAuZmEtY2hlY2sge1xuICBmb250LXNpemU6IDEyMHB4O1xufVxuLmNvbmZpcm1lZC1jb250ZW50IC5mYS1wcmludCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgYm9keSAqIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAjc2VjdGlvbi10by1wcmludCwgI3NlY3Rpb24tdG8tcHJpbnQgKiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gICNzZWN0aW9uLXRvLXByaW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/character/character.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/gameofthrone/character/character.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CharacterComponent */

  /***/
  function srcAppPagesGameofthroneCharacterCharacterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterComponent", function () {
      return CharacterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _character_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./character.service */
    "./src/app/pages/gameofthrone/character/character.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CharacterComponent = /*#__PURE__*/function () {
      function CharacterComponent(formBuilder, modalService, characterService, router) {
        _classCallCheck(this, CharacterComponent);

        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.characterService = characterService;
        this.router = router;
        this.details = {};
        this.showDetails = true; // hidden by default

        this.showList = true;
        this.selected = [];
        this.books = [];
        this.povbooks = [];
        this.allegiances = [];
        this.tvSeries = [];
      }

      _createClass(CharacterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCharacters();
          this.personalForm = this.formBuilder.group({
            'name': [''],
            'aliases': [''],
            'gender': [''],
            'father': [''],
            'mother': [''],
            'spouse': [''],
            'born': null,
            'died': null,
            'culture': null
          });
        }
      }, {
        key: "cancelCharacter",
        value: function cancelCharacter() {
          this.showList = true;
          this.showDetails = true;
        }
      }, {
        key: "getCharacters",
        value: function getCharacters() {
          var _this21 = this;

          this.characterService.getCharacters().subscribe(function (characters) {
            return _this21.characters = characters;
          });
        }
      }, {
        key: "editMember",
        value: function editMember(character) {
          this.showList = false;
          this.showDetails = false;
          this.personalForm.controls['name'].setValue(character.name === '' ? 'NA' : character.name);
          this.personalForm.controls['aliases'].setValue(character.aliases);
          this.personalForm.controls['gender'].setValue(character.gender === '' ? 'NA' : character.gender);
          this.personalForm.controls['culture'].setValue(character.culture === '' ? 'NA' : character.culture);
          this.personalForm.controls['born'].setValue(character.born === '' ? 'NA' : character.born);
          this.personalForm.controls['died'].setValue(character.died === '' ? 'NA' : character.died);
          this.personalForm.controls['father'].setValue(character.father === '' ? 'NA' : character.father);
          this.personalForm.controls['mother'].setValue(character.mother === '' ? 'NA' : character.mother);
          this.personalForm.controls['spouse'].setValue(character.spouse === '' ? 'NA' : character.spouse); // this.books=character.books;

          if (character.povBooks.length > 0) {
            this.povbooks.push(character.povBooks);
          }

          if (character.allegiances.length > 0) {
            this.allegiances.push(character.allegiances);
          }

          if (character.tvSeries.length > 0) {
            this.tvSeries.push(character.tvSeries);
          }

          if (character.playedBy !== '') {
            this.playedBy = character.playedBy;
          } else {
            this.playedBy = null;
          }

          if (character.titles !== '') {
            this.titles = character.titles;
          } else {
            this.titles = null;
          }

          for (var i = 0; i < character.books.length; i++) {
            // character.books[i].split('books/', 2)[1]
            this.books.push({
              'name': character.books[i].split('books/', 2)[1],
              'url': character.books[i]
            });
          } // this.router.navigate([]).then(result => {  window.open('/gameofthrone/character', '_blank'); });

        }
      }, {
        key: "openModal",
        value: function openModal(modalContent, character) {
          var _this22 = this;

          // this.showList = false;
          // this.showDetails = false;
          this.personalForm.controls['name'].setValue(character.name === '' ? 'NA' : character.name);
          this.personalForm.controls['aliases'].setValue(character.aliases);
          this.personalForm.controls['gender'].setValue(character.gender === '' ? 'NA' : character.gender);
          this.personalForm.controls['culture'].setValue(character.culture === '' ? 'NA' : character.culture);
          this.personalForm.controls['born'].setValue(character.born === '' ? 'NA' : character.born);
          this.personalForm.controls['died'].setValue(character.died === '' ? 'NA' : character.died);
          this.personalForm.controls['father'].setValue(character.father === '' ? 'NA' : character.father);
          this.personalForm.controls['mother'].setValue(character.mother === '' ? 'NA' : character.mother);
          this.personalForm.controls['spouse'].setValue(character.spouse === '' ? 'NA' : character.spouse); // this.books=character.books;

          if (character.povBooks.length > 0) {
            this.povbooks.push(character.povBooks);
          }

          if (character.allegiances.length > 0) {
            this.allegiances.push(character.allegiances);
          }

          if (character.tvSeries.length > 0) {
            this.tvSeries.push(character.tvSeries);
          }

          if (character.playedBy !== '') {
            this.playedBy = character.playedBy;
          } else {
            this.playedBy = null;
          }

          if (character.titles !== '') {
            this.titles = character.titles;
          } else {
            this.titles = null;
          }

          for (var i = 0; i < character.books.length; i++) {
            // character.books[i].split('books/', 2)[1]
            this.books.push({
              'name': character.books[i].split('books/', 2)[1],
              'url': character.books[i]
            });
          }

          this.modalRef = this.modalService.open(modalContent, {
            container: '.app'
          });
          this.modalRef.result.then(function (result) {
            _this22.personalForm.reset();
          }, function (reason) {
            _this22.personalForm.reset();
          });
        }
      }]);

      return CharacterComponent;
    }();

    CharacterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CharacterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-character',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./character.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/character/character.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      providers: [_character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./character.component.scss */
      "./src/app/pages/gameofthrone/character/character.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _character_service__WEBPACK_IMPORTED_MODULE_4__["CharacterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], CharacterComponent);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/character/character.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/gameofthrone/character/character.service.ts ***!
    \*******************************************************************/

  /*! exports provided: CharacterService */

  /***/
  function srcAppPagesGameofthroneCharacterCharacterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterService", function () {
      return CharacterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var CharacterService = /*#__PURE__*/function () {
      function CharacterService(http) {
        _classCallCheck(this, CharacterService);

        this.http = http;
      }

      _createClass(CharacterService, [{
        key: "getCharacters",
        value: function getCharacters() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL + 'characters');
        }
      }]);

      return CharacterService;
    }();

    CharacterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CharacterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CharacterService);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/gameofthrone.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/gameofthrone/gameofthrone.module.ts ***!
    \***********************************************************/

  /*! exports provided: routes, GameofthroneModule */

  /***/
  function srcAppPagesGameofthroneGameofthroneModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameofthroneModule", function () {
      return GameofthroneModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-2-dropdown-multiselect */
    "./node_modules/angular-2-dropdown-multiselect/fesm2015/angular-2-dropdown-multiselect.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _character_character_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./character/character.component */
    "./src/app/pages/gameofthrone/character/character.component.ts");
    /* harmony import */


    var ng2_validation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng2-validation */
    "./node_modules/ng2-validation/dist/index.js");
    /* harmony import */


    var ng2_validation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @swimlane/ngx-charts */
    "./node_modules/@swimlane/ngx-charts/release/esm.js");
    /* harmony import */


    var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-ckeditor */
    "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
    /* harmony import */


    var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../theme/directives/directives.module */
    "./src/app/theme/directives/directives.module.ts");
    /* harmony import */


    var _books_books_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./books/books.component */
    "./src/app/pages/gameofthrone/books/books.component.ts");
    /* harmony import */


    var _houses_houses_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./houses/houses.component */
    "./src/app/pages/gameofthrone/houses/houses.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'controls',
      pathMatch: 'full'
    }, {
      path: 'character',
      component: _character_character_component__WEBPACK_IMPORTED_MODULE_10__["CharacterComponent"],
      data: {
        breadcrumb: 'Character'
      }
    }, {
      path: 'books',
      component: _books_books_component__WEBPACK_IMPORTED_MODULE_15__["BooksComponent"],
      data: {
        breadcrumb: 'Books'
      }
    }, {
      path: 'houses',
      component: _houses_houses_component__WEBPACK_IMPORTED_MODULE_16__["HousesComponent"],
      data: {
        breadcrumb: 'Houses'
      }
    }];

    var GameofthroneModule = function GameofthroneModule() {
      _classCallCheck(this, GameofthroneModule);
    };

    GameofthroneModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiselectDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ng2_validation__WEBPACK_IMPORTED_MODULE_11__["CustomFormsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_13__["CKEditorModule"], _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_character_character_component__WEBPACK_IMPORTED_MODULE_10__["CharacterComponent"], _books_books_component__WEBPACK_IMPORTED_MODULE_15__["BooksComponent"], _houses_houses_component__WEBPACK_IMPORTED_MODULE_16__["HousesComponent"]]
    })], GameofthroneModule);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/houses/houses.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/gameofthrone/houses/houses.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGameofthroneHousesHousesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step .step-content {\n  background: #b9b9b9;\n  height: 40px;\n  font-size: 1.5rem;\n}\n.step .step-content .step-name {\n  font-size: 14px;\n}\n.step .step-content.confirmed {\n  background-color: #4BAE4F !important;\n}\n.confirmed-content .fa-check {\n  font-size: 120px;\n}\n.confirmed-content .fa-print {\n  font-size: 24px;\n}\n@media print {\n  body * {\n    visibility: hidden;\n  }\n\n  #section-to-print, #section-to-print * {\n    visibility: visible;\n  }\n\n  #section-to-print {\n    position: absolute;\n    left: 0;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2hvdXNlcy9BOlxcaSZtX2NvZGVfdGVzdFxcY29kZV90ZXN0L3NyY1xcYXBwXFxwYWdlc1xcZ2FtZW9mdGhyb25lXFxob3VzZXNcXGhvdXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2hvdXNlcy9ob3VzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FSO0FEQ1E7RUFDSSxlQUFBO0FDQ1o7QURDUTtFQUNJLG9DQUFBO0FDQ1o7QURLSTtFQUNJLGdCQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7QUNGUjtBREtBO0VBQ0k7SUFDSSxrQkFBQTtFQ0ZOOztFREtFO0lBQ0ksbUJBQUE7RUNGTjs7RURLRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZW9mdGhyb25lL2hvdXNlcy9ob3VzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHtcbiAgICAuc3RlcC1jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAuc3RlcC1uYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgICYuY29uZmlybWVke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRCQUU0RiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29uZmlybWVkLWNvbnRlbnR7XG4gICAgLmZhLWNoZWNre1xuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xuICAgIH1cbiAgICAuZmEtcHJpbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5AbWVkaWEgcHJpbnQge1xuICAgIGJvZHkgKiB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLy90cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgICB9XG4gICAgI3NlY3Rpb24tdG8tcHJpbnQsICNzZWN0aW9uLXRvLXByaW50ICoge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG4gICAgfVxuICAgICNzZWN0aW9uLXRvLXByaW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuICAgIC8vdGFibGUge3BhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDt9XG59XG5cbiIsIi5zdGVwIC5zdGVwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnN0ZXAgLnN0ZXAtY29udGVudCAuc3RlcC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnN0ZXAgLnN0ZXAtY29udGVudC5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEJBRTRGICFpbXBvcnRhbnQ7XG59XG5cbi5jb25maXJtZWQtY29udGVudCAuZmEtY2hlY2sge1xuICBmb250LXNpemU6IDEyMHB4O1xufVxuLmNvbmZpcm1lZC1jb250ZW50IC5mYS1wcmludCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgYm9keSAqIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAjc2VjdGlvbi10by1wcmludCwgI3NlY3Rpb24tdG8tcHJpbnQgKiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gICNzZWN0aW9uLXRvLXByaW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/houses/houses.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/gameofthrone/houses/houses.component.ts ***!
    \***************************************************************/

  /*! exports provided: HousesComponent */

  /***/
  function srcAppPagesGameofthroneHousesHousesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HousesComponent", function () {
      return HousesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _houses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./houses.service */
    "./src/app/pages/gameofthrone/houses/houses.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HousesComponent = /*#__PURE__*/function () {
      function HousesComponent(formBuilder, modalService, housesService, router) {
        _classCallCheck(this, HousesComponent);

        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.housesService = housesService;
        this.router = router;
        this.showDetails = false; // hidden by default

        this.showList = true;
        this.selected = [];
        this.seats = [];
        this.titles = [];
        this.cadetBranches = [];
        this.swornMembers = [];
        this.ancestralWeapons = [];
      }

      _createClass(HousesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getHouses();
          this.houseForm = this.formBuilder.group({
            'name': [''],
            'isbn': [''],
            'numberOfPages': [''],
            'publisher': [''],
            'country': [''],
            'mediaType': null,
            'released': null
          });
        }
      }, {
        key: "cancelHouses",
        value: function cancelHouses() {
          this.showList = true;
          this.houses = [];
        }
      }, {
        key: "getHouses",
        value: function getHouses() {
          var _this23 = this;

          this.housesService.getHouses().subscribe(function (houses) {
            return _this23.houses = houses;
          });
        }
      }, {
        key: "editHouse",
        value: function editHouse(house) {
          this.showList = false;
          this.showDetails = true;
          this.houseForm.controls['name'].setValue(house.name === '' ? 'NA' : house.name);
          this.houseForm.controls['region'].setValue(house.region === '' ? 'NA' : house.region);
          this.houseForm.controls['coatOfArms'].setValue(house.coatOfArms === '' ? 'NA' : house.coatOfArms);
          this.houseForm.controls['words'].setValue(house.words === '' ? 'NA' : house.words);
          this.houseForm.controls['currentLord'].setValue(house.currentLord === '' ? 'NA' : house.currentLord);
          this.houseForm.controls['heir'].setValue(house.heir === '' ? 'NA' : house.heir);
          this.houseForm.controls['overlord'].setValue(house.overlord === '' ? 'NA' : house.overlord);
          this.houseForm.controls['founded'].setValue(house.founded === '' ? 'NA' : house.founded);
          this.houseForm.controls['founder'].setValue(house.founder === '' ? 'NA' : house.founder);
          this.houseForm.controls['diedOut'].setValue(house.diedOut === '' ? 'NA' : house.diedOut);

          if (house.ancestralWeapons.length > 0) {
            this.ancestralWeapons.push(house.ancestralWeapons);
          }

          if (house.titles.length > 0) {
            this.titles.push(house.titles);
          }

          if (house.seats.length > 0) {
            this.seats.push(house.seats);
          }

          var _iterator3 = _createForOfIteratorHelper(house.swornMembers),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var member = _step3.value;
              // character.books[i].split('books/', 2)[1]
              this.swornMembers.push({
                'name': member.split('characters/', 2)[1],
                'url': member
              });
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var _iterator4 = _createForOfIteratorHelper(house.cadetBranches),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var houseObj = _step4.value;
              // character.books[i].split('books/', 2)[1]
              this.cadetBranches.push({
                'name': houseObj.split('houses/', 2)[1],
                'url': houseObj
              });
            } // this.router.navigate([]).then(result => {  window.open('/gameofthrone/character', '_blank'); });

          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }]);

      return HousesComponent;
    }();

    HousesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _houses_service__WEBPACK_IMPORTED_MODULE_4__["HousesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    HousesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-houses',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./houses.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gameofthrone/houses/houses.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      providers: [_houses_service__WEBPACK_IMPORTED_MODULE_4__["HousesService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./houses.component.scss */
      "./src/app/pages/gameofthrone/houses/houses.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _houses_service__WEBPACK_IMPORTED_MODULE_4__["HousesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], HousesComponent);
    /***/
  },

  /***/
  "./src/app/pages/gameofthrone/houses/houses.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/gameofthrone/houses/houses.service.ts ***!
    \*************************************************************/

  /*! exports provided: HousesService */

  /***/
  function srcAppPagesGameofthroneHousesHousesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HousesService", function () {
      return HousesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var HousesService = /*#__PURE__*/function () {
      function HousesService(http) {
        _classCallCheck(this, HousesService);

        this.http = http;
      }

      _createClass(HousesService, [{
        key: "getHouses",
        value: function getHouses() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL + 'houses/');
        }
      }]);

      return HousesService;
    }();

    HousesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    HousesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], HousesService);
    /***/
  }
}]);
//# sourceMappingURL=pages-gameofthrone-gameofthrone-module-es5.js.map