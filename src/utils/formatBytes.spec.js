import formatBytes from "./formatBytes";

describe('formatBytes', () => {
  it('formats in MBs', () => {
    const result = formatBytes(900);
    expect(result).toEqual('900MB');
  });

  it('formats in GBs', () => {
    const result = formatBytes(568000);
    expect(result).toEqual('568GB');
  });

  it('formats in TBs', () => {
    const result = formatBytes(38000000);
    expect(result).toEqual('38TB');
  });

  it('formats in PBs', () => {
    const result = formatBytes(42000000000);
    expect(result).toEqual('42PB');
  });

  it('formats in EBs', () => {
    const result = formatBytes(50000000000000);
    expect(result).toEqual('50EB');
  });

  it('formats in ZBs', () => {
    const result = formatBytes(20000000000000000);
    expect(result).toEqual('20ZB');
  });

  it('formats in YBs', () => {
    const result = formatBytes(10000000000000000000);
    expect(result).toEqual('10YB');
  });

  it('formats in MBs, GBs and TBs', () => {
    const result = formatBytes(1234567);
    expect(result).toEqual('1TB 234GB 567MB');
  });
});
