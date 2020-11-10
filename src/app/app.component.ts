import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public lastName: string;
  public success: boolean;
  public data: any;

  public method1() {
    console.log("method1()");
  }

  public MyConstructor(data, transport) {
    this.data = data;
    var self = this;
    transport.on("data", function() {
      //In This Scope This Refers To Only This Callback
      //And If You Want Access Component Property
      //You Should Use Self
      self.method1();
      alert(self.data);
    });
  }
  
}
