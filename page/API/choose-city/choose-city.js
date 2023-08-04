import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({
          title: "chooseCity response: " + JSON.stringify(res),
        });
      },
    });
  },
  setLocatedCity() {
    my.onLocatedComplete({
      success: (res) => {
        my.setLocatedCity({
          locatedCityId: res.locatedCityId, //res.locatedCityId
          locatedCityName: i18next.t(
            "ant-mini-program-demo.API.choose-city.choose-city.ModifiedCityName",
            "修改后的城市名"
          ),
          success: (res) => {
            my.alert({
              content:
                i18next.t(
                  "ant-mini-program-demo.API.choose-city.choose-city.TheCurrentCityHasBeen",
                  "修改当前定位城市成功"
                ) + JSON.stringify(res),
            });
          },
          fail: (error) => {
            my.alert({
              content:
                i18next.t(
                  "ant-mini-program-demo.API.choose-city.choose-city.UnableToModifyTheCurrent",
                  "修改当前定位城市失败"
                ) + JSON.stringify(error),
            });
          },
        });
      },
      fail: (error) => {
        my.alert({
          content:
            i18next.t(
              "ant-mini-program-demo.API.choose-city.choose-city.FailedToOnlocatedcomplete",
              "onLocatedComplete失败"
            ) + JSON.stringify(error),
        });
      },
    });

    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
      success: (res) => {
        my.alert({
          title: "chooseCity response: " + JSON.stringify(res),
        });
      },
    });
  },
});
