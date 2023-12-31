import i18next from "i18next";
Page({
  data: {
    footerInfo1: {
      type: "normal",
      content: i18next.t(
        "ant-mini-program-demo.component.footer.footer.BottomTextSettingInstructions",
        "底部文案置底说明"
      ),
    },

    footerInfo2: {
      type: "guide",
      content: i18next.t(
        "ant-mini-program-demo.component.footer.footer.CanTFindWhatYou",
        "没找到需要的？搜一下试试"
      ),
      extend: [
        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.AntCredit",
            "蚂蚁借呗"
          ),
        },

        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.ReserveFund",
            "备用金"
          ),
        },

        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.AntCreditPay",
            "花呗收钱"
          ),
        },
      ],
    },

    footerInfo3: {
      type: "copyright",
      content: "© 2004-2020 Alipay.com. All rights reserved.",
    },

    footerInfo4: {
      type: "brand",
      content: i18next.t(
        "ant-mini-program-demo.component.footer.footer.PastPerformanceDoesNotIndicate",
        "过往业绩不预示产品未来表现，市场有风险，投资需谨慎"
      ),
      extend: [
        {
          logo: "https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ",
          width: "30px",
          height: "30px",
          link: "/page/tabBar/component/index",
        },

        {
          logo: "https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*gWo-TLFGp38AAAAAAAAAAABkARQnAQ",
          width: "420rpx",
          height: "116rpx",
        },
      ],
    },

    footerInfo5: {
      type: "link",
      content: "© 2004-2020 Alipay.com. All rights reserved.",
      extend: [
        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.BottomLink",
            "底部链接"
          ),
        },
      ],
    },

    footerInfo6: {
      type: "link",
      content: "© 2004-2020 Alipay.com. All rights reserved.",
      extend: [
        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.BottomLink",
            "底部链接"
          ),
        },

        {
          link: "/page/tabBar/component/index",
          text: i18next.t(
            "ant-mini-program-demo.component.footer.footer.BottomLink",
            "底部链接"
          ),
        },
      ],
    },

    footerInfo7: {
      type: "end",
      content: i18next.t(
        "ant-mini-program-demo.component.footer.footer.CustomBottomLineWithNo",
        "自定义的没有更多内容的底线"
      ),
      footerEndColor: "red",
    },

    footerInfo8: {
      type: "end",
      showEndIcon: true,
      iconSize: 50,
    },
  },

  brandClick() {
    my.alert({
      content: i18next.t(
        "ant-mini-program-demo.component.footer.footer.TheLogoOfThisBrand",
        "这个品牌 logo 没有链接，可通过 js 自定义点击事件。"
      ),
    });
  },
});
