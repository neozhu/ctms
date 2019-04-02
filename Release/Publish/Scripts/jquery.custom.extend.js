moment.suppressDeprecationWarnings = true;
jQuery.extend({
    datetimeNow: function () {
        //console.log(new Date());
        return moment(new Date()).format('MM/DD/YYYY');
    },
    isDateVaild: function (value) {
       
        var regex = new RegExp("^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$");
        return regex.test(value);
    },
    isDateTimeVaild: function (value) {

        var regex = new RegExp("/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/");
        return regex.test(value);
    },
    getUserName: function () {
        return $('#currentuser').val();
  },
  postDownload: function (url, formData, onCompleted) {
    return new Promise(function (resolve, reject) {
      var filename = '';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.responseType = 'blob';
      xhr.overrideMimeType("application/vnd.ms-excel");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          //console.log(xhr.getResponseHeader('Content-Disposition'));
          var header = xhr.getResponseHeader('Content-Disposition');
          if (header) {
            var regx = /filename[^;=\n]*=((['\"]).*?\2|[^;\n]*)/g;
            filename = regx.exec(header)[1];
            //console.log(regx.exec(header));
          }
          var blob = xhr.response;
          saveAs(blob, filename);
          if (onCompleted !== undefined)
            onCompleted(filename);

        } else if (xhr.status === 500) {
          reject({
            status: this.status,
            statusText: this.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      };
      xhr.onload = function (e) {
        resolve({
          filename: filename,
          status: this.status,
          statusText: xhr.statusText
        });
      };
      //var formData = new FormData();
      //formData.append('filterRules', filterRules);
      //formData.append('sort', 'Id');
      //formData.append('order', 'asc');
      xhr.send(formData);
    });
  }
});


(function ($) {
  $.fn.serializefiles = function () {
    var obj = $(this);
    /* ADD FILE TO PARAM AJAX */
    var formData = new FormData();
    $.each($(obj).find("input[type='file']"), function (i, tag) {
      $.each($(tag)[0].files, function (i, file) {
        formData.append(tag.name, file);
      });
    });
    var params = $(obj).serializeArray();
    $.each(params, function (i, val) {
      formData.append(val.name, val.value);
    });
    return formData;
  };
})(jQuery);
