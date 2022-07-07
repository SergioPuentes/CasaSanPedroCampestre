// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _index = require("./routes/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _animations = require("../src/css/animation/animations");
var _scrollReveal = require("../src/css/animation/scripts/scrollReveal");
var _scrollRevealDefault = parcelHelpers.interopDefault(_scrollReveal);
var _tiltAnimation = require("../src/css/animation/scripts/tiltAnimation");
var _tiltAnimationDefault = parcelHelpers.interopDefault(_tiltAnimation);
window.addEventListener("load", (0, _indexDefault.default));
let button1 = document.getElementById("bmenu-selected1");
button1.addEventListener("click", async ()=>{
    await elegir("1");
    await (0, _indexDefault.default)();
    await scroll();
});
let button2 = document.getElementById("bmenu-selected2");
button2.addEventListener("click", async ()=>{
    await elegir("2");
    await (0, _indexDefault.default)();
    await scroll();
});
let button3 = document.getElementById("bmenu-selected3");
button3.addEventListener("click", async ()=>{
    await elegir("3");
    await (0, _indexDefault.default)();
    await scroll();
});
let button4 = document.getElementById("bmenu-selected4");
button4.addEventListener("click", async ()=>{
    await elegir("4");
    await (0, _indexDefault.default)();
    await scroll();
});
let button5 = document.getElementById("bmenu-selected5");
button5.addEventListener("click", async ()=>{
    await elegir("5");
    await (0, _indexDefault.default)();
    await scroll();
});
let button6 = document.getElementById("bmenu-selected6");
button6.addEventListener("click", async ()=>{
    await elegir("6");
    await (0, _indexDefault.default)();
    await scroll();
});
let button7 = document.getElementById("bmenu-selected7");
button7.addEventListener("click", async ()=>{
    await elegir("7");
    await (0, _indexDefault.default)();
    await scroll();
});
let button8 = document.getElementById("bmenu-selected8");
button8.addEventListener("click", async ()=>{
    await elegir("8");
    await (0, _indexDefault.default)();
    await scroll();
});
let button9 = document.getElementById("bmenu-selected9");
button9.addEventListener("click", async ()=>{
    await elegir("9");
    await (0, _indexDefault.default)();
    await scroll();
});
let button10 = document.getElementById("bmenu-selected10");
button10.addEventListener("click", async ()=>{
    await elegir("10");
    await (0, _indexDefault.default)();
    await scroll();
});
function elegir(a) {
    let targetURL = "#menu-selected" + a;
    let newURL = document.createElement("a");
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
function scroll() {
    let targetURL = "#menu-selected";
    let newURL = document.createElement("a");
    newURL.href = targetURL;
    document.body.appendChild(newURL);
    newURL.click();
}
(0, _scrollRevealDefault.default)((0, _animations.targetElements), (0, _animations.defaultProps));
(0, _tiltAnimationDefault.default)();

},{"./routes/index":"3L9mC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../src/css/animation/animations":"kgazZ","../src/css/animation/scripts/scrollReveal":"lxJWf","../src/css/animation/scripts/tiltAnimation":"ii0zF"}],"3L9mC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHash = require("../utils/getHash");
var _getHashDefault = parcelHelpers.interopDefault(_getHash);
var _resolveRoutes = require("../utils/resolveRoutes");
var _resolveRoutesDefault = parcelHelpers.interopDefault(_resolveRoutes);
var _getProduct = require("../utils/getProduct");
var _getProductDefault = parcelHelpers.interopDefault(_getProduct);
var _nada = require("../components/nada");
var _nadaDefault = parcelHelpers.interopDefault(_nada);
const routes = {
    "#specialty": (0, _nadaDefault.default),
    "/:id": (0, _getProductDefault.default)
};
const router = async ()=>{
    const content = document.getElementById("menu-selected");
    let hash = (0, _getHashDefault.default)();
    let route = await (0, _resolveRoutesDefault.default)(hash);
    let render = routes[route] ? routes[route] : (0, _nadaDefault.default);
    content.parentNode;
    content.removeChild(content.firstChild || null);
    content.innerHTML = await render();
};
exports.default = router;

},{"../utils/getHash":"cBXxo","../utils/resolveRoutes":"45qF6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils/getProduct":"leJS3","../components/nada":"5Pv0i"}],"cBXxo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const getHash = ()=>location.hash.slice(1).toLocaleLowerCase().split("*")[0] || "/";
exports.default = getHash;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"45qF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const resolveRoutes = (route)=>{
    if (route.length <= 25) {
        let validRoute = route === "#specialty" ? route : "/:id";
        return validRoute;
    }
    return `/${route}`;
};
exports.default = resolveRoutes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leJS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getHash = require("../utils/getHash");
var _getHashDefault = parcelHelpers.interopDefault(_getHash);
var _item = require("../components/item");
var _itemDefault = parcelHelpers.interopDefault(_item);
var _entradas = require("../products/entradas");
var _entradasDefault = parcelHelpers.interopDefault(_entradas);
var _ensaladas = require("../products/ensaladas");
var _ensaladasDefault = parcelHelpers.interopDefault(_ensaladas);
var _carnesPescadosYPicadas = require("../products/carnesPescadosYPicadas");
var _carnesPescadosYPicadasDefault = parcelHelpers.interopDefault(_carnesPescadosYPicadas);
var _platosTipicos = require("../products/platosTipicos");
var _platosTipicosDefault = parcelHelpers.interopDefault(_platosTipicos);
var _pastasYRaviolis = require("../products/pastasYRaviolis");
var _pastasYRaviolisDefault = parcelHelpers.interopDefault(_pastasYRaviolis);
var _pizzasYHamburguesas = require("../products/pizzasYHamburguesas");
var _pizzasYHamburguesasDefault = parcelHelpers.interopDefault(_pizzasYHamburguesas);
var _menuInfantil = require("../products/menuInfantil");
var _menuInfantilDefault = parcelHelpers.interopDefault(_menuInfantil);
var _postres = require("../products/postres");
var _postresDefault = parcelHelpers.interopDefault(_postres);
var _bebidas = require("../products/bebidas");
var _bebidasDefault = parcelHelpers.interopDefault(_bebidas);
var _bebidasCalientes = require("../products/bebidasCalientes");
var _bebidasCalientesDefault = parcelHelpers.interopDefault(_bebidasCalientes);
var _nada = require("../components/nada");
var _nadaDefault = parcelHelpers.interopDefault(_nada);
let title = "";
const data = ()=>{
    let hash = (0, _getHashDefault.default)();
    if (hash == "menu-selected1") {
        title = "Entradas";
        return 0, _entradasDefault.default;
    } else if (hash == "menu-selected2") {
        title = "Ensaladas";
        return 0, _ensaladasDefault.default;
    } else if (hash == "menu-selected3") {
        title = "Carnes, Pescados y Picadas";
        return 0, _carnesPescadosYPicadasDefault.default;
    } else if (hash == "menu-selected4") {
        title = "Platos Tipicos (Fines de semana)";
        return 0, _platosTipicosDefault.default;
    } else if (hash == "menu-selected5") {
        title = "Pastas y Raviolis";
        return 0, _pastasYRaviolisDefault.default;
    } else if (hash == "menu-selected6") {
        title = "Pizzas y Hamburguesas";
        return 0, _pizzasYHamburguesasDefault.default;
    } else if (hash == "menu-selected7") {
        title = "Men\xfa Infantil";
        return 0, _menuInfantilDefault.default;
    } else if (hash == "menu-selected8") {
        title = "Postres";
        return 0, _postresDefault.default;
    } else if (hash == "menu-selected9") {
        title = "Bebidas";
        return 0, _bebidasDefault.default;
    } else if (hash == "menu-selected10") {
        title = "Bebidas Calientes";
        return 0, _bebidasCalientesDefault.default;
    }
};
const menu = async ()=>{
    const info = await data();
    return `<div class="menu-selected" id="${(0, _getHashDefault.default)() + "*"}"> 
                <div class="item-container">
                <div class="close-icon"><a href="/#specialty"><img rel="icon" src="https://icon-library.com/images/svg-close-icon/svg-close-icon-4.jpg" width="20px"></a></div>
        <div>
        <h2>${title}</h2>
        <div>
        ${info.map((item)=>(0, _itemDefault.default)(item))}
        </div>
        </div>
        </div>
        </div>`;
};
exports.default = menu;

},{"../components/item":"klNFr","../products/entradas":"asvwq","../products/ensaladas":"ddM1b","../products/carnesPescadosYPicadas":"gEoRi","../products/platosTipicos":"2xGK2","../products/pastasYRaviolis":"lxKQQ","../products/pizzasYHamburguesas":"iHxj4","../products/menuInfantil":"cOWPo","../products/postres":"hcbve","../products/bebidas":"i4Bml","../products/bebidasCalientes":"f4vYM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../utils/getHash":"cBXxo","../components/nada":"5Pv0i"}],"klNFr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const returnItem = (data)=>{
    return `<div class="item-info">
    <h3>${data.name}</h3>
    <p>${data.ingredients}</p>
    <span>$ ${data.price}</span>
</div>`;
};
exports.default = returnItem;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asvwq":[function(require,module,exports) {
const entradas = [
    {
        name: "Ceviche de camarones con coco",
        ingredients: "",
        price: 21000
    },
    {
        name: "Morcillitas Club a la parrilla",
        ingredients: "ba\xf1adas en cebolla caramelizada y acompa\xf1adas con papa casco",
        price: 19500
    },
    {
        name: "Chicharrones al Horno",
        ingredients: "acompa\xf1ados con yuca al vapor y hogao o envuelto de mazorca",
        price: 24000
    },
    {
        name: "Chorizo San Pedro",
        ingredients: "Chorizo de cerdo artesanal 100% colombiano (bajo en grasa y sin conservantes), acompa\xf1ado de papa criolla, aj\xed casero y cascos de lim\xf3n",
        price: 19500
    },
    {
        name: "Sopa del d\xeda",
        ingredients: "(sin acompa\xf1amiento)",
        price: 12000
    }
];
module.exports = entradas;

},{}],"ddM1b":[function(require,module,exports) {
const ensaladas = [
    {
        name: "Ensalada de la Casa con Pollo",
        ingredients: "Pollo en julianas, lechuga crespa, crotones, maiz tierno, champi\xf1on, parmesano y vinagreta de la casa",
        price: 25000
    },
    {
        name: "Ensalada Mediterr\xe1nea",
        ingredients: "Mezclun de lechugas, tomates cherry, queso mozzarella, espinaca, champi\xf1ones, mix de mariscos salteados y crotones",
        price: 32000
    }
];
module.exports = ensaladas;

},{}],"gEoRi":[function(require,module,exports) {
const carnesPescadosYPicadas = [
    {
        name: "Punta de Anca",
        ingredients: "A la parrilla con chimichurri antiguo, acompa\xf1ada de papa casco y ensalada",
        price: 47000
    },
    {
        name: "Newyork",
        ingredients: "Carne de res (magra), corte americano. A la parrilla acompa\xf1ado de papa casco y ensalada",
        price: 48000
    },
    {
        name: "Lomo San Pedro",
        ingredients: "Lomo fino de res a la parrilla, ba\xf1ado en Salsa de la casa (tocinieta Crunch y champi\xf1ones), acompa\xf1ado de papa Casco, pasta alfredo y ensalada",
        price: 49000
    },
    {
        name: "Lomo Encebollado",
        ingredients: "Lomo fino de res ba\xf1ado en cebollas caramelizadas acompa\xf1ado de pure de artesanal y ensalada de la casa",
        price: 47000
    },
    {
        name: "Picada San Pedro",
        ingredients: "Carne de Res, pechuga de pollo, carne de cerdo, chorizo, costillas ahumadas, morcilla, papa criolla, cebollitas oca\xf1eras y arepa boyacense (2 personas)",
        price: 67000
    },
    {
        name: "Pollo a las finas hierbas",
        ingredients: "Pollo al horno a las finas hierbas, acompa\xf1ado con pure artesanal, pasta alfredo y ensalada Opcional:ba\xf1ado en salsa de la casa (tocinieta Crunch y champi\xf1ones)",
        price: 35000
    },
    {
        name: "Carne Angus",
        ingredients: "Entra\xf1ita (300 gramos)(Carne de res Agus Premium seleccionada por el departamento de Agricultura de Estados Unidos). Carne a la parrilla, acompa\xf1ada de pasta Alfredo y ensalada de la casa",
        price: 61000
    },
    {
        name: "Rib Eye(300 gramos)",
        ingredients: "(Carne de res Angus, entrecot sin hueso). Carne a la parrilla acompa\xf1ada de pasta Alfredo y ensalada de la casa",
        price: 64000
    },
    {
        name: "Mojarra al horno",
        ingredients: "Mojarra al horno, acompa\xf1ada de yuca al vapor, arepa boyacense y guacamole",
        price: 44000
    },
    {
        name: "Salm\xf3n a la parrilla",
        ingredients: "Filete de Salm\xf3n a la parrilla, ba\xf1ado en salsa de maracuy\xe1 y servido en una cama de pure artesanal, acompa\xf1ado de bastoncitos de vegetales",
        price: 42000
    },
    {
        name: "Cazuela de Mariscos",
        ingredients: "acompa\xf1ada de arroz de coco y Patacones",
        price: 45000
    },
    {
        name: "Paella Valenciana",
        ingredients: "acompa\xf1ada de Pan Baguett (Fines de Semana)",
        price: 43000
    }, 
];
module.exports = carnesPescadosYPicadas;

},{}],"2xGK2":[function(require,module,exports) {
const platosTipicos = [
    {
        name: "Guiso de Cola",
        ingredients: "acompa\xf1ado de arroz blanco, mazorca, laminas de papa al vapor y aguacate",
        price: 35000
    },
    {
        name: "SobreBarriga al Horno",
        ingredients: "Servida en una cama de pur\xe9 artesanal y vegetales al vapor",
        price: 32000
    },
    {
        name: "Ajiaco con Pollo",
        ingredients: "Servida con pierna pernil, arroz blanco, aguacate maduro, mazorca, crema de leche y alcaparras",
        price: 28000
    }, 
];
module.exports = platosTipicos;

},{}],"lxKQQ":[function(require,module,exports) {
const pastasYRaviolis = [
    {
        name: "En salsa blanca acompa\xf1ada de pollo grille o tocineta",
        ingredients: "",
        price: 38000
    },
    {
        name: "Con Pollo y Tocineta",
        ingredients: "",
        price: 40000
    },
    {
        name: "Con Carnes Italianas",
        ingredients: "",
        price: 45000
    },
    {
        name: "Con Frutos del Mar",
        ingredients: "",
        price: 59000
    },
    {
        name: "Tradicional",
        ingredients: "(sin acompa\xf1amiento)",
        price: 33000
    },
    {
        name: "Con Vegetales",
        ingredients: "(opcion vegetariana)",
        price: 36000
    },
    {
        name: "Con Lomo en salsa de la Casa",
        ingredients: "",
        price: 63000
    },
    {
        name: "Raviolis de Ricotta y Espinaca",
        ingredients: "Pasta rellena de ricota y espinaca ba\xf1ados en salsa de la casa o en salsa napolitana",
        price: 31000
    }, 
];
module.exports = pastasYRaviolis;

},{}],"iHxj4":[function(require,module,exports) {
const pizzasYHamburguesas = [
    {
        name: "Pizza San Pedro",
        ingredients: "Salsa base de tomate, pepperoni, salami, jamon, queso mozzarella y hojas de albahaca fresca",
        price: "52000 (8 porc) || $ 39000 (4 porc)"
    },
    {
        name: "Pizza Huerto",
        ingredients: "Salsa de base de tomate, alcachofas, zucchini, berenjenas, r\xfagula y queso doble mozarella",
        price: "50000 (8 porc) || $ 36000 (4 porc)"
    },
    {
        name: "Pizza de Champi\xf1ones y Pollo",
        ingredients: "Salsa bade de tomate, con salteado de champi\xf1ones y fileticos de pollo, queso mozzarella y or\xe9gano",
        price: "52000 (8 porc) || $ 38000 (4 porc)"
    },
    {
        name: "Pizza Hawaiana",
        ingredients: "Pi\xf1a, Jam\xf3n y queso mozzarella",
        price: "50000 (8 porc) || $ 36000 (4 porc)"
    },
    {
        name: "Hamburguesa de la Casa (Acompa\xf1ada de papa casco)",
        ingredients: "Pan de la Casa, jugosa carne de Res, acompa\xf1ada de variedad de vegetales, salsa San Pedro y queso",
        price: 28000
    },
    {
        name: "Hamburguesa Vegetariana (Acompa\xf1ada de papa casco)",
        ingredients: "Pan integral, jugosa prote\xedna de lenteja o garbanzo, acompa\xf1ada de zucchinis verde y amarillo, r\xfagula, tomate, berenjena, guacamole y salsa de pesto",
        price: 28000
    }, 
];
module.exports = pizzasYHamburguesas;

},{}],"cOWPo":[function(require,module,exports) {
const menuInfantil = [
    {
        name: "Hamburguesa Junior (combo)",
        ingredients: "Hamburguesa con variedad de vegetales, acompa\xf1ada de papa casco y bebida (gaseosa o jugo natural)",
        price: 23000
    },
    {
        name: "Cajita Feliz",
        ingredients: "Hamburguesa, papa francesa, jugo HIT, fruta, postre y obsequio sorpresa",
        price: 28000
    },
    {
        name: "Pizza Junior",
        ingredients: "Pizza personal Junior acompa\xf1ada de bebida",
        price: 18000
    },
    {
        name: "Pasta Junior",
        ingredients: "Pasta Junior a su eleccion acompa\xf1ada de bebida (gaseosa o jugo natural)",
        price: "50000 (8 porc) // $36000 (4 porc)"
    }, 
];
module.exports = menuInfantil;

},{}],"hcbve":[function(require,module,exports) {
const postres = [
    {
        name: "Cheescake de la Casa",
        ingredients: "con frutos rojos o amarillos",
        price: 10000
    },
    {
        name: "Milhoja con arequipe o combinada",
        ingredients: "(con jalea)",
        price: 12000
    },
    {
        name: "Brownie con Helado y salsa de chocolate",
        ingredients: "",
        price: 10000
    },
    {
        name: "Napole\xf3n",
        ingredients: "",
        price: 10000
    },
    {
        name: "Torta de Almojabana con Helado",
        ingredients: "",
        price: 12000
    },
    {
        name: "Panacotta de Frutos Rojos",
        ingredients: "",
        price: 11000
    },
    {
        name: "Alfajores",
        ingredients: "(unidad)",
        price: 3500
    },
    {
        name: "Helado de la Casa",
        ingredients: "",
        price: 4500
    },
    {
        name: "Profiteroles",
        ingredients: "(Repollitas rellenas de helado, ba\xf1adas en salsa de chocolate)",
        price: 14000
    }, 
];
module.exports = postres;

},{}],"i4Bml":[function(require,module,exports) {
const bebidas = [
    {
        name: "Limonada Natural",
        ingredients: "",
        price: 6200
    },
    {
        name: "Limonada de Hierbabuena",
        ingredients: "",
        price: 9000
    },
    {
        name: "Limonada de Coco",
        ingredients: "",
        price: 11000
    },
    {
        name: "Limonada de Coco-Maracuya",
        ingredients: "",
        price: 12000
    },
    {
        name: "Jugo de fruta en agua",
        ingredients: "(mango, maracuy\xe1, guan\xe1bana y fresa)",
        price: 6700
    },
    {
        name: "Jugo de fruta en leche",
        ingredients: "(mango, maracuy\xe1, guan\xe1bana y fresa)",
        price: 7000
    },
    {
        name: "Agua sin gas",
        ingredients: "",
        price: 3500
    },
    {
        name: "Agua con gas",
        ingredients: "",
        price: 4200
    },
    {
        name: "Gaseosa",
        ingredients: "",
        price: 4700
    },
    {
        name: "Club Colombia",
        ingredients: "Dorada, Roja o Negra",
        price: 7000
    },
    {
        name: "Cerveza Artesanal Hisca",
        ingredients: "",
        price: 14000
    },
    {
        name: "Cerveza Importada",
        ingredients: "",
        price: 12000
    },
    {
        name: "Te Hatsu",
        ingredients: "(400ml)",
        price: 7000
    },
    {
        name: "Jugo de Mandarina",
        ingredients: "",
        price: 10500
    },
    {
        name: "Pi\xf1a Colada",
        ingredients: "",
        price: 28000
    },
    {
        name: "Sandia Tropical",
        ingredients: "",
        price: 28000
    },
    {
        name: "Coco Loco",
        ingredients: "",
        price: 28000
    },
    {
        name: "Antioxidante",
        ingredients: "(Pi\xf1a, Manzana verde, hierbabuena, limon)",
        price: 8200
    },
    {
        name: "Coca Libre (Mojito de Coca Nasa)",
        ingredients: "Coctel cuya base alicorada es Wallinde (Aguardiente de Coca Nasa), mezclado con Coca Sek (Soda energetica de Coca Nasa), con notas de Yerbabuena y limon. El resultado es el unico mojito de Coca en el mundo con 6% Vol. Alc.",
        price: 19000
    },
    {
        name: "Coca Pola (Cerveza artesanal de Coca Nasa)",
        ingredients: "Cerveza artesanal de l\xfapulo y cebada, con macerac\xedon de hojas de Coca Nasa. Es rubia, de cuerpo ligero y baja carbonataci\xf3n, cuya textura es sin espuma. Tiene notas acarameladas sin dejar de hacerla refrescante. \xdanica cerveza de Coca en Colombia. 5% Vol. Alc ",
        price: 14000
    },
    {
        name: "Coca Sek (Soda energ\xe9tica de Coca Nasa)",
        ingredients: "Es una Soda energ\xe9tica y refrescante hecha de Hoja de Coca Nasa, sin cafe\xedna, taurina ni guaran\xe1; por lo cual no afecta al organismo como una bebida energetica convencional. Su valor energetico y nutritivo est\xe1 dado \xfanicamente por la planta diosa de los Andes. Bebida libre de alcohol",
        price: 12000
    }
];
module.exports = bebidas;

},{}],"f4vYM":[function(require,module,exports) {
const bebidasCalientes = [
    {
        name: "Expresso",
        ingredients: "",
        price: 4500
    },
    {
        name: "Macciato",
        ingredients: "",
        price: 5000
    },
    {
        name: "Americano",
        ingredients: "",
        price: 4000
    },
    {
        name: "Latte",
        ingredients: "",
        price: 5200
    },
    {
        name: "Cappuchino",
        ingredients: "",
        price: 6000
    },
    {
        name: "Mocaccino",
        ingredients: "",
        price: 6000
    },
    {
        name: "Granizado Caf\xe9",
        ingredients: "",
        price: 12000
    },
    {
        name: "Aromatica de Hierbas Naturales",
        ingredients: "",
        price: 4800
    },
    {
        name: "Aromatica de la Casa",
        ingredients: "Frutos rojos, Frutos amarillos y hierbas naturales",
        price: 6800
    },
    {
        name: "Te de la Casa (Leche o agua)",
        ingredients: "Escoge tu sabor (12 sabores)",
        price: 6800
    }, 
];
module.exports = bebidasCalientes;

},{}],"5Pv0i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const nada = ()=>{
    return `<div></div>`;
};
exports.default = nada;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kgazZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps);
parcelHelpers.export(exports, "targetElements", ()=>targetElements);
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true
};
const targetElements = [
    {
        element: ".title-section",
        animation: {
            delay: 300,
            distance: "0px",
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".about-wrapper__info",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".title-section-lower",
        animation: {
            delay: 1000,
            distance: "0px",
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxJWf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _scrollreveal = require("scrollreveal");
var _scrollrevealDefault = parcelHelpers.interopDefault(_scrollreveal);
function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
    (0, _scrollrevealDefault.default)({
        reset: false
    });
    targetElements.forEach(({ element , animation  })=>{
        (0, _scrollrevealDefault.default)().reveal(element, Object.assign({}, defaultProps, animation));
    });
}
exports.default = initScrollReveal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","scrollreveal":"2exAg"}],"2exAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/ var _tealight = require("tealight");
var _tealightDefault = parcelHelpers.interopDefault(_tealight);
var _rematrix = require("rematrix");
var _miniraf = require("miniraf");
var _minirafDefault = parcelHelpers.interopDefault(_miniraf);
var defaults = {
    delay: 0,
    distance: "0",
    duration: 600,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    interval: 0,
    opacity: 0,
    origin: "bottom",
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
};
function failure() {
    document.documentElement.classList.remove("sr");
    return {
        clean: function clean() {},
        destroy: function destroy() {},
        reveal: function reveal() {},
        sync: function sync() {},
        get noop () {
            return true;
        }
    };
}
function success() {
    document.documentElement.classList.add("sr");
    if (document.body) document.body.style.height = "100%";
    else document.addEventListener("DOMContentLoaded", function() {
        document.body.style.height = "100%";
    });
}
var mount = {
    success: success,
    failure: failure
};
function isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === "[object Object]");
}
function each(collection, callback) {
    if (isObject(collection)) {
        var keys = Object.keys(collection);
        return keys.forEach(function(key) {
            return callback(collection[key], key, collection);
        });
    }
    if (collection instanceof Array) return collection.forEach(function(item, i) {
        return callback(item, i, collection);
    });
    throw new TypeError("Expected either an array or object literal.");
}
function logger(message) {
    var details = [], len = arguments.length - 1;
    while(len-- > 0)details[len] = arguments[len + 1];
    if (this.constructor.debug && console) {
        var report = "%cScrollReveal: " + message;
        details.forEach(function(detail) {
            return report += "\n \u2014 " + detail;
        });
        console.log(report, "color: #ea654b;"); // eslint-disable-line no-console
    }
}
function rinse() {
    var this$1 = this;
    var struct = function() {
        return {
            active: [],
            stale: []
        };
    };
    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
	 * Take stock of active element IDs.
	 */ try {
        each((0, _tealightDefault.default)("[data-sr-id]"), function(node) {
            var id = parseInt(node.getAttribute("data-sr-id"));
            elementIds.active.push(id);
        });
    } catch (e) {
        throw e;
    }
    /**
	 * Destroy stale elements.
	 */ each(this.store.elements, function(element) {
        if (elementIds.active.indexOf(element.id) === -1) elementIds.stale.push(element.id);
    });
    each(elementIds.stale, function(staleId) {
        return delete this$1.store.elements[staleId];
    });
    /**
	 * Take stock of active container and sequence IDs.
	 */ each(this.store.elements, function(element) {
        if (containerIds.active.indexOf(element.containerId) === -1) containerIds.active.push(element.containerId);
        if (element.hasOwnProperty("sequence")) {
            if (sequenceIds.active.indexOf(element.sequence.id) === -1) sequenceIds.active.push(element.sequence.id);
        }
    });
    /**
	 * Destroy stale containers.
	 */ each(this.store.containers, function(container) {
        if (containerIds.active.indexOf(container.id) === -1) containerIds.stale.push(container.id);
    });
    each(containerIds.stale, function(staleId) {
        var stale = this$1.store.containers[staleId].node;
        stale.removeEventListener("scroll", this$1.delegate);
        stale.removeEventListener("resize", this$1.delegate);
        delete this$1.store.containers[staleId];
    });
    /**
	 * Destroy stale sequences.
	 */ each(this.store.sequences, function(sequence1) {
        if (sequenceIds.active.indexOf(sequence1.id) === -1) sequenceIds.stale.push(sequence1.id);
    });
    each(sequenceIds.stale, function(staleId) {
        return delete this$1.store.sequences[staleId];
    });
}
var getPrefixedCssProp = function() {
    var properties = {};
    var style1 = document.documentElement.style;
    function getPrefixedCssProperty(name, source) {
        if (source === void 0) source = style1;
        if (name && typeof name === "string") {
            if (properties[name]) return properties[name];
            if (typeof source[name] === "string") return properties[name] = name;
            if (typeof source["-webkit-" + name] === "string") return properties[name] = "-webkit-" + name;
            throw new RangeError('Unable to find "' + name + '" style property.');
        }
        throw new TypeError("Expected a string.");
    }
    getPrefixedCssProperty.clearCache = function() {
        return properties = {};
    };
    return getPrefixedCssProperty;
}();
function style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config1 = element.config;
    /**
	 * Generate inline styles
	 */ var inline = {};
    var inlineStyle = element.node.getAttribute("style") || "";
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = inlineMatch ? inlineMatch.map(function(m) {
        return m.trim();
    }).join("; ") + ";" : "";
    inline.generated = inlineMatch.some(function(m) {
        return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat([
        "visibility: visible"
    ]).map(function(m) {
        return m.trim();
    }).join("; ") + ";";
    /**
	 * Generate opacity styles
	 */ var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config1.opacity)) ? parseFloat(config1.opacity) : parseFloat(computed.opacity);
    var opacity = {
        computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : "",
        generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ""
    };
    /**
	 * Generate transformation styles
	 */ var transformations = [];
    if (parseFloat(config1.distance)) {
        var axis = config1.origin === "top" || config1.origin === "bottom" ? "Y" : "X";
        /**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */ var distance = config1.distance;
        if (config1.origin === "top" || config1.origin === "left") distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
        var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
        var value = ref[0];
        var unit = ref[1];
        switch(unit){
            case "em":
                distance = parseInt(computed.fontSize) * value;
                break;
            case "px":
                distance = value;
                break;
            case "%":
                /**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */ distance = axis === "Y" ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
                break;
            default:
                throw new RangeError("Unrecognized or missing distance unit.");
        }
        if (axis === "Y") transformations.push((0, _rematrix.translateY)(distance));
        else transformations.push((0, _rematrix.translateX)(distance));
    }
    if (config1.rotate.x) transformations.push((0, _rematrix.rotateX)(config1.rotate.x));
    if (config1.rotate.y) transformations.push((0, _rematrix.rotateY)(config1.rotate.y));
    if (config1.rotate.z) transformations.push((0, _rematrix.rotateZ)(config1.rotate.z));
    if (config1.scale !== 1) {
        if (config1.scale === 0) /**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */ transformations.push((0, _rematrix.scale)(0.0002));
        else transformations.push((0, _rematrix.scale)(config1.scale));
    }
    var transform = {};
    if (transformations.length) {
        transform.property = getPrefixedCssProp("transform");
        /**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */ transform.computed = {
            raw: computed[transform.property],
            matrix: (0, _rematrix.parse)(computed[transform.property])
        };
        transformations.unshift(transform.computed.matrix);
        var product = transformations.reduce((0, _rematrix.multiply));
        transform.generated = {
            initial: transform.property + ": matrix3d(" + product.join(", ") + ");",
            final: transform.property + ": matrix3d(" + transform.computed.matrix.join(", ") + ");"
        };
    } else transform.generated = {
        initial: "",
        final: ""
    };
    /**
	 * Generate transition styles
	 */ var transition = {};
    if (opacity.generated || transform.generated.initial) {
        transition.property = getPrefixedCssProp("transition");
        transition.computed = computed[transition.property];
        transition.fragments = [];
        var delay = config1.delay;
        var duration = config1.duration;
        var easing = config1.easing;
        if (opacity.generated) transition.fragments.push({
            delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
        });
        if (transform.generated.initial) transition.fragments.push({
            delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
            instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
        });
        /**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */ var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);
        if (hasCustomTransition) transition.fragments.unshift({
            delayed: transition.computed,
            instant: transition.computed
        });
        var composed = transition.fragments.reduce(function(composition, fragment, i) {
            composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
            composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
            return composition;
        }, {
            delayed: "",
            instant: ""
        });
        transition.generated = {
            delayed: transition.property + ": " + composed.delayed + ";",
            instant: transition.property + ": " + composed.instant + ";"
        };
    } else transition.generated = {
        delayed: "",
        instant: ""
    };
    return {
        inline: inline,
        opacity: opacity,
        position: position,
        transform: transform,
        transition: transition
    };
}
/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */ function applyStyle(el, declaration) {
    declaration.split(";").forEach(function(pair) {
        var ref = pair.split(":");
        var property = ref[0];
        var value = ref.slice(1);
        if (property && value) el.style[property.trim()] = value.join(":");
    });
}
function clean(target) {
    var this$1 = this;
    var dirty;
    try {
        each((0, _tealightDefault.default)(target), function(node) {
            var id = node.getAttribute("data-sr-id");
            if (id !== null) {
                dirty = true;
                var element = this$1.store.elements[id];
                if (element.callbackTimer) window.clearTimeout(element.callbackTimer.clock);
                applyStyle(element.node, element.styles.inline.generated);
                node.removeAttribute("data-sr-id");
                delete this$1.store.elements[id];
            }
        });
    } catch (e) {
        return logger.call(this, "Clean failed.", e.message);
    }
    if (dirty) try {
        rinse.call(this);
    } catch (e1) {
        return logger.call(this, "Clean failed.", e1.message);
    }
}
function destroy() {
    var this$1 = this;
    /**
	 * Remove all generated styles and element ids
	 */ each(this.store.elements, function(element) {
        applyStyle(element.node, element.styles.inline.generated);
        element.node.removeAttribute("data-sr-id");
    });
    /**
	 * Remove all event listeners.
	 */ each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.removeEventListener("scroll", this$1.delegate);
        target.removeEventListener("resize", this$1.delegate);
    });
    /**
	 * Clear all data from the store
	 */ this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
}
function deepAssign(target) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    if (isObject(target)) {
        each(sources, function(source) {
            each(source, function(data, key) {
                if (isObject(data)) {
                    if (!target[key] || !isObject(target[key])) target[key] = {};
                    deepAssign(target[key], data);
                } else target[key] = data;
            });
        });
        return target;
    } else throw new TypeError("Target must be an object literal.");
}
function isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
}
var nextUniqueId = function() {
    var uid = 0;
    return function() {
        return uid++;
    };
}();
function initialize() {
    var this$1 = this;
    rinse.call(this);
    each(this.store.elements, function(element) {
        var styles = [
            element.styles.inline.generated
        ];
        if (element.visible) {
            styles.push(element.styles.opacity.computed);
            styles.push(element.styles.transform.generated.final);
            element.revealed = true;
        } else {
            styles.push(element.styles.opacity.generated);
            styles.push(element.styles.transform.generated.initial);
            element.revealed = false;
        }
        applyStyle(element.node, styles.filter(function(s) {
            return s !== "";
        }).join(" "));
    });
    each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.addEventListener("scroll", this$1.delegate);
        target.addEventListener("resize", this$1.delegate);
    });
    /**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */ this.delegate();
    /**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */ this.initTimeout = null;
}
function animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === "always" || element.config.useDelay === "onload" && pristine || element.config.useDelay === "once" && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;
    if (force.reveal || shouldReveal) return triggerReveal.call(this, element, delayed);
    if (force.reset || shouldReset) return triggerReset.call(this, element);
}
function triggerReveal(element, delayed) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.computed,
        element.styles.transform.generated.final
    ];
    if (delayed) styles.push(element.styles.transition.generated.delayed);
    else styles.push(element.styles.transition.generated.instant);
    element.revealed = element.seen = true;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    registerCallbacks.call(this, element, delayed);
}
function triggerReset(element) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.generated,
        element.styles.transform.generated.initial,
        element.styles.transition.generated.instant
    ];
    element.revealed = false;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== "";
    }).join(" "));
    registerCallbacks.call(this, element);
}
function registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;
    if (element.callbackTimer) {
        elapsed = Date.now() - element.callbackTimer.start;
        window.clearTimeout(element.callbackTimer.clock);
    }
    beforeCallback(element.node);
    element.callbackTimer = {
        start: Date.now(),
        clock: window.setTimeout(function() {
            afterCallback(element.node);
            element.callbackTimer = null;
            if (element.revealed && !element.config.reset && element.config.cleanup) clean.call(this$1, element.node);
        }, duration - elapsed)
    };
}
function sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
	 * We first check if the element should reset.
	 */ if (!element.visible && element.revealed && element.config.reset) return animate.call(this, element, {
        reset: true
    });
    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;
    if (seq) {
        var visible = new SequenceModel(seq, "visible", this.store);
        var revealed = new SequenceModel(seq, "revealed", this.store);
        seq.models = {
            visible: visible,
            revealed: revealed
        };
        /**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */ if (!revealed.body.length) {
            var nextId = seq.members[visible.body[0]];
            var nextElement = this.store.elements[nextId];
            if (nextElement) {
                cue.call(this, seq, visible.body[0], -1, pristine);
                cue.call(this, seq, visible.body[0], 1, pristine);
                return animate.call(this, nextElement, {
                    reveal: true,
                    pristine: pristine
                });
            }
        }
        /**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */ if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
            cue.call(this, seq, i, -1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
        if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
            cue.call(this, seq, i, 1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
    }
}
function Sequence(interval) {
    var i = Math.abs(interval);
    if (!isNaN(i)) {
        this.id = nextUniqueId();
        this.interval = Math.max(i, 16);
        this.members = [];
        this.models = {};
        this.blocked = {
            head: false,
            foot: false
        };
    } else throw new RangeError("Invalid sequence interval.");
}
function SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && element[prop]) this$1.body.push(index);
    });
    if (this.body.length) each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && !element[prop]) {
            if (index < this$1.body[0]) this$1.head.push(index);
            else this$1.foot.push(index);
        }
    });
}
function cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = [
        "head",
        null,
        "foot"
    ][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function() {
        seq.blocked[blocked] = false;
        if (nextElement) sequence.call(this$1, nextElement, pristine);
    }, seq.interval);
}
function reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || defaults.interval;
    try {
        if (interval) sequence$$1 = new Sequence(interval);
        var nodes = (0, _tealightDefault.default)(target);
        if (!nodes.length) throw new Error("Invalid reveal target.");
        var elements = nodes.reduce(function(elementBuffer, elementNode) {
            var element = {};
            var existingId = elementNode.getAttribute("data-sr-id");
            if (existingId) {
                deepAssign(element, this$1.store.elements[existingId]);
                /**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */ applyStyle(element.node, element.styles.inline.computed);
            } else {
                element.id = nextUniqueId();
                element.node = elementNode;
                element.seen = false;
                element.revealed = false;
                element.visible = false;
            }
            var config2 = deepAssign({}, element.config || this$1.defaults, options);
            if (!config2.mobile && isMobile() || !config2.desktop && !isMobile()) {
                if (existingId) clean.call(this$1, element);
                return elementBuffer // skip elements that are disabled
                ;
            }
            var containerNode = (0, _tealightDefault.default)(config2.container)[0];
            if (!containerNode) throw new Error("Invalid container.");
            if (!containerNode.contains(elementNode)) return elementBuffer // skip elements found outside the container
            ;
            var containerId;
            containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);
            if (containerId === null) {
                containerId = nextUniqueId();
                containerBuffer.push({
                    id: containerId,
                    node: containerNode
                });
            }
            element.config = config2;
            element.containerId = containerId;
            element.styles = style(element);
            if (sequence$$1) {
                element.sequence = {
                    id: sequence$$1.id,
                    index: sequence$$1.members.length
                };
                sequence$$1.members.push(element.id);
            }
            elementBuffer.push(element);
            return elementBuffer;
        }, []);
        /**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */ each(elements, function(element) {
            this$1.store.elements[element.id] = element;
            element.node.setAttribute("data-sr-id", element.id);
        });
    } catch (e) {
        return logger.call(this, "Reveal failed.", e.message);
    }
    /**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */ each(containerBuffer, function(container) {
        this$1.store.containers[container.id] = {
            id: container.id,
            node: container.node
        };
    });
    if (sequence$$1) this.store.sequences[sequence$$1.id] = sequence$$1;
    /**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */ if (syncing !== true) {
        this.store.history.push({
            target: target,
            options: options
        });
        /**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */ if (this.initTimeout) window.clearTimeout(this.initTimeout);
        this.initTimeout = window.setTimeout(initialize.bind(this), 0);
    }
}
function getContainerId(node) {
    var collections = [], len = arguments.length - 1;
    while(len-- > 0)collections[len] = arguments[len + 1];
    var id = null;
    each(collections, function(collection) {
        each(collection, function(container) {
            if (id === null && container.node === node) id = container.id;
        });
    });
    return id;
}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */ function sync() {
    var this$1 = this;
    each(this.store.history, function(record) {
        reveal.call(this$1, record.target, record.options, true);
    });
    initialize.call(this);
}
var polyfill = function(x) {
    return (x > 0) - (x < 0) || +x;
};
var mathSign = Math.sign || polyfill;
function getGeometry(target, isContainer) {
    /**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */ var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;
    do {
        if (!isNaN(node.offsetTop)) offsetTop += node.offsetTop;
        if (!isNaN(node.offsetLeft)) offsetLeft += node.offsetLeft;
        node = node.offsetParent;
    }while (node);
    return {
        bounds: {
            top: offsetTop,
            right: offsetLeft + width,
            bottom: offsetTop + height,
            left: offsetLeft
        },
        height: height,
        width: width
    };
}
function getScrolled(container) {
    var top, left;
    if (container.node === document.documentElement) {
        top = window.pageYOffset;
        left = window.pageXOffset;
    } else {
        top = container.node.scrollTop;
        left = container.node.scrollLeft;
    }
    return {
        top: top,
        left: left
    };
}
function isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];
    if (!container) return;
    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
        top: element.geometry.bounds.top + element.geometry.height * viewFactor,
        right: element.geometry.bounds.right - element.geometry.width * viewFactor,
        bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
        left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
        top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
        right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
        bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
        left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === "fixed";
}
function delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
        type: "init"
    };
    if (elements === void 0) elements = this.store.elements;
    (0, _minirafDefault.default)(function() {
        var stale = event.type === "init" || event.type === "resize";
        each(this$1.store.containers, function(container) {
            if (stale) container.geometry = getGeometry.call(this$1, container, true);
            var scroll = getScrolled.call(this$1, container);
            if (container.scroll) container.direction = {
                x: mathSign(scroll.left - container.scroll.left),
                y: mathSign(scroll.top - container.scroll.top)
            };
            container.scroll = scroll;
        });
        /**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */ each(elements, function(element) {
            if (stale || element.geometry === undefined) element.geometry = getGeometry.call(this$1, element);
            element.visible = isElementVisible.call(this$1, element);
        });
        each(elements, function(element) {
            if (element.sequence) sequence.call(this$1, element);
            else animate.call(this$1, element);
        });
        this$1.pristine = false;
    });
}
function isTransformSupported() {
    var style2 = document.documentElement.style;
    return "transform" in style2 || "WebkitTransform" in style2;
}
function isTransitionSupported() {
    var style3 = document.documentElement.style;
    return "transition" in style3 || "WebkitTransition" in style3;
}
var version = "4.0.9";
var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;
function ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === "undefined" || Object.getPrototypeOf(this) !== ScrollReveal.prototype;
    if (invokedWithoutNew) return new ScrollReveal(options);
    if (!ScrollReveal.isSupported()) {
        logger.call(this, "Instantiation failed.", "This browser is not supported.");
        return mount.failure();
    }
    var buffer;
    try {
        buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
    } catch (e) {
        logger.call(this, "Invalid configuration.", e.message);
        return mount.failure();
    }
    try {
        var container = (0, _tealightDefault.default)(buffer.container)[0];
        if (!container) throw new Error("Invalid container.");
    } catch (e2) {
        logger.call(this, e2.message);
        return mount.failure();
    }
    config = buffer;
    if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
        logger.call(this, "This device is disabled.", "desktop: " + config.desktop, "mobile: " + config.mobile);
        return mount.failure();
    }
    mount.success();
    this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
    this.pristine = true;
    boundDelegate = boundDelegate || delegate.bind(this);
    boundDestroy = boundDestroy || destroy.bind(this);
    boundReveal = boundReveal || reveal.bind(this);
    boundClean = boundClean || clean.bind(this);
    boundSync = boundSync || sync.bind(this);
    Object.defineProperty(this, "delegate", {
        get: function() {
            return boundDelegate;
        }
    });
    Object.defineProperty(this, "destroy", {
        get: function() {
            return boundDestroy;
        }
    });
    Object.defineProperty(this, "reveal", {
        get: function() {
            return boundReveal;
        }
    });
    Object.defineProperty(this, "clean", {
        get: function() {
            return boundClean;
        }
    });
    Object.defineProperty(this, "sync", {
        get: function() {
            return boundSync;
        }
    });
    Object.defineProperty(this, "defaults", {
        get: function() {
            return config;
        }
    });
    Object.defineProperty(this, "version", {
        get: function() {
            return version;
        }
    });
    Object.defineProperty(this, "noop", {
        get: function() {
            return false;
        }
    });
    return instance ? instance : instance = this;
}
ScrollReveal.isSupported = function() {
    return isTransformSupported() && isTransitionSupported();
};
Object.defineProperty(ScrollReveal, "debug", {
    get: function() {
        return debug || false;
    },
    set: function(value) {
        return debug = typeof value === "boolean" ? value : debug;
    }
});
ScrollReveal();
exports.default = ScrollReveal;

},{"tealight":"9LJi6","rematrix":"iiA0g","miniraf":"cmczW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LJi6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var _isDomNode = require("is-dom-node");
var _isDomNodeDefault = parcelHelpers.interopDefault(_isDomNode);
var _isDomNodeList = require("is-dom-node-list");
var _isDomNodeListDefault = parcelHelpers.interopDefault(_isDomNodeList);
function tealight(target, context) {
    if (context === void 0) context = document;
    if (target instanceof Array) return target.filter((0, _isDomNodeDefault.default));
    if ((0, _isDomNodeDefault.default)(target)) return [
        target
    ];
    if ((0, _isDomNodeListDefault.default)(target)) return Array.prototype.slice.call(target);
    if (typeof target === "string") try {
        var query = context.querySelectorAll(target);
        return Array.prototype.slice.call(query);
    } catch (err) {
        return [];
    }
    return [];
}
exports.default = tealight;

},{"is-dom-node":"ef65w","is-dom-node-list":"hDni0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ef65w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ function isDomNode(x) {
    return typeof window.Node === "object" ? x instanceof window.Node : x !== null && typeof x === "object" && typeof x.nodeType === "number" && typeof x.nodeName === "string";
}
exports.default = isDomNode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hDni0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var _isDomNode = require("is-dom-node");
var _isDomNodeDefault = parcelHelpers.interopDefault(_isDomNode);
function isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return typeof window.NodeList === "object" ? x instanceof window.NodeList : x !== null && typeof x === "object" && typeof x.length === "number" && regex.test(prototypeToString) && (x.length === 0 || (0, _isDomNodeDefault.default)(x[0]));
}
exports.default = isDomNodeList;

},{"is-dom-node":"ef65w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iiA0g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "format", ()=>format);
parcelHelpers.export(exports, "identity", ()=>identity);
parcelHelpers.export(exports, "inverse", ()=>inverse);
parcelHelpers.export(exports, "multiply", ()=>multiply);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "rotateX", ()=>rotateX);
parcelHelpers.export(exports, "rotateY", ()=>rotateY);
parcelHelpers.export(exports, "rotateZ", ()=>rotateZ);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "scaleX", ()=>scaleX);
parcelHelpers.export(exports, "scaleY", ()=>scaleY);
parcelHelpers.export(exports, "scaleZ", ()=>scaleZ);
parcelHelpers.export(exports, "skew", ()=>skew);
parcelHelpers.export(exports, "skewX", ()=>skewX);
parcelHelpers.export(exports, "skewY", ()=>skewY);
parcelHelpers.export(exports, "toString", ()=>toString);
parcelHelpers.export(exports, "translate", ()=>translate);
parcelHelpers.export(exports, "translateX", ()=>translateX);
parcelHelpers.export(exports, "translateY", ()=>translateY);
parcelHelpers.export(exports, "translateZ", ()=>translateZ);
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ /**
 * @module Rematrix
 */ /**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function format(source) {
    if (source.constructor !== Array) throw new TypeError("Expected array.");
    if (source.length === 16) return source;
    if (source.length === 6) {
        var matrix = identity();
        matrix[0] = source[0];
        matrix[1] = source[1];
        matrix[4] = source[2];
        matrix[5] = source[3];
        matrix[12] = source[4];
        matrix[13] = source[5];
        return matrix;
    }
    throw new RangeError("Expected array with either 6 or 16 values.");
}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */ function identity() {
    var matrix = [];
    for(var i = 0; i < 16; i++)i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    return matrix;
}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function inverse(source) {
    var m = format(source);
    var s0 = m[0] * m[5] - m[4] * m[1];
    var s1 = m[0] * m[6] - m[4] * m[2];
    var s2 = m[0] * m[7] - m[4] * m[3];
    var s3 = m[1] * m[6] - m[5] * m[2];
    var s4 = m[1] * m[7] - m[5] * m[3];
    var s5 = m[2] * m[7] - m[6] * m[3];
    var c5 = m[10] * m[15] - m[14] * m[11];
    var c4 = m[9] * m[15] - m[13] * m[11];
    var c3 = m[9] * m[14] - m[13] * m[10];
    var c2 = m[8] * m[15] - m[12] * m[11];
    var c1 = m[8] * m[14] - m[12] * m[10];
    var c0 = m[8] * m[13] - m[12] * m[9];
    var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
    if (isNaN(determinant) || determinant === Infinity) throw new Error("Inverse determinant attempted to divide by zero.");
    return [
        (m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
        (-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
        (m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
        (-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,
        (-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
        (m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
        (-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
        (m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,
        (m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
        (-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
        (m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
        (-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,
        (-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
        (m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
        (-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
        (m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
    ];
}
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */ function multiply(m, x) {
    var fm = format(m);
    var fx = format(x);
    var product = [];
    for(var i = 0; i < 4; i++){
        var row = [
            fm[i],
            fm[i + 4],
            fm[i + 8],
            fm[i + 12]
        ];
        for(var j = 0; j < 4; j++){
            var k = j * 4;
            var col = [
                fx[k],
                fx[k + 1],
                fx[k + 2],
                fx[k + 3]
            ];
            var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
            product[i + k] = result;
        }
    }
    return product;
}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */ function parse(source) {
    if (typeof source === "string") {
        var match = source.match(/matrix(3d)?\(([^)]+)\)/);
        if (match) {
            var raw = match[2].split(", ").map(parseFloat);
            return format(raw);
        }
    }
    return identity();
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotate(angle) {
    return rotateZ(angle);
}
/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateZ(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */ function scale(scalar, scalarY) {
    var matrix = identity();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === "number" ? scalarY : scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleX(scalar) {
    var matrix = identity();
    matrix[0] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleY(scalar) {
    var matrix = identity();
    matrix[5] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleZ(scalar) {
    var matrix = identity();
    matrix[10] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */ function skew(angleX, angleY) {
    var thetaX = Math.PI / 180 * angleX;
    var matrix = identity();
    matrix[4] = Math.tan(thetaX);
    if (angleY) {
        var thetaY = Math.PI / 180 * angleY;
        matrix[1] = Math.tan(thetaY);
    }
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function skewX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[4] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */ function skewY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[1] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */ function toString(source) {
    return "matrix3d(" + format(source).join(", ") + ")";
}
/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */ function translate(distanceX, distanceY) {
    var matrix = identity();
    matrix[12] = distanceX;
    if (distanceY) matrix[13] = distanceY;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateX(distance) {
    var matrix = identity();
    matrix[12] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateY(distance) {
    var matrix = identity();
    matrix[13] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateZ(distance) {
    var matrix = identity();
    matrix[14] = distance;
    return matrix;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmczW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ var polyfill = function() {
    var clock = Date.now();
    return function(callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else setTimeout(function() {
            return polyfill(callback);
        }, 0);
    };
}();
var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;
exports.default = index;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ii0zF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vanillaTilt = require("vanilla-tilt");
var _vanillaTiltDefault = parcelHelpers.interopDefault(_vanillaTilt);
function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    (0, _vanillaTiltDefault.default).init(elements);
}
exports.default = initTiltAnimation;

},{"vanilla-tilt":"jiWzO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiWzO":[function(require,module,exports) {
"use strict";
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.7.2
 */ var VanillaTilt = function() {
    function VanillaTilt1(element) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, VanillaTilt1);
        if (!(element instanceof Node)) throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
        this.element = element;
        this.settings = this.extendSettings(settings);
        this.reverse = this.settings.reverse ? -1 : 1;
        this.glare = VanillaTilt1.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt1.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt1.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt1.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
        this.elementListener = this.getElementListener();
        if (this.glare) this.prepareGlare();
        if (this.fullPageListening) this.updateClientSize();
        this.addEventListeners();
        this.reset();
        this.updateInitialPosition();
    }
    VanillaTilt1.isSettingTrue = function isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
    };
    /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */ VanillaTilt1.prototype.getElementListener = function getElementListener() {
        if (this.fullPageListening) return window.document;
        if (typeof this.settings["mouse-event-element"] === "string") {
            var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
            if (mouseEventElement) return mouseEventElement;
        }
        if (this.settings["mouse-event-element"] instanceof Node) return this.settings["mouse-event-element"];
        return this.element;
    };
    /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */ VanillaTilt1.prototype.addEventListeners = function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
        if (this.glare || this.fullPageListening) window.addEventListener("resize", this.onWindowResizeBind);
        if (this.gyroscope) window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    };
    /**
   * Method remove event listeners from current this.elementListener
   */ VanillaTilt1.prototype.removeEventListeners = function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
        if (this.gyroscope) window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        if (this.glare || this.fullPageListening) window.removeEventListener("resize", this.onWindowResizeBind);
    };
    VanillaTilt1.prototype.destroy = function destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.reset();
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
        this.element = null;
    };
    VanillaTilt1.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) return;
        this.updateElementPosition();
        if (this.gyroscopeSamples > 0) {
            this.lastgammazero = this.gammazero;
            this.lastbetazero = this.betazero;
            if (this.gammazero === null) {
                this.gammazero = event.gamma;
                this.betazero = event.beta;
            } else {
                this.gammazero = (event.gamma + this.lastgammazero) / 2;
                this.betazero = (event.beta + this.lastbetazero) / 2;
            }
            this.gyroscopeSamples -= 1;
        }
        var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
        var degreesPerPixelX = totalAngleX / this.width;
        var degreesPerPixelY = totalAngleY / this.height;
        var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
        var posX = angleX / degreesPerPixelX;
        var posY = angleY / degreesPerPixelY;
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = {
            clientX: posX + this.left,
            clientY: posY + this.top
        };
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt1.prototype.onMouseEnter = function onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
    };
    VanillaTilt1.prototype.onMouseMove = function onMouseMove(event) {
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt1.prototype.onMouseLeave = function onMouseLeave() {
        this.setTransition();
        if (this.settings.reset) requestAnimationFrame(this.resetBind);
    };
    VanillaTilt1.prototype.reset = function reset() {
        this.event = {
            clientX: this.left + this.width / 2,
            clientY: this.top + this.height / 2
        };
        if (this.element && this.element.style) this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
        this.resetGlare();
    };
    VanillaTilt1.prototype.resetGlare = function resetGlare() {
        if (this.glare) {
            this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "0";
        }
    };
    VanillaTilt1.prototype.updateInitialPosition = function updateInitialPosition() {
        if (this.settings.startX === 0 && this.settings.startY === 0) return;
        this.onMouseEnter();
        if (this.fullPageListening) this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
        else this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        var backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
    };
    VanillaTilt1.prototype.getValues = function getValues() {
        var x = void 0, y = void 0;
        if (this.fullPageListening) {
            x = this.event.clientX / this.clientWidth;
            y = this.event.clientY / this.clientHeight;
        } else {
            x = (this.event.clientX - this.left) / this.width;
            y = (this.event.clientY - this.top) / this.height;
        }
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: tiltX,
            tiltY: tiltY,
            percentageX: x * 100,
            percentageY: y * 100,
            angle: angle
        };
    };
    VanillaTilt1.prototype.updateElementPosition = function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
    };
    VanillaTilt1.prototype.update = function update() {
        var values = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
        if (this.glare) {
            this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
        }
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
            "detail": values
        }));
        this.updateCall = null;
    };
    /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */ VanillaTilt1.prototype.prepareGlare = function prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
            // Create glare element
            var jsTiltGlare = document.createElement("div");
            jsTiltGlare.classList.add("js-tilt-glare");
            var jsTiltGlareInner = document.createElement("div");
            jsTiltGlareInner.classList.add("js-tilt-glare-inner");
            jsTiltGlare.appendChild(jsTiltGlareInner);
            this.element.appendChild(jsTiltGlare);
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
        if (this.glarePrerender) return;
        Object.assign(this.glareElementWrapper.style, {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "pointer-events": "none"
        });
        Object.assign(this.glareElement.style, {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "pointer-events": "none",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            "transform": "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            "opacity": "0"
        });
        this.updateGlareSize();
    };
    VanillaTilt1.prototype.updateGlareSize = function updateGlareSize() {
        if (this.glare) {
            var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
            Object.assign(this.glareElement.style, {
                "width": glareSize + "px",
                "height": glareSize + "px"
            });
        }
    };
    VanillaTilt1.prototype.updateClientSize = function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    VanillaTilt1.prototype.onWindowResize = function onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
    };
    VanillaTilt1.prototype.setTransition = function setTransition() {
        var _this = this;
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;
        this.transitionTimeout = setTimeout(function() {
            _this.element.style.transition = "";
            if (_this.glare) _this.glareElement.style.transition = "";
        }, this.settings.speed);
    };
    /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */ VanillaTilt1.prototype.extendSettings = function extendSettings(settings) {
        var defaultSettings = {
            reverse: false,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            glare: false,
            "max-glare": 1,
            "glare-prerender": false,
            "full-page-listening": false,
            "mouse-event-element": null,
            reset: true,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
        };
        var newSettings = {};
        for(var property in defaultSettings){
            if (property in settings) newSettings[property] = settings[property];
            else if (this.element.hasAttribute("data-tilt-" + property)) {
                var attribute = this.element.getAttribute("data-tilt-" + property);
                try {
                    newSettings[property] = JSON.parse(attribute);
                } catch (e) {
                    newSettings[property] = attribute;
                }
            } else newSettings[property] = defaultSettings[property];
        }
        return newSettings;
    };
    VanillaTilt1.init = function init(elements, settings) {
        if (elements instanceof Node) elements = [
            elements
        ];
        if (elements instanceof NodeList) elements = [].slice.call(elements);
        if (!(elements instanceof Array)) return;
        elements.forEach(function(element) {
            if (!("vanillaTilt" in element)) element.vanillaTilt = new VanillaTilt1(element, settings);
        });
    };
    return VanillaTilt1;
}();
if (typeof document !== "undefined") {
    /* expose the class to window */ window.VanillaTilt = VanillaTilt;
    /**
   * Auto load
   */ VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}
module.exports = VanillaTilt;

},{}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire77b0")

//# sourceMappingURL=index.975ef6c8.js.map
