import i18next from "i18next";
Page({
  data: {
    textArry: [],
    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/CLaHUdhxQUlVRnlFPisN.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_business_license",
      path: url,
      success: (res) => {
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
        let {
          reg_num,
          person,
          business,
          captial,
          establish_date,
          name,
          address,
          valid_period,
        } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.RegistrationNumber",
                "注册号"
              ),
              message: reg_num,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.LegalPerson",
                "法人"
              ),
              message: person,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.CompanyName",
                "公司名称"
              ),
              message: name,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.Address",
                "地址"
              ),
              message: address,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.RegistrationTime",
                "注册时间"
              ),
              message: this.reData(establish_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.BusinessTerm",
                "营业期限"
              ),
              message: this.reData(valid_period),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.RegisteredCapital",
                "注册资本"
              ),
              message: captial,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.BusinessScope",
                "经营范围"
              ),
              message: business,
            },
          ],
        });

        my.hideLoading();
      },
      fail: (res) => {
        my.hideLoading();

        my.alert({
          title: "fail",
          content: JSON.stringify(res),
        });
      },
    });
  },
  reData(data) {
    return (
      data.substring(0, 4) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.Year",
        "年"
      ) +
      data.substring(4, 6) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.Month",
        "月"
      ) +
      data.substring(6, 8) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-business-license.ocr-business-license.Day",
        "日"
      )
    );
  },
  photoSubmit() {
    //点击上传
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.callFn(res.apFilePaths[0]);
      },
    });
  },
  imageLoad(e) {},
  imageError(e) {},
});
