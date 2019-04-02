$(document).ready(function () {

  // enable fileuploader plugin
  $('#filer_input').fileuploader({
    limit: 1,
    maxSize: 50,
    fileMaxSize: 50,
    // if null - has no limits
    // example: ['jpg', 'jpeg', 'png', 'audio/mp3', 'text/plain']
    extensions: ['xlsx'],
    changeInput: '<div class="fileuploader-input">' +
      '<div class="fileuploader-input-inner">' +
      '<div class="fileuploader-main-icon"></div>' +
      '<h3 class="fileuploader-input-caption"><span>${captions.feedback}</span></h3>' +
      '<p>${captions.or}</p>' +
      '<div class="fileuploader-input-button"><span>${captions.button}</span></div>' +
      '</div>' +
      '</div>',
    theme: 'dragdrop',
    upload: {
      url: '/FileUpload/Upload',
      data: { FileType: entityname },
      type: 'POST',
      enctype: 'multipart/form-data',
      start: true,
      synchron: true,
      beforeSend: null,
      onSuccess: function (result, item) {
        var data = {};

        try {
          data = JSON.parse(result);
        } catch (e) {
          data.hasWarnings = true;
        }

        // if success
        if (data.isSuccess && data.files[0]) {
          item.name = data.files[0].name;
          item.html.find('.column-title > div:first-child').text(data.files[0].name).attr('title', data.files[0].name);
        }

        // if warnings
        if (data.hasWarnings) {
          for (var warning in data.warnings) {
            alert(data.warnings);
          }

          item.html.removeClass('upload-successful').addClass('upload-failed');
          // go out from success function by calling onError function
          // in this case we have a animation there
          // you can also response in PHP with 404
          return this.onError ? this.onError(item) : null;
        }

        item.html.find('.fileuploader-action-remove').addClass('fileuploader-action-success');
        setTimeout(function () {
          item.html.find('.progress-bar2').fadeOut(400);
        }, 400);
      },
      onError: function (item) {
        var progressBar = item.html.find('.progress-bar2');

        if (progressBar.length) {
          progressBar.find('span').html(0 + "%");
          progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
          item.html.find('.progress-bar2').fadeOut(400);
        }

        item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
          '<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
        ) : null;
      },
      onProgress: function (data, item) {
        var progressBar = item.html.find('.progress-bar2');

        if (progressBar.length > 0) {
          progressBar.show();
          progressBar.find('span').html(data.percentage + "%");
          progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
        }
      },
      // Callback fired after all files were uploaded
      onComplete: function (listEl, parentEl, newInputEl, inputEl, jqXHR, textStatus) {
        // callback will go here
      }
    },
    onRemove: function (item) {
      //$.post('/FileUpload/Remove', {
      //  file: item.name
      //});
    },
    captions: {
      button: function (options) { return 'Choose ' + (options.limit == 1 ? 'File' : 'Files'); },
      feedback: function (options) { return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload'; },
      feedback2: function (options) { return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen'; },
      confirm: 'Confirm',
      cancel: 'Cancel',
      name: 'Name',
      type: 'Type',
      size: 'Size',
      dimensions: 'Dimensions',
      duration: 'Duration',
      crop: 'Crop',
      rotate: 'Rotate',
      sort: 'Sort',
      download: 'Download',
      remove: 'Remove',
      drop: 'Drop the files here to Upload',
      paste: '<div class="fileuploader-pending-loader"></div> Pasting a file, click here to cancel.',
      removeConfirmation: 'Are you sure you want to remove this file?',
      errors: {
        filesLimit: 'Only ${limit} files are allowed to be uploaded.',
        filesType: 'Only ${extensions} files are allowed to be uploaded.',
        fileSize: '${name} is too large! Please choose a file up to ${fileMaxSize}MB.',
        filesSizeAll: 'Files that you chose are too large! Please upload files up to ${maxSize} MB.',
        fileName: 'File with the name ${name} is already selected.',
        folderUpload: 'You are not allowed to upload folders.'
      }
    }
  });

});
