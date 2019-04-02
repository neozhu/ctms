//combogrid vehicles editor
$.extend($.fn.datagrid.defaults.editors, {
    vehicleditor: {
       init: function (container, options) {
            var inputelement = '<select  class="easyui-combogrid" ></select>';
            var input = $(inputelement).appendTo(container);
            var inputoptions = {
                delay: 500,
                panelWidth: 500,
                mode: 'remote',
                method: 'get',
                url: '/Vehicles/GetComboGridData',
                idField: 'PlateNumber',
                textField: 'PlateNumber',
                pagination: true,
                clientPaging: false,
                columns: [[
                    { field: 'PlateNumber', title: '车牌号', width: 110, sortable: true },
                    { field: 'CarType', title: '车辆类型', width: 130, sortable: true, formatter: vehicletypeformatter },
                    { field: 'VehicleProperty', title: '车辆属性', width: 120, sortable: true, formatter: vehiclepropertyformatter },
                    { field: 'Status', title: '状态', width: 100, sortable: true, formatter: statusformatter },
                    { field: 'Driver', title: '司机', width: 160, sortable: true },
                    { field: 'DriverPhone', title: '司机电话', width: 160, sortable: true },
                    { field: 'StdLoadWeight', title: '吨位', width: 100, sortable: true },
                    { field: 'VehLongSize', title: '车长', width: 100, sortable: true },
                    { field: 'VehHightSize', title: '车高', width: 100, sortable: true },
                    { field: 'Axles', title: '轴数', width: 100, sortable: true },
                    { field: 'RoadKM', title: '行驶里程', width: 130, sortable: true },
                    { field: 'PartnerCode', title: '所属组织代码', width: 110, sortable: true },
                    { field: 'PartnerName', title: '所属组织名称', width: 180, sortable: true },
                ]]
            };
            $.extend(options, inputoptions);
            input.combogrid(options);
            return input;
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    }
});
//combogrid part editor
$.extend($.fn.datagrid.defaults.editors, {
    parteditor: {
        init: function (container, options) {
            var inputelement = '<select  class="easyui-combogrid" ></select>';
            var input = $(inputelement).appendTo(container);
            var inputoptions = {
                delay: 500,
                panelWidth: 500,
                mode: 'remote',
                method: 'get',
                url: '/Parts/GetComboGridData',
                idField: 'PartNo',
                textField: 'PartNo',
                pagination: true,
                clientPaging: false,
                columns: [[
                    { field: 'PartNo', title: '配件编号', width: 110, sortable: true },
                    { field: 'PartName', title: '配件名称', width: 150, sortable: true },
                    { field: 'Spec', title: '规格', width: 120, sortable: true },
                    { field: 'Model', title: '型号', width: 120, sortable: true },
                    { field: 'Unit', title: '单位', width: 100, sortable: true, formatter: unitformatter },
                    {
                        field: 'Price', title: '单价', width: 140, sortable: true, formatter: function (value) {
                            return numeral(value).format('0,0.00');
                        }
                    }

                ]]
            };
            $.extend(options, inputoptions);
            input.combogrid(options);
            return input;
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    }
});
//combogrid tyre editor
$.extend($.fn.datagrid.defaults.editors, {
    tyreeditor: {
        init: function (container, options) {
            var inputelement = '<select  class="easyui-combogrid" ></select>';
            var input = $(inputelement).appendTo(container);
            var inputoptions = {
                delay: 500,
                panelWidth: 500,
                mode: 'remote',
                method: 'get',
                url: '/Tyres/GetComboGridData',
                idField: 'PartNo',
                textField: 'PartNo',
                pagination: true,
                clientPaging: false,
                columns: [[
                    { field: 'PartNo', title: '轮胎编号', width: 110, sortable: true },
                    { field: 'PartName', title: '名称', width: 150, sortable: true },
                    { field: 'Spec', title: '规格', width: 120, sortable: true },
                    { field: 'BuyDate', title: '购买日期', width: 120, sortable: true, formatter: dateformatter },
                    {
                        field: 'Price', title: '单价', width: 140, sortable: true, formatter: numberformatter
                    }


                ]]
            };
            $.extend(options, inputoptions);
            input.combogrid(options);
            return input;
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    }
});
//combogrid stdMaintain editor
$.extend($.fn.datagrid.defaults.editors, {
    maintaineditor: {
        init: function (container, options) {
            var inputelement = '<select  class="easyui-combogrid" ></select>';
            var input = $(inputelement).appendTo(container);
            var inputoptions = {
                delay: 500,
                panelWidth: 500,
                mode: 'remote',
                method: 'get',
                url: '/StdMaintains/GetComboGridData',
                idField: 'Name',
                textField: 'Name',
                pagination: true,
                clientPaging: false,
                columns: [[
                    { field: 'Name', title: '维修项目', width: 200, sortable: true },
                    { field: 'Hours', title: '标准工时', width: 110, sortable: true },
                    { field: 'Remark', title: '备注', width: 150, sortable: true }
                ]]
            };
            $.extend(options, inputoptions);
            input.combogrid(options);
            return input;
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    }
});
//combogrid driver editor
$.extend($.fn.datagrid.defaults.editors, {
    drivereditor: {
        init: function (container, options) {
            var inputelement = '<select  class="easyui-combogrid" ></select>';
            var input = $(inputelement).appendTo(container);
            var inputoptions = {
                delay: 500,
                panelWidth: 500,
                mode: 'remote',
                method: 'get',
                url: '/Drivers/GetComboGridData',
                idField: 'Name',
                textField: 'Name',
                pagination: true,
                clientPaging: false,
                columns: [[
                    { field: 'Name', title: '姓名', width: 180, sortable: true },
                    { field: 'Code', title: '工号', width: 110, sortable: true },
                    { field: 'IdentityDocumentNumber', title: '身份证号', width: 200, sortable: true },
                    { field: 'MobileTelephoneNumber', title: '联系电话', width: 200, sortable: true },
                    { field: 'DriverNo', title: '驾驶证号', width: 200, sortable: true },
                    { field: 'DocmentNo', title: '档案号', width: 200, sortable: true },
                    { field: 'QualificationCertificateNumber', title: '从业资格证号', width: 200, sortable: true }
                ]]
            };
            $.extend(options, inputoptions);
            input.combogrid(options);
            return input;
        },
        destroy: function (target) {
            $(target).combogrid('destroy');
        },
        getValue: function (target) {
            return $(target).combogrid('getValue');
        },
        setValue: function (target, value) {
            $(target).combogrid('setValue', value);
        },
        resize: function (target, width) {
            $(target).combogrid('resize', width);
        }
    }
});
//combogrid Partners editor
$.extend($.fn.datagrid.defaults.editors, {
  pbeditor: {
    init: function (container, options) {
      var inputelement = '<select  class="easyui-combogrid" ></select>';
      var input = $(inputelement).appendTo(container);
      var inputoptions = {
        delay: 500,
        panelWidth: 510,
        mode: 'remote',
        method: 'get',
        url: '/Partners/GetComboGridDataAsync',
        idField: 'Code',
        textField: 'Code',
        pagination: true,
        clientPaging: false,
        columns: [[
          { field: 'Code', title: '组织代码', width: 110, sortable: true },
          { field: 'Name', title: '组织名称', width: 280, sortable: true },
          { field: 'Role', title: '类型', width: 120, sortable: true, formatter: partnerroleformatter }
        ]]
      };
      $.extend(options, inputoptions);
      input.combogrid(options);
      return input;
    },
    destroy: function (target) {
      //$(target).combogrid('destroy');
    },
    getValue: function (target) {
      return $(target).combogrid('getValue');
    },
    setValue: function (target, value) {
      $(target).combogrid('setValue', value);
    },
    resize: function (target, width) {
      $(target).combogrid('resize', width);
    }
  }
});

//combogrid company editor
$.extend($.fn.datagrid.defaults.editors, {
  companyeditor: {
    init: function (container, options) {
      var inputelement = '<select  class="easyui-combogrid" ></select>';
      var input = $(inputelement).appendTo(container);
      var inputoptions = {
        delay: 500,
        panelWidth: 510,
        mode: 'remote',
        method: 'get',
        url: '/Companies/GetComboGridDataAsync',
        idField: 'Code',
        textField: 'Code',
        pagination: true,
        clientPaging: false,
        columns: [[
          { field: 'Code', title: '组织代码', width: 110, sortable: true },
          { field: 'ShortName', title: '简称', width: 120, sortable: true },
          { field: 'Name', title: '组织名称', width: 280, sortable: true }
        ]]
      };
      $.extend(options, inputoptions);
      input.combogrid(options);
      return input;
    },
    destroy: function (target) {
      $(target).combogrid('destroy');
    },
    getValue: function (target) {
      return $(target).combogrid('getValue');
    },
    setValue: function (target, value) {
      $(target).combogrid('setValue', value);
    },
    resize: function (target, width) {
      $(target).combogrid('resize', width);
    }
  }
});
//combogrid loc 地址库 editor
$.extend($.fn.datagrid.defaults.editors, {
  loceditor: {
    init: function (container, options) {
      var inputelement = '<select  class="easyui-combogrid" ></select>';
      var input = $(inputelement).appendTo(container);
      var inputoptions = {
        delay: 500,
        panelWidth: 510,
        mode: 'remote',
        method: 'get',
        url: '/TMLocs/GetComboGridDataAsync',
        idField: 'LocNo',
        textField: 'LocNo',
        pagination: true,
        clientPaging: false,
        columns: [[
          { field: 'LocNo', title: '位置编码', width: 110, sortable: true },
          { field: 'Description', title: '名称', width: 280, sortable: true }
        ]]
      };
      $.extend(options, inputoptions);
      input.combogrid(options);
      return input;
    },
    destroy: function (target) {
      $(target).combogrid('destroy');
    },
    getValue: function (target) {
      return $(target).combogrid('getValue');
    },
    setValue: function (target, value) {
      $(target).combogrid('setValue', value);
    },
    resize: function (target, width) {
      $(target).combogrid('resize', width);
    }
  }
});
