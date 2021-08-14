import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SharedService{

  headerMessage = new Subject<string>();


}
