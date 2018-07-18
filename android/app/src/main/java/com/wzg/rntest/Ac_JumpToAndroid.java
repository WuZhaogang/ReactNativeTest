package com.wzg.rntest;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

/**
 * 类描述:
 * 创建人:    wzg
 * 创建时间:  2018/4/8
 * 修改时间:  2018/4/8
 * 修改备注:  说明本次修改内容
 */
public class Ac_JumpToAndroid extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(createView());
    }

    private View createView() {
        LinearLayout ll = new LinearLayout(this);
        ll.setGravity(Gravity.CENTER);
        ll.setLayoutParams(new RelativeLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        // 设置文字
        TextView mTextView = new TextView(this);
        String params = getIntent().getStringExtra("params");
        if (!TextUtils.isEmpty(params)) {
            mTextView.setText(params);
            Button mButton = new Button(this);
            mButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    MainApplication.getmCommPackage().mMyIntentModel.dataToJS("dasdada");
                    finish();
                }
            });
            mButton.setText("点我给RN传值");
            ll.addView(mButton);

            Button mButtonJump = new Button(this);
            mButtonJump.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    MainApplication.getmCommPackage().mMyIntentModel.jumpToRn();
//                    finish();
                 }
            });
            mButtonJump.setText("点我 跳转到RN");
            ll.addView(mButtonJump);
        } else {
            mTextView.setText("hello world");
        }
        LinearLayout.LayoutParams mLayoutParams = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        // 在父类布局中添加它，及布局样式
        ll.addView(mTextView, mLayoutParams);
        return ll;
    }
}
