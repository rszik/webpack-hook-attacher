/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { Asset, Chunk, Compilation, Compiler, Module } from 'webpack';
import { NormalModuleFactoryHook, WebpackHookType } from './options';


// https://webpack.js.org/api/normalmodulefactory-hooks/

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

export class NormalModuleFactoryHookNames {

    public beforeResolve: string = 'beforeResolve';
    public factorize: string = 'factorize';
    public resolve: string = 'resolve';
    public resolveForScheme: string = 'resolveForScheme';
    public afterResolve: string = 'afterResolve';
    public createModule: string = 'createModule';
    public createModuleClass: string = 'createModuleClass';
    public module: string = 'module';
    public createParser: string = 'createParser';
    public parser: string = 'parser';
    public createGenerator: string = 'createGenerator';
    public generator: string = 'generator';


    public static get i(): NormalModuleFactoryHookNames {
        return new NormalModuleFactoryHookNames();
    }
}

export class NormalModuleFactoryHookCallbackParameters {

    public static RESOLVE_DATA: string = 'resolveData';
    public static CREATE_DATA: string = 'createData';
    public static MODULE: string = 'module';
    public static PARSER_OPTIONS: string = 'parserOptions';
    public static PARSER: string = 'parser';
    public static GENERATOR_OPTIONS: string = 'generatorOptions';
    public static GENERATOR: string = 'generator';

    public resolveData: any = null;
    public createData: any = null;
    public module: any = null;
    public parserOptions: any = null;
    public parser: any = null;
    public generatorOptions: any = null;
    public generator: any = null;

}

export class NormalModuleFactoryHookInitializer {

    public static initHooks(container: INormalModuleFactoryHooksContainer): void {


        container.beforeResolve = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.beforeResolve,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.factorize = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.factorize,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.resolve = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.resolve,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.resolveForScheme = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.resolveForScheme,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.afterResolve = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.afterResolve,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.createModule = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.createModule,
            WebpackHookType.AsyncSeriesBailHook,
            [NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.createModuleClass = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.createModuleClass,
            WebpackHookType.HookMap_SyncBailHook,
            [NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.module = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.module,
            WebpackHookType.SyncWaterfallHook,
            [NormalModuleFactoryHookCallbackParameters.MODULE, NormalModuleFactoryHookCallbackParameters.CREATE_DATA, NormalModuleFactoryHookCallbackParameters.RESOLVE_DATA]
        );


        container.createParser = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.createParser,
            WebpackHookType.HookMap_SyncBailHook,
            [NormalModuleFactoryHookCallbackParameters.PARSER_OPTIONS]
        );


        container.parser = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.parser,
            WebpackHookType.HookMap_SyncHook,
            [NormalModuleFactoryHookCallbackParameters.PARSER, NormalModuleFactoryHookCallbackParameters.PARSER_OPTIONS]
        );


        container.createGenerator = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.createGenerator,
            WebpackHookType.HookMap_SyncBailHook,
            [NormalModuleFactoryHookCallbackParameters.GENERATOR_OPTIONS]
        );


        container.generator = new NormalModuleFactoryHook(
            NormalModuleFactoryHookNames.i.generator,
            WebpackHookType.HookMap_SyncHook,
            [NormalModuleFactoryHookCallbackParameters.GENERATOR, NormalModuleFactoryHookCallbackParameters.GENERATOR_OPTIONS]
        );
    }
}
