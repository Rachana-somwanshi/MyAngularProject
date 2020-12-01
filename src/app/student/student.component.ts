import { Component } from '@angular/core';
import { Student } from '../student.model';
import { StudentsService } from '../student.service';

@Component({
    selector:"stud",
    templateUrl:"./student.component.html",
    styleUrls:["./student.component.css"]
})
export class StudentComponent
{

    id:number;
    name:string;
    java_mks:number;
    maths_mks:number;
    sci_mks:number;
    avg:number;
    sarr:Student[];
    

    
    constructor(private sservice:StudentsService)
    {

    }

    ngOnInit()
    {
        this.sarr=this.sservice.getAllStudents();
        console.log(this.sarr)
    }

    
    getAvg()
    {
        
        for(var i:number=0;i<this.sarr.length;i++)
        {

        }
    }

   /*  TotalMarks()
    {
        this.avg=this.sservice.TotalMarks();
    } */

}