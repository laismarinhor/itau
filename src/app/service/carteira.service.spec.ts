import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarteiraService } from './carteira.service';

describe('CarteiraService', () => {
  let service: CarteiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CarteiraService ]
    });
    service = TestBed.inject(CarteiraService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
