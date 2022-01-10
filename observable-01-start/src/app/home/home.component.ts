import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubcription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //built in observable
    // this.firstSubcription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    //new angular framework
    const customIntObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        //Fake complete
        if (count === 2){
          observer.complete();
        }
        //Fake error
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstSubcription = customIntObservable.pipe((map( (data: number) =>{
      return 'Round ' + (data);
    } ))).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!')
    })
  }

  ngOnDestroy(): void {
    this.firstSubcription.unsubscribe();
  }

  onActivate(){
    this.userService.activateEmitter.next(true);
  }

}
