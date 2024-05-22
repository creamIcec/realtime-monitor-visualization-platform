export type RechargeDataEntry = {
  key: string,
  orderId: string,
  userId: string,
  rechargedAmount: number,
  rechargeMethod: '第三方支付' | '网站支付',
  rechargeTime: DateFormat
};

export type PaymentDataEntry = {
  key: string,
  orderId: string,
  userId: string,
  consumed: number,
  carLicenseNumber: CarLicenseNumberFormat,
  chargerId: string,
  pileId: string,
  orderRequestTime: DateFormat,
  orderCompleteTime: DateFormat,
  powerConsumed: number,
  actualPaymentAmount: number,
  stopCode: string
};

export type AccountInfoEntry = {
  key: string,
  userId: string,
  signUpTime: DateFormat,
  purse: number,
  couponInfo: CouponInfo
};

export type CouponInfo = '6折优惠券' | '8折优惠券' | '9折优惠券' | '无';
export type CarLicenseHeader = '京' | '粤' | '苏' | '川' | '沪';
export type LicenseDictionary = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' |
'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' |
'0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type DateFormat = string; //TODO
export type CarLicenseNumberFormat = `${CarLicenseHeader}${string}`;