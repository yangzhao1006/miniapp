import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  openMultiLevelSelect() {
    my.multiLevelSelect({
      title: i18next.t(
        "ant-mini-program-demo.API.multi-level-select.multi-level-select.MultiLevelFederationSelector",
        "多级联选择器"
      ), //级联选择标题
      list: [
        {
          name: i18next.t(
            "ant-mini-program-demo.API.multi-level-select.multi-level-select.HangzhouCity",
            "杭州市"
          ), //条目名称
          subList: [
            {
              name: i18next.t(
                "ant-mini-program-demo.API.multi-level-select.multi-level-select.XihuDistrict",
                "西湖区"
              ),
              subList: [
                {
                  name: i18next.t(
                    "ant-mini-program-demo.API.multi-level-select.multi-level-select.GuCuiStreet",
                    "古翠街道"
                  ),
                },

                {
                  name: i18next.t(
                    "ant-mini-program-demo.API.multi-level-select.multi-level-select.WenxinStreet",
                    "文新街道"
                  ),
                },
              ],
            },

            {
              name: i18next.t(
                "ant-mini-program-demo.API.multi-level-select.multi-level-select.ShangchengDistrict",
                "上城区"
              ),
              subList: [
                {
                  name: i18next.t(
                    "ant-mini-program-demo.API.multi-level-select.multi-level-select.YanAnStreet",
                    "延安街道"
                  ),
                },

                {
                  name: i18next.t(
                    "ant-mini-program-demo.API.multi-level-select.multi-level-select.LongxiangqiaoStreet",
                    "龙翔桥街道"
                  ),
                },
              ],
            },
          ],

          //级联子数据列表
        },
      ], //级联数据列表
      success: (res) => {
        my.alert({ title: JSON.stringify(res) });
      },
    });
  },
});
