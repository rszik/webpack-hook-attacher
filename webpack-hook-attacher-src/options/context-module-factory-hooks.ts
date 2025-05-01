/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { Asset, Chunk, Compilation, Compiler, Module } from 'webpack';
import { ContextModuleFactoryHook, WebpackHookType } from './options';


// https://webpack.js.org/api/contextmodulefactory-hooks/

export interface IContextModuleFactoryHooksContainer {

    beforeResolve: ContextModuleFactoryHook;
    afterResolve: ContextModuleFactoryHook;
    contextModuleFiles: ContextModuleFactoryHook;
    alternativeRequests: ContextModuleFactoryHook;
}

export class ContextModuleFactoryHookNames {

    public beforeResolve: string = 'beforeResolve';
    public afterResolve: string = 'afterResolve';
    public contextModuleFiles: string = 'contextModuleFiles';
    public alternativeRequests: string = 'alternativeRequests';


    public static get i(): ContextModuleFactoryHookNames {
        return new ContextModuleFactoryHookNames();
    }
}

export class ContextModuleFactoryHookCallbackParameters {

    public static DATA: string = 'data';
    public static FILE_NAMES: string = 'fileNames';
    public static REQUEST: string = 'request';
    public static OPTIONS: string = 'options';

    public data: any = null;
    public fileNames: any = null;
    public request: any = null;
    public options: any = null;

}

export class ContextModuleFactoryHookInitializer {

    public static initHooks(container: IContextModuleFactoryHooksContainer): void {


        container.beforeResolve = new ContextModuleFactoryHook(
            ContextModuleFactoryHookNames.i.beforeResolve,
            WebpackHookType.AsyncSeriesWaterfallHook,
            [ContextModuleFactoryHookCallbackParameters.DATA]
        );


        container.afterResolve = new ContextModuleFactoryHook(
            ContextModuleFactoryHookNames.i.afterResolve,
            WebpackHookType.AsyncSeriesWaterfallHook,
            [ContextModuleFactoryHookCallbackParameters.DATA]
        );


        container.contextModuleFiles = new ContextModuleFactoryHook(
            ContextModuleFactoryHookNames.i.contextModuleFiles,
            WebpackHookType.SyncWaterfallHook,
            [ContextModuleFactoryHookCallbackParameters.FILE_NAMES]
        );


        container.alternativeRequests = new ContextModuleFactoryHook(
            ContextModuleFactoryHookNames.i.alternativeRequests,
            WebpackHookType.AsyncSeriesWaterfallHook,
            [ContextModuleFactoryHookCallbackParameters.REQUEST, ContextModuleFactoryHookCallbackParameters.OPTIONS]
        );
    }
}
