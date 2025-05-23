"use strict";
/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompilationHookInitializer = exports.CompilationHookCallbackParameters = exports.CompilationHookNames = void 0;
const options_1 = require("./options");
class CompilationHookNames {
    constructor() {
        this.buildModule = 'buildModule';
        this.rebuildModule = 'rebuildModule';
        this.failedModule = 'failedModule';
        this.succeedModule = 'succeedModule';
        this.finishModules = 'finishModules';
        this.finishRebuildingModule = 'finishRebuildingModule';
        this.seal = 'seal';
        this.unseal = 'unseal';
        this.optimizeDependencies = 'optimizeDependencies';
        this.afterOptimizeDependencies = 'afterOptimizeDependencies';
        this.afterChunks = 'afterChunks';
        this.optimize = 'optimize';
        this.optimizeModules = 'optimizeModules';
        this.afterOptimizeModules = 'afterOptimizeModules';
        this.optimizeChunks = 'optimizeChunks';
        this.afterOptimizeChunks = 'afterOptimizeChunks';
        this.optimizeTree = 'optimizeTree';
        this.afterOptimizeTree = 'afterOptimizeTree';
        this.optimizeChunkModules = 'optimizeChunkModules';
        this.afterOptimizeChunkModules = 'afterOptimizeChunkModules';
        this.shouldRecord = 'shouldRecord';
        this.reviveModules = 'reviveModules';
        this.beforeModuleIds = 'beforeModuleIds';
        this.moduleIds = 'moduleIds';
        this.optimizeModuleIds = 'optimizeModuleIds';
        this.afterOptimizeModuleIds = 'afterOptimizeModuleIds';
        this.reviveChunks = 'reviveChunks';
        this.beforeChunkIds = 'beforeChunkIds';
        this.chunkIds = 'chunkIds';
        this.optimizeChunkIds = 'optimizeChunkIds';
        this.afterOptimizeChunkIds = 'afterOptimizeChunkIds';
        this.recordModules = 'recordModules';
        this.recordChunks = 'recordChunks';
        this.beforeModuleHash = 'beforeModuleHash';
        this.afterModuleHash = 'afterModuleHash';
        this.beforeHash = 'beforeHash';
        this.afterHash = 'afterHash';
        this.recordHash = 'recordHash';
        this.record = 'record';
        this.beforeModuleAssets = 'beforeModuleAssets';
        this.additionalChunkAssets = 'additionalChunkAssets';
        this.shouldGenerateChunkAssets = 'shouldGenerateChunkAssets';
        this.beforeChunkAssets = 'beforeChunkAssets';
        this.additionalAssets = 'additionalAssets';
        this.optimizeChunkAssets = 'optimizeChunkAssets';
        this.afterOptimizeChunkAssets = 'afterOptimizeChunkAssets';
        this.optimizeAssets = 'optimizeAssets';
        this.afterOptimizeAssets = 'afterOptimizeAssets';
        this.processAssets = 'processAssets';
        this.afterProcessAssets = 'afterProcessAssets';
        this.needAdditionalSeal = 'needAdditionalSeal';
        this.afterSeal = 'afterSeal';
        this.chunkHash = 'chunkHash';
        this.moduleAsset = 'moduleAsset';
        this.chunkAsset = 'chunkAsset';
        this.assetPath = 'assetPath';
        this.needAdditionalPass = 'needAdditionalPass';
        this.childCompiler = 'childCompiler';
        this.statsPreset = 'statsPreset';
        this.statsNormalize = 'statsNormalize';
        this.statsFactory = 'statsFactory';
        this.statsPrinter = 'statsPrinter';
    }
    static get i() {
        return new CompilationHookNames();
    }
}
exports.CompilationHookNames = CompilationHookNames;
class CompilationHookCallbackParameters {
    constructor() {
        this.module = null;
        this.error = null;
        this.modules = null;
        this.chunks = null;
        this.records = null;
        this.compilation = null;
        this.assets = null;
        this.chunk = null;
        this.chunkHash = null;
        this.filename = null;
        this.path = null;
        this.options = null;
        this.childCompiler = null;
        this.compilerName = null;
        this.compilerIndex = null;
        this.context = null;
        this.statsFactory = null;
        this.statsPrinter = null;
    }
}
exports.CompilationHookCallbackParameters = CompilationHookCallbackParameters;
CompilationHookCallbackParameters.MODULE = 'module';
CompilationHookCallbackParameters.ERROR = 'error';
CompilationHookCallbackParameters.MODULES = 'modules';
CompilationHookCallbackParameters.CHUNKS = 'chunks';
CompilationHookCallbackParameters.RECORDS = 'records';
CompilationHookCallbackParameters.COMPILATION = 'compilation';
CompilationHookCallbackParameters.ASSETS = 'assets';
CompilationHookCallbackParameters.CHUNK = 'chunk';
CompilationHookCallbackParameters.CHUNK_HASH = 'chunkHash';
CompilationHookCallbackParameters.FILENAME = 'filename';
CompilationHookCallbackParameters.PATH = 'path';
CompilationHookCallbackParameters.OPTIONS = 'options';
CompilationHookCallbackParameters.CHILD_COMPILER = 'childCompiler';
CompilationHookCallbackParameters.COMPILER_NAME = 'compilerName';
CompilationHookCallbackParameters.COMPILER_INDEX = 'compilerIndex';
CompilationHookCallbackParameters.CONTEXT = 'context';
CompilationHookCallbackParameters.STATS_FACTORY = 'statsFactory';
CompilationHookCallbackParameters.STATS_PRINTER = 'statsPrinter';
class CompilationHookInitializer {
    static initHooks(container) {
        container.buildModule = new options_1.CompilationHook(CompilationHookNames.i.buildModule, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE]);
        container.rebuildModule = new options_1.CompilationHook(CompilationHookNames.i.rebuildModule, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE]);
        container.failedModule = new options_1.CompilationHook(CompilationHookNames.i.failedModule, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE, CompilationHookCallbackParameters.ERROR]);
        container.succeedModule = new options_1.CompilationHook(CompilationHookNames.i.succeedModule, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE]);
        container.finishModules = new options_1.CompilationHook(CompilationHookNames.i.finishModules, options_1.WebpackHookType.AsyncSeriesHook, [CompilationHookCallbackParameters.MODULES]);
        container.finishRebuildingModule = new options_1.CompilationHook(CompilationHookNames.i.finishRebuildingModule, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE]);
        container.seal = new options_1.CompilationHook(CompilationHookNames.i.seal, options_1.WebpackHookType.SyncHook, []);
        container.unseal = new options_1.CompilationHook(CompilationHookNames.i.unseal, options_1.WebpackHookType.SyncHook, []);
        container.optimizeDependencies = new options_1.CompilationHook(CompilationHookNames.i.optimizeDependencies, options_1.WebpackHookType.SyncBailHook, [CompilationHookCallbackParameters.MODULES]);
        container.afterOptimizeDependencies = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeDependencies, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.afterChunks = new options_1.CompilationHook(CompilationHookNames.i.afterChunks, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.optimize = new options_1.CompilationHook(CompilationHookNames.i.optimize, options_1.WebpackHookType.SyncHook, []);
        container.optimizeModules = new options_1.CompilationHook(CompilationHookNames.i.optimizeModules, options_1.WebpackHookType.SyncBailHook, [CompilationHookCallbackParameters.MODULES]);
        container.afterOptimizeModules = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeModules, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.optimizeChunks = new options_1.CompilationHook(CompilationHookNames.i.optimizeChunks, options_1.WebpackHookType.SyncBailHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.afterOptimizeChunks = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeChunks, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.optimizeTree = new options_1.CompilationHook(CompilationHookNames.i.optimizeTree, options_1.WebpackHookType.AsyncSeriesHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);
        container.afterOptimizeTree = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeTree, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);
        container.optimizeChunkModules = new options_1.CompilationHook(CompilationHookNames.i.optimizeChunkModules, options_1.WebpackHookType.SyncBailHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);
        container.afterOptimizeChunkModules = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeChunkModules, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.MODULES]);
        container.shouldRecord = new options_1.CompilationHook(CompilationHookNames.i.shouldRecord, options_1.WebpackHookType.SyncBailHook, []);
        container.reviveModules = new options_1.CompilationHook(CompilationHookNames.i.reviveModules, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES, CompilationHookCallbackParameters.RECORDS]);
        container.beforeModuleIds = new options_1.CompilationHook(CompilationHookNames.i.beforeModuleIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.moduleIds = new options_1.CompilationHook(CompilationHookNames.i.moduleIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.optimizeModuleIds = new options_1.CompilationHook(CompilationHookNames.i.optimizeModuleIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.afterOptimizeModuleIds = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeModuleIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES]);
        container.reviveChunks = new options_1.CompilationHook(CompilationHookNames.i.reviveChunks, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.RECORDS]);
        container.beforeChunkIds = new options_1.CompilationHook(CompilationHookNames.i.beforeChunkIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.chunkIds = new options_1.CompilationHook(CompilationHookNames.i.chunkIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.optimizeChunkIds = new options_1.CompilationHook(CompilationHookNames.i.optimizeChunkIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.afterOptimizeChunkIds = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeChunkIds, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.recordModules = new options_1.CompilationHook(CompilationHookNames.i.recordModules, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULES, CompilationHookCallbackParameters.RECORDS]);
        container.recordChunks = new options_1.CompilationHook(CompilationHookNames.i.recordChunks, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS, CompilationHookCallbackParameters.RECORDS]);
        container.beforeModuleHash = new options_1.CompilationHook(CompilationHookNames.i.beforeModuleHash, options_1.WebpackHookType.SyncHook, []);
        container.afterModuleHash = new options_1.CompilationHook(CompilationHookNames.i.afterModuleHash, options_1.WebpackHookType.SyncHook, []);
        container.beforeHash = new options_1.CompilationHook(CompilationHookNames.i.beforeHash, options_1.WebpackHookType.SyncHook, []);
        container.afterHash = new options_1.CompilationHook(CompilationHookNames.i.afterHash, options_1.WebpackHookType.SyncHook, []);
        container.recordHash = new options_1.CompilationHook(CompilationHookNames.i.recordHash, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.RECORDS]);
        container.record = new options_1.CompilationHook(CompilationHookNames.i.record, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.COMPILATION, CompilationHookCallbackParameters.RECORDS]);
        container.beforeModuleAssets = new options_1.CompilationHook(CompilationHookNames.i.beforeModuleAssets, options_1.WebpackHookType.SyncHook, []);
        container.additionalChunkAssets = new options_1.CompilationHook(CompilationHookNames.i.additionalChunkAssets, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.shouldGenerateChunkAssets = new options_1.CompilationHook(CompilationHookNames.i.shouldGenerateChunkAssets, options_1.WebpackHookType.SyncBailHook, []);
        container.beforeChunkAssets = new options_1.CompilationHook(CompilationHookNames.i.beforeChunkAssets, options_1.WebpackHookType.SyncHook, []);
        container.additionalAssets = new options_1.CompilationHook(CompilationHookNames.i.additionalAssets, options_1.WebpackHookType.AsyncSeriesHook, []);
        container.optimizeChunkAssets = new options_1.CompilationHook(CompilationHookNames.i.optimizeChunkAssets, options_1.WebpackHookType.AsyncSeriesHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.afterOptimizeChunkAssets = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeChunkAssets, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNKS]);
        container.optimizeAssets = new options_1.CompilationHook(CompilationHookNames.i.optimizeAssets, options_1.WebpackHookType.AsyncSeriesHook, [CompilationHookCallbackParameters.ASSETS]);
        container.afterOptimizeAssets = new options_1.CompilationHook(CompilationHookNames.i.afterOptimizeAssets, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.ASSETS]);
        container.processAssets = new options_1.CompilationHook(CompilationHookNames.i.processAssets, options_1.WebpackHookType.AsyncSeriesHook, [CompilationHookCallbackParameters.ASSETS]);
        container.afterProcessAssets = new options_1.CompilationHook(CompilationHookNames.i.afterProcessAssets, options_1.WebpackHookType.SyncHook, []);
        container.needAdditionalSeal = new options_1.CompilationHook(CompilationHookNames.i.needAdditionalSeal, options_1.WebpackHookType.SyncBailHook, []);
        container.afterSeal = new options_1.CompilationHook(CompilationHookNames.i.afterSeal, options_1.WebpackHookType.AsyncSeriesHook, []);
        container.chunkHash = new options_1.CompilationHook(CompilationHookNames.i.chunkHash, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNK, CompilationHookCallbackParameters.CHUNK_HASH]);
        container.moduleAsset = new options_1.CompilationHook(CompilationHookNames.i.moduleAsset, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.MODULE, CompilationHookCallbackParameters.FILENAME]);
        container.chunkAsset = new options_1.CompilationHook(CompilationHookNames.i.chunkAsset, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHUNK, CompilationHookCallbackParameters.FILENAME]);
        container.assetPath = new options_1.CompilationHook(CompilationHookNames.i.assetPath, options_1.WebpackHookType.SyncWaterfallHook, [CompilationHookCallbackParameters.PATH, CompilationHookCallbackParameters.OPTIONS]);
        container.needAdditionalPass = new options_1.CompilationHook(CompilationHookNames.i.needAdditionalPass, options_1.WebpackHookType.SyncBailHook, []);
        container.childCompiler = new options_1.CompilationHook(CompilationHookNames.i.childCompiler, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.CHILD_COMPILER, CompilationHookCallbackParameters.COMPILER_NAME, CompilationHookCallbackParameters.COMPILER_INDEX]);
        container.statsPreset = new options_1.CompilationHook(CompilationHookNames.i.statsPreset, options_1.WebpackHookType.HookMap, [CompilationHookCallbackParameters.OPTIONS, CompilationHookCallbackParameters.CONTEXT]);
        container.statsNormalize = new options_1.CompilationHook(CompilationHookNames.i.statsNormalize, options_1.WebpackHookType.SyncHook, [CompilationHookCallbackParameters.OPTIONS, CompilationHookCallbackParameters.CONTEXT]);
        container.statsFactory = new options_1.CompilationHook(CompilationHookNames.i.statsFactory, options_1.WebpackHookType.HookMap, [CompilationHookCallbackParameters.STATS_FACTORY, CompilationHookCallbackParameters.OPTIONS]);
        container.statsPrinter = new options_1.CompilationHook(CompilationHookNames.i.statsPrinter, options_1.WebpackHookType.HookMap, [CompilationHookCallbackParameters.STATS_PRINTER, CompilationHookCallbackParameters.OPTIONS]);
    }
}
exports.CompilationHookInitializer = CompilationHookInitializer;
