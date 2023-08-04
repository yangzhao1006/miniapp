import i18next from "i18next";
Page({
  data: {
    textArry: [
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.LicensePlateNumber",
          "车牌号码"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.ZhejiangBc",
          "浙BC9188"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.VehicleType",
          "车辆类型"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.SmallCar",
          "小型轿车"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Everyone",
          "所有人"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.ZhiXiaobao",
          "支小宝"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Address",
          "地址"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.LaneYuandingStreetJiangdongDistrict",
          "浙江省宁波市江东区园丁街88弄"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Usage",
          "使用性质"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.RentalToNonGovernmental",
          "出租转非"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.BrandModel",
          "品牌型号"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.SantanaBrandSvwLe",
          "桑塔纳牌SVW7180LE1"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.IdentificationCode",
          "识别代码"
        ),
        message: "LSVAU033661234567",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.EngineNumber",
          "发动机号"
        ),
        message: "0009827",
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.RegistrationDate",
          "注册日期"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.July",
          "2006年07月21日"
        ),
      },
      {
        title: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.IssuingDate",
          "发证日期"
        ),
        message: i18next.t(
          "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.July.1",
          "2013年07月08日"
        ),
      },
    ],

    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/xyWhFGfKPgIlwMtztXnf.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_vehicle",
      path: url,
      success: (res) => {
        console.log("res", res);
        let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
        let {
          plate_num,
          addr,
          vehicle_type,
          owner,
          use_character,
          model,
          vin,
          engine_num,
          register_date,
          issue_date,
        } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.LicensePlateNumber",
                "车牌号码"
              ),
              message: plate_num,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.VehicleType",
                "车辆类型"
              ),
              message: vehicle_type,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Everyone",
                "所有人"
              ),
              message: owner,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Address",
                "地址"
              ),
              message: addr,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Usage",
                "使用性质"
              ),
              message: use_character,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.BrandModel",
                "品牌型号"
              ),
              message: model,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.IdentificationCode",
                "识别代码"
              ),
              message: vin,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.EngineNumber",
                "发动机号"
              ),
              message: engine_num,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.RegistrationDate",
                "注册日期"
              ),
              message: this.reData(register_date),
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.IssuingDate",
                "发证日期"
              ),
              message: this.reData(issue_date),
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
        "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Year",
        "年"
      ) +
      data.substring(4, 6) +
      i18next.t(
        "ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Month",
        "月"
      ) +
      data.substring(6, 8) +
      i18next.t("ant-mini-program-demo.API.ocr-vehicle.ocr-vehicle.Day", "日")
    );
  },
  imageLoad(e) {},
  imageError(e) {},
});
