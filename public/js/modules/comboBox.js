/**
 * Created by alex on 24.08.2016. style="position: absolute;right: -8px;bottom: 0.5em;"  style="position: absolute;left: -8px;bottom: 0.5em;"
 */

jQuery(function($){
    function getChar(event) {
        if (event.which == null) { // IE
            if (event.keyCode < 32) return null; // спец. символ
            return String.fromCharCode(event.keyCode)
        }

        if (event.which != 0 && event.charCode != 0) { // все кроме IE
            if (event.which < 32) return null; // спец. символ
            return String.fromCharCode(event.which); // остальные
        }

        return null; // спец. символ
    }
    window.old_datalist_value = {};

    window.address_combobox = function(id, next, prev, add_parameters, url_prefix, data_value, value){
        var configure = {
            data_value: data_value || 'atu_id',
            value: value || 'full_name',
            url_prefix: url_prefix || 'atu'
        };

        $(id).after('<span class="showAll input-group-addon" style="position: absolute;z-index: 5;width: 45px;right: 28px;">ВСЕ</span>');
        $(id+"_select").after('<span class="clearAll input  input-group-addon">X</span>');

        old_datalist_value[id] = '';
        var search = $(id);
        var results = $(id+'_list');
        var templateContent = $(id+'_select');

        search.attr('autocomplete', 'off');
        results.attr('autocomplete', 'off');
        templateContent.attr('autocomplete', 'off');

        search.on('keypress', function handler(event) {
            if( event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18 || event.keyCode == 20){
                return false;
            }
            var str = this.value;
            if(event.keyCode != 8){
                str += getChar(event);
            }
            var arr = templateContent.find('option').clone();
            console.log('templateContent');
            var positiveArr;
            if( str.length > 2 ){
                positiveArr = arr.filter(function(item) {
                    return this.value.indexOf(str) + 1;
                });
                console.log(positiveArr.length, results.find('option').length);
                if(positiveArr.length != results.find('option').length){
                    results.empty();
                    results.append(positiveArr);
                }
            }
        });

        function one_func($this){
            var val = $this.value;
            if(has_option(id+'_select', val)) {
                $(id+'_id').val($(id+'_select' + ' option[value="'+val+'"]').data('value'));
                var empty_arr = $(id).data('emptyli').split(' ');
                if(empty_arr != ''){
                    $.each(empty_arr, function(index,item){
                        $(item+', '+item+'_id').val('');
                        $(item+'_select').empty();
                    });
                }
                if($(id+'_id').val() == '' ){
                    return false;
                }
                old_datalist_value[id] = $this.value;
                $(id).val($this.value);
                var parent_id = (id+'_id') ? {parent_id : $(id+'_id').val()} : {};
                if(typeof add_parameters != 'undefined'){
                    console.log(add_parameters);
                    eval(add_parameters);
                }
                if(typeof next == 'object'){
                    $.each(next, function(index, item){
                        var configure_return = JSON.parse(JSON.stringify(configure));
                        configure_return.index = index;
                        if(typeof item.url != 'undefined'){
                            configure_return.url_prefix = item.url;
                        }
                        if(typeof item.add_parameters != 'undefined'){
                            eval(item.add_parameters);
                        }
                        if(typeof item.value != 'undefined'){
                            configure_return.value = item.value;
                        }
                        if(typeof item.data_value != 'undefined'){
                            configure_return.data_value = item.data_value;
                        }
                        $('.clearAll').prop('disabled',true);
                        $(configure_return.index).prop('readonly',true);

                        ajaxToViewCallback( {type:'get',url:'/api/'+configure_return.url_prefix, data:parent_id, crossDomain: true, notification:false, return_value:JSON.parse(JSON.stringify(configure_return))}, function(res,return_value){
                            $(return_value.index+'_select').empty();
                            //console.log('return_value',return_value,return_value.index+'_select');
                            $(return_value.index+'_select').append('<option data-value="" value="">Не выбрано</option>');
                            console.log(item,return_value.data_value);
                            $(return_value.index).prop('readonly',false);

                            $.each(res, function(index,item){
                                $(return_value.index+'_select').append('<option data-value="'+item[return_value.data_value]+'" value="'+item[return_value.value]+'">'+item[return_value.value]+'</option>');
                            });
                            $('.clearAll').prop('disabled',false);

                        });
                    })
                } else{
                    alert('else');
                    //$('.clearAll').prop('disabled',true);
                    //ajaxToViewCallback( {type:'get',url:'/api/'+url_prefix, data:parent_id, crossDomain: true, notification:false }, function(res){
                    //    $(next+'_select').empty();
                    //    $(next+'_select').append('<option data-value="" value="">Не выбрано</option>');
                    //    $.each(res, function(index,item){
                    //        $(next+'_select').append('<option data-value="'+item[configure.data_value]+'" value="'+item[configure.value]+'">'+item[configure.value]+'</option>');
                    //    });
                    //    $('.clearAll').prop('disabled',false);
                    //});
                }
            }
        }

        $(id+"_select").on('focus', function (e) {
            one_func(this);
            if($(id+'_select option').length == 0) {
                var parent_id = {};
                if (typeof prev != 'object') {
                    if (prev != '') {
                        parent_id.parent_id = $(prev + '_id').val();
                    }
                } else {
                    $.each(prev, function (index, item) {
                        if (typeof $(item + '_id').val() != 'undefined' && $(item + '_id').val() != '') {
                            parent_id.parent_id = $(item + '_id').val();
                        }
                    });
                }
                if (typeof parent_id.parent_id == 'undefined' || parent_id.parent_id == '') {
                    return false;
                }
                if (typeof add_parameters != 'undefined' && add_parameters != '') {
                    eval(add_parameters);
                }
                $('.clearAll').prop('disabled', true);
                ajaxToViewCallback({
                    type: 'get',
                    url: '/api/' + configure.url_prefix,
                    data: parent_id,
                    crossDomain: true,
                    notification: false
                }, function (res) {
                    $(id + '_select').empty();
                    $(id + '_select').append('<option data-value="" value="">Не выбрано</option>');
                    $.each(res, function (index, item) {
                        $(id + '_select').append('<option data-value="' + item[configure.data_value] + '" value="' + item[configure.value] + '">' + item[configure.value] + '</option>');
                    });
                    $(id + '_select').val($(id).val());
                    $('.clearAll').prop('disabled', false);
                });
            }
        });

        $(id+"_select").on('change', function (e) {
            if($(id+"_select").val() == ''){
                old_datalist_value[id] = '';
                $(id).val('');
                $(id+'_id').val('');
                var empty_arr = $(id).data('emptyli').split(' ');
                if(empty_arr != ''){
                    $.each(empty_arr, function(index,item){
                        $(item+', '+item+'_id').val('');
                        $(item+'_select').empty();
                    });
                }
                return false;
            }
            one_func(this);
        });

        $(id).on('focusout', function () {
            var val = this.value;
            if(this.value == ''){
                this.value = old_datalist_value[id];
                $(id+'_id').val(old_datalist_value[id+'_id']);
                if(old_datalist_value[id] == '' || old_datalist_value[id+'_id'] == ''){
                    $(id+'_id').val('');
                    $(id+'_list').empty();
                }
            } else{
                if(has_option(id+'_list',val)) {

                } else{
                    this.value = '';
                    $(id+'_id').val('');
                    $(id+'_list').empty();
                }
            }
        });

        $(id).on('focusout', function (e) {
            one_func(this);
        });

        $(id).on('click', function() {
            if($(this).val().trim() != ''){
                old_datalist_value[id] = $(this).val();
                old_datalist_value[id+'_id'] = $(id+'_id').val();
                $(this).val('');
                $(id+'_list').empty();
            }
            if($(id+'_select option').length == 0){
                var parent_id = {};
                if(typeof prev != 'object'){
                    if(prev != '') {
                        parent_id.parent_id = $(prev+'_id').val();
                    }
                } else{
                    $.each(prev, function(index,item){
                        if(typeof $(item+'_id').val() != 'undefined' && $(item+'_id').val() != ''){
                            parent_id.parent_id = $(item+'_id').val();
                        }
                    });
                }
                if(typeof parent_id.parent_id == 'undefined' ||  parent_id.parent_id == ''){
                    return false;
                }
                if(typeof add_parameters != 'undefined' && add_parameters != ''){
                    eval(add_parameters);
                }
                $('.clearAll').prop('disabled',true);
                $(id).prop('readonly',true);

                ajaxToViewCallback( { type:'get', url:'/api/'+configure.url_prefix, data:parent_id, crossDomain: true, notification:false }, function(res){
                    $(id+'_select').empty();
                    $(id+'_select').append('<option data-value="" value="">Не выбрано</option>');
                    $(id).prop('readonly',false);

                    $.each(res, function(index,item){
                        $(id+'_select').append('<option data-value="'+item[configure.data_value]+'" value="'+item[configure.value]+'">'+item[configure.value]+'</option>');
                    });
                    $('.clearAll').prop('disabled',false);

                });
            }
        });

    };












    $('body').on('click', '.showAll', function() {
        if($(this).hasClass('active_all')){
            $(this).removeClass('active_all')
        } else{
            $(this).addClass('active_all')
        }
        $(this).prev().toggle();
        $(this).next().toggle();
        if($(this).next().is(":visible")){
            $(this).next().focus();
        } else{
            $(this).prev().val(old_datalist_value['#'+$(this).prev().attr('id')]);
        }
    });

    $('body').on('click', '.clearAll', function() {
        $(this).next().val('');
        $(this).prev().prev().prev().val('');
        $(this).prev().val('');
        var empty_arr = $(this).prev().prev().prev().data('emptyli').split(' ');
        old_datalist_value['#'+$(this).prev().prev().prev().attr('id')] = '';
        if(empty_arr != ''){
            $.each(empty_arr, function(index,item){
                $(item+', '+item+'_id').val('');
                $(item+'_select').empty();
                old_datalist_value[item] = '';
            });
        }
    });

    window.has_option = function(datalist_current,val){
        return $(datalist_current+' option').filter(function(){
            console.log(this.value === val);
            return this.value === val;
        }).length;
    };
















    //var ajaxVillage = function(){
    //    $.ajax({
    //        dataType: "json",
    //        url: "/api/village",
    //        success: function (data) {
    //            var strr = '';
    //            for(var i=0;i<data.length;i++){
    //                strr += '<option value="'+data[i].id+'">'+data[i].name_village+'</option>'
    //            }
    //            $('#combobox').empty().append(strr);
    //        }
    //    });
    //};
    //
    //$("#chek4").click(function(){
    //    ajaxVillage();
    //});



    //$.widget( "custom.combobox", {
    //
    //    _create: function() {
    //
    //        this.wrapper = $( "<span>" )
    //            .addClass( "custom-combobox" )
    //            .insertAfter( this.element );
    //
    //        this.element.hide();
    //        this._createAutocomplete();
    //        this._createShowAllButton();
    //    },
    //
    //    _createAutocomplete: function() {
    //        var id = this.element.attr('id');
    //        var class_sel = this.element.attr('class');
    //        var anme = this.element.attr('name');
    //
    //        var selected = this.element.children(":selected"),
    //            value = selected.val() ? selected.text() : "",
    //            value_id = selected.val();
    //        this.input = $( "<input>" )
    //            .appendTo( this.wrapper )
    //            .val( value )
    //            .attr( "title", "" )
    //            .addClass( "form-control input-sm").addClass('input_'+class_sel)
    //            //.attr('id', id)
    //            //.attr('name', anme)
    //            .autocomplete({
    //                delay: 0,
    //                minLength: 0,
    //                source: $.proxy( this, "_source" )
    //            })
    //            .tooltip({
    //                classes: {
    //                    "ui-tooltip": "ui-state-highlight"
    //                }
    //            });
    //
    //
    //        this._on( this.input, {
    //            autocompleteselect: function( event, ui ) {
    //                //console.log(ui,this.input,event,$('#ui-id-1 li').get(0).outerHTML);
    //                //$(event.toElement).val()
    //                //$('[')
    //                if(typeof ui.item != 'undefined'){
    //                    ui.item.option.selected = true;
    //                    this._trigger( "select", event, {
    //                        item: ui.item.option.value
    //                    });
    //                }
    //
    //            },
    //            autocompletechange: "_removeIfInvalid"
    //        });
    //    },
    //
    //    _createShowAllButton: function() {
    //
    //        var input = this.input,
    //            wasOpen = false;
    //
    //        $( "<a>" )
    //            .attr( "tabIndex", -1 )
    //            .attr( "class", "all_item" )
    //            .attr( "style", `position: absolute; right: 10px; bottom: 0px; height: 31px;` )
    //
    //            .tooltip()
    //            .appendTo( this.wrapper )
    //            .button({
    //                icons: {
    //                    primary: "ui-icon-triangle-1-s"
    //                },
    //                text: false
    //            })
    //            .removeClass( "ui-corner-all" )
    //            .addClass( "custom-combobox-toggle ui-corner-right")
    //            .on( "mousedown", function() {
    //                wasOpen = input.autocomplete( "widget" ).is( ":visible" );
    //            })
    //            .on( "click", function() {
    //                input.trigger( "focus" );
    //                // Close if already visible
    //                if ( wasOpen ) {
    //                    return;
    //                }
    //                // Pass empty string as value to search for, displaying all results
    //                input.autocomplete( "search", "" );
    //            });
    //    },
    //
    //    _source: function( request, response ) {
    //        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
    //        response( this.element.children( "option" ).map(function() {
    //            var text = $( this ).text();
    //            if ( ( !request.term || matcher.test(text) ) ){
    //                return {
    //                    label: text,
    //                    value: text,
    //                    option: this
    //                };
    //            }
    //
    //        }) );
    //    },
    //
    //    _removeIfInvalid: function( event, ui ) {
    //
    //        // Selected an item, nothing to do
    //        if ( ui.item ) {
    //            var name = $(ui.item.option).parent().attr('name');
    //            $('#'+name+'_id').val(ui.item.option.value).attr('value',ui.item.option.value);
    //            console.log(name,$('#'+name+'_id').val());
    //            if($(ui.item.option).val() == '' ){
    //                this.input.val( "" );
    //            }
    //
    //            return;
    //        }
    //        // Search for a match (case-insensitive)
    //        var value = this.input.val(),
    //            valueLowerCase = value.toLowerCase(),
    //            valid = false;
    //
    //        this.element.children( "option" ).each(function() {
    //            if ( $( this ).text().toLowerCase() === valueLowerCase ) {
    //                this.selected = valid = true;
    //
    //                return false;
    //            }
    //        });
    //
    //        // Found a match, nothing to do
    //        if ( valid ) {
    //            return;
    //        }
    //
    //        // Remove invalid value
    //        this.input.val( "" );
    //        $('#'+this.input.attr('id')+'_id').val("").attr('value',"");
    //
    //        this._delay(function() {
    //            this.input.tooltip( "close" ).attr( "title", "" );
    //        }, 2500 );
    //        this.input.autocomplete( "instance" ).term = "";
    //    },
    //
    //    _destroy: function() {
    //
    //        this.wrapper.remove();
    //        this.element.show();
    //    }
    //});

    //$( "#real_estate_property_republic" ).combobox();
    //$( "#real_estate_property_district" ).combobox();
    //$( "#real_estate_property_city" ).combobox();
    //$( "#real_estate_name_street" ).combobox();

    //$('#village_sovet').val($('#combobox').attr('value'));
    //if($('#combobox').prop('disabled')){
    //    $('#village_sovet').prop('disabled', true);
    //    $('#chek4').prop('disabled', true);
    //}
    //
    //if($('#village_sovet').val() != ''){
    //    $('.village_sovet').show();
    //    $('#chek4').prop('checked', true);
    //    //ajaxVillage();
    //}
    //
    //$('#another_village_sovet').click(function(){
    //    if( $('#another_village_sovet').val() == 1 ){
    //        $('#another_village_sovet').prop('checked',false);
    //        $('#village_sovet').val('');
    //        $('#another_village_sovet').val(0)
    //    } else {
    //        $('#another_village_sovet').prop('checked',true);
    //        $('#another_village_sovet').val(1);
    //    }
    //});

});