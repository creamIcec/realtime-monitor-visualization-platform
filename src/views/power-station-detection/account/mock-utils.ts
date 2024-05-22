import { AccountInfoEntry } from "./types";
import { CouponInfo } from "./types";
import { CarLicenseHeader, CarLicenseNumberFormat, LicenseDictionary, PaymentDataEntry } from "./types";
import { RechargeDataEntry } from "./types";

const couponInfoArray: CouponInfo[] = ['6折优惠券', '8折优惠券', '9折优惠券', '无'];
const headers: CarLicenseHeader[] = ['京', '粤', '苏', '川', '沪'];
const alphabet: LicenseDictionary[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getRandomId(length: number): string {
  let resultArray: number[] = [];
  let i = 0;
  while (i < length) {
    resultArray.push(Math.floor(Math.random() * 10));
    i++;
  }
  return resultArray.join('');
}

function getOrderId(baseId: string, idIndex: number): string {  //100000
  return (parseInt(baseId) + idIndex).toString();
}

function getAccountInfoMock(): AccountInfoEntry[] {
  const result: AccountInfoEntry[] = [];
  for (let i = 0; i < 20; i++) {
    result.push({
      key: (i + 1).toString(),
      userId: getRandomId(9),
      signUpTime: '2024-5-10 16:20:11',
      purse: parseFloat((Math.random() * 100).toFixed(2)),
      couponInfo: couponInfoArray[Math.floor(Math.random() * couponInfoArray.length)]
    })
  }
  return result;
}

function getRandomCarLicenseNumber(): CarLicenseNumberFormat {
  const resultArray: string[] = [];
  let i = 0;
  resultArray.push(headers[Math.floor(Math.random() * headers.length)]);
  resultArray.push(alphabet[Math.floor(Math.random() * alphabet.length - 10)]);
  while (i < 5) {
    resultArray.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    i++;
  }
  return resultArray.join('') as CarLicenseNumberFormat;
}

function getPaymentRecordsMock(): PaymentDataEntry[] {
  const result: PaymentDataEntry[] = [];
  for (let i = 0; i < 20; i++) {
    const chargerId = getRandomId(7);
    result.push({
      key: (i + 1).toString(),
      orderId: getOrderId('100000', i),
      userId: getRandomId(9),
      consumed: Math.floor(Math.random() * 100),
      carLicenseNumber: getRandomCarLicenseNumber(),
      chargerId,
      pileId: chargerId + (Math.random() < 0.5 ? '+01' : '+02'),
      orderRequestTime: '2024-5-13 09:10',
      orderCompleteTime: '2024-5-13 09:13',
      powerConsumed: parseFloat((Math.random() * 50).toFixed(2)),
      actualPaymentAmount: parseFloat((Math.random() * 50).toFixed(2)),
      stopCode: getRandomId(5)
    });
  }
  return result;
}

function getRechargeRecordsMock(): RechargeDataEntry[] {
  const result: RechargeDataEntry[] = [];
  for (let i = 0; i < 20; i++) {
    result.push({
      key: (i + 1).toString(),
      orderId: getOrderId('100000', i),
      userId: getRandomId(9),
      rechargedAmount: Math.floor(Math.random() * 1000),
      rechargeMethod: Math.random() < 0.5 ? '第三方支付' : '网站支付',
      rechargeTime: '2024-5-13'
    })
  }
  return result;
}


export {
  getAccountInfoMock,
  getPaymentRecordsMock,
  getRechargeRecordsMock
}