import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

export class Util {
    constructor(private name: string, private age: number) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log("Name is ", this.name);
    }
}

