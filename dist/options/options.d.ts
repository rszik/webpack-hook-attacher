/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { HookType } from '../operation-base-classes/operation';
import { TapType, Operation } from '../operation-base-classes';
import { ICompilerHooksContainer } from './compiler-hooks';
import { ICompilationHooksContainer } from './compilation-hooks';
import { IJavascriptParserHooksContainer } from './javascript-parser-hooks';
import { INormalModuleFactoryHooksContainer } from './normal-module-factory-hooks';
import { IContextModuleFactoryHooksContainer } from './context-module-factory-hooks';
export declare enum WebpackHookType {
    SyncHook = "syncHook",
    SyncBailHook = "syncBailHook",
    SyncWaterfallHook = "syncWaterfallHook",
    AsyncSeriesHook = "asyncSeriesHook",
    AsyncWaterfallHook = "asyncWaterfallHook",
    AsyncSeriesBailHook = "asyncSeriesBailHook",
    AsyncParallelHook = "asyncParallelHook",
    HookMap = "hookMap",
    AsyncSeriesWaterfallHook = "asyncSeriesWaterfallHook",
    HookMap_SyncBailHook = "hookMap_syncBailHook",
    HookMap_SyncHook = "hookMap_syncHook"
}
export declare class ChildOperationWrapperOperation extends Operation {
    constructor();
    name: string;
    run(): void;
}
export declare abstract class HookBase {
    constructor(hookName: string, webpackHookType: WebpackHookType, callbackParameterNames: string[]);
    abstract hookType: HookType;
    operations: Operation[];
    hookName: string;
    webpackHookType: WebpackHookType;
    callbackParameterNames: string[];
    addOperations(...operations: Operation[]): void;
}
export declare class CompilerHook extends HookBase {
    hookType: HookType;
}
export declare class CompilationHook extends HookBase {
    hookType: HookType;
}
export declare class ContextModuleFactoryHook extends HookBase {
    hookType: HookType;
}
export declare class NormalModuleFactoryHook extends HookBase {
    hookType: HookType;
}
export declare class JavascriptParserHook extends HookBase {
    constructor(hookName: string, hookType: WebpackHookType, parameterNames: string[], forIsMandatory: boolean);
    hookType: HookType;
    forIsMandatory: boolean;
}
export declare class Options {
    verbose: boolean;
    silent: boolean;
    asyncDefaultTapType: TapType;
    compilerHooks: ICompilerHooksContainer;
    javascriptParserHooks: IJavascriptParserHooksContainer;
    compilationHooks: ICompilationHooksContainer;
    normalModuleFactoryHooks: INormalModuleFactoryHooksContainer;
    contextModuleFactoryHooks: IContextModuleFactoryHooksContainer;
    onBuildStart: CompilerHook;
    onCompile: CompilerHook;
    onBuildEnd: CompilerHook;
    onBuildExit: CompilerHook;
    onAfterPlugins: CompilerHook;
    constructor();
}
