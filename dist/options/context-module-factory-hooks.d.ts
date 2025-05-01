/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { ContextModuleFactoryHook } from './options';
export interface IContextModuleFactoryHooksContainer {
    beforeResolve: ContextModuleFactoryHook;
    afterResolve: ContextModuleFactoryHook;
    contextModuleFiles: ContextModuleFactoryHook;
    alternativeRequests: ContextModuleFactoryHook;
}
export declare class ContextModuleFactoryHookNames {
    beforeResolve: string;
    afterResolve: string;
    contextModuleFiles: string;
    alternativeRequests: string;
    static get i(): ContextModuleFactoryHookNames;
}
export declare class ContextModuleFactoryHookCallbackParameters {
    static DATA: string;
    static FILE_NAMES: string;
    static REQUEST: string;
    static OPTIONS: string;
    data: any;
    fileNames: any;
    request: any;
    options: any;
}
export declare class ContextModuleFactoryHookInitializer {
    static initHooks(container: IContextModuleFactoryHooksContainer): void;
}
