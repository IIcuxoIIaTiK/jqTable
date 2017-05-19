$(function () {
    //$(document).ready(function(){
    //    $('input').attr('autocomplete', 'off');
    //});

    window._form = ".statement_main";


    ajaxToViewCallback( {type:'get',url:'http://avlad.erclnr.tk/api/atu', data:{}, crossDomain: true, notification:false }, function(res){
        //$("#real_estate_property_republic_list").append('<option >Не выбрано</option>');
        $('#real_estate_property_republic_select').append('<option data-value="" value="">Не выбрано</option>');

        $.each(res, function(index,item){
            //$('#real_estate_property_republic_select').append('<option value="'+item.atu_id+'">'+item.full_name+'</option>');
            //$("#real_estate_property_republic_template").append('<option value="'+item.atu_id+'">'+item.full_name+'</option>');
            $("#real_estate_property_republic_select").append('<option data-value="'+item.atu_id+'" value="'+item.full_name+'">'+item.full_name+'</option>');

        });
    });

    window.func_table_filling = function(func,$value){
        switch (func) {
            case 'addr_property_':
                var obj_save = {
                    addr_property_type_house: undVal($value.addr_property_type_house),
                    addr_property_name_street: undVal($value.addr_property_name_street),
                    addr_property_name_street_id: undVal($value.addr_property_name_street_id),
                    addr_property_type_number: undVal($value.addr_property_type_number),
                    addr_property_type_street: undVal($value.addr_property_type_street),
                    addr_property_subtype_house: undVal($value.addr_property_subtype_house),
                    addr_property_num_type_house: undVal($value.addr_property_num_type_house),
                    addr_property_num_type_number: undVal($value.addr_property_num_type_number),
                    addr_property_num_subtype_house: undVal($value.addr_property_num_subtype_house),
                    addr_property_num_subtype_number: undVal($value.addr_property_num_subtype_number),
                    number_subtype_number_components:  undVal($value.addr_property_number_subtype_number_components),
                };

                var p = addr_property(obj_save);

                break;

            case 'number_land_property_':
                var p = '<div class="row">'+
                    '<input type="text" class="form-control input-sm" name="number_land_property_cadastral[]" value="'+undVal($value.number_land_property_cadastral)+'">';
                break;

            case 'payment_':
                var obj_save = {
                    payment_base: undVal($value.payment_base),
                    payment_date: undVal($value.payment_date),
                    payment_more: undVal($value.payment_more),
                    payment_type: undVal($value.payment_type),
                    payment_amount: undVal($value.payment_amount),
                    payment_number: undVal($value.payment_number),
                    payment_date_info: undVal($value.payment_date_info),
                    payment_institution: undVal($value.payment_institution),
                    payment_number_info: undVal($value.payment_number_info),
                    payment_date_release: undVal($value.payment_date_release),
                    payment_type_document: undVal($value.payment_type_document),
                    payment_number_release: undVal($value.payment_number_release),
                    payment_supplement_base: undVal($value.payment_supplement_base),
                    payment_info_release_checked: undVal($value.payment_info_release_checked),
                    payment_institution_personal: undVal($value.payment_institution_personal),
                };

                var p = '<tr>'+ payment(obj_save) + '</tr>';
                break;
            case 'applicant_':
                var obj_save = {
                    state: undVal($value.applicant_state),
                    app_sub: undVal($value.applicant_app_sub),
                    telephone: undVal($value.applicant_telephone),
                    citizenship: undVal($value.applicant_citizenship),
                    fio_subject: undVal($value.applicant_fio_subject),
                    RNUK_subject: undVal($value.applicant_RNUK_subject),
                    face_subject: undVal($value.applicant_face_subject),
                    address_liven: undVal($value.applicant_address_liven),
                    date_document: undVal($value.applicant_date_document),
                    other_document: undVal($value.applicant_other_document),
                    statemnt_person: undVal($value.applicant_statemnt_person),
                    public_authority: undVal($value.applicant_public_authority),
                    check_citizenship: undVal($value.applicant_check_citizenship),
                    date_get_document: undVal($value.applicant_date_get_document),
                    document_personal: undVal($value.applicant_document_personal),
                    entity_check_RNUK: undVal($value.applicant_entity_check_RNUK),
                    issuing_authority: undVal($value.applicant_issuing_authority),
                    other_information: undVal($value.applicant_other_information),
                    state_registration: undVal($value.applicant_state_registration),
                    authorized_person_fio: undVal($value.applicant_authorized_person_fio),
                    individual_check_RNUK: undVal($value.applicant_individual_check_RNUK),
                    address_correspondence: undVal($value.applicant_address_correspondence),
                    entity_subject_ots_RNUK: undVal($value.applicant_entity_subject_ots_RNUK),
                    authorized_person_RNUKPN: undVal($value.applicant_authorized_person_RNUKPN),
                    authorized_person_num_doc: undVal($value.applicant_authorized_person_num_doc),
                    authorized_person_date_doc: undVal($value.applicant_authorized_person_date_doc),
                    authorized_person_dop_info: undVal($value.applicant_authorized_person_dop_info),
                    authorized_person_type_doc: undVal($value.applicant_authorized_person_type_doc),
                    entity_subject_fio_subject: undVal($value.applicant_entity_subject_fio_subject),
                    authorized_person_certifier: undVal($value.applicant_authorized_person_certifier),
                    entity_subject_RNUK_subject: undVal($value.applicant_entity_subject_RNUK_subject),
                    individual_subject_ots_RNUK: undVal($value.applicant_individual_subject_ots_RNUK),
                    document_personal_seria_number: undVal($value.applicant_document_personal_seria_number),
                    individual_subject_fio_subject: undVal($value.applicant_individual_subject_fio_subject),
                    individual_subject_RNUK_subject: undVal($value.applicant_individual_subject_RNUK_subject),

                    //date_get_document : undVal($value.subject_encumbrance_date_get_document),

                };
                var p = '<tr>'+ save_legal(obj_save) + '</tr>';
                break;
            case 'accompanying_document_':
            // alert('accompanying_document_')
            var obj_save = {
                    accompanying_document_type: undVal($value.accompanying_document_type),
                    accompanying_document_number: undVal($value.accompanying_document_number),
                    accompanying_document_subtype: undVal($value.accompanying_document_subtype),
                    accompanying_document_date_get: undVal($value.accompanying_document_date_get),
                    accompanying_document_certifier: undVal($value.accompanying_document_certifier),
                    accompanying_document_certifiertwo: undVal($value.accompanying_document_certifiertwo),
                };
                
                var p = '<tr>'+ accompanying_document(obj_save) +'</tr>';
                // alert(p);
                break;
            case 'subject_encumbrance_':
                var p = '';
                break;
            default:
                alert( 'Я таких значений не знаю => ' + func );
                var p = '';
                break;
        }
        return p;

    };

    $('#add_accompanying_documents').on('click',function(){
        var obj_save = {
            accompanying_document_type: $('.accompanying_document_type').val(),
            accompanying_document_number: $('.accompanying_document_number').val(),
            accompanying_document_subtype: $('.accompanying_document_subtype').val(),
            accompanying_document_date_get: $('.accompanying_document_date_get').val(),
            accompanying_document_certifier: $('.accompanying_document_certifier').val(),
            accompanying_document_certifiertwo: $('.accompanying_document_certifiertwo').val(),
        };
        
        $('#accompanying_document_table').append('<tr>'+ accompanying_document(obj_save) +'</tr>');
        $('#accompanying_documents .modal-body :input').val('');
    });

    $('body').on('click','.remove_line',function(){
        $(this).parent().parent().remove();
    });


    $('#applicant_legal').on('hide.bs.modal', function(event){
        $('#applicant_legal #save_legal').removeClass('acceptEdit');
        $('.subject_burdening .active_tr').removeClass('active_tr');

    });

    $('#components_document_base_cost').on('hide.bs.modal', function(event){
        $('#components_document_base_cost #add_document_cost_components').removeClass('acceptEdit');
        $('.table_document_cost_components .active_tr').removeClass('active_tr');

    });

    $('#components_cost_estimate').on('hide.bs.modal', function(event){
        $('#components_cost_estimate #add_cost_components_table').removeClass('acceptEdit');
        $('.cost_estimate_components .active_tr').removeClass('active_tr');
    });



    window.functablenew = function(type_action,operator_type,operator_value,input){
        switch(type_action){
            case 'radio':
                switch(operator_type){
                    case ':':
                        if(input.val() != ''){
                            $('.'+operator_value+'#'+input.val()).prop('checked',true);
                        }
                        break;
                    case '>':
                        window[operator_value]( undVal(input.val() ) ); //в функцию с именем из конфига передаю значение из инпута(id того радио который должен быть чекед)
                        break;
                }
                break;
            case 'checkbox':
                switch(operator_type){
                    case ':':
                        var checked = false;
                        if(input.val() != ''){
                            checked = true;
                        }
                        $('.'+operator_value).prop('checked',checked);
                        break;
                    case '>':
                        eval(operator_value);
                        break;
                }
                break;
            case 'input':
                switch(operator_type){
                    case ':':
                        $('.'+operator_value).val(undVal(input.val() ) );
                        break;
                    case '>':
                        eval(operator_value);
                        break;
                }
                break;
            case 'text':
                switch(operator_type){
                    case ':':
                        $('.'+operator_value).text(undVal(input.val() ) );
                        break;
                    case '>':
                        eval(operator_value);
                        break;
                }
                break;
        }
    };

    $('body').on('click','.edit_line',function(){
        var fields = $(this).parent().parent().addClass('active_tr').find('input,textarea');
        $($(this).data('showmodal')).modal();
        $($(this).data('savebuttonmodal')).addClass('acceptEdit');
        var prefix = $(this).data('editprefix');
        $.each(fields,function(index,value){
            console.log($('.date_get_document').val());
            value = $(value);
            if( value.data('inputedit') != '' && value.data('inputedit') != 'undefined' ){
                var inputedit = value.data('inputedit');
                var inputedit_mas = inputedit.split(' ');
                var mas_action = inputedit.match(/(^[^|>:]+)|(:[^|>:]+)|(>[^|>:]+)|(\|[^|>:]+)/g);
                for(var i = 1; i < mas_action.length; i++){
                    functablenew(mas_action[0],mas_action[i].charAt(0),mas_action[i].slice(1),value);
                }
            } else{
                var name = $(value).attr('name');
                name = name.slice(prefix.length);
                name = name.substr(0, name.length - 2);
                $('.' + name).val($(value).val());
               }
        });

    });

    window.beforeFuncView = function(resp,id,type_statement){
        $('#id_main').val(id);
        switchpoisk(type_statement);
    };
    window.afterFuncView = function(resp,id,type_statement){
        $('#id_main').val(id);
        switchpoisk(type_statement);
        address_combobox("#real_estate_property_republic", //id
            {
                "#real_estate_property_district":{
                    url: 'atu',
                },
            },//next
            ''                                 //prev
        );

        address_combobox("#real_estate_property_republic", //id
            {
                "#real_estate_property_district":{
                    url: 'atu',
                },
            },                                 //next
            ''                                 //prev
        );

        address_combobox("#real_estate_property_district",//id
            {
                "#real_estate_property_city":{
                    url: 'atu',
                },
                "#real_estate_property_street":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title',
                    data_value:  'id'
                },
                "#real_estate_property_object_components":{
                    url: 'atu',

                    add_parameters: "parent_id.type = 'садовое товарищество'",
                },
                "#name_type_object_object_street_components":{
                    url: 'atu',
                    add_parameters: "parent_id.type = 'садовое товарищество'",
                },
                "#name_type_street_object_street_components":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title',
                    data_value:  'id'
                }
            },                              //next
            '#real_estate_property_republic'//prev
        );

        address_combobox(   "#real_estate_property_city",//id
            //'#real_estate_property_street',//next
            {
                "#real_estate_property_street":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title'
                },
                "#real_estate_property_object_components":{
                    //url: 'api',
                    //add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    //value: 'title'
                },
            },
            '#real_estate_property_district',//prev
            `parent_id.type = $('#addr_property_type_street').val()`, //add_params ; parent_id.parent_id = ($('#real_estate_property_city_id').val()) ? $('#real_estate_property_city_id').val() : $('#real_estate_property_district_id').val() ;
            '',
            'id',
            'title'
        );
        //    address_combobox("#real_estate_property_city",'#real_estate_property_street','#addr_property_type_street','street');

        address_combobox("#real_estate_property_street",
            {},
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]
            ,'',
            'street', //url
            'id',
            'title'
        );
        address_combobox("#real_estate_property_object_components",
            {},
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );

        address_combobox("#name_type_object_object_street_components",
            {
                "#name_type_street_object_street_components":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title'
                }
            },
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );

        address_combobox("#name_type_street_object_street_components",
            {},
            [
                '#name_type_object_object_street_components',
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );


        if($('.block_real_estate_object_address').find('.addr_block').length == 2){
            //$('.block_real_estate_object_address').find('.addr_block')
            refact_addr($($('.block_real_estate_object_address').find('.addr_block').get(1)));

            address_combobox("#real_estate_property_street_1",
                {},
                [
                    '#real_estate_property_district',
                    '#real_estate_property_city',
                ],
                `parent_id.type = $('#addr_property_type_street_1').val()`,
                'street', //url
                'id',
                'title'
            );


        }

    };

    if(typeof $('#type_interaction').val() == 'undefined' ){

        address_combobox("#real_estate_property_republic", //id
            {
                "#real_estate_property_district":{
                    url: 'atu',
                },
            },                                 //next
            ''                                 //prev
        );

        address_combobox("#real_estate_property_district",//id
            {
                "#real_estate_property_city":{
                    url: 'atu',
                },
                "#real_estate_property_street":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title',
                    data_value:  'id'
                },
                "#real_estate_property_object_components":{
                    url: 'atu',

                    add_parameters: "parent_id.type = 'садовое товарищество'",
                },
                "#name_type_object_object_street_components":{
                    url: 'atu',
                    add_parameters: "parent_id.type = 'садовое товарищество'",
                },
                "#name_type_street_object_street_components":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title',
                    data_value:  'id'
                }
            },                              //next
            '#real_estate_property_republic'//prev
        );

        address_combobox(   "#real_estate_property_city",//id
            //'#real_estate_property_street',//next
            {
                "#real_estate_property_street":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title'
                },
                "#real_estate_property_object_components":{
                    //url: 'api',
                    //add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    //value: 'title'
                },
            },
            '#real_estate_property_district',//prev
            `parent_id.type = $('#addr_property_type_street').val()`, //add_params ; parent_id.parent_id = ($('#real_estate_property_city_id').val()) ? $('#real_estate_property_city_id').val() : $('#real_estate_property_district_id').val() ;
            '',
            'id',
            'title'
        );
        //    address_combobox("#real_estate_property_city",'#real_estate_property_street','#addr_property_type_street','street');

        address_combobox("#real_estate_property_street",
            {},
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ],
            `parent_id.type = $('#addr_property_type_street').val()`,
            'street', //url
            'id',
            'title'
        );



        address_combobox("#real_estate_property_object_components",
            {},
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );

        address_combobox("#name_type_object_object_street_components",
            {
                "#name_type_street_object_street_components":{
                    url: 'street',
                    add_parameters: "parent_id.type = $('#addr_property_type_street').val()",
                    value: 'title'
                }
            },
            [
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );

        address_combobox("#name_type_street_object_street_components",
            {},
            [
                '#name_type_object_object_street_components',
                '#real_estate_property_district',
                '#real_estate_property_city',
            ]

        );


    }
    $('body').on('input, change', '#addr_property_type_street', function() {
        $('#real_estate_property_street_id').val('');
        $('#real_estate_property_street').val('');
        $('#real_estate_property_street_select').val('');
        var empty_arr = ['#real_estate_property_street'];
        old_datalist_value['#real_estate_property_street'] = '';
        if(empty_arr != ''){
            $.each(empty_arr, function(index,item){
                $(item+', '+item+'_id').val('');
                $(item+'_select').empty();
                old_datalist_value[item] = '';
            });
        }
    });
    $('body').on('input, change', '#addr_property_type_street_1', function() {
        $('#real_estate_property_street_1_id').val('');
        $('#real_estate_property_street_1').val('');
        $('#real_estate_property_street_1_select').val('');
        var empty_arr = ['#real_estate_property_street_1'];
        old_datalist_value['#real_estate_property_street_1'] = '';
        if(empty_arr != ''){
            $.each(empty_arr, function(index,item){
                $(item+', '+item+'_id').val('');
                $(item+'_select').empty();
                old_datalist_value[item] = '';
            });
        }
    });

    if($('#type_interaction').val() == 'view_edit'){
        $('#name_action_statement').text('Просмотр заявления');
        $('#name_action_encumbrance').text('Просмотр обременения');
        $('#name_action_encumbrance2016').text('Просмотр обременения до 2016 года');

        ajaxToView(funcView,$('#type_interaction').data('urltable'),{id:$('#type_interaction').data('id')});
        $('.statement_main input,.statement_main button,.statement_main textarea,.statement_main a,.statement_main select').not('#real_estate_property,#accompanying_document_,#encumbrance, .close').addClass('disabled_view');
        $('#reg_encumbrance_form input,#reg_encumbrance_form button,#reg_encumbrance_form textarea,#reg_encumbrance_form a,#reg_encumbrance_form select').not('.change_encumbrance, #real_estate_property, #accompanying_document_ , #encumbrance, .close').addClass('disabled_view');
        $('#reg_rights_rem_form input,#reg_rights_rem_form button,#reg_rights_rem_form textarea,#reg_rights_rem_form a,#reg_rights_rem_form select').not('.change_encumbrance,#real_estate_property,#accompanying_document_,#encumbrance, .close').addClass('disabled_view');
    }

    if($('#type_interaction').val() == 'only_view'){
        $('#name_action_statement').text('Просмотр заявления');
        $('#name_action_encumbrance').text('Просмотр обременения');
        $('#name_action_encumbrance2016').text('Просмотр обременения');

        ajaxToView(funcView,$('#type_interaction').data('urltable'),{id:$('#type_interaction').data('id')});
        $('input,textarea,a,select,button').not('#real_estate_property, #encumbrance, .close, .close_modal_legal').addClass('disabled_view');
    }

    $('body').on('click', 'a.change_statement', function () {
        if($('#id_main').val() != ""){
            $('.disabled_view').removeClass('disabled_view');
            $('.statement_button').attr('id','change_statement').text('Редактирование');
            $('#name_action_statement').text('Редактирование заявления');
        }
        return false;
    });

    $('body').on('click', 'a[href=#statement]', function () {
        if($('#id_main').val() != ""){
            $('.statement_main input,.statement_main button,.statement_main textarea,.statement_main a,.statement_main select').addClass('disabled_view');
        }
        if(typeof $('#type_interaction').val() != 'undefined'){
            $('#name_action_statement').text('Просмотр заявления');
        } else{
            $('#name_action_statement').text('Заявление');
        }
        $('.statement_button').attr('id','submit_statement').text('Принять');
    });


    $('body').on('click', 'a[href=#card]', function () {
        if($('#id_main').val() != ""){
            $('.card_button').attr('href', '/statement/print/card/'+$('#id_main').val());
            ajaxToViewCallback({url:'/statement/card/'+$('#id_main').val()},function(res){
                $('#card_table tbody').empty();
                if(res.hasOwnProperty('table')){
                    $.each(res.table, function(sub_index,sub_value) {
                        $('#card_table tbody').append('<tr>'+funcCard(sub_value)+'<tr>');
                    });
                }
            });

            $('#id_card').val( $('#id_main').val() );
            $('.cart_button').prop('disabled',false);

        } else{
            $('.cart_button').prop('disabled',true);
        }
    });

    $('body').on('click', 'a[href=#forming_solutions]', function () {
        if($('#id_main').val() != "" ){
            var a = Date.now();

            ajaxToViewCallback({url:'/solution/from_statement/'+$('#id_main').val()},function(res){
                //console.warn(res);
                var b = Date.now();
                var res_time = b - a;
                if(res.length > 1){
                    alert("Это плохо");
                    return false;
                }
                res = res[0];
                $.each( JSON.parse(res.dop_json_to_report), function (index,item) {
                    $('#form_solution').find('[name='+index+']').val(item);
                });
                $('#form_solution_solution_id').val(res.id).prop('disabled',true);
                $('#form_solution_solution_create_date').val(res.create_date);
                $('#form_solution_solution_name_reports').val(res.name_report);
                $('#form_solution  :input').not('.forming_solutions').prop('disabled',true);

                console.warn( "Скрипт поиска решения выполнялся <"+ res_time +"> ms." );

            });

            //$('#id_card').val( $('#id_main').val() );
            //$('.cart_button').prop('disabled',false);

        } else{
            alert("Пожалуйста, убедитесь в реальности происходящего(зарегестрируйте заявление)");

            //$('.cart_button').prop('disabled',true);
        }
    });

    var previous;
    $('body').on('click', function () {
        previous = $(".document_personal.sel option:selected").data('toggle_option');
    }).on('change', '.document_personal.sel', function () {
        var input = $(".document_personal.sel option:selected");
        if(typeof input.data('toggle_option') != 'undefined' && input.data('toggle_option') != ''){
                $(input.data('toggle_option')).show();
        } else{
            if(typeof previous != 'undefined'){
                $(previous).hide();
            }
        }
    });

    $('body').on('change', 'input[data-toggleForChecked]', function () {
        var classList = $(this).data('toggleforchecked');
        if(typeof classList != 'undefined'){
            classList = classList.split(/\s+/);
            func_checkDisField('.'+classList[1],'.'+classList[0], checkedVal($(this)));
        }
    });


    $('body').on('click','.cart_button',function(){

    })


    $('body').on('click', '.accept_action_button', function (e) {
        var $this = $(this);
        var id_form = $this.data('form');
        var form = $("#action_cancel_form");
        var data = form.serialize(); // пoдгoтaвливaeм дaнныe
    });



    $("#reg_statement_form").submit(function (e) { // пeрeхвaтывaeм всe при сoбытии oтпрaвки
        var form = $(this); // зaпишeм фoрму, чтoбы пoтoм нe былo прoблeм с this
        var error = false; // прeдвaритeльнo oшибoк есть куча
        var valid = true; // прeдвaритeльнo oшибoк есть куча

        $(".errorvalidate").empty();
        e.preventDefault();
        var valid = true;
        valid = valid_address_property(valid);

        if(!valid){
            return false;
        }

        if( $('#id_main').val() != '' && $('.statement_button').attr('id') != 'change_statement' ){
            return false; // вырубaeм стaндaртную oтпрaвку фoрмы
        }
        if (!error) { // eсли oшибки нeт
            $('#errorvalidate').removeClass('notsave save');
            var url = '/statement/reg_statement';
            /////////////////////////////////
            if($('.statement_button').attr('id') == 'change_statement'){
                url = '/statement/edit_statement/'+$('#id_main').val();
            }
            var data = form.serialize(); // пoдгoтaвливaeм дaнныe
            $.ajax({ // инициaлизируeм ajax зaпрoс
                type: 'POST', // oтпрaвляeм в POST фoрмaтe, мoжнo GET
                url: url, // путь дo oбрaбoтчикa
                dataType: 'json', // oтвeт ждeм в json фoрмaтe
                data: data, // дaнныe для oтпрaвки
                beforeSend: function (data) { // сoбытиe дo oтпрaвки
                    form.find('input[type="submit"]').attr('disabled', 'disabled'); // нaпримeр, oтключим кнoпку, чтoбы нe жaли пo 100 рaз
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
                            }
                            $(".errorvalidate").append("</ul>");
                        }

                        var notification = new Notification('Заголовок', {
                            icon: 'dist/img/error.png',
                            body: data['error'],
                        });

                        notification.onclick = function () {
                            // window.open("http://www.cyberforum.ru/javascript-api/thread1444883.html");
                            var notification = new Notification('Заголовок', {
                                icon: '/dist/img/error.png',
                                body: "ДА ДА! ИСПОЛЬЗОВАНЫ",
                            });
                        };
                    } else { // eсли всe прoшлo oк
                        $(".errorvalidate").empty();
                        var notification = new Notification('Заголовок', {
                            icon: 'dist/img/ok.png',
                            body: "Все прошло отлично",
                        });

                        $('#errorvalidate').addClass('save'); 										/////////////////////////////
                        $("#errorvalidate").append("<h2>Успешно сохранено</h2>");
                        $('#id_main').val(data['id_main']);


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
        }
        return false; // вырубaeм стaндaртную oтпрaвку фoрмы
    });


    $('body').on('click', '.submit_action_ajax', function(){
        submit_action_ajax(this);
    });

    $('body').on('click', '.forming_solutions', function(e){
        e.preventDefault();
        if(typeof $('#id_main').val() != 'undefined') {
            var url_print =  $(this).data('url_print')+'/';
            var form = $('#'+$(this).data('form'));
            var data_form_id = $(this).data('form');
            document.location.href = url_print+form.find( '#'+data_form_id+'_solution_id').val();
        }
    });










});

