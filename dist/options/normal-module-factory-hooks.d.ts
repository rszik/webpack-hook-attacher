/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { NormalModuleFactoryHook } from './options';
export interface INormalModuleFactoryHooksContainer {
    beforeResolve: NormalModuleFactoryHook;
    factorize: NormalModuleFactoryHook;
    resolve: NormalModuleFactoryHook;
    resolveForScheme: NormalModuleFactoryHook;
    afterResolve: NormalModuleFactoryHook;
    createModule: NormalModuleFactoryHook;
    createModuleClass: NormalModuleFactoryHook;
    module: NormalModuleFactoryHook;
    createParser: NormalModuleFactoryHook;
    parser: NormalModuleFactoryHook;
    createGenerator: NormalModuleFactoryHook;
    generator: NormalModuleFactoryHook;
}
export declare class NormalModuleFactoryHookNames {
    beforeResolve: string;
    factorize: string;
    resolve: string;
    resolveForScheme: string;
    afterResolve: string;
    createModule: string;
    createModuleClass: string;
    module: string;
    createParser: string;
    parser: string;
    createGenerator: string;
    generator: string;
    static get i(): NormalModuleFactoryHookNames;
}
export declare class NormalModuleFactoryHookCallbackParameters {
    static RESOLVE_DATA: string;
    static CREATE_DATA: string;
    static MODULE: string;
    static PARSER_OPTIONS: string;
    static PARSER: string;
    static GENERATOR_OPTIONS: string;
    static GENERATOR: string;
    resolveData: any;
    createData: any;
    module: any;
    parserOptions: any;
    parser: any;
    generatorOptions: any;
    generator: any;
}
export declare class NormalModuleFactoryHookInitializer {
    static initHooks(container: INormalModuleFactoryHooksContainer): void;
}
