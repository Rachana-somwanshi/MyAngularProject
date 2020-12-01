export class Student
{
    id:number;
    name:string;
    java_mks:number;
    maths_mks:number;
    sci_mks:number;

    avg:number;
    constructor(id:number,name:string,java:number,maths:number,sci:number,avg?:number)
    {
        this.id=id;
        this.name=name;
        this.java_mks=java;
        this.maths_mks=maths;
        this.sci_mks=sci;
        this.avg=avg;
    }
}