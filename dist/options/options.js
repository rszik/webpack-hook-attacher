"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = exports.JavascriptParserHook = exports.NormalModuleFactoryHook = exports.ContextModuleFactoryHook = exports.CompilationHook = exports.CompilerHook = exports.HookBase = exports.ChildOperationWrapperOperation = exports.WebpackHookType = void 0;
const operation_1 = require("../operation-base-classes/operation");
const operation_base_classes_1 = require("../operation-base-classes");
const compiler_hooks_1 = require("./compiler-hooks");
const compilation_hooks_1 = require("./compilation-hooks");
const javascript_parser_hooks_1 = require("./javascript-parser-hooks");
const normal_module_factory_hooks_1 = require("./normal-module-factory-hooks");
const context_module_factory_hooks_1 = require("./context-module-factory-hooks");
var WebpackHookType;
(function (WebpackHookType) {
    WebpackHookType["SyncHook"] = "syncHook";
    WebpackHookType["SyncBailHook"] = "syncBailHook";
    WebpackHookType["SyncWaterfallHook"] = "syncWaterfallHook";
    WebpackHookType["AsyncSeriesHook"] = "asyncSeriesHook";
    WebpackHookType["AsyncWaterfallHook"] = "asyncWaterfallHook";
    WebpackHookType["AsyncSeriesBailHook"] = "asyncSeriesBailHook";
    WebpackHookType["AsyncParallelHook"] = "asyncParallelHook";
    WebpackHookType["HookMap"] = "hookMap";
    WebpackHookType["AsyncSeriesWaterfallHook"] = "asyncSeriesWaterfallHook";
    WebpackHookType["HookMap_SyncBailHook"] = "hookMap_syncBailHook";
    WebpackHookType["HookMap_SyncHook"] = "hookMap_syncHook";
})(WebpackHookType || (exports.WebpackHookType = WebpackHookType = {}));
class ChildOperationWrapperOperation extends operation_base_classes_1.Operation {
    constructor() {
        super();
        this.name = 'ChildOperationWrapperOperation';
        this.setParams(new operation_base_classes_1.OperationParameter());
    }
    run() {
    }
}
exports.ChildOperationWrapperOperation = ChildOperationWrapperOperation;
class HookBase {
    constructor(hookName, webpackHookType, callbackParameterNames) {
        this.operations = [];
        this.callbackParameterNames = [];
        this.hookName = hookName;
        this.webpackHookType = webpackHookType;
        this.callbackParameterNames = callbackParameterNames;
    }
    addOperations(...operations) {
        this.operations.push(...operations);
    }
}
exports.HookBase = HookBase;
class CompilerHook extends HookBase {
    constructor() {
        super(...arguments);
        this.hookType = operation_1.HookType.CompilerHook;
    }
}
exports.CompilerHook = CompilerHook;
class CompilationHook extends HookBase {
    constructor() {
        super(...arguments);
        this.hookType = operation_1.HookType.CompilationHook;
    }
}
exports.CompilationHook = CompilationHook;
class ContextModuleFactoryHook extends HookBase {
    constructor() {
        super(...arguments);
        this.hookType = operation_1.HookType.ContextModuleFactoryHook;
    }
}
exports.ContextModuleFactoryHook = ContextModuleFactoryHook;
class NormalModuleFactoryHook extends HookBase {
    constructor() {
        super(...arguments);
        this.hookType = operation_1.HookType.NormalModuleFactoryHook;
    }
}
exports.NormalModuleFactoryHook = NormalModuleFactoryHook;
class JavascriptParserHook extends HookBase {
    constructor(hookName, hookType, parameterNames, forIsMandatory) {
        super(hookName, hookType, parameterNames);
        this.hookType = operation_1.HookType.JavascriptParserHook;
        this.forIsMandatory = forIsMandatory;
    }
}
exports.JavascriptParserHook = JavascriptParserHook;
class CompilerHooksContainer {
}
class JavascriptParserHooksContainer {
}
class CompilationHooksContainer {
}
class NormalModuleFactoryHooksContainer {
}
class ContextModuleFactoryHooksContainer {
}
class Options {
    constructor() {
        this.verbose = false;
        this.silent = true;
        this.asyncDefaultTapType = operation_base_classes_1.TapType.NotSet;
        this.compilerHooks = new CompilerHooksContainer();
        compiler_hooks_1.CompilerHookInitializer.initHooks(this.compilerHooks);
        this.onBuildStart = this.compilerHooks.compilation;
        this.onCompile = this.compilerHooks.watchRun;
        this.onBuildEnd = this.compilerHooks.afterEmit;
        this.onBuildExit = this.compilerHooks.done;
        this.onAfterPlugins = this.compilerHooks.afterPlugins;
        this.javascriptParserHooks = new JavascriptParserHooksContainer();
        javascript_parser_hooks_1.JavascriptParserHookInitializer.initHooks(this.javascriptParserHooks);
        this.compilationHooks = new CompilationHooksContainer();
        compilation_hooks_1.CompilationHookInitializer.initHooks(this.compilationHooks);
        this.normalModuleFactoryHooks = new NormalModuleFactoryHooksContainer();
        normal_module_factory_hooks_1.NormalModuleFactoryHookInitializer.initHooks(this.normalModuleFactoryHooks);
        this.contextModuleFactoryHooks = new ContextModuleFactoryHooksContainer();
        context_module_factory_hooks_1.ContextModuleFactoryHookInitializer.initHooks(this.contextModuleFactoryHooks);
    }
}
exports.Options = Options;
