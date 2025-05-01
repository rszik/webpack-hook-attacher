/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { HookType } from '../operation-base-classes/operation';
import { TapType, Operation, OperationParameter } from '../operation-base-classes';
import { CompilerHookInitializer, ICompilerHooksContainer } from './compiler-hooks';
import { CompilationHookInitializer, ICompilationHooksContainer } from './compilation-hooks';
import { JavascriptParserHookInitializer, IJavascriptParserHooksContainer } from './javascript-parser-hooks';
import { NormalModuleFactoryHookInitializer, INormalModuleFactoryHooksContainer } from './normal-module-factory-hooks';
import { ContextModuleFactoryHookInitializer, IContextModuleFactoryHooksContainer } from './context-module-factory-hooks';

export enum WebpackHookType {
    SyncHook = 'syncHook',
    SyncBailHook = 'syncBailHook',
    SyncWaterfallHook = 'syncWaterfallHook',
    AsyncSeriesHook = 'asyncSeriesHook',
    AsyncWaterfallHook = 'asyncWaterfallHook',
    AsyncSeriesBailHook = 'asyncSeriesBailHook',
    AsyncParallelHook = 'asyncParallelHook',
    HookMap = 'hookMap',
    AsyncSeriesWaterfallHook = 'asyncSeriesWaterfallHook',
    HookMap_SyncBailHook = 'hookMap_syncBailHook',
    HookMap_SyncHook = 'hookMap_syncHook',
}

export class ChildOperationWrapperOperation extends Operation {
    constructor() {
        super();
        this.setParams(new OperationParameter());
    }

    public name: string = 'ChildOperationWrapperOperation';
    public run(): void {

    }
}

export abstract class HookBase {

    constructor(hookName: string, webpackHookType: WebpackHookType, callbackParameterNames: string[]) {
        this.hookName = hookName;
        this.webpackHookType = webpackHookType;
        this.callbackParameterNames = callbackParameterNames;
    }

    public abstract hookType: HookType;

    public operations: Operation[] = [];
    public hookName: string;
    public webpackHookType: WebpackHookType;
    public callbackParameterNames: string[] = [];

    public addOperations(...operations: Operation[]): void {
        this.operations.push(...operations);
    }
}

export class CompilerHook extends HookBase {

    public hookType: HookType = HookType.CompilerHook;

}

export class CompilationHook extends HookBase {

    public hookType: HookType = HookType.CompilationHook;

}

export class ContextModuleFactoryHook extends HookBase {

    public hookType: HookType = HookType.ContextModuleFactoryHook;

}

export class NormalModuleFactoryHook extends HookBase {

    public hookType: HookType = HookType.NormalModuleFactoryHook;

}

export class JavascriptParserHook extends HookBase {

    constructor(hookName: string, hookType: WebpackHookType, parameterNames: string[], forIsMandatory: boolean) {
        super(hookName, hookType, parameterNames);
        this.forIsMandatory = forIsMandatory;
    }

    public hookType: HookType = HookType.JavascriptParserHook;

    public forIsMandatory: boolean;
}

class CompilerHooksContainer implements ICompilerHooksContainer {

    public environment: CompilerHook;
    public afterEnvironment: CompilerHook;
    public entryOption: CompilerHook;
    public afterPlugins: CompilerHook;
    public afterResolvers: CompilerHook;
    public initialize: CompilerHook;
    public beforeRun: CompilerHook;
    public run: CompilerHook;
    public watchRun: CompilerHook;
    public normalModuleFactory: CompilerHook;
    public contextModuleFactory: CompilerHook;
    public beforeCompile: CompilerHook;
    public compile: CompilerHook;
    public thisCompilation: CompilerHook;
    public compilation: CompilerHook;
    public make: CompilerHook;
    public afterCompile: CompilerHook;
    public shouldEmit: CompilerHook;
    public emit: CompilerHook;
    public afterEmit: CompilerHook;
    public assetEmitted: CompilerHook;
    public done: CompilerHook;
    public additionalPass: CompilerHook;
    public failed: CompilerHook;
    public invalid: CompilerHook;
    public watchClose: CompilerHook;
    public shutdown: CompilerHook;
    public infrastructureLog: CompilerHook;
    public log: CompilerHook;

}

class JavascriptParserHooksContainer implements IJavascriptParserHooksContainer {

    public evaluateTypeof: JavascriptParserHook;
    public evaluate: JavascriptParserHook;
    public evaluateIdentifier: JavascriptParserHook;
    public evaluateDefinedIdentifier: JavascriptParserHook;
    public evaluateCallExpressionMember: JavascriptParserHook;
    public statement: JavascriptParserHook;
    public statementIf: JavascriptParserHook;
    public label: JavascriptParserHook;
    public import: JavascriptParserHook;
    public importSpecifier: JavascriptParserHook;
    public export: JavascriptParserHook;
    public exportImport: JavascriptParserHook;
    public exportDeclaration: JavascriptParserHook;
    public exportExpression: JavascriptParserHook;
    public exportSpecifier: JavascriptParserHook;
    public exportImportSpecifier: JavascriptParserHook;
    public varDeclaration: JavascriptParserHook;
    public varDeclarationLet: JavascriptParserHook;
    public varDeclarationConst: JavascriptParserHook;
    public varDeclarationVar: JavascriptParserHook;
    public canRename: JavascriptParserHook;
    public rename: JavascriptParserHook;
    public assigned: JavascriptParserHook;
    public assign: JavascriptParserHook;
    public typeof: JavascriptParserHook;
    public call: JavascriptParserHook;
    public callMemberChain: JavascriptParserHook;
    public new: JavascriptParserHook;
    public expression: JavascriptParserHook;
    public expressionConditionalOperator: JavascriptParserHook;
    public program: JavascriptParserHook;

}

class CompilationHooksContainer implements ICompilationHooksContainer {

    public buildModule: CompilationHook;
    public rebuildModule: CompilationHook;
    public failedModule: CompilationHook;
    public succeedModule: CompilationHook;
    public finishModules: CompilationHook;
    public finishRebuildingModule: CompilationHook;
    public seal: CompilationHook;
    public unseal: CompilationHook;
    public optimizeDependencies: CompilationHook;
    public afterOptimizeDependencies: CompilationHook;
    public afterChunks: CompilationHook;
    public optimize: CompilationHook;
    public optimizeModules: CompilationHook;
    public afterOptimizeModules: CompilationHook;
    public optimizeChunks: CompilationHook;
    public afterOptimizeChunks: CompilationHook;
    public optimizeTree: CompilationHook;
    public afterOptimizeTree: CompilationHook;
    public optimizeChunkModules: CompilationHook;
    public afterOptimizeChunkModules: CompilationHook;
    public shouldRecord: CompilationHook;
    public reviveModules: CompilationHook;
    public beforeModuleIds: CompilationHook;
    public moduleIds: CompilationHook;
    public optimizeModuleIds: CompilationHook;
    public afterOptimizeModuleIds: CompilationHook;
    public reviveChunks: CompilationHook;
    public beforeChunkIds: CompilationHook;
    public chunkIds: CompilationHook;
    public optimizeChunkIds: CompilationHook;
    public afterOptimizeChunkIds: CompilationHook;
    public recordModules: CompilationHook;
    public recordChunks: CompilationHook;
    public beforeModuleHash: CompilationHook;
    public afterModuleHash: CompilationHook;
    public beforeHash: CompilationHook;
    public afterHash: CompilationHook;
    public recordHash: CompilationHook;
    public record: CompilationHook;
    public beforeModuleAssets: CompilationHook;
    public additionalChunkAssets: CompilationHook;
    public shouldGenerateChunkAssets: CompilationHook;
    public beforeChunkAssets: CompilationHook;
    public additionalAssets: CompilationHook;
    public optimizeChunkAssets: CompilationHook;
    public afterOptimizeChunkAssets: CompilationHook;
    public optimizeAssets: CompilationHook;
    public afterOptimizeAssets: CompilationHook;
    public processAssets: CompilationHook;
    public afterProcessAssets: CompilationHook;
    public needAdditionalSeal: CompilationHook;
    public afterSeal: CompilationHook;
    public chunkHash: CompilationHook;
    public moduleAsset: CompilationHook;
    public chunkAsset: CompilationHook;
    public assetPath: CompilationHook;
    public needAdditionalPass: CompilationHook;
    public childCompiler: CompilationHook;
    public statsPreset: CompilationHook;
    public statsNormalize: CompilationHook;
    public statsFactory: CompilationHook;
    public statsPrinter: CompilationHook;

}

class NormalModuleFactoryHooksContainer implements INormalModuleFactoryHooksContainer {

    public beforeResolve: NormalModuleFactoryHook;
    public factorize: NormalModuleFactoryHook;
    public resolve: NormalModuleFactoryHook;
    public resolveForScheme: NormalModuleFactoryHook;
    public afterResolve: NormalModuleFactoryHook;
    public createModule: NormalModuleFactoryHook;
    public createModuleClass: NormalModuleFactoryHook;
    public module: NormalModuleFactoryHook;
    public createParser: NormalModuleFactoryHook;
    public parser: NormalModuleFactoryHook;
    public createGenerator: NormalModuleFactoryHook;
    public generator: NormalModuleFactoryHook;

}

class ContextModuleFactoryHooksContainer implements IContextModuleFactoryHooksContainer {

    public beforeResolve: ContextModuleFactoryHook;
    public afterResolve: ContextModuleFactoryHook;
    public contextModuleFiles: ContextModuleFactoryHook;
    public alternativeRequests: ContextModuleFactoryHook;

}

export class Options {

    public verbose: boolean = false;

    public silent: boolean = true;
    public asyncDefaultTapType: TapType = TapType.NotSet;

    public compilerHooks: ICompilerHooksContainer;
    public javascriptParserHooks: IJavascriptParserHooksContainer;
    public compilationHooks: ICompilationHooksContainer;
    public normalModuleFactoryHooks: INormalModuleFactoryHooksContainer;
    public contextModuleFactoryHooks: IContextModuleFactoryHooksContainer;

    public onBuildStart: CompilerHook;
    public onCompile: CompilerHook;
    public onBuildEnd: CompilerHook;
    public onBuildExit: CompilerHook;
    public onAfterPlugins: CompilerHook;

    constructor() {
        this.compilerHooks = new CompilerHooksContainer();
        CompilerHookInitializer.initHooks(this.compilerHooks);
        this.onBuildStart = this.compilerHooks.compilation;
        this.onCompile = this.compilerHooks.watchRun;
        this.onBuildEnd = this.compilerHooks.afterEmit;
        this.onBuildExit = this.compilerHooks.done;
        this.onAfterPlugins = this.compilerHooks.afterPlugins;

        this.javascriptParserHooks = new JavascriptParserHooksContainer();
        JavascriptParserHookInitializer.initHooks(this.javascriptParserHooks);

        this.compilationHooks = new CompilationHooksContainer();
        CompilationHookInitializer.initHooks(this.compilationHooks);

        this.normalModuleFactoryHooks = new NormalModuleFactoryHooksContainer();
        NormalModuleFactoryHookInitializer.initHooks(this.normalModuleFactoryHooks);

        this.contextModuleFactoryHooks = new ContextModuleFactoryHooksContainer();
        ContextModuleFactoryHookInitializer.initHooks(this.contextModuleFactoryHooks);
    }
}
