//-------异常分类---------//
var abclassfiltersource = [{ value: '', text: 'All'}];
var abclassdatasource = [];
abclassfiltersource.push({ value: '1',text:'提供错误信息'  });
abclassdatasource.push({ value: '1',text:'提供错误信息'  });
abclassfiltersource.push({ value: '10',text:'结算异常'  });
abclassdatasource.push({ value: '10',text:'结算异常'  });
abclassfiltersource.push({ value: '11',text:'机务异常'  });
abclassdatasource.push({ value: '11',text:'机务异常'  });
abclassfiltersource.push({ value: '12',text:'安全异常'  });
abclassdatasource.push({ value: '12',text:'安全异常'  });
abclassfiltersource.push({ value: '13',text:'早送'  });
abclassdatasource.push({ value: '13',text:'早送'  });
abclassfiltersource.push({ value: '14',text:'错送'  });
abclassdatasource.push({ value: '14',text:'错送'  });
abclassfiltersource.push({ value: '15',text:'迟送'  });
abclassdatasource.push({ value: '15',text:'迟送'  });
abclassfiltersource.push({ value: '16',text:'提货问题'  });
abclassdatasource.push({ value: '16',text:'提货问题'  });
abclassfiltersource.push({ value: '17',text:'变形'  });
abclassdatasource.push({ value: '17',text:'变形'  });
abclassfiltersource.push({ value: '18',text:'破损'  });
abclassdatasource.push({ value: '18',text:'破损'  });
abclassfiltersource.push({ value: '19',text:'单证问题'  });
abclassdatasource.push({ value: '19',text:'单证问题'  });
abclassfiltersource.push({ value: '2',text:'硬件设施不完善'  });
abclassdatasource.push({ value: '2',text:'硬件设施不完善'  });
abclassfiltersource.push({ value: '20',text:'订单异常'  });
abclassdatasource.push({ value: '20',text:'订单异常'  });
abclassfiltersource.push({ value: '3',text:'职业素养'  });
abclassdatasource.push({ value: '3',text:'职业素养'  });
abclassfiltersource.push({ value: '4',text:'职业技能'  });
abclassdatasource.push({ value: '4',text:'职业技能'  });
abclassfiltersource.push({ value: '5',text:'意外事故'  });
abclassdatasource.push({ value: '5',text:'意外事故'  });
abclassfiltersource.push({ value: '6',text:'安全事故'  });
abclassdatasource.push({ value: '6',text:'安全事故'  });
abclassfiltersource.push({ value: '7',text:'不可抗力'  });
abclassdatasource.push({ value: '7',text:'不可抗力'  });
abclassfiltersource.push({ value: '8',text:'信息提供不及时'  });
abclassdatasource.push({ value: '8',text:'信息提供不及时'  });
abclassfiltersource.push({ value: '9',text:'调度异常'  });
abclassdatasource.push({ value: '9',text:'调度异常'  });
//for datagrid abclass field  formatter
function abclassformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = abclassdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = abclassdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   abclass  field filter 
$.extend($.fn.datagrid.defaults.filters, {
abclassfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: abclassfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   abclass   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
abclasseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: abclassdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------异常类型---------//
var abtypefiltersource = [{ value: '', text: 'All'}];
var abtypedatasource = [];
abtypefiltersource.push({ value: '1',text:'破损'  });
abtypedatasource.push({ value: '1',text:'破损'  });
abtypefiltersource.push({ value: '2',text:'变形'  });
abtypedatasource.push({ value: '2',text:'变形'  });
abtypefiltersource.push({ value: '3',text:'油污'  });
abtypedatasource.push({ value: '3',text:'油污'  });
//for datagrid abtype field  formatter
function abtypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = abtypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = abtypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   abtype  field filter 
$.extend($.fn.datagrid.defaults.filters, {
abtypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: abtypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   abtype   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
abtypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: abtypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------安全事故类型---------//
var accidentlevelfiltersource = [{ value: '', text: 'All'}];
var accidentleveldatasource = [];
accidentlevelfiltersource.push({ value: '1',text:'一般事故'  });
accidentleveldatasource.push({ value: '1',text:'一般事故'  });
accidentlevelfiltersource.push({ value: '2',text:'重大事故'  });
accidentleveldatasource.push({ value: '2',text:'重大事故'  });
accidentlevelfiltersource.push({ value: '3',text:'特大事故'  });
accidentleveldatasource.push({ value: '3',text:'特大事故'  });
accidentlevelfiltersource.push({ value: '4',text:'轻微事故'  });
accidentleveldatasource.push({ value: '4',text:'轻微事故'  });
//for datagrid AccidentLevel field  formatter
function accidentlevelformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = accidentleveldatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = accidentleveldatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   AccidentLevel  field filter 
$.extend($.fn.datagrid.defaults.filters, {
accidentlevelfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: accidentlevelfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   AccidentLevel   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
accidentleveleditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: accidentleveldatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------账号类型---------//
var accounttypefiltersource = [{ value: '', text: 'All'}];
var accounttypedatasource = [];
accounttypefiltersource.push({ value: '0',text:'公司'  });
accounttypedatasource.push({ value: '0',text:'公司'  });
accounttypefiltersource.push({ value: '1',text:'供应商'  });
accounttypedatasource.push({ value: '1',text:'供应商'  });
accounttypefiltersource.push({ value: '2',text:'客户'  });
accounttypedatasource.push({ value: '2',text:'客户'  });
accounttypefiltersource.push({ value: '3',text:'外协单位'  });
accounttypedatasource.push({ value: '3',text:'外协单位'  });
//for datagrid AccountType field  formatter
function accounttypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = accounttypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = accounttypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   AccountType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
accounttypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: accounttypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   AccountType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
accounttypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: accounttypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------事故划分---------//
var acliabilityfiltersource = [{ value: '', text: 'All'}];
var acliabilitydatasource = [];
acliabilityfiltersource.push({ value: '0',text:'无责'  });
acliabilitydatasource.push({ value: '0',text:'无责'  });
acliabilityfiltersource.push({ value: '1',text:'全责'  });
acliabilitydatasource.push({ value: '1',text:'全责'  });
acliabilityfiltersource.push({ value: '2',text:'主责'  });
acliabilitydatasource.push({ value: '2',text:'主责'  });
acliabilityfiltersource.push({ value: '3',text:'同责'  });
acliabilitydatasource.push({ value: '3',text:'同责'  });
acliabilityfiltersource.push({ value: '4',text:'次责'  });
acliabilitydatasource.push({ value: '4',text:'次责'  });
//for datagrid AcLiability field  formatter
function acliabilityformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = acliabilitydatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = acliabilitydatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   AcLiability  field filter 
$.extend($.fn.datagrid.defaults.filters, {
acliabilityfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: acliabilityfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   AcLiability   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
acliabilityeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: acliabilitydatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------事故状态---------//
var acstatusfiltersource = [{ value: '', text: 'All'}];
var acstatusdatasource = [];
acstatusfiltersource.push({ value: '0',text:'未处理'  });
acstatusdatasource.push({ value: '0',text:'未处理'  });
acstatusfiltersource.push({ value: '1',text:'已处理'  });
acstatusdatasource.push({ value: '1',text:'已处理'  });
acstatusfiltersource.push({ value: '2',text:'处理中'  });
acstatusdatasource.push({ value: '2',text:'处理中'  });
acstatusfiltersource.push({ value: '3',text:'结案'  });
acstatusdatasource.push({ value: '3',text:'结案'  });
//for datagrid AcStatus field  formatter
function acstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = acstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = acstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   AcStatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
acstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: acstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   AcStatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
acstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: acstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------集装箱类型---------//
var cntypefiltersource = [{ value: '', text: 'All'}];
var cntypedatasource = [];
cntypefiltersource.push({ value: '20B0',text:'20 英尺散货集装箱'  });
cntypedatasource.push({ value: '20B0',text:'20 英尺散货集装箱'  });
cntypefiltersource.push({ value: '20FR',text:'20 英尺框架集装箱'  });
cntypedatasource.push({ value: '20FR',text:'20 英尺框架集装箱'  });
cntypefiltersource.push({ value: '20G0',text:'20 英尺干货集装箱'  });
cntypedatasource.push({ value: '20G0',text:'20 英尺干货集装箱'  });
cntypefiltersource.push({ value: '20G1',text:'20 英尺干货集装箱'  });
cntypedatasource.push({ value: '20G1',text:'20 英尺干货集装箱'  });
cntypefiltersource.push({ value: '20GP',text:'20 GP干货集装箱'  });
cntypedatasource.push({ value: '20GP',text:'20 GP干货集装箱'  });
cntypefiltersource.push({ value: '20H0',text:'20 英尺保温集装箱'  });
cntypedatasource.push({ value: '20H0',text:'20 英尺保温集装箱'  });
cntypefiltersource.push({ value: '20HC',text:'20 HC干货高箱'  });
cntypedatasource.push({ value: '20HC',text:'20 HC干货高箱'  });
cntypefiltersource.push({ value: '20OD',text:'20 OD 半开门集装箱'  });
cntypedatasource.push({ value: '20OD',text:'20 OD 半开门集装箱'  });
cntypefiltersource.push({ value: '20OH',text:'20 OH 开顶高箱'  });
cntypedatasource.push({ value: '20OH',text:'20 OH 开顶高箱'  });
cntypefiltersource.push({ value: '20OT',text:'20 OT 开顶箱'  });
cntypedatasource.push({ value: '20OT',text:'20 OT 开顶箱'  });
cntypefiltersource.push({ value: '20P1',text:'20 英尺框架集装箱'  });
cntypedatasource.push({ value: '20P1',text:'20 英尺框架集装箱'  });
cntypefiltersource.push({ value: '20RF',text:'20 英尺 RF 冷冻箱'  });
cntypedatasource.push({ value: '20RF',text:'20 英尺 RF 冷冻箱'  });
cntypefiltersource.push({ value: '20RH',text:'20 英尺 RH 冷高箱'  });
cntypedatasource.push({ value: '20RH',text:'20 英尺 RH 冷高箱'  });
cntypefiltersource.push({ value: '20TK',text:'20 英尺 TK 油罐箱'  });
cntypedatasource.push({ value: '20TK',text:'20 英尺 TK 油罐箱'  });
cntypefiltersource.push({ value: '20VE',text:'20 英尺 VE 挂衣箱'  });
cntypedatasource.push({ value: '20VE',text:'20 英尺 VE 挂衣箱'  });
cntypefiltersource.push({ value: '20ZP',text:'20 英尺自拼集装箱'  });
cntypedatasource.push({ value: '20ZP',text:'20 英尺自拼集装箱'  });
cntypefiltersource.push({ value: '22B0',text:'20 英尺散货集装箱'  });
cntypedatasource.push({ value: '22B0',text:'20 英尺散货集装箱'  });
cntypefiltersource.push({ value: '22G0',text:'20 英尺干货集装箱'  });
cntypedatasource.push({ value: '22G0',text:'20 英尺干货集装箱'  });
cntypefiltersource.push({ value: '22G1',text:'20 英尺干货集装箱'  });
cntypedatasource.push({ value: '22G1',text:'20 英尺干货集装箱'  });
cntypefiltersource.push({ value: '22H0',text:'20 英尺保温集装箱'  });
cntypedatasource.push({ value: '22H0',text:'20 英尺保温集装箱'  });
cntypefiltersource.push({ value: '22P1',text:'20 英尺框架集装箱'  });
cntypedatasource.push({ value: '22P1',text:'20 英尺框架集装箱'  });
cntypefiltersource.push({ value: '22P3',text:'20 英尺折叠式框架集装箱'  });
cntypedatasource.push({ value: '22P3',text:'20 英尺折叠式框架集装箱'  });
cntypefiltersource.push({ value: '22P7',text:'20 英尺平板集装箱'  });
cntypedatasource.push({ value: '22P7',text:'20 英尺平板集装箱'  });
cntypefiltersource.push({ value: '22R1',text:'20 英尺冷冻集装箱'  });
cntypedatasource.push({ value: '22R1',text:'20 英尺冷冻集装箱'  });
cntypefiltersource.push({ value: '22U1',text:'20 英尺开顶集装箱'  });
cntypedatasource.push({ value: '22U1',text:'20 英尺开顶集装箱'  });
cntypefiltersource.push({ value: '22U6',text:'20 英尺硬顶集装箱'  });
cntypedatasource.push({ value: '22U6',text:'20 英尺硬顶集装箱'  });
cntypefiltersource.push({ value: '22V0',text:'20 英尺通风集装箱'  });
cntypedatasource.push({ value: '22V0',text:'20 英尺通风集装箱'  });
cntypefiltersource.push({ value: '22V1',text:'20 英尺通风集装箱'  });
cntypedatasource.push({ value: '22V1',text:'20 英尺通风集装箱'  });
cntypefiltersource.push({ value: '25G0',text:'20 英尺高容积干货集装箱'  });
cntypedatasource.push({ value: '25G0',text:'20 英尺高容积干货集装箱'  });
cntypefiltersource.push({ value: '25G1',text:'20 英尺高容积干货集装箱'  });
cntypedatasource.push({ value: '25G1',text:'20 英尺高容积干货集装箱'  });
cntypefiltersource.push({ value: '40FR',text:'40 英尺 FR 框架箱'  });
cntypedatasource.push({ value: '40FR',text:'40 英尺 FR 框架箱'  });
cntypefiltersource.push({ value: '40GP',text:'40 英尺 GP 干货箱'  });
cntypedatasource.push({ value: '40GP',text:'40 英尺 GP 干货箱'  });
cntypefiltersource.push({ value: '40HC',text:'40 英尺 HC 干货高箱'  });
cntypedatasource.push({ value: '40HC',text:'40 英尺 HC 干货高箱'  });
cntypefiltersource.push({ value: '40OD',text:'40 英尺 OD 半开门'  });
cntypedatasource.push({ value: '40OD',text:'40 英尺 OD 半开门'  });
cntypefiltersource.push({ value: '40OH',text:'40 英尺 OH 开顶高箱'  });
cntypedatasource.push({ value: '40OH',text:'40 英尺 OH 开顶高箱'  });
cntypefiltersource.push({ value: '40OT',text:'40 英尺 OT 开顶箱'  });
cntypedatasource.push({ value: '40OT',text:'40 英尺 OT 开顶箱'  });
cntypefiltersource.push({ value: '40RF',text:'40 英尺 RF 冷冻箱'  });
cntypedatasource.push({ value: '40RF',text:'40 英尺 RF 冷冻箱'  });
cntypefiltersource.push({ value: '40RH',text:'40 英尺 RH 冷高箱'  });
cntypedatasource.push({ value: '40RH',text:'40 英尺 RH 冷高箱'  });
cntypefiltersource.push({ value: '40TK',text:'40 英尺 TK 油罐箱'  });
cntypedatasource.push({ value: '40TK',text:'40 英尺 TK 油罐箱'  });
cntypefiltersource.push({ value: '40VE',text:'40 英尺 VE 挂衣箱'  });
cntypedatasource.push({ value: '40VE',text:'40 英尺 VE 挂衣箱'  });
cntypefiltersource.push({ value: '40ZP',text:'40 英尺 自拼集装箱'  });
cntypedatasource.push({ value: '40ZP',text:'40 英尺 自拼集装箱'  });
cntypefiltersource.push({ value: '42G0',text:'40 英尺干货集装箱'  });
cntypedatasource.push({ value: '42G0',text:'40 英尺干货集装箱'  });
cntypefiltersource.push({ value: '42G1',text:'40 英尺干货集装箱'  });
cntypedatasource.push({ value: '42G1',text:'40 英尺干货集装箱'  });
cntypefiltersource.push({ value: '42H0',text:'40 英尺保温集装箱'  });
cntypedatasource.push({ value: '42H0',text:'40 英尺保温集装箱'  });
cntypefiltersource.push({ value: '42P1',text:'40 英尺框架集装箱'  });
cntypedatasource.push({ value: '42P1',text:'40 英尺框架集装箱'  });
cntypefiltersource.push({ value: '42P3',text:'40 英尺折叠式框架集装箱'  });
cntypedatasource.push({ value: '42P3',text:'40 英尺折叠式框架集装箱'  });
cntypefiltersource.push({ value: '42P6',text:'40 英尺平板集装箱'  });
cntypedatasource.push({ value: '42P6',text:'40 英尺平板集装箱'  });
cntypefiltersource.push({ value: '42R1',text:'40 英尺冷冻集装箱'  });
cntypedatasource.push({ value: '42R1',text:'40 英尺冷冻集装箱'  });
cntypefiltersource.push({ value: '42U1',text:'40 英尺开顶集装箱'  });
cntypedatasource.push({ value: '42U1',text:'40 英尺开顶集装箱'  });
cntypefiltersource.push({ value: '42U6',text:'40 英尺硬顶集装箱'  });
cntypedatasource.push({ value: '42U6',text:'40 英尺硬顶集装箱'  });
cntypefiltersource.push({ value: '45B3',text:'45 英尺高容积散装箱'  });
cntypedatasource.push({ value: '45B3',text:'45 英尺高容积散装箱'  });
cntypefiltersource.push({ value: '45FC',text:'45 英尺 FC 框架箱'  });
cntypedatasource.push({ value: '45FC',text:'45 英尺 FC 框架箱'  });
cntypefiltersource.push({ value: '45G0',text:'45 英尺高容积干货集装箱'  });
cntypedatasource.push({ value: '45G0',text:'45 英尺高容积干货集装箱'  });
cntypefiltersource.push({ value: '45G1',text:'45 英尺高容积干货集装箱'  });
cntypedatasource.push({ value: '45G1',text:'45 英尺高容积干货集装箱'  });
cntypefiltersource.push({ value: '45GP',text:'45英尺 GP 干货箱'  });
cntypedatasource.push({ value: '45GP',text:'45英尺 GP 干货箱'  });
cntypefiltersource.push({ value: '45HC',text:'45英尺 HC 干货高箱'  });
cntypedatasource.push({ value: '45HC',text:'45英尺 HC 干货高箱'  });
cntypefiltersource.push({ value: '45OD',text:'45英尺 OD 半开门箱'  });
cntypedatasource.push({ value: '45OD',text:'45英尺 OD 半开门箱'  });
cntypefiltersource.push({ value: '45OT',text:'45英尺 OT 开顶箱'  });
cntypedatasource.push({ value: '45OT',text:'45英尺 OT 开顶箱'  });
cntypefiltersource.push({ value: '45P3',text:'40 英尺折叠式高容积框架集装箱'  });
cntypedatasource.push({ value: '45P3',text:'40 英尺折叠式高容积框架集装箱'  });
cntypefiltersource.push({ value: '45P8',text:'40 英尺高容积平板集装箱'  });
cntypedatasource.push({ value: '45P8',text:'40 英尺高容积平板集装箱'  });
cntypefiltersource.push({ value: '45R1',text:'40 英尺高容积冷冻箱'  });
cntypedatasource.push({ value: '45R1',text:'40 英尺高容积冷冻箱'  });
cntypefiltersource.push({ value: '45R9',text:'40 英尺高容积冷冻箱'  });
cntypedatasource.push({ value: '45R9',text:'40 英尺高容积冷冻箱'  });
cntypefiltersource.push({ value: '45RF',text:'45英尺 RF 冷冻箱'  });
cntypedatasource.push({ value: '45RF',text:'45英尺 RF 冷冻箱'  });
cntypefiltersource.push({ value: '45RH',text:'45英尺 RH 冷高箱'  });
cntypedatasource.push({ value: '45RH',text:'45英尺 RH 冷高箱'  });
cntypefiltersource.push({ value: '45TK',text:'45英尺 TK 油罐箱'  });
cntypedatasource.push({ value: '45TK',text:'45英尺 TK 油罐箱'  });
cntypefiltersource.push({ value: '45U1',text:'40 英尺高容积开顶集装箱'  });
cntypedatasource.push({ value: '45U1',text:'40 英尺高容积开顶集装箱'  });
cntypefiltersource.push({ value: '45U6',text:'40 英尺硬顶集装箱'  });
cntypedatasource.push({ value: '45U6',text:'40 英尺硬顶集装箱'  });
cntypefiltersource.push({ value: '45VE',text:'45英尺 VE 挂衣箱'  });
cntypedatasource.push({ value: '45VE',text:'45英尺 VE 挂衣箱'  });
cntypefiltersource.push({ value: '46H0',text:'40 英尺高容积保温集装箱'  });
cntypedatasource.push({ value: '46H0',text:'40 英尺高容积保温集装箱'  });
cntypefiltersource.push({ value: '53GP',text:'53 英尺 GP 干货箱'  });
cntypedatasource.push({ value: '53GP',text:'53 英尺 GP 干货箱'  });
cntypefiltersource.push({ value: '53HC',text:'53 英尺 HC 干货高箱'  });
cntypedatasource.push({ value: '53HC',text:'53 英尺 HC 干货高箱'  });
cntypefiltersource.push({ value: 'L2G1',text:'45 英尺干货集装箱'  });
cntypedatasource.push({ value: 'L2G1',text:'45 英尺干货集装箱'  });
cntypefiltersource.push({ value: 'L5G1',text:'45 英尺高容积干货集装箱'  });
cntypedatasource.push({ value: 'L5G1',text:'45 英尺高容积干货集装箱'  });
cntypefiltersource.push({ value: 'LOG1',text:'45 英尺干货集装箱'  });
cntypedatasource.push({ value: 'LOG1',text:'45 英尺干货集装箱'  });
//for datagrid CNType field  formatter
function cntypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = cntypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = cntypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   CNType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
cntypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: cntypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   CNType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
cntypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: cntypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------集装堆场状态---------//
var cstatusfiltersource = [{ value: '', text: 'All'}];
var cstatusdatasource = [];
cstatusfiltersource.push({ value: '0',text:'正常'  });
cstatusdatasource.push({ value: '0',text:'正常'  });
cstatusfiltersource.push({ value: '1',text:'破损'  });
cstatusdatasource.push({ value: '1',text:'破损'  });
cstatusfiltersource.push({ value: '2',text:'变形'  });
cstatusdatasource.push({ value: '2',text:'变形'  });
//for datagrid cstatus field  formatter
function cstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = cstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = cstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   cstatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
cstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: cstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   cstatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
cstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: cstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------派车放向---------//
var drirectfiltersource = [{ value: '', text: 'All'}];
var drirectdatasource = [];
drirectfiltersource.push({ value: '0',text:'去程'  });
drirectdatasource.push({ value: '0',text:'去程'  });
drirectfiltersource.push({ value: '1',text:'回程'  });
drirectdatasource.push({ value: '1',text:'回程'  });
//for datagrid Drirect field  formatter
function drirectformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = drirectdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = drirectdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   Drirect  field filter 
$.extend($.fn.datagrid.defaults.filters, {
drirectfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: drirectfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   Drirect   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
drirecteditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: drirectdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------准驾车型---------//
var drvlicensetypefiltersource = [{ value: '', text: 'All'}];
var drvlicensetypedatasource = [];
drvlicensetypefiltersource.push({ value: '8001',text:'A1'  });
drvlicensetypedatasource.push({ value: '8001',text:'A1'  });
drvlicensetypefiltersource.push({ value: '8002',text:'A2'  });
drvlicensetypedatasource.push({ value: '8002',text:'A2'  });
drvlicensetypefiltersource.push({ value: '8003',text:'B1'  });
drvlicensetypedatasource.push({ value: '8003',text:'B1'  });
drvlicensetypefiltersource.push({ value: '8004',text:'B2'  });
drvlicensetypedatasource.push({ value: '8004',text:'B2'  });
drvlicensetypefiltersource.push({ value: '8005',text:'C1'  });
drvlicensetypedatasource.push({ value: '8005',text:'C1'  });
drvlicensetypefiltersource.push({ value: '8006',text:'C2'  });
drvlicensetypedatasource.push({ value: '8006',text:'C2'  });
drvlicensetypefiltersource.push({ value: '8007',text:'C3'  });
drvlicensetypedatasource.push({ value: '8007',text:'C3'  });
drvlicensetypefiltersource.push({ value: '8008',text:'A'  });
drvlicensetypedatasource.push({ value: '8008',text:'A'  });
drvlicensetypefiltersource.push({ value: '8009',text:'B'  });
drvlicensetypedatasource.push({ value: '8009',text:'B'  });
drvlicensetypefiltersource.push({ value: '8010',text:'C'  });
drvlicensetypedatasource.push({ value: '8010',text:'C'  });
drvlicensetypefiltersource.push({ value: '8011',text:'A1.A2'  });
drvlicensetypedatasource.push({ value: '8011',text:'A1.A2'  });
drvlicensetypefiltersource.push({ value: '8012',text:'A2.E'  });
drvlicensetypedatasource.push({ value: '8012',text:'A2.E'  });
drvlicensetypefiltersource.push({ value: '8013',text:'B.E'  });
drvlicensetypedatasource.push({ value: '8013',text:'B.E'  });
drvlicensetypefiltersource.push({ value: '8014',text:'B2.E'  });
drvlicensetypedatasource.push({ value: '8014',text:'B2.E'  });
drvlicensetypefiltersource.push({ value: '8015',text:'A.E'  });
drvlicensetypedatasource.push({ value: '8015',text:'A.E'  });
drvlicensetypefiltersource.push({ value: '8016',text:'C.E'  });
drvlicensetypedatasource.push({ value: '8016',text:'C.E'  });
drvlicensetypefiltersource.push({ value: 'B017',text:'A1,A2,E'  });
drvlicensetypedatasource.push({ value: 'B017',text:'A1,A2,E'  });
//for datagrid DrvLicenseType field  formatter
function drvlicensetypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = drvlicensetypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = drvlicensetypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   DrvLicenseType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
drvlicensetypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: drvlicensetypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   DrvLicenseType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
drvlicensetypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: drvlicensetypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------箱状态---------//
var effiltersource = [{ value: '', text: 'All'}];
var efdatasource = [];
effiltersource.push({ value: 'E',text:'空箱'  });
efdatasource.push({ value: 'E',text:'空箱'  });
effiltersource.push({ value: 'F',text:'重箱'  });
efdatasource.push({ value: 'F',text:'重箱'  });
//for datagrid EF field  formatter
function efformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = efdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = efdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   EF  field filter 
$.extend($.fn.datagrid.defaults.filters, {
effilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: effiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   EF   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
efeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: efdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------异常分类---------//
var excategoryfiltersource = [{ value: '', text: 'All'}];
var excategorydatasource = [];
excategoryfiltersource.push({ value: '1',text:'业务异常'  });
excategorydatasource.push({ value: '1',text:'业务异常'  });
excategoryfiltersource.push({ value: '2',text:'系统异常'  });
excategorydatasource.push({ value: '2',text:'系统异常'  });
excategoryfiltersource.push({ value: '3',text:'车辆异常'  });
excategorydatasource.push({ value: '3',text:'车辆异常'  });
//for datagrid ExCategory field  formatter
function excategoryformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = excategorydatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = excategorydatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   ExCategory  field filter 
$.extend($.fn.datagrid.defaults.filters, {
excategoryfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: excategoryfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   ExCategory   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
excategoryeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: excategorydatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------异常类型---------//
var extypefiltersource = [{ value: '', text: 'All'}];
var extypedatasource = [];
extypefiltersource.push({ value: '1001',text:'提供错误信息'  });
extypedatasource.push({ value: '1001',text:'提供错误信息'  });
extypefiltersource.push({ value: '1002',text:'硬件设施不完善'  });
extypedatasource.push({ value: '1002',text:'硬件设施不完善'  });
extypefiltersource.push({ value: '1003',text:'职业素养'  });
extypedatasource.push({ value: '1003',text:'职业素养'  });
extypefiltersource.push({ value: '1004',text:'职业技能'  });
extypedatasource.push({ value: '1004',text:'职业技能'  });
extypefiltersource.push({ value: '1005',text:'意外事故'  });
extypedatasource.push({ value: '1005',text:'意外事故'  });
extypefiltersource.push({ value: '1006',text:'安全事故'  });
extypedatasource.push({ value: '1006',text:'安全事故'  });
extypefiltersource.push({ value: '1007',text:'不可抗力'  });
extypedatasource.push({ value: '1007',text:'不可抗力'  });
extypefiltersource.push({ value: '1008',text:'信息提供不及时'  });
extypedatasource.push({ value: '1008',text:'信息提供不及时'  });
extypefiltersource.push({ value: '1009',text:'调度异常'  });
extypedatasource.push({ value: '1009',text:'调度异常'  });
extypefiltersource.push({ value: '1010',text:'结算异常'  });
extypedatasource.push({ value: '1010',text:'结算异常'  });
extypefiltersource.push({ value: '1011',text:'机务异常'  });
extypedatasource.push({ value: '1011',text:'机务异常'  });
extypefiltersource.push({ value: '1012',text:'安全异常'  });
extypedatasource.push({ value: '1012',text:'安全异常'  });
extypefiltersource.push({ value: '1013',text:'早送'  });
extypedatasource.push({ value: '1013',text:'早送'  });
extypefiltersource.push({ value: '1014',text:'错送'  });
extypedatasource.push({ value: '1014',text:'错送'  });
extypefiltersource.push({ value: '1015',text:'迟送'  });
extypedatasource.push({ value: '1015',text:'迟送'  });
extypefiltersource.push({ value: '1016',text:'提货问题'  });
extypedatasource.push({ value: '1016',text:'提货问题'  });
extypefiltersource.push({ value: '1017',text:'变形'  });
extypedatasource.push({ value: '1017',text:'变形'  });
extypefiltersource.push({ value: '1018',text:'破损'  });
extypedatasource.push({ value: '1018',text:'破损'  });
extypefiltersource.push({ value: '1019',text:'单证问题'  });
extypedatasource.push({ value: '1019',text:'单证问题'  });
extypefiltersource.push({ value: '1020',text:'订单异常'  });
extypedatasource.push({ value: '1020',text:'订单异常'  });
//for datagrid ExType field  formatter
function extypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = extypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = extypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   ExType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
extypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: extypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   ExType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
extypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: extypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------文件类型---------//
var filetypefiltersource = [{ value: '', text: 'All'}];
var filetypedatasource = [];
filetypefiltersource.push({ value: '0',text:'txt'  });
filetypedatasource.push({ value: '0',text:'txt'  });
filetypefiltersource.push({ value: '1',text:'xls'  });
filetypedatasource.push({ value: '1',text:'xls'  });
filetypefiltersource.push({ value: '10',text:'docx'  });
filetypedatasource.push({ value: '10',text:'docx'  });
filetypefiltersource.push({ value: '11',text:'py'  });
filetypedatasource.push({ value: '11',text:'py'  });
filetypefiltersource.push({ value: '12',text:'c'  });
filetypedatasource.push({ value: '12',text:'c'  });
filetypefiltersource.push({ value: '13',text:'java'  });
filetypedatasource.push({ value: '13',text:'java'  });
filetypefiltersource.push({ value: '2',text:'pdf'  });
filetypedatasource.push({ value: '2',text:'pdf'  });
filetypefiltersource.push({ value: '3',text:'xlsx'  });
filetypedatasource.push({ value: '3',text:'xlsx'  });
filetypefiltersource.push({ value: '4',text:'json'  });
filetypedatasource.push({ value: '4',text:'json'  });
filetypefiltersource.push({ value: '5',text:'js'  });
filetypedatasource.push({ value: '5',text:'js'  });
filetypefiltersource.push({ value: '6',text:'html'  });
filetypedatasource.push({ value: '6',text:'html'  });
filetypefiltersource.push({ value: '7',text:'xml'  });
filetypedatasource.push({ value: '7',text:'xml'  });
filetypefiltersource.push({ value: '8',text:'cs'  });
filetypedatasource.push({ value: '8',text:'cs'  });
filetypefiltersource.push({ value: '9',text:'doc'  });
filetypedatasource.push({ value: '9',text:'doc'  });
//for datagrid FileType field  formatter
function filetypeformatter(value, row, index) { 
     let multiple = true; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = filetypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = filetypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   FileType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
filetypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: filetypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   FileType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
filetypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: filetypedatasource,
         multiple: true,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------fo状态---------//
var fostatusfiltersource = [{ value: '', text: 'All'}];
var fostatusdatasource = [];
fostatusfiltersource.push({ value: '0',text:'待审核'  });
fostatusdatasource.push({ value: '0',text:'待审核'  });
fostatusfiltersource.push({ value: '1',text:'已审核'  });
fostatusdatasource.push({ value: '1',text:'已审核'  });
fostatusfiltersource.push({ value: '2',text:'取消'  });
fostatusdatasource.push({ value: '2',text:'取消'  });
//for datagrid fostatus field  formatter
function fostatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = fostatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = fostatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   fostatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
fostatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: fostatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   fostatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
fostatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: fostatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------禁用标志---------//
var isdisabledfiltersource = [{ value: '', text: 'All'}];
var isdisableddatasource = [];
isdisabledfiltersource.push({ value: '0',text:'未禁用'  });
isdisableddatasource.push({ value: '0',text:'未禁用'  });
isdisabledfiltersource.push({ value: '1',text:'已禁用'  });
isdisableddatasource.push({ value: '1',text:'已禁用'  });
//for datagrid IsDisabled field  formatter
function isdisabledformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = isdisableddatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = isdisableddatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   IsDisabled  field filter 
$.extend($.fn.datagrid.defaults.filters, {
isdisabledfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: isdisabledfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   IsDisabled   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
isdisablededitor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: isdisableddatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------启用标志---------//
var isenabledfiltersource = [{ value: '', text: 'All'}];
var isenableddatasource = [];
isenabledfiltersource.push({ value: '0',text:'未启用'  });
isenableddatasource.push({ value: '0',text:'未启用'  });
isenabledfiltersource.push({ value: '1',text:'已启用'  });
isenableddatasource.push({ value: '1',text:'已启用'  });
//for datagrid IsEnabled field  formatter
function isenabledformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = isenableddatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = isenableddatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   IsEnabled  field filter 
$.extend($.fn.datagrid.defaults.filters, {
isenabledfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: isenabledfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   IsEnabled   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
isenablededitor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: isenableddatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------已读标志---------//
var isnewfiltersource = [{ value: '', text: 'All'}];
var isnewdatasource = [];
isnewfiltersource.push({ value: '0',text:'未读'  });
isnewdatasource.push({ value: '0',text:'未读'  });
isnewfiltersource.push({ value: '1',text:'已读'  });
isnewdatasource.push({ value: '1',text:'已读'  });
//for datagrid IsNew field  formatter
function isnewformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = isnewdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = isnewdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   IsNew  field filter 
$.extend($.fn.datagrid.defaults.filters, {
isnewfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: isnewfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   IsNew   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
isneweditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: isnewdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------通知标志---------//
var isnoticefiltersource = [{ value: '', text: 'All'}];
var isnoticedatasource = [];
isnoticefiltersource.push({ value: '0',text:'未发'  });
isnoticedatasource.push({ value: '0',text:'未发'  });
isnoticefiltersource.push({ value: '1',text:'已发'  });
isnoticedatasource.push({ value: '1',text:'已发'  });
//for datagrid IsNotice field  formatter
function isnoticeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = isnoticedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = isnoticedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   IsNotice  field filter 
$.extend($.fn.datagrid.defaults.filters, {
isnoticefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: isnoticefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   IsNotice   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
isnoticeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: isnoticedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------维修类型---------//
var maintaintypefiltersource = [{ value: '', text: 'All'}];
var maintaintypedatasource = [];
maintaintypefiltersource.push({ value: '0',text:'常规保养'  });
maintaintypedatasource.push({ value: '0',text:'常规保养'  });
maintaintypefiltersource.push({ value: '1',text:'自修理'  });
maintaintypedatasource.push({ value: '1',text:'自修理'  });
maintaintypefiltersource.push({ value: '2',text:'委外修理'  });
maintaintypedatasource.push({ value: '2',text:'委外修理'  });
maintaintypefiltersource.push({ value: '3',text:'其它'  });
maintaintypedatasource.push({ value: '3',text:'其它'  });
//for datagrid MaintainType field  formatter
function maintaintypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = maintaintypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = maintaintypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   MaintainType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
maintaintypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: maintaintypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   MaintainType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
maintaintypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: maintaintypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------日志分组---------//
var messagegroupfiltersource = [{ value: '', text: 'All'}];
var messagegroupdatasource = [];
messagegroupfiltersource.push({ value: '0',text:'系统操作'  });
messagegroupdatasource.push({ value: '0',text:'系统操作'  });
messagegroupfiltersource.push({ value: '1',text:'业务操作'  });
messagegroupdatasource.push({ value: '1',text:'业务操作'  });
messagegroupfiltersource.push({ value: '2',text:'接口操作'  });
messagegroupdatasource.push({ value: '2',text:'接口操作'  });
//for datagrid MessageGroup field  formatter
function messagegroupformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = messagegroupdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = messagegroupdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   MessageGroup  field filter 
$.extend($.fn.datagrid.defaults.filters, {
messagegroupfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: messagegroupfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   MessageGroup   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
messagegroupeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: messagegroupdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------日志类型---------//
var messagetypefiltersource = [{ value: '', text: 'All'}];
var messagetypedatasource = [];
messagetypefiltersource.push({ value: '0',text:'Information'  });
messagetypedatasource.push({ value: '0',text:'Information'  });
messagetypefiltersource.push({ value: '1',text:'Error'  });
messagetypedatasource.push({ value: '1',text:'Error'  });
messagetypefiltersource.push({ value: '2',text:'Alert'  });
messagetypedatasource.push({ value: '2',text:'Alert'  });
//for datagrid MessageType field  formatter
function messagetypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = messagetypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = messagetypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   MessageType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
messagetypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: messagetypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   MessageType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
messagetypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: messagetypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------吊箱状态---------//
var movestatusfiltersource = [{ value: '', text: 'All'}];
var movestatusdatasource = [];
movestatusfiltersource.push({ value: '作废',text:'作废'  });
movestatusdatasource.push({ value: '作废',text:'作废'  });
movestatusfiltersource.push({ value: '正常',text:'正常'  });
movestatusdatasource.push({ value: '正常',text:'正常'  });
//for datagrid movestatus field  formatter
function movestatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = movestatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = movestatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   movestatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
movestatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: movestatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   movestatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
movestatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: movestatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------吊箱操作类型---------//
var movetypefiltersource = [{ value: '', text: 'All'}];
var movetypedatasource = [];
movetypefiltersource.push({ value: '0',text:'移箱'  });
movetypedatasource.push({ value: '0',text:'移箱'  });
movetypefiltersource.push({ value: '1',text:'吊箱门'  });
movetypedatasource.push({ value: '1',text:'吊箱门'  });
movetypefiltersource.push({ value: '2',text:'翻箱'  });
movetypedatasource.push({ value: '2',text:'翻箱'  });
movetypefiltersource.push({ value: '3',text:'上'  });
movetypedatasource.push({ value: '3',text:'上'  });
movetypefiltersource.push({ value: '4',text:'下'  });
movetypedatasource.push({ value: '4',text:'下'  });
movetypefiltersource.push({ value: '5',text:'装箱'  });
movetypedatasource.push({ value: '5',text:'装箱'  });
movetypefiltersource.push({ value: '6',text:'卸箱'  });
movetypedatasource.push({ value: '6',text:'卸箱'  });
//for datagrid movetype field  formatter
function movetypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = movetypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = movetypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   movetype  field filter 
$.extend($.fn.datagrid.defaults.filters, {
movetypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: movetypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   movetype   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
movetypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: movetypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------油耗登记类型---------//
var ortypefiltersource = [{ value: '', text: 'All'}];
var ortypedatasource = [];
ortypefiltersource.push({ value: '0',text:'月结'  });
ortypedatasource.push({ value: '0',text:'月结'  });
ortypefiltersource.push({ value: '1',text:'零散加油'  });
ortypedatasource.push({ value: '1',text:'零散加油'  });
ortypefiltersource.push({ value: '2',text:'充值加油'  });
ortypedatasource.push({ value: '2',text:'充值加油'  });
//for datagrid ORType field  formatter
function ortypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = ortypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = ortypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   ORType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
ortypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: ortypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   ORType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
ortypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: ortypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------客户类型---------//
var partnerrolefiltersource = [{ value: '', text: 'All'}];
var partnerroledatasource = [];
partnerrolefiltersource.push({ value: '0',text:'承运人'  });
partnerroledatasource.push({ value: '0',text:'承运人'  });
partnerrolefiltersource.push({ value: '1',text:'客户'  });
partnerroledatasource.push({ value: '1',text:'客户'  });
partnerrolefiltersource.push({ value: '2',text:'供应商'  });
partnerroledatasource.push({ value: '2',text:'供应商'  });
partnerrolefiltersource.push({ value: '3',text:'报关公司'  });
partnerroledatasource.push({ value: '3',text:'报关公司'  });
//for datagrid PartnerRole field  formatter
function partnerroleformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = partnerroledatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = partnerroledatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   PartnerRole  field filter 
$.extend($.fn.datagrid.defaults.filters, {
partnerrolefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: partnerrolefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   PartnerRole   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
partnerroleeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: partnerroledatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------企业类型---------//
var partnertypefiltersource = [{ value: '', text: 'All'}];
var partnertypedatasource = [];
partnertypefiltersource.push({ value: '0',text:'个人'  });
partnertypedatasource.push({ value: '0',text:'个人'  });
partnertypefiltersource.push({ value: '1',text:'公司'  });
partnertypedatasource.push({ value: '1',text:'公司'  });
//for datagrid PartnerType field  formatter
function partnertypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = partnertypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = partnertypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   PartnerType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
partnertypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: partnertypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   PartnerType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
partnertypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: partnertypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车牌位置---------//
var platenumberpositionfiltersource = [{ value: '', text: 'All'}];
var platenumberpositiondatasource = [];
platenumberpositionfiltersource.push({ value: '0',text:'一体车'  });
platenumberpositiondatasource.push({ value: '0',text:'一体车'  });
platenumberpositionfiltersource.push({ value: '1',text:'牵引车'  });
platenumberpositiondatasource.push({ value: '1',text:'牵引车'  });
platenumberpositionfiltersource.push({ value: '2',text:'车挂'  });
platenumberpositiondatasource.push({ value: '2',text:'车挂'  });
//for datagrid PlateNumberPosition field  formatter
function platenumberpositionformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = platenumberpositiondatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = platenumberpositiondatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   PlateNumberPosition  field filter 
$.extend($.fn.datagrid.defaults.filters, {
platenumberpositionfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: platenumberpositionfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   PlateNumberPosition   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
platenumberpositioneditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: platenumberpositiondatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------区域类型---------//
var regiontypefiltersource = [{ value: '', text: 'All'}];
var regiontypedatasource = [];
regiontypefiltersource.push({ value: '0',text:'国家'  });
regiontypedatasource.push({ value: '0',text:'国家'  });
regiontypefiltersource.push({ value: '1',text:'省'  });
regiontypedatasource.push({ value: '1',text:'省'  });
regiontypefiltersource.push({ value: '2',text:'市'  });
regiontypedatasource.push({ value: '2',text:'市'  });
regiontypefiltersource.push({ value: '3',text:'区'  });
regiontypedatasource.push({ value: '3',text:'区'  });
regiontypefiltersource.push({ value: '4',text:'街道'  });
regiontypedatasource.push({ value: '4',text:'街道'  });
//for datagrid regiontype field  formatter
function regiontypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = regiontypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = regiontypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   regiontype  field filter 
$.extend($.fn.datagrid.defaults.filters, {
regiontypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: regiontypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   regiontype   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
regiontypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: regiontypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆预定状态---------//
var rstatusfiltersource = [{ value: '', text: 'All'}];
var rstatusdatasource = [];
rstatusfiltersource.push({ value: '0',text:'未预定'  });
rstatusdatasource.push({ value: '0',text:'未预定'  });
rstatusfiltersource.push({ value: '1',text:'已预定'  });
rstatusdatasource.push({ value: '1',text:'已预定'  });
//for datagrid rstatus field  formatter
function rstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = rstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = rstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   rstatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
rstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: rstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   rstatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
rstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: rstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------班别---------//
var shiftfiltersource = [{ value: '', text: 'All'}];
var shiftdatasource = [];
shiftfiltersource.push({ value: '1',text:'白班'  });
shiftdatasource.push({ value: '1',text:'白班'  });
shiftfiltersource.push({ value: '2',text:'晚班'  });
shiftdatasource.push({ value: '2',text:'晚班'  });
shiftfiltersource.push({ value: '3',text:'请假'  });
shiftdatasource.push({ value: '3',text:'请假'  });
//for datagrid shift field  formatter
function shiftformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = shiftdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = shiftdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   shift  field filter 
$.extend($.fn.datagrid.defaults.filters, {
shiftfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: shiftfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   shift   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
shifteditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: shiftdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------Test---------//
var statusfiltersource = [{ value: '', text: 'All'}];
var statusdatasource = [];
statusfiltersource.push({ value: '0',text:'新增'  });
statusdatasource.push({ value: '0',text:'新增'  });
statusfiltersource.push({ value: '1',text:'修改'  });
statusdatasource.push({ value: '1',text:'修改'  });
statusfiltersource.push({ value: '2',text:'异常'  });
statusdatasource.push({ value: '2',text:'异常'  });
statusfiltersource.push({ value: '3',text:'关闭'  });
statusdatasource.push({ value: '3',text:'关闭'  });
//for datagrid Status field  formatter
function statusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = statusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = statusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   Status  field filter 
$.extend($.fn.datagrid.defaults.filters, {
statusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: statusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   Status   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
statuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: statusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------TM订单状态---------//
var tmstatusfiltersource = [{ value: '', text: 'All'}];
var tmstatusdatasource = [];
tmstatusfiltersource.push({ value: '0',text:'等待派车'  });
tmstatusdatasource.push({ value: '0',text:'等待派车'  });
tmstatusfiltersource.push({ value: '1',text:'派车'  });
tmstatusdatasource.push({ value: '1',text:'派车'  });
tmstatusfiltersource.push({ value: '2',text:'发运'  });
tmstatusdatasource.push({ value: '2',text:'发运'  });
tmstatusfiltersource.push({ value: '3',text:'完成'  });
tmstatusdatasource.push({ value: '3',text:'完成'  });
tmstatusfiltersource.push({ value: '4',text:'关闭'  });
tmstatusdatasource.push({ value: '4',text:'关闭'  });
tmstatusfiltersource.push({ value: '5',text:'取消'  });
tmstatusdatasource.push({ value: '5',text:'取消'  });
tmstatusfiltersource.push({ value: '6',text:'甩板'  });
tmstatusdatasource.push({ value: '6',text:'甩板'  });
//for datagrid tmstatus field  formatter
function tmstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = tmstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = tmstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   tmstatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
tmstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: tmstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   tmstatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
tmstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: tmstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆吨位---------//
var tonnagefiltersource = [{ value: '', text: 'All'}];
var tonnagedatasource = [];
tonnagefiltersource.push({ value: '10T',text:'10T'  });
tonnagedatasource.push({ value: '10T',text:'10T'  });
tonnagefiltersource.push({ value: '20T',text:'20T'  });
tonnagedatasource.push({ value: '20T',text:'20T'  });
tonnagefiltersource.push({ value: '2T',text:'2T'  });
tonnagedatasource.push({ value: '2T',text:'2T'  });
tonnagefiltersource.push({ value: '30T',text:'30T'  });
tonnagedatasource.push({ value: '30T',text:'30T'  });
tonnagefiltersource.push({ value: '3T',text:'3T'  });
tonnagedatasource.push({ value: '3T',text:'3T'  });
tonnagefiltersource.push({ value: '4T',text:'4T'  });
tonnagedatasource.push({ value: '4T',text:'4T'  });
tonnagefiltersource.push({ value: '5T',text:'5T'  });
tonnagedatasource.push({ value: '5T',text:'5T'  });
tonnagefiltersource.push({ value: '80T',text:'80T'  });
tonnagedatasource.push({ value: '80T',text:'80T'  });
tonnagefiltersource.push({ value: '8T',text:'8T'  });
tonnagedatasource.push({ value: '8T',text:'8T'  });
//for datagrid Tonnage field  formatter
function tonnageformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = tonnagedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = tonnagedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   Tonnage  field filter 
$.extend($.fn.datagrid.defaults.filters, {
tonnagefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: tonnagefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   Tonnage   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
tonnageeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: tonnagedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------运输类型---------//
var transportationfiltersource = [{ value: '', text: 'All'}];
var transportationdatasource = [];
transportationfiltersource.push({ value: '0',text:'长程'  });
transportationdatasource.push({ value: '0',text:'长程'  });
transportationfiltersource.push({ value: '1',text:'短驳'  });
transportationdatasource.push({ value: '1',text:'短驳'  });
//for datagrid Transportation field  formatter
function transportationformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = transportationdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = transportationdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   Transportation  field filter 
$.extend($.fn.datagrid.defaults.filters, {
transportationfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: transportationfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   Transportation   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
transportationeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: transportationdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------运输类型---------//
var transtypefiltersource = [{ value: '', text: 'All'}];
var transtypedatasource = [];
transtypefiltersource.push({ value: '短驳',text:'短驳'  });
transtypedatasource.push({ value: '短驳',text:'短驳'  });
transtypefiltersource.push({ value: '长程',text:'长程'  });
transtypedatasource.push({ value: '长程',text:'长程'  });
//for datagrid transtype field  formatter
function transtypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = transtypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = transtypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   transtype  field filter 
$.extend($.fn.datagrid.defaults.filters, {
transtypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: transtypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   transtype   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
transtypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: transtypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------FWO类型(业务类型)---------//
var trqtypefiltersource = [{ value: '', text: 'All'}];
var trqtypedatasource = [];
trqtypefiltersource.push({ value: 'OE01',text:'海运出口-整箱'  });
trqtypedatasource.push({ value: 'OE01',text:'海运出口-整箱'  });
trqtypefiltersource.push({ value: 'OE02',text:'海运出口-拼箱'  });
trqtypedatasource.push({ value: 'OE02',text:'海运出口-拼箱'  });
trqtypefiltersource.push({ value: 'OI01',text:'海运进口-整箱'  });
trqtypedatasource.push({ value: 'OI01',text:'海运进口-整箱'  });
trqtypefiltersource.push({ value: 'OI02',text:'海运进口-拼箱'  });
trqtypedatasource.push({ value: 'OI02',text:'海运进口-拼箱'  });
//for datagrid TRQTYPE field  formatter
function trqtypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = trqtypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = trqtypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   TRQTYPE  field filter 
$.extend($.fn.datagrid.defaults.filters, {
trqtypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: trqtypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   TRQTYPE   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
trqtypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: trqtypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------轮胎安装位置---------//
var tylocfiltersource = [{ value: '', text: 'All'}];
var tylocdatasource = [];
tylocfiltersource.push({ value: 'L01',text:'左方向胎'  });
tylocdatasource.push({ value: 'L01',text:'左方向胎'  });
tylocfiltersource.push({ value: 'L02',text:'左外动力胎'  });
tylocdatasource.push({ value: 'L02',text:'左外动力胎'  });
tylocfiltersource.push({ value: 'L03',text:'左内动力胎'  });
tylocdatasource.push({ value: 'L03',text:'左内动力胎'  });
tylocfiltersource.push({ value: 'L04',text:'左外承重胎'  });
tylocdatasource.push({ value: 'L04',text:'左外承重胎'  });
tylocfiltersource.push({ value: 'L05',text:'左内承重胎'  });
tylocdatasource.push({ value: 'L05',text:'左内承重胎'  });
tylocfiltersource.push({ value: 'R01',text:'右方向胎'  });
tylocdatasource.push({ value: 'R01',text:'右方向胎'  });
tylocfiltersource.push({ value: 'R02',text:'右外动力胎'  });
tylocdatasource.push({ value: 'R02',text:'右外动力胎'  });
tylocfiltersource.push({ value: 'R03',text:'右内动力胎'  });
tylocdatasource.push({ value: 'R03',text:'右内动力胎'  });
tylocfiltersource.push({ value: 'R04',text:'右外承重胎'  });
tylocdatasource.push({ value: 'R04',text:'右外承重胎'  });
tylocfiltersource.push({ value: 'R05',text:'右内承重胎'  });
tylocdatasource.push({ value: 'R05',text:'右内承重胎'  });
//for datagrid TyLoc field  formatter
function tylocformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = tylocdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = tylocdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   TyLoc  field filter 
$.extend($.fn.datagrid.defaults.filters, {
tylocfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: tylocfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   TyLoc   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
tyloceditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: tylocdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------单位---------//
var unitfiltersource = [{ value: '', text: 'All'}];
var unitdatasource = [];
unitfiltersource.push({ value: 'DO',text:'打'  });
unitdatasource.push({ value: 'DO',text:'打'  });
unitfiltersource.push({ value: 'EA',text:'个'  });
unitdatasource.push({ value: 'EA',text:'个'  });
unitfiltersource.push({ value: 'GE',text:'根'  });
unitdatasource.push({ value: 'GE',text:'根'  });
unitfiltersource.push({ value: 'KG',text:'千克'  });
unitdatasource.push({ value: 'KG',text:'千克'  });
unitfiltersource.push({ value: 'L1',text:'升'  });
unitdatasource.push({ value: 'L1',text:'升'  });
unitfiltersource.push({ value: 'M3',text:'立方米'  });
unitdatasource.push({ value: 'M3',text:'立方米'  });
unitfiltersource.push({ value: 'MI',text:'米'  });
unitdatasource.push({ value: 'MI',text:'米'  });
unitfiltersource.push({ value: 'PA',text:'双'  });
unitdatasource.push({ value: 'PA',text:'双'  });
unitfiltersource.push({ value: 'PC',text:'只'  });
unitdatasource.push({ value: 'PC',text:'只'  });
unitfiltersource.push({ value: 'PK',text:'件'  });
unitdatasource.push({ value: 'PK',text:'件'  });
unitfiltersource.push({ value: 'RO',text:'卷'  });
unitdatasource.push({ value: 'RO',text:'卷'  });
unitfiltersource.push({ value: 'SE',text:'套'  });
unitdatasource.push({ value: 'SE',text:'套'  });
unitfiltersource.push({ value: 'ST',text:'台'  });
unitdatasource.push({ value: 'ST',text:'台'  });
unitfiltersource.push({ value: 'UN',text:'辆'  });
unitdatasource.push({ value: 'UN',text:'辆'  });
//for datagrid Unit field  formatter
function unitformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = unitdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = unitdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   Unit  field filter 
$.extend($.fn.datagrid.defaults.filters, {
unitfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: unitfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   Unit   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
uniteditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: unitdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆性质---------//
var vehiclepropertyfiltersource = [{ value: '', text: 'All'}];
var vehiclepropertydatasource = [];
vehiclepropertyfiltersource.push({ value: '2001',text:'公司车辆'  });
vehiclepropertydatasource.push({ value: '2001',text:'公司车辆'  });
vehiclepropertyfiltersource.push({ value: '2002',text:'返包车辆'  });
vehiclepropertydatasource.push({ value: '2002',text:'返包车辆'  });
vehiclepropertyfiltersource.push({ value: '2003',text:'公务车辆'  });
vehiclepropertydatasource.push({ value: '2003',text:'公务车辆'  });
vehiclepropertyfiltersource.push({ value: '2004',text:'外租车辆'  });
vehiclepropertydatasource.push({ value: '2004',text:'外租车辆'  });
vehiclepropertyfiltersource.push({ value: '2005',text:'个人车辆'  });
vehiclepropertydatasource.push({ value: '2005',text:'个人车辆'  });
vehiclepropertyfiltersource.push({ value: '2006',text:'其他车辆'  });
vehiclepropertydatasource.push({ value: '2006',text:'其他车辆'  });
//for datagrid VehicleProperty field  formatter
function vehiclepropertyformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = vehiclepropertydatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = vehiclepropertydatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   VehicleProperty  field filter 
$.extend($.fn.datagrid.defaults.filters, {
vehiclepropertyfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: vehiclepropertyfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   VehicleProperty   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
vehiclepropertyeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: vehiclepropertydatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆类型---------//
var vehicletypefiltersource = [{ value: '', text: 'All'}];
var vehicletypedatasource = [];
vehicletypefiltersource.push({ value: '4001',text:'小型厢式货车'  });
vehicletypedatasource.push({ value: '4001',text:'小型厢式货车'  });
vehicletypefiltersource.push({ value: '4002',text:'中型厢式货车'  });
vehicletypedatasource.push({ value: '4002',text:'中型厢式货车'  });
vehicletypefiltersource.push({ value: '4003',text:'大型厢式货车'  });
vehicletypedatasource.push({ value: '4003',text:'大型厢式货车'  });
vehicletypefiltersource.push({ value: '4004',text:'重型厢式货车'  });
vehicletypedatasource.push({ value: '4004',text:'重型厢式货车'  });
vehicletypefiltersource.push({ value: '4005',text:'平板货车'  });
vehicletypedatasource.push({ value: '4005',text:'平板货车'  });
vehicletypefiltersource.push({ value: '4006',text:'面包车'  });
vehicletypedatasource.push({ value: '4006',text:'面包车'  });
vehicletypefiltersource.push({ value: '4007',text:'轿车'  });
vehicletypedatasource.push({ value: '4007',text:'轿车'  });
vehicletypefiltersource.push({ value: '4008',text:'重型集装箱半挂车'  });
vehicletypedatasource.push({ value: '4008',text:'重型集装箱半挂车'  });
vehicletypefiltersource.push({ value: '4009',text:'中型厢式挂车'  });
vehicletypedatasource.push({ value: '4009',text:'中型厢式挂车'  });
vehicletypefiltersource.push({ value: '4010',text:'重型平板半挂车'  });
vehicletypedatasource.push({ value: '4010',text:'重型平板半挂车'  });
vehicletypefiltersource.push({ value: '4011',text:'重型平板牵引车'  });
vehicletypedatasource.push({ value: '4011',text:'重型平板牵引车'  });
vehicletypefiltersource.push({ value: '4012',text:'重型半挂牵引车'  });
vehicletypedatasource.push({ value: '4012',text:'重型半挂牵引车'  });
vehicletypefiltersource.push({ value: '4013',text:'半挂列车'  });
vehicletypedatasource.push({ value: '4013',text:'半挂列车'  });
vehicletypefiltersource.push({ value: '4014',text:'重型厢式半挂车'  });
vehicletypedatasource.push({ value: '4014',text:'重型厢式半挂车'  });
vehicletypefiltersource.push({ value: '4015',text:'豪沃牌ZZ4257V324HE1B'  });
vehicletypedatasource.push({ value: '4015',text:'豪沃牌ZZ4257V324HE1B'  });
//for datagrid VehicleType field  formatter
function vehicletypeformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = vehicletypedatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = vehicletypedatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   VehicleType  field filter 
$.extend($.fn.datagrid.defaults.filters, {
vehicletypefilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: vehicletypefiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   VehicleType   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
vehicletypeeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: vehicletypedatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆状态---------//
var vehstatusfiltersource = [{ value: '', text: 'All'}];
var vehstatusdatasource = [];
vehstatusfiltersource.push({ value: '0',text:'启用'  });
vehstatusdatasource.push({ value: '0',text:'启用'  });
vehstatusfiltersource.push({ value: '1',text:'禁用'  });
vehstatusdatasource.push({ value: '1',text:'禁用'  });
vehstatusfiltersource.push({ value: '2',text:'维修'  });
vehstatusdatasource.push({ value: '2',text:'维修'  });
vehstatusfiltersource.push({ value: '3',text:'报废'  });
vehstatusdatasource.push({ value: '3',text:'报废'  });
//for datagrid VehStatus field  formatter
function vehstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = vehstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = vehstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   VehStatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
vehstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: vehstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   VehStatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
vehstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: vehstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------车辆状态---------//
var vstatusfiltersource = [{ value: '', text: 'All'}];
var vstatusdatasource = [];
vstatusfiltersource.push({ value: '0',text:'空车'  });
vstatusdatasource.push({ value: '0',text:'空车'  });
vstatusfiltersource.push({ value: '1',text:'预定'  });
vstatusdatasource.push({ value: '1',text:'预定'  });
vstatusfiltersource.push({ value: '2',text:'配载'  });
vstatusdatasource.push({ value: '2',text:'配载'  });
vstatusfiltersource.push({ value: '3',text:'在途'  });
vstatusdatasource.push({ value: '3',text:'在途'  });
vstatusfiltersource.push({ value: '4',text:'卸货'  });
vstatusdatasource.push({ value: '4',text:'卸货'  });
vstatusfiltersource.push({ value: '5',text:'返程'  });
vstatusdatasource.push({ value: '5',text:'返程'  });
vstatusfiltersource.push({ value: '6',text:'甩板'  });
vstatusdatasource.push({ value: '6',text:'甩板'  });
vstatusfiltersource.push({ value: '7',text:'异常'  });
vstatusdatasource.push({ value: '7',text:'异常'  });
//for datagrid vstatus field  formatter
function vstatusformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = vstatusdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = vstatusdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   vstatus  field filter 
$.extend($.fn.datagrid.defaults.filters, {
vstatusfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: vstatusfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   vstatus   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
vstatuseditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: vstatusdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
//-------操作类型---------//
var zczlxfiltersource = [{ value: '', text: 'All'}];
var zczlxdatasource = [];
zczlxfiltersource.push({ value: 'C',text:'C-提箱'  });
zczlxdatasource.push({ value: 'C',text:'C-提箱'  });
zczlxfiltersource.push({ value: 'D',text:'D-落箱'  });
zczlxdatasource.push({ value: 'D',text:'D-落箱'  });
zczlxfiltersource.push({ value: 'E',text:'E-退关还箱'  });
zczlxdatasource.push({ value: 'E',text:'E-退关还箱'  });
zczlxfiltersource.push({ value: 'J',text:'J-进港'  });
zczlxdatasource.push({ value: 'J',text:'J-进港'  });
zczlxfiltersource.push({ value: 'L',text:'L-装箱'  });
zczlxdatasource.push({ value: 'L',text:'L-装箱'  });
zczlxfiltersource.push({ value: 'O',text:'O-其它'  });
zczlxdatasource.push({ value: 'O',text:'O-其它'  });
zczlxfiltersource.push({ value: 'R',text:'R-还箱'  });
zczlxdatasource.push({ value: 'R',text:'R-还箱'  });
zczlxfiltersource.push({ value: 'S',text:'S-拆箱'  });
zczlxdatasource.push({ value: 'S',text:'S-拆箱'  });
zczlxfiltersource.push({ value: 'T',text:'T-拖箱'  });
zczlxdatasource.push({ value: 'T',text:'T-拖箱'  });
//for datagrid ZCZLX field  formatter
function zczlxformatter(value, row, index) { 
     let multiple = false; 
     if (value === null || value === '' || value === undefined) 
     { 
         return "";
     } 
     if (multiple) { 
         let valarray = value.split(','); 
         let result = zczlxdatasource.filter(item => valarray.includes(item.value));
         let textarray = result.map(x => x.text);
         if (textarray.length > 0)
             return textarray.join(",");
         else 
             return value;
      } else { 
         let result = zczlxdatasource.filter(x => x.value == value);
               if (result.length > 0)
                    return result[0].text;
               else
                    return value;
       } 
 } 
//for datagrid   ZCZLX  field filter 
$.extend($.fn.datagrid.defaults.filters, {
zczlxfilter: {
     init: function(container, options) {
        var input = $('<select class="easyui-combobox" >').appendTo(container);
        var myoptions = {
             panelHeight: "auto",
             data: zczlxfiltersource ,
             onChange: function () {
                input.trigger('combobox.filter');
             }
         };
         $.extend(options, myoptions);
         input.combobox(options);
         return input;
      },
     destroy: function(target) {
         //$(target).combobox('destroy');
     },
     getValue: function(target) {
         return $(target).combobox('getValue');
     },
     setValue: function(target, value) {
         $(target).combobox('setValue', value);
     },
     resize: function(target, width) {
         $(target).combobox('resize', width);
     }
   }
});
//for datagrid   ZCZLX   field  editor 
$.extend($.fn.datagrid.defaults.editors, {
zczlxeditor: {
     init: function(container, options) {
        var input = $('<input type="text">').appendTo(container);
        var myoptions = {
         panelHeight: "auto",
         data: zczlxdatasource,
         multiple: false,
         valueField: 'value',
         textField: 'text'
     }
    $.extend(options, myoptions);
           input.combobox(options);
           return input;
       },
     destroy: function(target) {
         //$(target).combobox('destroy');
        },
     getValue: function(target) {
        let opts = $(target).combobox('options');
        if (opts.multiple) {
           return $(target).combobox('getValues').join(opts.separator);
         } else {
            return $(target).combobox('getValue');
         }
        },
     setValue: function(target, value) {
         let opts = $(target).combobox('options');
         if (opts.multiple) {
             if (value == '' || value == null) { 
                 $(target).combobox('clear'); 
              } else { 
                  $(target).combobox('setValues', value.split(opts.separator));
               }
          }
          else {
             $(target).combobox('setValue', value);
           }
         },
     resize: function(target, width) {
         $(target).combobox('resize', width);
        }
  }  
});
