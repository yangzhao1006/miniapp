import i18next from "i18next";
Page({
  data: {
    textArry: [],
    imgUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/bQcotnJacNoSYPeNfAjZ.jpg",
  },

  onLoad() {
    this.callFn(this.data.imgUrl);
  },
  callFn(url) {
    my.showLoading({
      content: i18next.t(
        "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.Loading",
        "加载中..."
      ),
      delay: 100,
    });

    my.ocr({
      ocrType: "ocr_train_ticket",
      path: url,
      success: (res) => {
        let data = res.result;
        let { date, destination, origin, level, number, place, price } = data;
        this.setData({
          imgUrl: url,
          textArry: [
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.RideTime",
                "乘坐时间"
              ),
              message: date,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.Destination",
                "目的地"
              ),
              message: destination,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.From",
                "出发地"
              ),
              message: origin,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.Model",
                "车型"
              ),
              message: level,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.NumberOfTrips",
                "车次"
              ),
              message: number,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.Seat",
                "座位"
              ),
              message: place,
            },
            {
              title: i18next.t(
                "ant-mini-program-demo.API.ocr-train-ticket.ocr-train-ticket.TicketPrice",
                "票价"
              ),
              message: price,
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
