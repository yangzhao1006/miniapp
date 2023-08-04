import i18next from "i18next";
Page({
  data: {
    textArry: [],
    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/ELiPtNKfHIGlpjOotpoC.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_business_card",
      path: url,
      success: (res) => {
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
        let {
          name,
          company,
          department,
          title,
          tel_cell,
          tel_work,
          addr,
          email,
        } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Name",
                "姓名"
              ),
              message: name,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Company",
                "公司"
              ),
              message: company,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Department",
                "部门"
              ),
              message: department,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Position",
                "职位"
              ),
              message: title,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.MobilePhoneNumber",
                "手机号码"
              ),
              message: tel_cell,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.PhoneNumber",
                "电话号码"
              ),
              message: tel_work,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Address",
                "地址"
              ),
              message: addr,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-business-card.ocr-business-card.Email",
                "邮箱"
              ),
              message: email,
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
