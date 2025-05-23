/*!
 * Copyright (c) 2022, Roland Szikora.
 * You can support this package at https://www.patreon.com/rolandszik
 */
import { JavascriptParserHook } from './options';
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
export declare class JavascriptParserHookNames {
    evaluateTypeof: string;
    evaluate: string;
    evaluateIdentifier: string;
    evaluateDefinedIdentifier: string;
    evaluateCallExpressionMember: string;
    statement: string;
    statementIf: string;
    label: string;
    import: string;
    importSpecifier: string;
    export: string;
    exportImport: string;
    exportDeclaration: string;
    exportExpression: string;
    exportSpecifier: string;
    exportImportSpecifier: string;
    varDeclaration: string;
    varDeclarationLet: string;
    varDeclarationConst: string;
    varDeclarationVar: string;
    canRename: string;
    rename: string;
    assigned: string;
    assign: string;
    typeof: string;
    call: string;
    callMemberChain: string;
    new: string;
    expression: string;
    expressionConditionalOperator: string;
    program: string;
    static get i(): JavascriptParserHookNames;
}
export declare class JavascriptParserHookCallbackParameters {
    static EXPRESSION: string;
    static PARAM: string;
    static STATEMENT: string;
    static SOURCE: string;
    static EXPORT_NAME: string;
    static IDENTIFIER_NAME: string;
    static DECLARATION: string;
    static INDEX: string;
    static PROPERTIES: string;
    expression: any;
    param: any;
    statement: any;
    source: any;
    exportName: any;
    identifierName: any;
    declaration: any;
    index: any;
    properties: any;
}
export declare class JavascriptParserHookInitializer {
    static initHooks(container: IJavascriptParserHooksContainer): void;
}
