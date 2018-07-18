//
// Created by wzg on 2018/4/8.
// Copyright (c) 2018 Facebook. All rights reserved.
//

#import <React/RCTRootView.h>
#import "PushController.h"
#import "ReactView.h"


@implementation PushController {

}
- (void)viewDidLoad {
    [super viewDidLoad];


    self.navigationItem.title = @"我是ReactNative页面呦~";

    self.navigationController.navigationBar.hidden = NO;

    self.view.backgroundColor = [UIColor whiteColor];

    ReactView *reactView = [[ReactView alloc] initWithFrame:CGRectMake(0, 64, CGRectGetWidth(self.view.bounds), UIScreen.mainScreen.bounds.size.height - 200)];

    [self.view addSubview:reactView];

//    UIButton *button = [UIButton buttonWithType:(UIButtonTypeCustom)];
//    button.frame = CGRectMake(600 / 2 - 150, 80, 300, 80);
//    button.backgroundColor = [UIColor redColor];
//    [button setTitle:@"点击我，跳转到React-Native页面" forState:(UIControlStateNormal)];
//    [button addTarget:self action:@selector(click) forControlEvents:(UIControlEventTouchUpInside)];
//    [self.view addSubview:button];
//    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(doPushNotification:) name:@"RNOpenOneVC" object:nil];

//    self.view = reactView;

}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated {

    [super viewWillDisappear:animated];
}
@end