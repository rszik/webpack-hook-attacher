/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { Asset, Chunk, Compilation, Compiler, Module } from 'webpack';
import { CompilerHook, WebpackHookType } from './options';


// https://webpack.js.org/api/compiler-hooks/

export interface ICompilerHooksContainer {

    environment: CompilerHook;
    afterEnvironment: CompilerHook;
    entryOption: CompilerHook;
    afterPlugins: CompilerHook;
    afterResolvers: CompilerHook;
    initialize: CompilerHook;
    beforeRun: CompilerHook;
    run: CompilerHook;
    watchRun: CompilerHook;
    normalModuleFactory: CompilerHook;
    contextModuleFactory: CompilerHook;
    beforeCompile: CompilerHook;
    compile: CompilerHook;
    thisCompilation: CompilerHook;
    compilation: CompilerHook;
    make: CompilerHook;
    afterCompile: CompilerHook;
    shouldEmit: CompilerHook;
    emit: CompilerHook;
    afterEmit: CompilerHook;
    assetEmitted: CompilerHook;
    done: CompilerHook;
    additionalPass: CompilerHook;
    failed: CompilerHook;
    invalid: CompilerHook;
    watchClose: CompilerHook;
    shutdown: CompilerHook;
    infrastructureLog: CompilerHook;
    log: CompilerHook;
}

export class CompilerHookNames {

    public environment: string = 'environment';
    public afterEnvironment: string = 'afterEnvironment';
    public entryOption: string = 'entryOption';
    public afterPlugins: string = 'afterPlugins';
    public afterResolvers: string = 'afterResolvers';
    public initialize: string = 'initialize';
    public beforeRun: string = 'beforeRun';
    public run: string = 'run';
    public watchRun: string = 'watchRun';
    public normalModuleFactory: string = 'normalModuleFactory';
    public contextModuleFactory: string = 'contextModuleFactory';
    public beforeCompile: string = 'beforeCompile';
    public compile: string = 'compile';
    public thisCompilation: string = 'thisCompilation';
    public compilation: string = 'compilation';
    public make: string = 'make';
    public afterCompile: string = 'afterCompile';
    public shouldEmit: string = 'shouldEmit';
    public emit: string = 'emit';
    public afterEmit: string = 'afterEmit';
    public assetEmitted: string = 'assetEmitted';
    public done: string = 'done';
    public additionalPass: string = 'additionalPass';
    public failed: string = 'failed';
    public invalid: string = 'invalid';
    public watchClose: string = 'watchClose';
    public shutdown: string = 'shutdown';
    public infrastructureLog: string = 'infrastructureLog';
    public log: string = 'log';


    public static get i(): CompilerHookNames {
        return new CompilerHookNames();
    }
}

export class CompilerHookCallbackParameters {

    public static CONTEXT: string = 'context';
    public static ENTRY: string = 'entry';
    public static COMPILER: string = 'compiler';
    public static NORMAL_MODULE_FACTORY: string = 'normalModuleFactory';
    public static CONTEXT_MODULE_FACTORY: string = 'contextModuleFactory';
    public static COMPILATION_PARAMS: string = 'compilationParams';
    public static COMPILATION: string = 'compilation';
    public static FILE: string = 'file';
    public static INFO: string = 'info';
    public static STATS: string = 'stats';
    public static ERROR: string = 'error';
    public static FILE_NAME: string = 'fileName';
    public static CHANGE_TIME: string = 'changeTime';
    public static NAME: string = 'name';
    public static TYPE: string = 'type';
    public static ARGS: string = 'args';
    public static ORIGIN: string = 'origin';
    public static LOG_ENTRY: string = 'logEntry';

    public context: any = null;
    public entry: any = null;
    public compiler: any = null;
    public normalModuleFactory: any = null;
    public contextModuleFactory: any = null;
    public compilationParams: any = null;
    public compilation: any = null;
    public file: any = null;
    public info: any = null;
    public stats: any = null;
    public error: any = null;
    public fileName: any = null;
    public changeTime: any = null;
    public name: any = null;
    public type: any = null;
    public args: any = null;
    public origin: any = null;
    public logEntry: any = null;

}

export class CompilerHookInitializer {

    public static initHooks(container: ICompilerHooksContainer): void {


        container.environment = new CompilerHook(
            CompilerHookNames.i.environment,
            WebpackHookType.SyncHook,
            []
        );


        container.afterEnvironment = new CompilerHook(
            CompilerHookNames.i.afterEnvironment,
            WebpackHookType.SyncHook,
            []
        );


        container.entryOption = new CompilerHook(
            CompilerHookNames.i.entryOption,
            WebpackHookType.SyncBailHook,
            [CompilerHookCallbackParameters.CONTEXT, CompilerHookCallbackParameters.ENTRY]
        );


        container.afterPlugins = new CompilerHook(
            CompilerHookNames.i.afterPlugins,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.COMPILER]
        );


        container.afterResolvers = new CompilerHook(
            CompilerHookNames.i.afterResolvers,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.COMPILER]
        );


        container.initialize = new CompilerHook(
            CompilerHookNames.i.initialize,
            WebpackHookType.SyncHook,
            []
        );


        container.beforeRun = new CompilerHook(
            CompilerHookNames.i.beforeRun,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILER]
        );


        container.run = new CompilerHook(
            CompilerHookNames.i.run,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILER]
        );


        container.watchRun = new CompilerHook(
            CompilerHookNames.i.watchRun,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILER]
        );


        container.normalModuleFactory = new CompilerHook(
            CompilerHookNames.i.normalModuleFactory,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.NORMAL_MODULE_FACTORY]
        );


        container.contextModuleFactory = new CompilerHook(
            CompilerHookNames.i.contextModuleFactory,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.CONTEXT_MODULE_FACTORY]
        );


        container.beforeCompile = new CompilerHook(
            CompilerHookNames.i.beforeCompile,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILATION_PARAMS]
        );


        container.compile = new CompilerHook(
            CompilerHookNames.i.compile,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.COMPILATION_PARAMS]
        );


        container.thisCompilation = new CompilerHook(
            CompilerHookNames.i.thisCompilation,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]
        );


        container.compilation = new CompilerHook(
            CompilerHookNames.i.compilation,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.COMPILATION, CompilerHookCallbackParameters.COMPILATION_PARAMS]
        );


        container.make = new CompilerHook(
            CompilerHookNames.i.make,
            WebpackHookType.AsyncParallelHook,
            [CompilerHookCallbackParameters.COMPILATION]
        );


        container.afterCompile = new CompilerHook(
            CompilerHookNames.i.afterCompile,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILATION]
        );


        container.shouldEmit = new CompilerHook(
            CompilerHookNames.i.shouldEmit,
            WebpackHookType.SyncBailHook,
            [CompilerHookCallbackParameters.COMPILATION]
        );


        container.emit = new CompilerHook(
            CompilerHookNames.i.emit,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILATION]
        );


        container.afterEmit = new CompilerHook(
            CompilerHookNames.i.afterEmit,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.COMPILATION]
        );


        container.assetEmitted = new CompilerHook(
            CompilerHookNames.i.assetEmitted,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.FILE, CompilerHookCallbackParameters.INFO]
        );


        container.done = new CompilerHook(
            CompilerHookNames.i.done,
            WebpackHookType.AsyncSeriesHook,
            [CompilerHookCallbackParameters.STATS]
        );


        container.additionalPass = new CompilerHook(
            CompilerHookNames.i.additionalPass,
            WebpackHookType.AsyncSeriesHook,
            []
        );


        container.failed = new CompilerHook(
            CompilerHookNames.i.failed,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.ERROR]
        );


        container.invalid = new CompilerHook(
            CompilerHookNames.i.invalid,
            WebpackHookType.SyncHook,
            [CompilerHookCallbackParameters.FILE_NAME, CompilerHookCallbackParameters.CHANGE_TIME]
        );


        container.watchClose = new CompilerHook(
            CompilerHookNames.i.watchClose,
            WebpackHookType.SyncHook,
            []
        );


        container.shutdown = new CompilerHook(
            CompilerHookNames.i.shutdown,
            WebpackHookType.AsyncSeriesHook,
            []
        );


        container.infrastructureLog = new CompilerHook(
            CompilerHookNames.i.infrastructureLog,
            WebpackHookType.SyncBailHook,
            [CompilerHookCallbackParameters.NAME, CompilerHookCallbackParameters.TYPE, CompilerHookCallbackParameters.ARGS]
        );


        container.log = new CompilerHook(
            CompilerHookNames.i.log,
            WebpackHookType.SyncBailHook,
            [CompilerHookCallbackParameters.ORIGIN, CompilerHookCallbackParameters.LOG_ENTRY]
        );
    }
}
