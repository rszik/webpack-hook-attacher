"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilerHookInitializer = exports.CompilerHookCallbackParameters = exports.CompilerHookNames = void 0;
const options_1 = require("./options");
class CompilerHookNames {
    constructor() {
        this.environment = 'environment';
        this.afterEnvironment = 'afterEnvironment';
        this.entryOption = 'entryOption';
        this.afterPlugins = 'afterPlugins';
        this.afterResolvers = 'afterResolvers';
        this.initialize = 'initialize';
        this.beforeRun = 'beforeRun';
        this.run = 'run';
        this.watchRun = 'watchRun';
        this.normalModuleFactory = 'normalModuleFactory';
        this.contextModuleFactory = 'contextModuleFactory';
        this.beforeCompile = 'beforeCompile';
        this.compile = 'compile';
        this.thisCompilation = 'thisCompilation';
        this.compilation = 'compilation';
        this.make = 'make';
        this.afterCompile = 'afterCompile';
        this.shouldEmit = 'shouldEmit';
        this.emit = 'emit';
        this.afterEmit = 'afterEmit';
        this.assetEmitted = 'assetEmitted';
        this.done = 'done';
        this.additionalPass = 'additionalPass';
        this.failed = 'failed';
        this.invalid = 'invalid';
        this.watchClose = 'watchClose';
        this.shutdown = 'shutdown';
        this.infrastructureLog = 'infrastructureLog';
        this.log = 'log';
    }
    static get i() {
        return new CompilerHookNames();
    }
}
exports.CompilerHookNames = CompilerHookNames;
class CompilerHookCallbackParameters {
    constructor() {
        this.context = null;
        this.entry = null;
        this.compiler = null;
        this.normalModuleFactory = null;
        this.contextModuleFactory = null;
        this.compilationParams = null;
        this.compilation = null;
        this.file = null;
        this.info = null;
        this.stats = null;
        this.error = null;
        this.fileName = null;
        this.changeTime = null;
        this.name = null;
        this.type = null;
        this.args = null;
        this.origin = null;
        this.logEntry = null;
    }
}
exports.CompilerHookCallbackParameters = CompilerHookCallbackParameters;
CompilerHookCallbackParameters.CONTEXT = 'context';
CompilerHookCallbackParameters.ENTRY = 'entry';
CompilerHookCallbackParameters.COMPILER = 'compiler';
CompilerHookCallbackParameters.NORMAL_MODULE_FACTORY = 'normalModuleFactory';
CompilerHookCallbackParameters.CONTEXT_MODULE_FACTORY = 'contextModuleFactory';
CompilerHookCallbackParameters.COMPILATION_PARAMS = 'compilationParams';
CompilerHookCallbackParameters.COMPILATION = 'compilation';
CompilerHookCallbackParameters.FILE = 'file';
CompilerHookCallbackParameters.INFO = 'info';
CompilerHookCallbackParameters.STATS = 'stats';
CompilerHookCallbackParameters.ERROR = 'error';
CompilerHookCallbackParameters.FILE_NAME = 'fileName';
CompilerHookCallbackParameters.CHANGE_TIME = 'changeTime';
CompilerHookCallbackParameters.NAME = 'name';
CompilerHookCallbackParameters.TYPE = 'type';
CompilerHookCallbackParameters.ARGS = 'args';
CompilerHookCallbackParameters.ORIGIN = 'origin';
CompilerHookCallbackParameters.LOG_ENTRY = 'logEntry';
class CompilerHookInitializer {
    static initHooks(container) {
        container.environment = new options_1.CompilerHook(CompilerHookNames.i.environment, options_1.WebpackHookType.SyncHook, []);
        container.afterEnvironment = new options_1.CompilerHook(CompilerHookNames.i.afterEnvironment, options_1.WebpackHookType.SyncHook, []);
        container.entryOption = new options_1.CompilerHook(CompilerHookNames.i.entryOption, options_1.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.CONTEXT, CompilerHookCallbackParameters.ENTRY]);
        container.afterPlugins = new options_1.CompilerHook(CompilerHookNames.i.afterPlugins, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILER]);
        container.afterResolvers = new options_1.CompilerHook(CompilerHookNames.i.afterResolvers, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILER]);
        container.initialize = new options_1.CompilerHook(CompilerHookNames.i.initialize, options_1.WebpackHookType.SyncHook, []);
        container.beforeRun = new options_1.CompilerHook(CompilerHookNames.i.beforeRun, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.run = new options_1.CompilerHook(CompilerHookNames.i.run, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.watchRun = new options_1.CompilerHook(CompilerHookNames.i.watchRun, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILER]);
        container.normalModuleFactory = new options_1.CompilerHook(CompilerHookNames.i.normalModuleFactory, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.NORMAL_MODULE_FACTORY]);
        container.contextModuleFactory = new options_1.CompilerHook(CompilerHookNames.i.contextModuleFactory, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.CONTEXT_MODULE_FACTORY]);
        container.beforeCompile = new options_1.CompilerHook(CompilerHookNames.i.beforeCompile, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.compile = new options_1.CompilerHook(CompilerHookNames.i.compile, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.thisCompilation = new options_1.CompilerHook(CompilerHookNames.i.thisCompilation, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.compilation = new options_1.CompilerHook(CompilerHookNames.i.compilation, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]);
        container.make = new options_1.CompilerHook(CompilerHookNames.i.make, options_1.WebpackHookType.AsyncParallelHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.afterCompile = new options_1.CompilerHook(CompilerHookNames.i.afterCompile, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.shouldEmit = new options_1.CompilerHook(CompilerHookNames.i.shouldEmit, options_1.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.emit = new options_1.CompilerHook(CompilerHookNames.i.emit, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.afterEmit = new options_1.CompilerHook(CompilerHookNames.i.afterEmit, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.COMPILATION]);
        container.assetEmitted = new options_1.CompilerHook(CompilerHookNames.i.assetEmitted, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.FILE, CompilerHookCallbackParameters.INFO]);
        container.done = new options_1.CompilerHook(CompilerHookNames.i.done, options_1.WebpackHookType.AsyncSeriesHook, [CompilerHookCallbackParameters.STATS]);
        container.additionalPass = new options_1.CompilerHook(CompilerHookNames.i.additionalPass, options_1.WebpackHookType.AsyncSeriesHook, []);
        container.failed = new options_1.CompilerHook(CompilerHookNames.i.failed, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.ERROR]);
        container.invalid = new options_1.CompilerHook(CompilerHookNames.i.invalid, options_1.WebpackHookType.SyncHook, [CompilerHookCallbackParameters.FILE_NAME, CompilerHookCallbackParameters.CHANGE_TIME]);
        container.watchClose = new options_1.CompilerHook(CompilerHookNames.i.watchClose, options_1.WebpackHookType.SyncHook, []);
        container.shutdown = new options_1.CompilerHook(CompilerHookNames.i.shutdown, options_1.WebpackHookType.AsyncSeriesHook, []);
        container.infrastructureLog = new options_1.CompilerHook(CompilerHookNames.i.infrastructureLog, options_1.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.NAME, CompilerHookCallbackParameters.TYPE, CompilerHookCallbackParameters.ARGS]);
        container.log = new options_1.CompilerHook(CompilerHookNames.i.log, options_1.WebpackHookType.SyncBailHook, [CompilerHookCallbackParameters.ORIGIN, CompilerHookCallbackParameters.LOG_ENTRY]);
    }
}
exports.CompilerHookInitializer = CompilerHookInitializer;
