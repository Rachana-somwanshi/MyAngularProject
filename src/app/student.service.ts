import { Injectable } from '@angular/core';
import { Student } from './student.model';
@Injectable()
export class StudentsService
{
    total:number;
    aveg:number;

    sarr=[
        new Student(1,"Rachana",70,80,90,0),
        new Student(2,"Ankita",60,70,80,0),
        new Student(3,"Nisha",67,81,86,0),
        new Student(4,"Rohini",77,68,79,0),
        new Student(5,"Shree",74,88,89,0)
    ];


    
    
        //return this.avg;
    
    getAvg()
    {
      
    }

    getAllStudents():Student[]
    {
        
        for(let i=0;i<this.sarr.length;i++)
        {
            this.aveg=(this.sarr[i].sci_mks+this.sarr[i].maths_mks+this.sarr[i].java_mks)/3;
            this.aveg.toFixed(0)
            this.sarr[i].avg=this.aveg;
           
        }
        return this.sarr;
    }
}