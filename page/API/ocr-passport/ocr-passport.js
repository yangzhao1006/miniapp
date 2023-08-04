import i18next from "i18next";
Page({
  data: {
    textArry: [
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingAuthority",
          "签发机关"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.ExitAndEntryAdministrationBureau",
          "公安部出入境管理局"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Birthday",
          "生日"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.December",
          "2020年12月27日"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.PlaceOfBirth",
          "出生地"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Sichuan",
          "四川"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Nationality",
          "国籍"
        ),
        message: "CHN",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.ExpirationDate",
          "到期日期"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.April",
          "2044年04月08日"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingDate",
          "发证日期"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.April.1",
          "2024年04月09日"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingAddress",
          "发证地址"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Sichuan",
          "四川"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.EnglishName",
          "姓名英文"
        ),
        message: "ZHIXIAOBAO",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.ChineseName",
          "姓名中文"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.ZhiXiaobao",
          "支小宝"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.PassportNumber",
          "护照号码"
        ),
        message: "E09222222",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Id",
          "身份ID"
        ),
        message: "MCNONCNF<<<<A9",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Gender",
          "性别"
        ),
        message: "F",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-passport.ocr-passport.Country",
          "国家"
        ),
        message: "CHN",
      },
    ],

    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/JUcFsOCCRzlYpEHkKczj.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-passport.ocr-passport.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_passport",
      path: url,
      success: (res) => {
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);

        let {
          authority,
          birth_date,
          birth_place,
          country,
          expiry_date,
          issue_date,
          issue_place,
          name,
          name_cn,
          passport_no,
          person_id,
          sex,
          src_country,
        } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingAuthority",
                "签发机关"
              ),
              message: authority,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.Birthday",
                "生日"
              ),
              message: this.reData(birth_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.PlaceOfBirth",
                "出生地"
              ),
              message: birth_place,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.Nationality",
                "国籍"
              ),
              message: country,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.ExpirationDate",
                "到期日期"
              ),
              message: this.reData(expiry_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingDate",
                "发证日期"
              ),
              message: this.reData(issue_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.IssuingAddress",
                "发证地址"
              ),
              message: issue_place,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.EnglishName",
                "姓名英文"
              ),
              message: name,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.ChineseName",
                "姓名中文"
              ),
              message: name_cn,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.PassportNumber",
                "护照号码"
              ),
              message: passport_no,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.Id",
                "身份ID"
              ),
              message: person_id,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.Gender",
                "性别"
              ),
              message: sex,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-passport.ocr-passport.Country",
                "国家"
              ),
              message: src_country,
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
  reData(data) {
    return (
      data.substring(0, 4) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-passport.ocr-passport.Year",
        "年"
      ) +
      data.substring(4, 6) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-passport.ocr-passport.Month",
        "月"
      ) +
      data.substring(6, 8) +
      i18next.t("ant-mini-program-demo.API.ocr-passport.ocr-passport.Day", "日")
    );
  },
  imageLoad(e) {},
  imageError(e) {},
});
