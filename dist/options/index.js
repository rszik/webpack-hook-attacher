"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalModuleFactoryHookCallbackParameters = exports.ContextModuleFactoryHookCallbackParameters = exports.JavascriptParserHookCallbackParameters = exports.CompilationHookCallbackParameters = exports.CompilerHookCallbackParameters = void 0;
__exportStar(require("./options"), exports);
var compiler_hooks_1 = require("./compiler-hooks");
Object.defineProperty(exports, "CompilerHookCallbackParameters", { enumerable: true, get: function () { return compiler_hooks_1.CompilerHookCallbackParameters; } });
var compilation_hooks_1 = require("./compilation-hooks");
Object.defineProperty(exports, "CompilationHookCallbackParameters", { enumerable: true, get: function () { return compilation_hooks_1.CompilationHookCallbackParameters; } });
var javascript_parser_hooks_1 = require("./javascript-parser-hooks");
Object.defineProperty(exports, "JavascriptParserHookCallbackParameters", { enumerable: true, get: function () { return javascript_parser_hooks_1.JavascriptParserHookCallbackParameters; } });
var context_module_factory_hooks_1 = require("./context-module-factory-hooks");
Object.defineProperty(exports, "ContextModuleFactoryHookCallbackParameters", { enumerable: true, get: function () { return context_module_factory_hooks_1.ContextModuleFactoryHookCallbackParameters; } });
var normal_module_factory_hooks_1 = require("./normal-module-factory-hooks");
Object.defineProperty(exports, "NormalModuleFactoryHookCallbackParameters", { enumerable: true, get: function () { return normal_module_factory_hooks_1.NormalModuleFactoryHookCallbackParameters; } });
