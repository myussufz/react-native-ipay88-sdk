//
//  ViewController.m
//  Yussuf
//
//  Created by yussuf on 3/3/18.
//  Copyright © 2018 yussuf. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property UIView *paymentView;
@property Ipay *paymentsdk;

@end

@implementation ViewController
@synthesize paymentView;
@synthesize paymentsdk;

- (void)viewDidLoad {
    [super viewDidLoad];
    
    IpayPayment *payment = [[IpayPayment alloc] init];
    [payment setPaymentId:@"2"];
    [payment setMerchantKey:@"RcH46uY28R"];
    [payment setMerchantCode:@"M13440"];
    [payment setRefNo:@"1234565"];
    [payment setAmount:@"1.00"];
    [payment setCurrency:@"MYR"];
    [payment setProdDesc:@"Payment for 88Mall"];
    [payment setUserName:@"John Woo"];
    [payment setUserEmail:@"yussuf888@gmail.com"];
    [payment setUserContact:@"0176473298"];
    [payment setRemark:@"Me"];
    [payment setLang:@"UTF-8"];
    [payment setCountry:@"MY"];
    [payment setBackendPostURL:@"http://dev.magicwebes.com/webhook"];
    
    // Create iPay View
    self.paymentsdk = [[Ipay alloc] init];
    self.paymentsdk.delegate = self;
    self.paymentView = [self.paymentsdk checkout:payment];
    
    [self.view addSubview:self.paymentView];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)paymentCancelled:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc {
}

- (void)paymentFailed:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc {
}

- (void)paymentSuccess:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withAuthCode:(NSString *)authCode {
}

- (void)requeryFailed:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withErrDesc:(NSString *)errDesc {
}

- (void)requerySuccess:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withResult:(NSString *)result {
}


@end
