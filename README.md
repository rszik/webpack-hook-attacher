# webpack-hook-attacher Summary
With this plugin you can attach own or predefined file/directory (copy, create, rename, merge, replace in etc...) or predefined system (sleep, run process, etc...) operations to any webpack hook. We created this plugin because it is difficult to find file operation webpack plugins that runs in the proper phase of our buid process: delete build folder, copy files BEFORE the build process, copy files, replace in files, merge JSON files, zip build folder AFTER build process.

## Install
`npm i @wecdev/webpack-hook-attacher --save-dev`

## I know I can do better :)
If you have found bug or need an additional operation don't hesitate to contact me.

## Copyright & Support
Copyright (c) 2022, Roland Szikora. 
You can support this package at https://www.patreon.com/rolandszik 

## Licensing
See LICENSE.txt


## Use Operations 
You can attach predefined operations to any webpack hook during the webpack or webpack-dev-server build 
[file operations](https://www.npmjs.com/package/@wecdev/webpack-file-operations) or
[system operations](https://www.npmjs.com/package/@wecdev/webpack-system-operations)

such as 
- create file/directory
- delete files/directories
- move files/directories
- modify file content (delete/add rows, replace in files)
- merge json files
- zip directories
- run process
- sleep
- wait until conditions is met 

## Write your own operation
You can write your own operation if you like. Create your Operation file (derive from Operation class) and override the abtract run method


#### Example
You can use in typescript and javascript as well. The example is in typescript

```ts
import * as fsExtra from 'fs-extra';

import { SingleSourceOperationParameter, SingleSourceOperation, ISingleSourceOperationParameter } from './single-source-operation';
import { Utils } from '@wecdev/webpack-hook-attacher';

export interface IMoveSingleFileParameter extends ISingleSourceOperationParameter {
    sourceFilePath: string;
    destinationFilePath: string;
    overwrite?: boolean;
}

export class MoveSingleFileParameter extends SingleSourceOperationParameter implements IMoveSingleFileParameter {
    //IMoveSingleFileParameter
    public sourceFilePath: string = null;
    public destinationFilePath: string = null;
    public overwrite?: boolean = true;
    //SingleSourceOperationParameter
    public getSingleSource(): string {
        return this.sourceFilePath;
    }
}

export class MoveSingleFile extends SingleSourceOperation {

    constructor(userParams: IMoveSingleFileParameter) {
        super();
        this.params = Utils.mergeUserSettingsToDeafultSetting(userParams, new MoveSingleFileParameter());
        super.setParams(this.params);
        this.moveOptions = { overwrite: this.params.overwrite };
    }

    public name: string = 'MoveSingleFile';

    public params: MoveSingleFileParameter;

    private moveOptions: fsExtra.MoveOptions;

    public run(): void {
        super.runSingleFileOperationIfExists(this.funcionToRun.bind(this));
    }

    private funcionToRun(sourceFilePath: string): void {
        this.ensureDestinationFileDirectoryExists(this.params.destinationFilePath);
        fsExtra.moveSync(sourceFilePath, this.params.destinationFilePath, this.moveOptions);
    }
}


```




