import { LeadTestModule } from './lead-test.module';

describe('LeadTestModule', () => {
  let leadTestModule: LeadTestModule;

  beforeEach(() => {
    leadTestModule = new LeadTestModule();
  });

  it('should create an instance', () => {
    expect(leadTestModule).toBeTruthy();
  });
});
