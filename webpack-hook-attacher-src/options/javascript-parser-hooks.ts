/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */

import { JavascriptParserHook, WebpackHookType } from './options';

// https://webpack.js.org/api/parser/

export interface IJavascriptParserHooksContainer {

    evaluateTypeof: JavascriptParserHook;
    evaluate: JavascriptParserHook;
    evaluateIdentifier: JavascriptParserHook;
    evaluateDefinedIdentifier: JavascriptParserHook;
    evaluateCallExpressionMember: JavascriptParserHook;
    statement: JavascriptParserHook;
    statementIf: JavascriptParserHook;
    label: JavascriptParserHook;
    import: JavascriptParserHook;
    importSpecifier: JavascriptParserHook;
    export: JavascriptParserHook;
    exportImport: JavascriptParserHook;
    exportDeclaration: JavascriptParserHook;
    exportExpression: JavascriptParserHook;
    exportSpecifier: JavascriptParserHook;
    exportImportSpecifier: JavascriptParserHook;
    varDeclaration: JavascriptParserHook;
    varDeclarationLet: JavascriptParserHook;
    varDeclarationConst: JavascriptParserHook;
    varDeclarationVar: JavascriptParserHook;
    canRename: JavascriptParserHook;
    rename: JavascriptParserHook;
    assigned: JavascriptParserHook;
    assign: JavascriptParserHook;
    typeof: JavascriptParserHook;
    call: JavascriptParserHook;
    callMemberChain: JavascriptParserHook;
    new: JavascriptParserHook;
    expression: JavascriptParserHook;
    expressionConditionalOperator: JavascriptParserHook;
    program: JavascriptParserHook;
}

export class JavascriptParserHookNames {
    public evaluateTypeof: string = 'evaluateTypeof';
    public evaluate: string = 'evaluate';
    public evaluateIdentifier: string = 'evaluateIdentifier';
    public evaluateDefinedIdentifier: string = 'evaluateDefinedIdentifier';
    public evaluateCallExpressionMember: string = 'evaluateCallExpressionMember';
    public statement: string = 'statement';
    public statementIf: string = 'statementIf';
    public label: string = 'label';
    public import: string = 'import';
    public importSpecifier: string = 'importSpecifier';
    public export: string = 'export';
    public exportImport: string = 'exportImport';
    public exportDeclaration: string = 'exportDeclaration';
    public exportExpression: string = 'exportExpression';
    public exportSpecifier: string = 'exportSpecifier';
    public exportImportSpecifier: string = 'exportImportSpecifier';
    public varDeclaration: string = 'varDeclaration';
    public varDeclarationLet: string = 'varDeclarationLet';
    public varDeclarationConst: string = 'varDeclarationConst';
    public varDeclarationVar: string = 'varDeclarationVar';
    public canRename: string = 'canRename';
    public rename: string = 'rename';
    public assigned: string = 'assigned';
    public assign: string = 'assign';
    public typeof: string = 'typeof';
    public call: string = 'call';
    public callMemberChain: string = 'callMemberChain';
    public new: string = 'new';
    public expression: string = 'expression';
    public expressionConditionalOperator: string = 'expressionConditionalOperator';
    public program: string = 'program';


    public static get i(): JavascriptParserHookNames {
        return new JavascriptParserHookNames();
    }
}

export class JavascriptParserHookCallbackParameters {

    public static EXPRESSION: string = 'expression';
    public static PARAM: string = 'param';
    public static STATEMENT: string = 'statement';
    public static SOURCE: string = 'source';
    public static EXPORT_NAME: string = 'exportName';
    public static IDENTIFIER_NAME: string = 'identifierName';
    public static DECLARATION: string = 'declaration';
    public static INDEX: string = 'index';
    public static PROPERTIES: string = 'properties';

    public expression: any = null;
    public param: any = null;
    public statement: any = null;
    public source: any = null;
    public exportName: any = null;
    public identifierName: any = null;
    public declaration: any = null;
    public index: any = null;
    public properties: any = null;

}

export class JavascriptParserHookInitializer {

    public static initHooks(container: IJavascriptParserHooksContainer): void {


        container.evaluateTypeof = new JavascriptParserHook(
            JavascriptParserHookNames.i.evaluateTypeof,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.evaluate = new JavascriptParserHook(
            JavascriptParserHookNames.i.evaluate,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.evaluateIdentifier = new JavascriptParserHook(
            JavascriptParserHookNames.i.evaluateIdentifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            false
        );


        container.evaluateDefinedIdentifier = new JavascriptParserHook(
            JavascriptParserHookNames.i.evaluateDefinedIdentifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            false
        );


        container.evaluateCallExpressionMember = new JavascriptParserHook(
            JavascriptParserHookNames.i.evaluateCallExpressionMember,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION, JavascriptParserHookCallbackParameters.PARAM],
            true
        );


        container.statement = new JavascriptParserHook(
            JavascriptParserHookNames.i.statement,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false
        );


        container.statementIf = new JavascriptParserHook(
            JavascriptParserHookNames.i.statementIf,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false
        );


        container.label = new JavascriptParserHook(
            JavascriptParserHookNames.i.label,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false
        );


        container.import = new JavascriptParserHook(
            JavascriptParserHookNames.i.import,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE],
            false
        );


        container.importSpecifier = new JavascriptParserHook(
            JavascriptParserHookNames.i.importSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME],
            false
        );


        container.export = new JavascriptParserHook(
            JavascriptParserHookNames.i.export,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT],
            false
        );


        container.exportImport = new JavascriptParserHook(
            JavascriptParserHookNames.i.exportImport,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE],
            false
        );


        container.exportDeclaration = new JavascriptParserHook(
            JavascriptParserHookNames.i.exportDeclaration,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.exportExpression = new JavascriptParserHook(
            JavascriptParserHookNames.i.exportExpression,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.exportSpecifier = new JavascriptParserHook(
            JavascriptParserHookNames.i.exportSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX],
            false
        );


        container.exportImportSpecifier = new JavascriptParserHook(
            JavascriptParserHookNames.i.exportImportSpecifier,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.STATEMENT, JavascriptParserHookCallbackParameters.SOURCE, JavascriptParserHookCallbackParameters.IDENTIFIER_NAME, JavascriptParserHookCallbackParameters.EXPORT_NAME, JavascriptParserHookCallbackParameters.INDEX],
            false
        );


        container.varDeclaration = new JavascriptParserHook(
            JavascriptParserHookNames.i.varDeclaration,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.varDeclarationLet = new JavascriptParserHook(
            JavascriptParserHookNames.i.varDeclarationLet,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.varDeclarationConst = new JavascriptParserHook(
            JavascriptParserHookNames.i.varDeclarationConst,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.varDeclarationVar = new JavascriptParserHook(
            JavascriptParserHookNames.i.varDeclarationVar,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.DECLARATION],
            false
        );


        container.canRename = new JavascriptParserHook(
            JavascriptParserHookNames.i.canRename,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.rename = new JavascriptParserHook(
            JavascriptParserHookNames.i.rename,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.assigned = new JavascriptParserHook(
            JavascriptParserHookNames.i.assigned,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.assign = new JavascriptParserHook(
            JavascriptParserHookNames.i.assign,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.typeof = new JavascriptParserHook(
            JavascriptParserHookNames.i.typeof,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            false
        );


        container.call = new JavascriptParserHook(
            JavascriptParserHookNames.i.call,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.callMemberChain = new JavascriptParserHook(
            JavascriptParserHookNames.i.callMemberChain,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION, JavascriptParserHookCallbackParameters.PROPERTIES],
            true
        );


        container.new = new JavascriptParserHook(
            JavascriptParserHookNames.i.new,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.expression = new JavascriptParserHook(
            JavascriptParserHookNames.i.expression,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            true
        );


        container.expressionConditionalOperator = new JavascriptParserHook(
            JavascriptParserHookNames.i.expressionConditionalOperator,
            WebpackHookType.SyncBailHook,
            [JavascriptParserHookCallbackParameters.EXPRESSION],
            false
        );


        container.program = new JavascriptParserHook(
            JavascriptParserHookNames.i.program,
            WebpackHookType.SyncBailHook,
            [],
            false
        );
    }
}
