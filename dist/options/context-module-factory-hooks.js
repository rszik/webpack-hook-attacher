"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextModuleFactoryHookInitializer = exports.ContextModuleFactoryHookCallbackParameters = exports.ContextModuleFactoryHookNames = void 0;
const options_1 = require("./options");
class ContextModuleFactoryHookNames {
    constructor() {
        this.beforeResolve = 'beforeResolve';
        this.afterResolve = 'afterResolve';
        this.contextModuleFiles = 'contextModuleFiles';
        this.alternativeRequests = 'alternativeRequests';
    }
    static get i() {
        return new ContextModuleFactoryHookNames();
    }
}
exports.ContextModuleFactoryHookNames = ContextModuleFactoryHookNames;
class ContextModuleFactoryHookCallbackParameters {
    constructor() {
        this.data = null;
        this.fileNames = null;
        this.request = null;
        this.options = null;
    }
}
exports.ContextModuleFactoryHookCallbackParameters = ContextModuleFactoryHookCallbackParameters;
ContextModuleFactoryHookCallbackParameters.DATA = 'data';
ContextModuleFactoryHookCallbackParameters.FILE_NAMES = 'fileNames';
ContextModuleFactoryHookCallbackParameters.REQUEST = 'request';
ContextModuleFactoryHookCallbackParameters.OPTIONS = 'options';
class ContextModuleFactoryHookInitializer {
    static initHooks(container) {
        container.beforeResolve = new options_1.ContextModuleFactoryHook(ContextModuleFactoryHookNames.i.beforeResolve, options_1.WebpackHookType.AsyncSeriesWaterfallHook, [ContextModuleFactoryHookCallbackParameters.DATA]);
        container.afterResolve = new options_1.ContextModuleFactoryHook(ContextModuleFactoryHookNames.i.afterResolve, options_1.WebpackHookType.AsyncSeriesWaterfallHook, [ContextModuleFactoryHookCallbackParameters.DATA]);
        container.contextModuleFiles = new options_1.ContextModuleFactoryHook(ContextModuleFactoryHookNames.i.contextModuleFiles, options_1.WebpackHookType.SyncWaterfallHook, [ContextModuleFactoryHookCallbackParameters.FILE_NAMES]);
        container.alternativeRequests = new options_1.ContextModuleFactoryHook(ContextModuleFactoryHookNames.i.alternativeRequests, options_1.WebpackHookType.AsyncSeriesWaterfallHook, [ContextModuleFactoryHookCallbackParameters.REQUEST, ContextModuleFactoryHookCallbackParameters.OPTIONS]);
    }
}
exports.ContextModuleFactoryHookInitializer = ContextModuleFactoryHookInitializer;
