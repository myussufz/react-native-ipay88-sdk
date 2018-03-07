//
//  IPay88.h
//
//  Created by yussuf on 2/28/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "Ipay.h"
#import "IpayPayment.h"
#import "React/RCTBridge.h"
#import <React/RCTEventEmitter.h>

@interface IPay88 : RCTEventEmitter <PaymentResultDelegate, RCTBridgeModule>

@property RCTEventEmitter *Event;

@end


