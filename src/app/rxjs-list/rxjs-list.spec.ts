import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsList } from './rxjs-list';

describe('RxjsList', () => {
  let component: RxjsList;
  let fixture: ComponentFixture<RxjsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
