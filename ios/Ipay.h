//
//  Ipay.h
//  ipay88sdk
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "IpayPayment.h"

@protocol PaymentResultDelegate <NSObject>

- (void)paymentSuccess:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withAuthCode:(NSString *)authCode;
- (void)paymentFailed:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc;
- (void)paymentCancelled:(NSString *)refNo withTransId:(NSString *)transId withAmount:(NSString *)amount withRemark:(NSString *)remark withErrDesc:(NSString *)errDesc;
- (void)requerySuccess:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withResult:(NSString *)result;
- (void)requeryFailed:(NSString *)refNo withMerchantCode:(NSString *)merchantCode withAmount:(NSString *)amount withErrDesc:(NSString *)errDesc;
@end

@interface Ipay : UIViewController <UIWebViewDelegate, NSURLConnectionDelegate, UIScrollViewDelegate> {
    __weak id <PaymentResultDelegate> delegate;
}
@property (nonatomic,weak) id <PaymentResultDelegate> delegate;
- (UIView *)checkout:(IpayPayment *)payment;
- (void)requery:(IpayPayment *)payment;

@end