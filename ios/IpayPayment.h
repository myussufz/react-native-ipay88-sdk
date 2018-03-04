//
//  IpayPayment.h
//  ipay88sdk
//

@interface IpayPayment : NSObject {
    NSString *merchantKey;
    NSString *merchantCode;
    NSString *paymentId;
    NSString *refNo;
    NSString *amount;
    NSString *currency;
    NSString *prodDesc;
    NSString *userName;
    NSString *userEmail;
    NSString *userContact;
    NSString *remark;
    NSString *lang;
    NSString *country;
    NSString *backendPostURL;
}

@property (nonatomic, retain) NSString *merchantKey;
@property (nonatomic, retain) NSString *merchantCode;
@property (nonatomic, retain) NSString *paymentId;
@property (nonatomic, retain) NSString *refNo;
@property (nonatomic, retain) NSString *amount;
@property (nonatomic, retain) NSString *currency;
@property (nonatomic, retain) NSString *prodDesc;
@property (nonatomic, retain) NSString *userName;
@property (nonatomic, retain) NSString *userEmail;
@property (nonatomic, retain) NSString *userContact;
@property (nonatomic, retain) NSString *remark;
@property (nonatomic, retain) NSString *lang;
@property (nonatomic, retain) NSString *country;
@property (nonatomic, retain) NSString *backendPostURL;

@end
