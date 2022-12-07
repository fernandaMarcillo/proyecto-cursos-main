import { Person } from "./person";

export interface Student extends Person{
    enrollment:number;
    level:string;
}