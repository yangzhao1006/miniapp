import i18next from "i18next";
Page({
  data: {
    key: "",
    data: "",
    keySync: "",
    dataSync: "",
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },

  keyChange(e) {
    console.log(e);
    this.setData({
      key: e.detail.value,
    });
  },

  dataChange(e) {
    this.setData({
      data: e.detail.value,
    });
  },

  keyChangeSync(e) {
    console.log(e);
    this.setData({
      keySync: e.detail.value,
    });
  },

  dataChangeSync(e) {
    this.setData({
      dataSync: e.detail.value,
    });
  },

  getStorage() {
    var key = this.data.key;
    var data = this.data.data;
    console.log("data: ", this.data);
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.FailedToReadData",
          "读取数据失败"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.storage.storage.TheKeyMustBeSpecified",
          "key 不能为空"
        ),
      });
    } else {
      let that = this;
      my.getStorage({
        key,
        success(res) {
          my.alert({
            title: i18next.t(
              "ant-mini-program-demo.API.storage.storage.DataReadSucceeded",
              "读取数据成功"
            ),
            content: "data: '" + JSON.stringify(res.data) + "'",
          });
        },
      });

      console.log(
        i18next.t(
          "ant-mini-program-demo.API.storage.storage.DataReadSucceeded",
          "读取数据成功"
        ),
        my.getStorageSync({ key }).data
      );
    }
  },

  setStorage() {
    var key = this.data.key;
    var data = this.data.data;
    if (key.length === 0) {
      this.setData({
        key: key,
        data: data,
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.UnableToSaveData",
          "保存数据失败"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.storage.storage.TheKeyMustBeSpecified",
          "key 不能为空"
        ),
      });
    } else {
      let that = this;
      my.setStorage({
        key: key,
        data: data,
        success() {
          that.setData({
            key: key,
            data: data,
          });

          my.alert({
            title: i18next.t(
              "ant-mini-program-demo.API.storage.storage.DataStoredSuccessfully",
              "存储数据成功"
            ),
            content: `${key}: ${data}`,
          });
        },
      });
    }
  },

  removeStorage() {
    let that = this;
    my.removeStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: "",
          data: "",
        });

        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.storage.storage.DataDeleted",
            "删除数据成功"
          ),
          content: "",
        });
      },
    });
  },
  clearStorage() {
    let that = this;
    my.clearStorage({
      key: that.data.key,
      success() {
        that.setData({
          key: "",
          data: "",
        });

        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.storage.storage.DataCleared",
            "清除数据成功"
          ),
          content: "",
        });
      },
    });
  },
  getStorageInfo() {
    let that = this;
    my.getStorageInfo({
      success(res) {
        my.alert({
          content: JSON.stringify({
            keys: res.keys,
            currentSize: res.currentSize,
            limitSize: res.limitSize,
          }),
        });
      },
    });
  },

  getStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    console.log("data: ", this.data);
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.FailedToReadDataSynchronously",
          "同步读取数据失败"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.storage.storage.TheKeyMustBeSpecified",
          "key 不能为空"
        ),
      });
    } else {
      let res = my.getStorageSync({ key: key });
      if (!res.error) {
        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.storage.storage.DataReadSuccessfully",
            "同步读取数据成功"
          ),
          content: "data: '" + JSON.stringify(res.data) + "'",
        });
      }
    }
  },

  setStorageSync() {
    var key = this.data.keySync;
    var data = this.data.dataSync;
    if (key.length === 0) {
      this.setData({
        keySync: key,
        dataSync: data,
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.UnableToSaveDataSynchronously",
          "同步保存数据失败"
        ),
        content: i18next.t(
          "ant-mini-program-demo.API.storage.storage.TheKeyMustBeSpecified",
          "key 不能为空"
        ),
      });
    } else {
      let res = my.setStorageSync({ key: key, data: data });
      if (!res.error) {
        this.setData({
          keySync: key,
          dataSync: data,
        });

        my.alert({
          title: i18next.t(
            "ant-mini-program-demo.API.storage.storage.DataSynchronizationSucceeded",
            "同步存储数据成功"
          ),
          content: `${key}: ${data}`,
        });
      }
    }
  },

  removeStorageSync() {
    let res = my.removeStorageSync({ key: this.data.keySync });
    if (!res.error) {
      this.setData({
        keySync: "",
        dataSync: "",
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.DeletedDataSynchronously",
          "同步删除数据成功"
        ),
        content: "",
      });
    }
  },
  clearStorageSync() {
    let res = my.clearStorageSync();
    if (!res.error) {
      this.setData({
        keySync: "",
        dataSync: "",
      });

      my.alert({
        title: i18next.t(
          "ant-mini-program-demo.API.storage.storage.DataClearedSuccessfully",
          "同步清除数据成功"
        ),
        content: "",
      });
    }
  },
  getStorageInfoSync() {
    let res = my.getStorageInfoSync();
    if (!res.error) {
      my.alert({
        content: JSON.stringify({
          keys: res.keys,
          currentSize: res.currentSize,
          limitSize: res.limitSize,
        }),
      });
    }
  },
});
