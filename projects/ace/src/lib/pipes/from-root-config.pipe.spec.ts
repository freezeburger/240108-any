import { FromRootConfigPipe } from './from-root-config.pipe';

describe('FromRootConfigPipe', () => {
  it('create an instance', () => {
    const pipe = new FromRootConfigPipe();
    expect(pipe).toBeTruthy();
  });
});
