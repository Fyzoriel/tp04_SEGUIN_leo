import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DisplayClientDataComponent } from "./display-client-data.component";

describe("DisplayClientDataComponent", () => {
  let component: DisplayClientDataComponent;
  let fixture: ComponentFixture<DisplayClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayClientDataComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
