//
// Created by wzg on 2018/4/8.
// Copyright (c) 2018 Facebook. All rights reserved.
//

#import "PushNative.h"
#import "TestController.h"
#import "AppDelegate.h"
@implementation PushNative {
}

RCT_EXPORT_MODULE(PushNative)

//RN跳转原生界面
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *) msg) {

  
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
//    [[NSNotificationCenter defaultCenter]postNotificationName:@"RNOpenOneVC" object:nil];
      NSLog(@"RN传入原生界面的数据为:%@", msg);
      TestController *one = [[TestController alloc]init];

        AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];

        [app.nav pushViewController:one animated:YES];
    });
}

@end
