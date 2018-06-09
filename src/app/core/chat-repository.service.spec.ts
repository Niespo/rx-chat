import { TestBed, inject } from '@angular/core/testing';

import { ChatRepositoryService } from './chat-repository.service';

describe('ChatRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatRepositoryService]
    });
  });

  it('should be created', inject([ChatRepositoryService], (service: ChatRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
