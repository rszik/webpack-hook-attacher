/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { CompilerHookCallbackParameters, CompilationHookCallbackParameters, JavascriptParserHookCallbackParameters, NormalModuleFactoryHookCallbackParameters, ContextModuleFactoryHookCallbackParameters } from '../options';
export declare enum TapType {
    NotSet = "notSet",
    Tap = "tap",
    TapAsync = "tapAsync",
    TapPromise = "tapPromise"
}
export declare enum HookType {
    CompilerHook = "CompilerHook",
    CompilationHook = "CompilationHook",
    JavascriptParserHook = "JavascriptParserHook",
    ContextModuleFactoryHook = "ContextModuleFactoryHook",
    NormalModuleFactoryHook = "NormalModuleFactoryHook"
}
export interface IOperationParameter {
    additionalName?: string;
    verbose?: boolean;
    silent?: boolean;
    asyncDefaultTapType?: TapType;
}
export declare class OperationParameter implements IOperationParameter {
    additionalName?: string;
    verbose?: boolean;
    silent?: boolean;
    asyncDefaultTapType?: TapType;
    tapForParameter?: string;
}
export declare abstract class Operation {
    firstOperationInTheHook: boolean;
    lastOperationInTheHook: boolean;
    hookName: string;
    hookType: HookType;
    tapType: TapType;
    compilerHookCallbackParameters: CompilerHookCallbackParameters;
    compilationHookCallbackParameters: CompilationHookCallbackParameters;
    javascriptParserHookCallbackParameters: JavascriptParserHookCallbackParameters;
    normalModuleFactoryHookCallbackParameters: NormalModuleFactoryHookCallbackParameters;
    contextModuleFactoryHookCallbackParameters: ContextModuleFactoryHookCallbackParameters;
    params: OperationParameter;
    abstract name: string;
    abstract run(): void;
    protected runWrapper(operation: Operation, funcToWrap: Function): void;
    protected setParams(params: OperationParameter): void;
    protected initConsoleLoggerToCurrentOperation(): void;
}
