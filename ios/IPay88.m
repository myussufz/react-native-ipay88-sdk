//
//  IPay88.m
//  mall
//
//  Created by yussuf on 2/28/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "IPay88.h"
#import "AppDelegate.h"
#import <React/RCTLog.h>

@interface IPay88 ()

@property UIView *paymentView;
@property Ipay *paymentsdk;
@property IpayPayment *payment;

@end

@implementation IPay88

RCT_EXPORT_MODULE();
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"ipay88:success", @"ipay88:failed", @"ipay88:canceled"];
}

RCT_EXPORT_METHOD(pay:(NSDictionary *)data)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    // RCTLogInfo(@"%@", data);

    // Precreate payment
    self.paymentsdk = [[Ipay alloc] init];
    self.payment = [[IpayPayment alloc] init];
    [self.payment setPaymentId:data[@"paymentId"]];
    [self.payment setMerchantKey:data[@"merchantKey"]];
    [self.payment setMerchantCode:data[@"merchantCode"]];
    [self.payment setRefNo:data[@"referenceNo"]];
    [self.payment setAmount:data[@"amount"]];
    [self.payment setCurrency:data[@"currency"]];
    [self.payment setProdDesc:data[@"productDescription"]];
    [self.payment setUserName:data[@"userName"]];
    [self.payment setUserEmail:data[@"userEmail"]];
    [self.payment setUserContact:data[@"userContact"]];
    [self.payment setRemark:data[@"remark"]];
    [self.payment setLang:data[@"utfLang"]];
    [self.payment setCountry:data[@"country"]];
    [self.payment setBackendPostURL:data[@"backendUrl"]];
    
    self.paymentsdk.delegate = self;
    self.paymentView = [self.paymentsdk checkout:self.payment];
    [appDelegate.rootViewController.view addSubview:self.paymentView];
  });
}


- (void)paymentCancelled:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc {
  // Remove the ipay88 webview
  [self.paymentView removeFromSuperview];
  
  NSDictionary *params =
  @{
     @"transactionID": transId,
     @"referenceNo": refNo,
     @"amount": amount,
     @"remark": remark,
     @"error": errDesc,
  };
  
  [self sendEventWithName:@"ipay88:canceled" body:params];

  RCTLogInfo(@"Payment cancel");
}


- (void)paymentFailed:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc {
  // Remove the ipay88 webview
  [self.paymentView removeFromSuperview];
  
  NSDictionary *params =
  @{
    @"transactionID": transId,
    @"referenceNo": refNo,
    @"amount": amount,
    @"remark": remark,
    @"error": errDesc,
  };
  
  [self sendEventWithName:@"ipay88:failed" body:params];
  
  RCTLogInfo(@"Payment failed");
}

- (void)paymentSuccess:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withAuthCode:(NSString *)authCode {
  // Remove the ipay88 webview
  [self.paymentView removeFromSuperview];
  
  NSDictionary *params =
  @{
    @"authorizationCode": authCode,
    @"transactionID": transId,
    @"referenceNo": refNo,
    @"amount": amount,
    @"remark": remark,
  };
  
  [self sendEventWithName:@"ipay88:success" body:params];
  
  RCTLogInfo(@"Payment success");
}

- (void)requerySuccess:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withResult:(NSString *)result {
  RCTLogInfo(@"Requery success");
}

- (void)requeryFailed:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withErrDesc:(NSString *)errDesc {
  RCTLogInfo(@"Requery failed");
}


@end


