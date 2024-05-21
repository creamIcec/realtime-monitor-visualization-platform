export type RechargeDataEntry = {
  key: string,
  orderId: string,
  userId: string,
  rechargedAmount: number,
  rechargeMethod: '第三方支付' | '网站支付',
  rechargeTime: DateFormat
}

export type DateFormat = string; //TODO