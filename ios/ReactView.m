//
// Created by wzg on 2018/4/8.
// Copyright (c) 2018 Facebook. All rights reserved.
//

#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import "ReactView.h"


@implementation ReactView {

}
- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
        // 这里的moduleName一定要和下面的index.ios.js里面的注册一样
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                            moduleName:@"Home"
                                                     initialProperties:nil
                                                         launchOptions:nil];

        [self addSubview:rootView];

        rootView.frame = self.bounds;
    }
    return self;
}

@end