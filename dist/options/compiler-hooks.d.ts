/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { CompilerHook } from './options';
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
export declare class CompilerHookNames {
    environment: string;
    afterEnvironment: string;
    entryOption: string;
    afterPlugins: string;
    afterResolvers: string;
    initialize: string;
    beforeRun: string;
    run: string;
    watchRun: string;
    normalModuleFactory: string;
    contextModuleFactory: string;
    beforeCompile: string;
    compile: string;
    thisCompilation: string;
    compilation: string;
    make: string;
    afterCompile: string;
    shouldEmit: string;
    emit: string;
    afterEmit: string;
    assetEmitted: string;
    done: string;
    additionalPass: string;
    failed: string;
    invalid: string;
    watchClose: string;
    shutdown: string;
    infrastructureLog: string;
    log: string;
    static get i(): CompilerHookNames;
}
export declare class CompilerHookCallbackParameters {
    static CONTEXT: string;
    static ENTRY: string;
    static COMPILER: string;
    static NORMAL_MODULE_FACTORY: string;
    static CONTEXT_MODULE_FACTORY: string;
    static COMPILATION_PARAMS: string;
    static COMPILATION: string;
    static FILE: string;
    static INFO: string;
    static STATS: string;
    static ERROR: string;
    static FILE_NAME: string;
    static CHANGE_TIME: string;
    static NAME: string;
    static TYPE: string;
    static ARGS: string;
    static ORIGIN: string;
    static LOG_ENTRY: string;
    context: any;
    entry: any;
    compiler: any;
    normalModuleFactory: any;
    contextModuleFactory: any;
    compilationParams: any;
    compilation: any;
    file: any;
    info: any;
    stats: any;
    error: any;
    fileName: any;
    changeTime: any;
    name: any;
    type: any;
    args: any;
    origin: any;
    logEntry: any;
}
export declare class CompilerHookInitializer {
    static initHooks(container: ICompilerHooksContainer): void;
}
