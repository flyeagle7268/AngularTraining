import { TestBed } from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { UserService } from "./user.service";

describe('UserComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    }).compileComponents();
  })

  it('should create the user app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should have the title', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.componentInstance;
    expect(app.user.name).toEqual('');
  })

  it('should use the user name from the servcie', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.getUser().name).toEqual(app.user.name);
  })

  it('should display the user name if user is logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  })

  it('should display loggin message', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Please loggin!');
  })

});
