import 'chai/register-expect';
import { encryptCaesar, bruteDecrypt } from '../caesar';

describe('encryptCaesar() function', () => {

  const input = 'GAMEOFTHRONES';

  it('should encrypt \'GAMEOFTHRONES\' to HBNFPGUISPOFT with key 1', function () {

    expect(encryptCaesar('GAMEOFTHRONES', 1)).to.equal('HBNFPGUISPOFT');
  });

  it('should decrypt \'kptia\' to joshz with key -1', function () {

    expect(encryptCaesar('kptia', -1)).to.equal('joshz');
  });

  it('should encrypt \'GAMEOFTHRONES\' to JDPHRIWKURQHV with key 3', function () {

    expect(encryptCaesar('GAMEOFTHRONES', 3)).to.equal('JDPHRIWKURQHV');
  });

  it('should rotate/wrap around letters', function () {

    expect(encryptCaesar('XYZ', 4)).to.equal('BCD');
  });

  it('a decrypted with -1 should be z', function () {

    expect(encryptCaesar('a', -1)).to.equal('z');
  });

  it('[BONUS] JDPHRIWKURQHV decrypted should be GAMEOFTHRONES', function () {

    expect(encryptCaesar('JDPHRIWKURQHV', -3)).to.equal('GAMEOFTHRONES');
  });

  it('[BONUS] "OCDNwjipnRVNapiOJnjgqz" {the real key is -21, btw} decrypted without a key should be "THISbonusWASfunTOsolve"', function () {

    expect(bruteDecrypt('OCDNwjipnRVNapiOJnjgqz')).to.equal('THISbonusWASfunTOsolve');
  });

  it('[BONUS] "amBOASwgFOXYCpihWHGdfcbcibqsrFOWYC" decrypted without a key should be "myNAMEisRAJKObutITSpronouncedRAIKO"', function () {

    expect(bruteDecrypt("amBOASwgFOXYCpihWHGdfcbcibqsrFOWYC")).to.equal("myNAMEisRAJKObutITSpronouncedRAIKO");
  });
});
