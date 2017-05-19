//  «Невозможно» — это слово предназначено для словаря дураков.
jQuery(function ($) {

    window.undVal = function(value){
        if(typeof value == 'undefined' || value == 'undefined'){
            value = '';
        }

        return scr(value);
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('[name=_token]').attr('value')
        }
    });

    /**
     * [reqField description]
     * @param  {Array}  field    [description]
     * @param  {Array}  or_field [description]
     * @return {[type]}          [description]
     */
    window.valid_change = function(elem){
        $( elem ).on('input, change', function(){
            if($(elem).data('valid_block') == true){
                $(elem).parent().removeClass('error');
            }else{
                $(elem).removeClass('error');
            }
            $(this).off('input');
        })
    };

    window.reqField = function (field=[]) {
        console.log('проверка на обязательное заполнение полей', field)
        req = true;
        if(typeof field == 'undefined'){

        }else{
            field.forEach(function (item, fields) {
                if(item.length > 1) {
                    console.log(item);
                    $.each(item, function (sub_key, sub_item) {
                        $(sub_item).removeClass('error');
                        if( $(sub_item).val().length == 0 ) {
                            if($(sub_item).data('valid_block') == true){
                                $(sub_item).parent().addClass('error');
                            } else{
                                $(sub_item).addClass('error');
                            }
                            valid_change(sub_item);
                            console.warn('проверка не пройдена полем', sub_item)
                            req = false;
                        }
                    });
                } else if(item.length == 1){
                    item.removeClass('error');
                    if ( item.val() == null || item.val().length == 0 ) {
                        item.addClass('error');
                        valid_change(item.get( 0 ));
                        console.warn('проверка не пройдена полем', item);
                        req = false;
                    }
                } else{
                    req = false;
                }
            });
        }

        return req;
    };

    /**
     * [disField description]
     * @param  {Array}  field [description]
     * @param  {Boolean} type  [description]
     * @param  {Value}  def   [description]
     * @return {Object}        [description]
     */

    window.disField = function (field=[], type = false, def = undefined) {
        if (def != undefined) {
            field.forEach(function (item, field) {
                item.prop('disabled', type).prop('readonly', type).val(def);
            });
        } else if (def === null) {
            field.forEach(function (item, field) {
                item.prop('disabled', type).prop('readonly', type);
            });
        } else if (def == undefined) {
            // alert(def);
            console.log("disField", field, type, def);
            field.forEach(function (item, field) {
                console.log("disField ITEM", item);
                item.prop('disabled', type).prop('readonly', type).val(item.prop("defaultValue"));
            });
        }
    };

    /**
     * [checkedDisabled description]
     * @param  {Object}  checked [description]
     * @param  {Boolean} param   [description]
     * @param  {Array}   fields  [description]
     * @param  {Boolean} type    [description]
     * @param  {Value}  def     [description]
     * @param  {Boolean}  dis     [description]
     * @return {Object}          [description]
     */
    window.checkedDisabled = function (checked, param = true, fields = [[[field = [], type = false, def = undefined], dis = false]]) {
        console.log("checkedDisabled", checked);
        fields.forEach(function (item, fields) {
            console.log("item", item[0]);
            disField(item[0], item[1], item[2]);
        });
        checked.prop("checked", param);
    };

    window.screening = function (str=[]) {
        str.forEach(function (item, str) {
            item.val().replace(/"/gi, '&#34;').replace(/'/gi, '&#39;');

        });
    };

    window.scr = function (rep) {
        return String(rep).replace(/"/gi, '&#34;').replace(/'/gi, '&#39;');

    };
    window.valSelect = function (val_elem, input_val=[]) {
        return (val_elem.val() != "") ? input_val[val_elem.val()] : '';
    };

    window.valSelectNotObj = function (val_elem, input_val) {
        input_val = input_val || [];
        console.log(val_elem, input_val);
        return (val_elem != "") ? (typeof input_val[val_elem] != 'undefined') ? input_val[val_elem] : val_elem : '';
    };
    window.addZero = function(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    window.formatDate = function (date1, time = false) {
        var date = new Date(date1); // добавлено 16.04 для преобразования даты... Возможны баги в других местах!

        //if( typeof date )
        var dd = addZero(date.getDate());
        if (isNaN(dd)) {
            return date1;
        } else {

            var mm = addZero(date.getMonth() + 1);

            var yy = date.getFullYear();
            if(time){
                var hh = addZero(date.getHours());
                var min = addZero(date.getMinutes());
                var ss =  addZero(date.getSeconds());
                console.log('formatDate', dd, mm, yy, hh , min, ss);
                return dd + '.' + mm + '.' + yy+ ' ' + hh + ':'+ min + ':' + ss;
            }else{
                return dd + '.' + mm + '.' + yy;
            }
        }


    };

    window.strToDate = function (Str) {
        var a = Str.split('.');
        return new Date(a[2], a[1] - 1, +a[0]);
    };

    window.idForm = function (obj) {
        return $($(obj).prop('form')).attr('id');
    };
    window.toggleRelationField = function (classList, func) {
        var option;
        $.each(classList, function (index, item) {
            func(item, option);
        });
    };

    $("body").on('keypress', '.upper_field', function (e) {
        if (e.keyCode != 8) {
            var c = String.fromCharCode(e.which); // or e.keyCode
            //alert(c);

            rgxp = /[А-Яа-я]/;

            if (!rgxp.test(c)) {
                return false;
            }
            if ($(this).val().length > 2) {
                return false;
            }
            $(this).val($(this).val() + c.toUpperCase());
            return false;
        }
    });

    //$( ".upper_field" ).keypress(function(e){
    //	$(this).val($(this).val().toUpperCase());
    //});

    window.togglePropDis = function (item, type) {
        var $this = $('.' + item);

        if (typeof type != 'undefined') {
            if (type == 'force') {
                $this.prop('disabled', true);
            }
        }

        if ($this.prop('disabled')) {
            $this.prop('disabled', false);
        } else {
            $this.prop('disabled', true);
        }
    };

    window.togglePropVisible = function (item, type) {
        var $this = $('.' + item);
        if (typeof type != 'undefined') {
            if (type == 'force') {
                $this.show();
            }
        }
        $this.toggle();
    };


    window.splitStr = function (str, sub_str) {
        var from = str.indexOf(sub_str) + sub_str.length;
        var to = str.length;
        var $newstr = str.substring(from, to);
        return $newstr;
    };
    window.splitStrNullToForce = function (str, sub_str) {
        console.log("________________splitStrNullToForce____________")
        var from = str.indexOf(sub_str) + sub_str.length;
        //var to = str.length;
        var $newstr = str.substring(0, from - 1);
        console.log($newstr);
        return $newstr;
    }
    window.ajaxToView = function ($func, url, $data, type) {
        type = type || 'get';
        $data = $data || {};
        $.ajax({ // инициaлизируeм ajax зaпрoс
            type: type, // oтпрaвляeм в POST фoрмaтe, мoжнo GET
            url: url, // путь дo oбрaбoтчикa
            //async: false,
            dataType: 'json', // oтвeт ждeм в json фoрмaтe
            data: $data, // дaнныe для oтпрaвки
            beforeSend: function (data) { // сoбытиe дo oтпрaвки
                // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            },
            success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                if (!Notification) {
                    alert('Ваш браузер не поддерживает уведомления');
                    return;
                }
                if (Notification.permission !== "granted")
                    Notification.requestPermission();


                if (!data['error']) { // eсли всe прoшлo oк
                    $func(data['responce'], data.responce.id, data.responce.type_statement);
                    var notification = new Notification('Успешно', {
                        icon: 'dist/img/ok.png',
                        body: "Все прошло отлично",
                    });

                } else { // eсли oбрaбoтчик вeрнул oшибку

                    // пoкaжeм eё тeкст

                    if (data['validation']) {
                        var obj = data['validation'];
                    }

                    var notification = new Notification('неудача', {
                        icon: 'dist/img/error.png',
                        body: data['error'],
                    });


                }
            },
            error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                alert(thrownError); // и тeкст oшибки
            },
            complete: function (data) { // сoбытиe пoслe любoгo исхoдa
            }

        });
    }

    function makeBaseAuth(user, pswd){
        var token = user + ':' + pswd;
        var hash = "";
        if (btoa) {
            hash = btoa(token);
        }
        return "Basic " + hash;
    };

    window.ajaxToViewCallback = function (obj, callback) {
        if(typeof obj.crossDomain != 'undefined' && obj.crossDomain === true ){
            delete $.ajaxSettings.headers["X-CSRF-TOKEN"];
        }
        var url = obj.url;
        var type = obj.type || 'get';
        var $data = obj.data || {};
        var $button = obj.button;
        var notif = (typeof obj.notification != 'undefined') ? obj.notification  : true;
        var dop_value = obj.return_value || {};

        console.log("ajaxToViewCallback", obj);
        $.ajax({ // инициaлизируeм ajax зaпрoс
            type: type, // oтпрaвляeм в POST фoрмaтe, мoжнo GET
            url: url, // путь дo oбрaбoтчикa
            dataType: 'json', // oтвeт ждeм в json фoрмaтe
            data: $data, // дaнныe для oтпрaвки
            //crossDomain: crossDomain,
            beforeSend: function (xhr) { // сoбытиe дo oтпрaвки
                // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            },
            success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                if (!Notification) {
                    alert('Ваш браузер не поддерживает уведомления');
                    return;
                }
                if (Notification.permission !== "granted")
                    Notification.requestPermission();
                if (!data['error']) { // eсли всe прoшлo oк
                    if(notif){
                        var notification = new Notification('Успешно', {
                            icon: 'dist/img/ok.png',
                            body: data.message,
                        });
                    }
                    if (typeof callback === 'function') {
                        callback(data,dop_value);
                    }
                } else { // eсли oбрaбoтчик вeрнул oшибку
                    // пoкaжeм eё тeкст
                    if (data['validation']) {
                        var obj = data['validation'];
                    }
                    var notification = new Notification('неудача', {
                        icon: 'dist/img/error.png',
                        body: data['error'],
                    });
                    if($button){
                        $button.prop('disabled',false);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                if(typeof obj.crossDomain == 'undefined'){
                    alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                    alert(thrownError); // и тeкст oшибки
                }
                
            },
            complete: function (data) { // сoбытиe пoслe любoгo исхoдa
            }

        });
        if(typeof obj.crossDomain != 'undefined' && obj.crossDomain === true ){
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('[name=_token]').attr('value')
                }
            });
        }
    }

    function Intersec(arr1, arr2) {
        var idx = 0, arr3 = [];
        for (var i = 0; i < arr2.length; i++) {
            idx = arr1.indexOf(arr2[i]);
            if (idx >= 0) arr3.push(arr2[i]);
        }

        return arr3;
    }

    window.SplitAndChecked = function ($str, $elem) {
        var all_app = $elem.map(function () {
            return this.value;
        }).get();
        var split_str = $str.split(',');
        var inter = Intersec(all_app, split_str);
        console.log(inter);
        $.each(inter, function ($index, $value) {
            console.log($($elem.selector + '[value="' + $value + '"]').prop('checked'));
            $($elem.selector + '[value="' + $value + '"]').prop('checked', true);
        })
    }

    window.func_checkDisField = function func_checkDisField(dis_one, dis_two, input_val) {
        console.log(typeof dis_one, dis_one, typeof dis_two, dis_two, typeof input_val, input_val);
        if (input_val == 'on') {
            $(String(dis_two)).prop('disabled', true).val('');
            $(String(dis_one)).prop('disabled', false);
        } else {
            $(String(dis_two)).prop('disabled', false);
            $(String(dis_one)).prop('disabled', true).val('');
        }
    };



    window.ajaxRegistration = function (obj_save,callback) {
        var url = obj_save.url;
        var type = obj_save.type || 'POST';
        var $data = obj_save.data || {};
        var $form = obj_save.form;
        $.ajax({ // инициaлизируeм ajax зaпрoс
            type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
            url: url, // путь дo oбрaбoтчикa
            dataType: 'json', // oтвeт ждeм в json фoрмaтe
            data: $data, // дaнныe для oтпрaвки
            beforeSend: function (data) { // сoбытиe дo oтпрaвки
                $form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
            },
            success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                if (!Notification) {
                    alert('Ваш браузер не поддерживает уведомления');
                    return;
                }
                if (Notification.permission !== "granted")
                    Notification.requestPermission();

                if (data['error']) { // eсли oбрaбoтчик вeрнул oшибку
                    $('#errorvalidate').addClass('notsave');                             			 /////////////////////////////////
                    $(".errorvalidate").append('<h2>' + data['error'] + '</h2>');
                    if (data['validation']) {
                        var obj = data['validation'];
                        $(".errorvalidate").empty();
                        $(".errorvalidate").append('<ul class="list l1">');
                        for (var key in obj) {
                            $(".errorvalidate").append("<li class='item'>" + obj[key] + "</li>");
                            // alert(obj[key])
                        }
                        $(".errorvalidate").append("</ul>");
                    }

                    var notification = new Notification('Заголовок', {
                        icon: 'dist/img/error.png',
                        body: data['error'],
                    });

                } else {
                    // eсли всe прoшлo oк
                    $(".errorvalidate").empty();
                    var notification = new Notification('Заголовок', {
                        icon: 'dist/img/ok.png',
                        body: data.message,
                    });

                    $('#errorvalidate').addClass('save'); 										/////////////////////////////
                    $("#errorvalidate").append("<h2>Успешно сохранено</h2>");
                    $('#id_main').val(data['id_main']);
                    if (typeof callback === 'function') {
                        callback(data);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) { // в случae нeудaчнoгo зaвeршeния зaпрoсa к сeрвeру
                $('#errorvalidate').addClass('notsave');   									/////////////////////////////

                alert(xhr.status); // пoкaжeм oтвeт сeрвeрa
                alert(thrownError); // и тeкст oшибки
            },
            complete: function (data) { // сoбытиe пoслe любoгo исхoдa
                form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
            }

        });
    };


    window.jsonToForm = function($form,func_form,input_value){
        //alert('jsonToForm');
        //console.log(input_value);
        $form.empty();
        var _input_value = JSON.parse(input_value);
        $.each(_input_value,function($index,$value){
            var $obj_save = {};
            $.each($value,function($sub_index,$sub_value){
                $obj_save[$sub_index] = $sub_value;
            });
            console.log($obj_save);
            $form.append('<tr>'+func_form($obj_save) +'</tr>');
        });

    };



    window.funcView = function(resp,id,type_statement){
        var form = $(_form);
        console.log('funcView',resp,id,type_statement);
        if(typeof beforeFuncView == 'function' ){
            beforeFuncView(resp,id,type_statement);
        }
        $.each($.parseJSON(resp['table']),function(index,value){
            if(typeof value == 'object'){
                $.each(value, function(sub_index,sub_value){
                    if(form.find('[data-block='+index+'] '+ '[name='+sub_index+']').attr('type') == 'radio'){
                        form.find('[data-block='+index+'] '+ '[name='+sub_index+']' + '[value='+scr(sub_value)+']').prop('checked',true);
                    }else if(form.find('[name='+sub_index+']').attr('type') == 'checkbox'){
                        form.find('[name="'+sub_index+'"]').prop('checked',true);
                    } else{
                        form.find('[data-block='+index+'] '+ '[name='+sub_index+']').val(scr(sub_value));
                    }
                    if(sub_index == 'table'){
                        $.each(sub_value, function(sub_sub_index,sub_sub_value){
                            form.find('[data-table='+sub_sub_index+'] .tbody').empty();
                            $.each(sub_sub_value, function(index_to_table,value_to_table){
                                if(form.find('[data-table='+sub_sub_index+'] .tbody').prop('nodeName') == 'DIV' && !form.find('[data-table='+sub_sub_index+'] .tbody').hasClass('no_empty')){
                                    form.find('[data-table='+sub_sub_index+'] .tbody').addClass('no_empty');
                                    form.find('[data-table='+sub_sub_index+'] .tbody').empty();
                                }
                                var p = func_table_filling(sub_sub_index,value_to_table);
                                form.find('[data-table='+sub_sub_index+'] .tbody').append(p);
                            });
                        });
                    }
                });
            }else{
                if(form.find('[name='+index+']').attr('type') == 'radio'){
                    form.find('[name="'+index+'"]' + '[value="'+scr(value)+'"]').prop('checked',true);
                } else if(form.find('[name='+index+']').attr('type') == 'checkbox'){
                    form.find('[name="'+index+'"]').prop('checked',true);
                } else {
                    form.find('[name='+index+']').val(scr(value));
                }
            }
         });
        if(typeof afterFuncView == 'function' ){
            afterFuncView(resp,id,type_statement);
        }
        //$('.statement_main input,.statement_main button,.statement_main textarea,.statement_main a,.statement_main select, .statement_main .showAll').not('#real_estate_property,#accompanying_document_').addClass('disabled_view');
        //$('#reg_encumbrance_form input,#reg_encumbrance_form button,#reg_encumbrance_form textarea,#reg_encumbrance_form a,#reg_encumbrance_form select, #reg_encumbrance_form .showAll').not('.change_encumbrance,#real_estate_property,#accompanying_document_').addClass('disabled_view');
        //$('#reg_rights_rem_form input,#reg_rights_rem_form button,#reg_rights_rem_form textarea,#reg_rights_rem_form a,#reg_rights_rem_form select').not('.change_encumbrance,#real_estate_property,#accompanying_document_').addClass('disabled_view');

    };

    window.funcViewRefact = function(resp,id,type_statement,configure,configureValue,form, need_after_refact = true){
        var name_table = '';
        var configure_index = '';
        var sub_configure_index = '';
        var form_id = form || _form;
        var form = $(form_id);
        $.each($.parseJSON(resp['table']),function(index,value){
            console.log($.parseJSON(resp['table']));
            configure_index = index;
            if(configureValue.hasOwnProperty(index)){
                if(typeof configureValue[index] != 'object') {
                    configure_index = configureValue[index];
                }
            }
            if(typeof value == 'object'){
                $.each(value, function(sub_index,sub_value){
                    sub_configure_index = sub_index;
                    if(configureValue.hasOwnProperty(sub_index)){
                        if(typeof configureValue[sub_index] != 'object') {
                            sub_configure_index = configureValue[sub_index];
                        }
                    }
                    if(form.find('[data-block='+configure_index+'] '+ '[name='+sub_configure_index+']').attr('type') == 'radio'){
                        form.find('[data-block='+configure_index+'] '+ '[name='+sub_configure_index+']' + '[value='+scr(sub_value)+']').prop('checked',true);
                    }else if(form.find('[name='+sub_configure_index+']').attr('type') == 'checkbox'){
                        form.find('[name="'+sub_configure_index+'"]').prop('checked',true);
                    }else{
                        form.find('[data-block='+configure_index+'] '+ '[name='+sub_configure_index+']').val(scr(sub_value));
                    }
                    if(sub_index == 'table'){
                        $.each(sub_value, function(sub_sub_index,sub_sub_value){
                            if(configure.hasOwnProperty(sub_sub_index)) {
                                form.find('[data-table=' + configure[sub_sub_index] + '] .tbody').empty();
                            }
                            $.each(sub_sub_value, function(index_to_table,value_to_table){
                                name_table = sub_sub_index;
                                if(configure.hasOwnProperty(name_table)){
                                    $.each(value_to_table, function(name_key,item){
                                        if(configureValue.hasOwnProperty(name_table) && configureValue[name_table].hasOwnProperty(name_key)){
                                            value_to_table[configureValue[name_table][name_key]] = item;
                                        } else{
                                            value_to_table[name_key.replace(new RegExp(name_table,''),configure[name_table])] = item;
                                        }
                                    });
                                    name_table = configure[sub_sub_index];
                                }
                                if(form.find('[data-table='+name_table+'] .tbody').prop('nodeName') == 'DIV' && !form.find('[data-table='+name_table+'] .tbody').hasClass('no_empty')){
                                    form.find('[data-table='+name_table+'] .tbody').addClass('no_empty');
                                    form.find('[data-table='+name_table+'] .tbody').empty();
                                }
                                var p = func_table_filling(name_table,value_to_table);
                                form.find('[data-table='+name_table+'] .tbody').append(p);
                            });
                        });
                    }
                });
            }else{
                if(form.find('[name='+configure_index+']').attr('type') == 'radio'){
                    form.find('[name="'+configure_index+'"]' + '[value="'+scr(value)+'"]').prop('checked',true);
                }else if(form.find('[name='+configure_index+']').attr('type') == 'checkbox') {
                    form.find('[name="' + configure_index + '"]').prop('checked', true);
                }else{
                    form.find('[name='+configure_index+']').val(scr(value));
                }
            }
        })

        if(need_after_refact && typeof afterFuncViewRefact == 'function' ){
            afterFuncViewRefact(resp,id,type_statement);
        }
    };

    window.submit_action_ajax = function($this,func){
        if(typeof $('#id_main').val() != 'undefined' && $('#id_main').val() != ''){
            var form =$($this).data('form');
            var form_data = $('#'+form).serialize();
            if($($this).hasClass('submit_form')){
                var form_url = $($this).data('url');
                $('#'+form).attr('action', form_url+$('#id_main').val()).submit();
            }else{
                var form_url = $($this).data('url')+'/'+$('#id_main').val();
                $($this).prop('disabled', true);
                ajaxToViewCallback({type:'post',url:form_url, data:form_data, button: $($this)},function(res){
                    $('#'+form).find('input, textarea, select').prop('disabled',true);
                    $('#'+form).find('#'+form+'_solution_id').val(res.solution_id).addClass('readonly').prop('disabled',false).prop('readonly', true);
                    if(typeof func == 'function'){
                        func();
                    }
                });
            }
        }
    };

    window.valid_save_legal = function(valid){
        if(!reqField([ $('#app_sub') ])){
            valid = false;
        }
        if($('.face_subject:checked').attr('id') == 'individual_subject'){
            if(!reqField([ $('.individual_subject_fio_subject') ])){
                valid = false;
            }
            if(checkedVal( $('.individual_check_RNUK') ) == 'on'){
                if(!reqField([ $('.individual_subject_RNUK_subject') ])){
                    valid = false;
                }
            } else{
                if(!reqField([ $('.individual_subject_ots_RNUK') ])){
                    valid = false;
                }
            }
        } else{
            if(!reqField([ $('.entity_subject_fio_subject') ])){
                valid = false;
            }
            if(checkedVal( $('.entity_check_RNUK') ) == 'on'){
                if(!reqField([ $('.entity_subject_RNUK_subject') ])){
                    valid = false;
                }
            } else{
                if(!reqField([ $('.entity_subject_ots_RNUK') ])){
                    valid = false;
                }
            }
            if(checkedVal( $('.statemnt_person') ) != 'on'){
                $('.statemnt_person').addClass('error')
                valid_change('.statemnt_person');
            }
        }
        if(checkedVal( $('.statemnt_person') ) == 'on'){
            if(!reqField([ $('.authorized_person_fio'), /*$('.authorized_person_RNUKPN'),*/ $('.authorized_person_type_doc'), $('.authorized_person_num_doc'), $('.authorized_person_certifier'), $('.authorized_person_date_doc'), ])){
                valid = false;
            }
        }
        return valid;
    }

    window.valid_address_property = function(valid){
        if(!reqField([ $('#real_estate_property_republic'),$('#real_estate_property_district'),$('#real_estate_property_republic_id'),$('#real_estate_property_district_id') ])){
            valid = false;
        }
        return valid;
    }

    window.refact_addr = function(clone){
        clone.find('#button_add_street_object').attr('id','button_remove_street_object').prop('disabled', false).addClass('btn-danger').removeClass('btn-succes').text('-');

        var cloneItems = clone.find("*[id]*[data-emptyli]").andSelf();
        cloneItems.each(function() {
            clone.find('[list='+$(this).attr("id")+'_list'+']').attr('list', $(this).attr("id") + "_" + 1 + '_list');
            clone.find('datalist[id='+$(this).attr("id")+'_list'+']').attr('id', $(this).attr("id") + "_" + 1 + '_list').find('option').remove();
            clone.find('select[id='+$(this).attr("id")+'_select'+']').attr('id', $(this).attr("id") + "_" + 1 + '_select').find('option').remove();
            clone.find('input[id='+$(this).attr("id")+'_id'+']').attr('id', $(this).attr("id") + "_" + 1 + '_id');
            $(this).attr("id", $(this).attr("id") + "_" + 1);
        });
        clone.find('#addr_property_type_street').attr('id', 'addr_property_type_street' + "_" + 1);
        clone.find('.showAll').remove();
        clone.find('.clearAll ').remove();

    };


    window.copy = function(str){
        let tmp   = document.createElement('INPUT'), // Создаём новый текстовой input
            focus = document.activeElement; // Получаем ссылку на элемент в фокусе (чтобы не терять фокус)

        tmp.value = str; // Временному input вставляем текст для копирования

        document.body.appendChild(tmp); // Вставляем input в DOM
        tmp.select(); // Выделяем весь текст в input
        document.execCommand('copy'); // Магия! Копирует в буфер выделенный текст (см. команду выше)
        document.body.removeChild(tmp); // Удаляем временный input
        focus.focus(); // Возвращаем фокус туда, где был
    }


    window.getTemplateContent = function(template, change_value = {}) {
        // TODO: переделать под принятие более широкого спектра значений(attr, text, value, data, function) объект вида [ { text:{'.question_id': model_questions.length} }, data:{'data-question_id': model_questions.length}, } ]
        let t_content = $(template).get(0).content;
        var object_change;
        $.each(change_value, function(index, item) {
            if(item.type == 'value') {
                object_change = t_content.querySelectorAll(index)
                $.each(object_change, function(index_selector, item_selector) {
                    $(item_selector).val(item.value); //TODO: сделать под атрибут дата
                })
            }
            if(item.type == 'text') {
                object_change = t_content.querySelectorAll(index)
                $.each(object_change, function(index_selector, item_selector) {
                    $(item_selector).text(item.value); //TODO: сделать под атрибут дата
                })
            }
            if(item.type == 'data') {
                object_change = t_content.querySelectorAll('[data-' + index + ']')
                $.each(object_change, function(index_selector, item_selector) {
                    $(item_selector).data(index, item.value).attr('data-' + index, item.value);
                })
            }
            if(item.type == 'attr') {
                object_change = t_content.querySelectorAll(index)
                $.each(object_change, function(index_selector, item_selector) {
                    $(item_selector).data(index, item.value).attr(item.attr, item.value);
                })
            }
        });
        return document.importNode(t_content, true);
    };



    window.formToJson = function ($form_obj) {
        var obj = {};
        var reform_obj = {};
        var name_key = '';
        $.each($form_obj, function ($key, $value) {
            name_key = $value.name;
            if (name_key.indexOf('[]') > -1) {
                name_key = name_key.slice(0, -2);
                if (!obj.hasOwnProperty(name_key)) {
                    obj[name_key] = [];
                }
                obj[name_key].push($value.value);
            }
            else {
                obj[name_key] = $value.value;
            }
        });
        reform_obj['answer'] = [];

        $.each(obj, function ($key, $value) {
            if(typeof $value == 'object'){
                $.each($value, function ($sub_key, $sub_value) {
                    if (!reform_obj['answer'].hasOwnProperty($sub_key)) {
                        reform_obj['answer'][$sub_key] = {};
                    }
                    reform_obj['answer'][$sub_key][$key] = $sub_value;
                });
            } else{
                reform_obj[$key] = $value;
            }

        });

        return reform_obj;
    }

    })
;