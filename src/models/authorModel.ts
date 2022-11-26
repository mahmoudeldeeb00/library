import { bookModel } from "./bookModel";

export interface authorModel{

    id:number ;
    name:string;
    birthDay:any;
    details:string;
    cityId:number;
    cityName:string;
    pictureSrc:string;
    books:[bookModel];
       
}