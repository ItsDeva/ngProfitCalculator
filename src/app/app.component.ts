import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Price Calci";
  buyValue = 0;
  purchaseValue = 0;
  sellValue = 0;
  percentage = 0;
  profit() {
    this.percentage = ((this.buyValue - this.sellValue) / this.buyValue) * -100;
    console.log(this.percentage);
    return (this.percentage * this.purchaseValue) / 100;
  }
}
