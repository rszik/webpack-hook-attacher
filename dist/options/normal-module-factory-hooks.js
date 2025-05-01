"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalModuleFactoryHookInitializer = exports.NormalModuleFactoryHookCallbackParameters = exports.NormalModuleFactoryHookNames = void 0;
const options_1 = require("./options");
class NormalModuleFactoryHookNames {
    constructor() {
        this.beforeResolve = 'beforeResolve';
        this.factorize = 'factorize';
        this.resolve = 'resolve';
        this.resolveForScheme = 'resolveForScheme';
        this.afterResolve = 'afterResolve';
        this.createModule = 'createModule';
        this.createModuleClass = 'createModuleClass';
        this.module = 'module';
        this.createParser = 'createParser';
        this.parser = 'parser';
        this.createGenerator = 'createGenerator';
        this.generator = 'generator';
    }
    static get i() {
        return new NormalModuleFactoryHookNames();
    }
}
exports.NormalModuleFactoryHookNames = NormalModuleFactoryHookNames;
class NormalModuleFactoryHookCallbackParameters {
    constructor() {
        this.resolveData = null;
        this.createData = null;
        this.module = null;
        this.parserOptions = null;
        this.parser = null;
        this.generatorOptions = null;
        this.generator = null;
    }
}
exports.NormalModuleFactoryHookCallbackParameters = NormalModuleFactoryHookCallbackParameters;
NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA = 'resolveData';
NormalModuleFactoryHookCallbackParameters.CREATE_DATA = 'createData';
NormalModuleFactoryHookCallbackParameters.MODULE = 'module';
NormalModuleFactoryHookCallbackParameters.PARSER_OPTIONS = 'parserOptions';
NormalModuleFactoryHookCallbackParameters.PARSER = 'parser';
NormalModuleFactoryHookCallbackParameters.GENERATOR_OPTIONS = 'generatorOptions';
NormalModuleFactoryHookCallbackParameters.GENERATOR = 'generator';
class NormalModuleFactoryHookInitializer {
    static initHooks(container) {
        container.beforeResolve = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.beforeResolve, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.factorize = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.factorize, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.resolve = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.resolve, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.resolveForScheme = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.resolveForScheme, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.afterResolve = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.afterResolve, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.createModule = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.createModule, options_1.WebpackHookType.AsyncSeriesBailHook, [NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.createModuleClass = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.createModuleClass, options_1.WebpackHookType.HookMap_SyncBailHook, [NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.module = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.module, options_1.WebpackHookType.SyncWaterfallHook, [NormalModuleFactoryHookCallbackParameters.MODULE, NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]);
        container.createParser = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.createParser, options_1.WebpackHookType.HookMap_SyncBailHook, [NormalModuleFactoryHookCallbackParameters.PARSER_OPTIONS]);
        container.parser = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.parser, options_1.WebpackHookType.HookMap_SyncHook, [NormalModuleFactoryHookCallbackParameters.PARSER, NormalModuleFactoryHookCallbackParameters.PARSER_OPTIONS]);
        container.createGenerator = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.createGenerator, options_1.WebpackHookType.HookMap_SyncBailHook, [NormalModuleFactoryHookCallbackParameters.GENERATOR_OPTIONS]);
        container.generator = new options_1.NormalModuleFactoryHook(NormalModuleFactoryHookNames.i.generator, options_1.WebpackHookType.HookMap_SyncHook, [NormalModuleFactoryHookCallbackParameters.GENERATOR, NormalModuleFactoryHookCallbackParameters.GENERATOR_OPTIONS]);
    }
}
exports.NormalModuleFactoryHookInitializer = NormalModuleFactoryHookInitializer;
