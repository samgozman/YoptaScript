function FALLBACK() {
    'use strict';
    // Add ECMA262-5 method binding if not supported natively
//
    if (!('bind' in Function.prototype)) {
        Function.prototype.bind = function (owner) {
            var that = this;
            if (arguments.length <= 1) {
                return function () {
                    return that.apply(owner, arguments);
                };
            } else {
                var args = Array.prototype.slice.call(arguments, 1);
                return function () {
                    return that.apply(owner, arguments.length === 0 ? args : args.concat(Array.prototype.slice.call(arguments)));
                };
            }
        };
    }
// Add ECMA262-5 string trim if not supported natively
//
    if (!('trim' in String.prototype)) {
        String.prototype.trim = function () {
            return this.replace(/^\s+/, '').replace(/\s+$/, '');
        };
    }
// Add ECMA262-5 Array methods if not supported natively
//
    if (!('indexOf' in Array.prototype)) {
        Array.prototype.indexOf = function (find, i /*opt*/) {
            if (i === undefined) i = 0;
            if (i < 0) i += this.length;
            if (i < 0) i = 0;
            for (var n = this.length; i < n; i++)
                if (i in this && this[i] === find)
                    return i;
            return -1;
        };
    }
    if (!('lastIndexOf' in Array.prototype)) {
        Array.prototype.lastIndexOf = function (find, i /*opt*/) {
            if (i === undefined) i = this.length - 1;
            if (i < 0) i += this.length;
            if (i > this.length - 1) i = this.length - 1;
            for (i++; i-- > 0;) /* i++ because from-argument is sadly inclusive */
                if (i in this && this[i] === find)
                    return i;
            return -1;
        };
    }
    if (!('forEach' in Array.prototype)) {
        Array.prototype.forEach = function (action, that /*opt*/) {
            for (var i = 0, n = this.length; i < n; i++)
                if (i in this)
                    action.call(that, this[i], i, this);
        };
    }
    if (!('map' in Array.prototype)) {
        Array.prototype.map = function (mapper, that /*opt*/) {
            var other = new Array(this.length);
            for (var i = 0, n = this.length; i < n; i++)
                if (i in this)
                    other[i] = mapper.call(that, this[i], i, this);
            return other;
        };
    }
    if (!('filter' in Array.prototype)) {
        Array.prototype.filter = function (filter, that /*opt*/) {
            var other = [], v;
            for (var i = 0, n = this.length; i < n; i++)
                if (i in this && filter.call(that, v = this[i], i, this))
                    other.push(v);
            return other;
        };
    }
    if (!('every' in Array.prototype)) {
        Array.prototype.every = function (tester, that /*opt*/) {
            for (var i = 0, n = this.length; i < n; i++)
                if (i in this && !tester.call(that, this[i], i, this))
                    return false;
            return true;
        };
    }
    if (!('some' in Array.prototype)) {
        Array.prototype.some = function (tester, that /*opt*/) {
            for (var i = 0, n = this.length; i < n; i++)
                if (i in this && tester.call(that, this[i], i, this))
                    return true;
            return false;
        };
    }
    if (typeof Object.assign != 'function') {
        Object.assign = function (target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource != null) { // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        };
    }
    if (!window.localStorage) {
        window.localStorage = {
            days: 30,
            setItem: function (name, value, days) {
                days = days || this.days;
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                let expires = "; expires=" + date.toGMTString();
                if (this.getItem(name)) {
                    this.removeItem(name);
                }
                document.cookie = name + "=" + value + expires + "; path=/";
                return;
            },
            getItem: function (name) {
                let nameEQ = name + "=";
                let ca = document.cookie.split(";");
                for (let i = 0; i < ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) {
                        let ret = c.substring(nameEQ.length, c.length);
                        switch (ret) {
                            case 'true':
                                return true;
                            case 'false':
                                return false;
                            default:
                                return ret
                        }
                    }
                }
            },
            removeItem: function (name) {
                this.setItem(name, "", -1);
            }
        }
    }
}

module.exports = FALLBACK;
