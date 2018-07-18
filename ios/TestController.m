//
// Created by wzg on 2018/4/8.
// Copyright (c) 2018 Facebook. All rights reserved.
//

#import "TestController.h"
#import "UIKit/UIButton.h"
#import "UIKit/UIScreen.h"
#import "PushController.h"
#import "React/RCTView.h"

#define SCREEN_WIDTH [UIScreen mainScreen].bounds.size.width

@implementation TestController {

}

- (void)viewDidLoad {
    [super viewDidLoad];

    self.navigationItem.title = @"我是原生页面哟~";
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationController.navigationBar.hidden = NO;


    UIButton *button = [UIButton buttonWithType:(UIButtonTypeCustom)];
    button.frame = CGRectMake(SCREEN_WIDTH / 2 - 150, 80, 300, 80);
    button.backgroundColor = [UIColor redColor];
    [button setTitle:@"点击我，跳转到React-Native页面" forState:(UIControlStateNormal)];
    [button addTarget:self action:@selector(click) forControlEvents:(UIControlEventTouchUpInside)];
    [self.view addSubview:button];

}

- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
}

- (void)click {
    PushController *push = [[PushController alloc] init];
    [self.navigationController pushViewController:push animated:YES];
}

- (void)viewWillDisappear:(BOOL)animated {
    self.navigationController.navigationBar.hidden = YES;
    [super viewWillDisappear:animated];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
}


@end