import i18next from "i18next";
Page({
  data: {
    I18N_T: (i18next.getDataByLanguage(i18next.language) || {}).translation,
  },
  uploadFile() {
    my.chooseImage({
      chooseImage: 1,
      success: (res) => {
        const path = res.apFilePaths[0];
        console.log(path);
        my.uploadFile({
          url: "http://httpbin.org/post",
          fileType: "image",
          fileName: "file",
          filePath: path,
          success: (res) => {
            my.alert({
              title: i18next.t(
                "ant-mini-program-demo.API.upload-file.upload-file.UploadedSuccessfully",
                "上传成功"
              ),
            });
          },
          fail: function (res) {
            my.alert({
              title: i18next.t(
                "ant-mini-program-demo.API.upload-file.upload-file.UploadFailed",
                "上传失败"
              ),
            });
          },
        });
      },
    });
  },
});
