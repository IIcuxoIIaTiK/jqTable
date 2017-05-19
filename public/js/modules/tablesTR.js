//  «Невозможно» — это слово предназначено для словаря дураков.
jQuery(function($) {
    //window.funcView_old = function(resp,id,type_statement){
        //    console.log('funcView',resp,id,type_statement)
        //    if(typeof beforeFuncView == 'function' ){
        //        beforeFuncView(resp,id,type_statement);
        //    }
        //    $.each($.parseJSON(resp['table']),function(index,value){
        //        if(typeof value == 'object'){
        //            $.each(value, function(sub_index,sub_value){
        //                if($('[data-block='+index+'] '+ '[name='+sub_index+']').attr('type') == 'radio'){
        //                    $('[data-block='+index+'] '+ '[name='+sub_index+']' + '[value='+scr(sub_value)+']').prop('checked',true);
        //                }else if($('[name='+sub_index+']').attr('type') == 'checkbox'){
        //                    $('[name="'+sub_index+'"]').prop('checked',true);
        //                } else{
        //                    $('[data-block='+index+'] '+ '[name='+sub_index+']').val(scr(sub_value));
        //                }
        //                if(sub_index == 'table'){
        //                    $.each(sub_value, function(sub_sub_index,sub_sub_value){
        //                        $.each(sub_sub_value, function(index_to_table,value_to_table){
        //                            if($('[data-table='+sub_sub_index+'] .tbody').prop('nodeName') == 'DIV' && !$('[data-table='+sub_sub_index+'] .tbody').hasClass('no_empty')){
        //                                $('[data-table='+sub_sub_index+'] .tbody').addClass('no_empty');
        //                                $('[data-table='+sub_sub_index+'] .tbody').empty();
        //                            }
        //                            var p = func_table_filling(sub_sub_index,value_to_table);
        //                            $('[data-table='+sub_sub_index+'] .tbody').append(p);
        //                        });
        //                    });
        //                }
        //            });
        //        }else{
        //            if($('[name='+index+']').attr('type') == 'radio'){
        //                $('[name="'+index+'"]' + '[value="'+scr(value)+'"]').prop('checked',true);
        //            } else if($('[name='+index+']').attr('type') == 'checkbox'){
        //                $('[name="'+index+'"]').prop('checked',true);
        //            } else {
        //                console.log(scr(value));
        //                $('[name='+index+']').val(scr(value));
        //            }
        //        }
        //        console.log("_______________________________________________");
        //        $('.statement_main input,.statement_main button,.statement_main textarea,.statement_main a,.statement_main select').not('#real_estate_property,#accompanying_document_').addClass('disabled_view');
        //        $('#reg_encumbrance_form input,#reg_encumbrance_form button,#reg_encumbrance_form textarea,#reg_encumbrance_form a,#reg_encumbrance_form select').not('.change_encumbrance,#real_estate_property,#accompanying_document_').addClass('disabled_view');
        //        $('#reg_rights_rem_form input,#reg_rights_rem_form button,#reg_rights_rem_form textarea,#reg_rights_rem_form a,#reg_rights_rem_form select').not('.change_encumbrance,#real_estate_property,#accompanying_document_').addClass('disabled_view');
        //    });
        //    if(typeof afterFuncView == 'function' ){
        //        afterFuncView(resp,id,type_statement);
        //    }
    //};
	window.save_components = function($value){
        var tr = '<input type="hidden" name="parts_warehouses_cadastral_number[]" value="'+undVal($value.cadastral_number)+'" class="cadastral_number_modal" data-inputedit="">'+
            '<td><textarea name="parts_warehouses_type_components[]" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.type_components)+'</textarea></td>'+
            '<td><textarea name="parts_warehouses_other_type_components[]" readonly class="form-control input-sm other_type_components_modal" data-inputedit="">'+undVal($value.other_type_components)+'</textarea></td>'+
            '<td><textarea name="parts_warehouses_number_components[]" readonly class="form-control input-sm number_components_modal" data-inputedit="">'+undVal($value.number_components)+'</textarea></td>'+
            '<td><textarea name="parts_warehouses_letter_components[]" readonly class="form-control input-sm letter_components_modal" data-inputedit="">'+undVal($value.letter_components)+'</textarea></td>'+
            '<td><textarea name="parts_warehouses_address[]" readonly class="form-control input-sm address_modal" data-inputedit="">'+undVal($value.address)+'</textarea></td>'+
            '<td><button class="btn btn-sm btn-block btn-danger remove_line" type="button"><span class="glyphicon glyphicon-pencil"></span></button>'+
            '<td><button class="btn btn-sm btn-block btn-success edit_line" type="button" data-editprefix="parts_warehouses_" data-showmodal="#parts_warehouses" data-savebuttonmodal="#parts_warehouses #save_components"><b>|</b></button>';
        return tr;
    };

    window.accompanying_document = function($value){
                
        var tr = '<input type="hidden" name="accompanying_document_subtype[]" value="'+undVal($value.accompanying_document_subtype)+'">'+
            '<input type="hidden" name="accompanying_document_certifiertwo[]" value="'+undVal($value.accompanying_document_certifiertwo)+'">'+
            '<td><input type="text" class="form-control input-sm" readonly name="accompanying_document_type[]" value="'+undVal($value.accompanying_document_type)+'"></td>'+
            '<td><input type="text" class="form-control input-sm" readonly name="accompanying_document_number[]" value="'+undVal($value.accompanying_document_number)+'"></td>'+
            '<td><input type="text" class="form-control input-sm" readonly name="accompanying_document_date_get[]" value="'+undVal($value.accompanying_document_date_get)+'"></td>'+
            '<td><input type="text" class="form-control input-sm" readonly name="accompanying_document_certifier[]" value="'+undVal($value.accompanying_document_certifier)+'"></td>'+
            '<td><button class="btn btn-block btn-sm btn-warning change_tr" type="button" data-toggle="modal" data-target="#change_accompanying_documents"><span class="glyphicon glyphicon-pencil"></span></button></td>'+
            '<td><button class="btn btn-block btn-sm btn-danger delete_tr" type="button"><b>X</b></button></td>';
            return tr;
    };
    

	window.save_legal = function($attr_value,editprefix,showmodal,savebuttonmodal){
        if(typeof editprefix == 'undefined'){
            editprefix = 'applicant_';
        }

        if(typeof showmodal == 'undefined'){
            showmodal = '#applicant_legal';
        }

        if(typeof savebuttonmodal == 'undefined'){
            savebuttonmodal = '#applicant_legal #save_legal';
        }

        var tr = '<input type="hidden" name="'+editprefix+'face_subject[]" class="face_subject_modal" data-inputedit="radio:face_subject>face_subjectChange" value="'+undVal($attr_value.face_subject)+'">'+
            '<input type="hidden" name="'+editprefix+'date_get_document[]" class="date_get_document_modal" data-inputedit="" value="'+undVal($attr_value.date_get_document)+'">'+
            '<input type="hidden" name="'+editprefix+'citizenship[]" class="citizenship_modal" data-inputedit="" value="'+undVal($attr_value.citizenship)+'">'+
            '<input type="hidden" name="'+editprefix+'document_personal[]" class="document_personal_modal" data-inputedit="" value="'+undVal($attr_value.document_personal)+'">'+
            '<input type="hidden" name="'+editprefix+'document_personal_seria_number[]" class="document_personal_seria_number_modal" data-inputedit="" value="'+undVal($attr_value.document_personal_seria_number)+'">'+
            '<input type="hidden" name="'+editprefix+'other_document[]" class="other_document_modal" data-inputedit="" value="'+undVal($attr_value.other_document)+'">'+
            '<input type="hidden" name="'+editprefix+'date_document[]" class="date_document_modal" data-inputedit="" value="'+undVal($attr_value.date_document)+'">'+
            '<input type="hidden" name="'+editprefix+'issuing_authority[]" class="issuing_authority_modal" data-inputedit="" value="'+undVal($attr_value.issuing_authority)+'">'+
            '<input type="hidden" name="'+editprefix+'individual_check_RNUK[]" class="individual_check_RNUK_modal" data-inputedit="checkbox:individual_check_RNUK>func_checkDisField(\'.individual_subject_RNUK_subject\',\'.individual_subject_ots_RNUK\',input.val())" value="'+undVal($attr_value.individual_check_RNUK)+'">'+ //.face_subject').attr('id') :check_RNUK >func_checkDisField(.individual_subject_RNUK_subject,.individual_subject_ots_RNUK)
            '<input type="hidden" name="'+editprefix+'entity_check_RNUK[]" class="entity_check_RNUK_modal" data-inputedit="checkbox:entity_check_RNUK>func_checkDisField(\'.entity_subject_RNUK_subject\',\'.entity_subject_ots_RNUK\',input.val())" value="'+undVal($attr_value.entity_check_RNUK)+'">'+ //.face_subject').attr('id') :check_RNUK >func_checkDisField(.individual_subject_RNUK_subject,.individual_subject_ots_RNUK)

            '<input type="hidden" name="'+editprefix+'check_citizenship[]" class="check_citizenship_modal" data-inputedit="checkbox:check_citizenship" value="'+undVal($attr_value.check_citizenship)+'">'+ //.face_subject').attr('id')
            '<input type="hidden" name="'+editprefix+'authorized_person_fio[]" class="authorized_person_fio_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_fio)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_RNUKPN[]" class="authorized_person_RNUKPN_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_RNUKPN)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_type_doc[]" class="authorized_person_type_doc_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_type_doc)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_num_doc[]" class="authorized_person_num_doc_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_num_doc)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_date_doc[]" class="authorized_person_date_doc_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_date_doc)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_certifier[]" class="authorized_person_certifier_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_certifier)+'">'+
            '<input type="hidden" name="'+editprefix+'authorized_person_dop_info[]" class="authorized_person_dop_info_modal" data-inputedit="" value="'+undVal($attr_value.authorized_person_dop_info)+'">'+
            '<input type="hidden" name="'+editprefix+'state[]" class="state_modal" data-inputedit="radio:state" value="'+undVal($attr_value.state)+'">'+
            '<input type="hidden" name="'+editprefix+'public_authority[]" class="public_authority_modal" data-inputedit="checkbox:public_authority" value="'+undVal($attr_value.public_authority)+'">'+
            '<input type="hidden" name="'+editprefix+'state_registration[]" class="state_registration_modal" data-inputedit="" value="'+undVal($attr_value.state_registration)+'">'+
            '<input type="hidden" name="'+editprefix+'address_correspondence[]" class="address_correspondence_modal" data-inputedit="" value="'+undVal($attr_value.address_correspondence)+'">'+
            '<input type="hidden" name="'+editprefix+'statemnt_person[]" class="statement_person_modal" data-inputedit="checkbox:statemnt_person>func_statemntPerson($(\'.statemnt_person\').prop(\'checked\'))" value="'+undVal($attr_value.statemnt_person)+'">'+
            '<input type="hidden" name="'+editprefix+'other_information[]" class="other_information_modal" data-inputedit="" value="'+undVal($attr_value.other_information)+'">'+
            '<input type="hidden" name="'+editprefix+'individual_subject_ots_RNUK[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.individual_subject_ots_RNUK)+'">'+ //+
            '<input type="hidden" name="'+editprefix+'entity_subject_ots_RNUK[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.entity_subject_ots_RNUK)+'">'+         //+
            '<input type="hidden" name="'+editprefix+'individual_subject_RNUK_subject[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.individual_subject_RNUK_subject)+'">'+     //+
            '<input type="hidden" name="'+editprefix+'entity_subject_RNUK_subject[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.entity_subject_RNUK_subject)+'">'+     //+
            '<input type="hidden" name="'+editprefix+'individual_subject_fio_subject[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.individual_subject_fio_subject)+'">'+   //+
            '<input type="hidden" name="'+editprefix+'entity_subject_fio_subject[]" class="lack_reason_modal" data-inputedit="" value="'+undVal($attr_value.entity_subject_fio_subject)+'">'+    //+
            '<td><input type="text" name="'+editprefix+'app_sub[]" class="form-control input-sm app_sub_modal" data-valid_block="true" data-inputedit="input:app_sub>SplitAndChecked( input.val(), $(\'#applic li .applicant\') )" readonly value="'+undVal($attr_value.app_sub)+'"></td>'+
            '<td><textarea name="'+editprefix+'fio_subject[]" readonly class="form-control input-sm fio_subject_modal"  data-inputedit="">'+undVal($attr_value.fio_subject)+'</textarea></td>'+
            '<td><textarea name="'+editprefix+'RNUK_subject[]" class="form-control input-sm RNUK_subject_modal" readonly data-inputedit="">'+undVal($attr_value.RNUK_subject)+'</textarea></td>'+
            '<td><textarea name="'+editprefix+'telephone[]" class="form-control input-sm telephone_modal" readonly data-inputedit="">'+undVal($attr_value.telephone)+'</textarea></td>'+
            '<td><textarea name="'+editprefix+'address_liven[]" class="form-control input-sm address_liven_modal" readonly data-inputedit="">'+undVal($attr_value.address_liven)+'</textarea></td>'+
            '<td><button class="btn btn-sm btn-block btn-warning edit_line" type="button" data-editprefix="'+editprefix+'" data-showmodal="'+showmodal+'" data-savebuttonmodal="'+savebuttonmodal+'" ><span class=" glyphicon glyphicon-pencil"></span></button>'+
            '<td><button class="btn btn-sm btn-block btn-danger remove_line" type="button">X</button>';
        return tr;
    };

    window.search_statement = function($value, flag_edit){
        var tr =
            '<td><textarea name="" readonly name="id" class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.id)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+formatDate($value.created_at)+'</textarea></td>'+
            //'<td><textarea name="" readonly class="form-control input-sm other_type_components_modal" data-inputedit="">'+formatDate($value.outgoing_date))+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm number_components_modal" data-inputedit="">'+valSelectNotObj( $value.state , {'registered': 'Зарегистрировано','accept_solution': 'Принято решение', } )+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm letter_components_modal" data-inputedit="">'+valSelectNotObj( $value.type_statement , {'Z_Gos_Reg_Prav': 'Заявление о государственной регистрации права', Z_Gos_Reg_Obrem:  'Заявление о государственной регистрации обременения прав на недвижимое имущество' } )+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.organization_user)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.fio_user)+'</textarea></td>'+
            '<td><a class="btn btn-sm btn-block btn-warning get_view" type="button" href="/statement/watch_statement/'+undVal($value.id)+'"><b>Просмотр</b></a>'+
            (flag_edit == true ? '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="/statement/action_statement/'+undVal($value.id)+'"><b>Действие</b></a></td>' : '');
        return tr;
    };

    window.search_encumbrance = function($value, flag_edit, url){
        var tr =
            '<td><textarea name="" readonly name="id" class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.id)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+formatDate($value.created_at)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm encumbrance_type_encumbrance_modal" data-inputedit="">'+undVal($value.encumbrance_type_encumbrance)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm number_components_modal" data-inputedit="">'+valSelectNotObj( undVal($value.state) , {'registered': 'Зарегистрировано' } )+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm letter_components_modal" data-inputedit="">'+undVal($value.reg_num_in_book_encumbrance)+'</textarea></td>'+
            '<td><a class="btn btn-sm btn-block btn-warning get_view" type="button" href="'+undVal(url)+'/watch_encumbrance/'+undVal($value.id)+'"><b>Просмотр</b></a>'+
            (flag_edit == true ? '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="'+undVal(url)+'/action_encumbrance/'+undVal($value.id)+'"><b>Действие</b></a></td>' : '');
        return tr;
    };

    window.remove_solution = function($value, flag_edit, url = ''){
        var tr =
            '<td><textarea name="" readonly name="id" class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.id)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+formatDate($value.created_at)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm encumbrance_type_encumbrance_modal" data-inputedit="">'+valSelectNotObj( undVal($value.name_report) , {'resheniye_o_gosudarstvennoy_registratsii_prav_na_nedvizhimoye_imushchestvo': 'Решение о государственной регистрации прав' } )+'</textarea></td>'+
            //'<td><textarea name="" readonly class="form-control input-sm number_components_modal" data-inputedit="">'+valSelectNotObj( undVal($value.state) , {'registered': 'Зарегистрировано' } )+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm letter_components_modal " data-inputedit="">'+( ($value.deleted_at != null) ? 'Аннулировано' : 'Активно')+'</textarea></td>'+
            '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="/print/solution/'+undVal($value.state)+'/'+undVal($value.id)+'"><b>Печать</b></a>'+
            (flag_edit == true ? '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="'+undVal(url)+'/remove_solution/'+undVal($value.id)+'"><b>Аннулирование</b></a></td>' : '');
        return tr;
    };

    window.get_documents = function($value, flag_edit, url = ''){
        var tr =                                                                                //resheniye_o_gosudarstvennoy_registratsii_prav_na_nedvizhimoye_imushchestvo
            '<td><textarea name="" readonly name="id" class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.id)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+formatDate($value.created_at)+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm encumbrance_type_encumbrance_modal" data-inputedit="">'+valSelectNotObj( undVal($value.name_report) , {'resheniye_o_gosudarstvennoy_registratsii_prav_na_nedvizhimoye_imushchestvo': 'Решение о государственной регистрации прав','izvlecheniye': 'Извлечение о государственной регистрации обременений прав на недвижимое имущество','Inform_spravka_o_nalichii_informatsii' : 'Информационная справка из Государственного реестра прав на недвижимое имущество и их обременений Луганской Народной Республики о зарегистрированных обременениях прав на недвижимое имущество' } )+'</textarea></td>'+
            '<td><textarea name="" readonly class="form-control input-sm letter_components_modal " data-inputedit="">'+( ($value.deleted_at != null) ? 'Аннулировано' : 'Активно')+'</textarea></td>'+
            '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="documents/print/'+undVal($value.name_report)+'/'+undVal($value.id)+'"><b>Печать</b></a>';
            //(flag_edit == true
            //    ?
            //        '<td><a class="btn btn-sm btn-block btn-warning" type="button" href="'+undVal(url)+'/remove_solution/'+undVal($value.id)+'"><b>Аннулирование</b></a></td>'
            //    :
            //        ''
            //);
        return tr;
    };

    window.funcCard = function($value){
        var tr = '<td><textarea name="" readonly name="id" class="form-control input-sm type_components_modal" data-inputedit="">'+undVal($value.accompanying_document_type)+'</textarea></td>'+
        '<td><textarea name="" readonly class="form-control input-sm other_type_components_modal" data-inputedit="">'+undVal($value.accompanying_document_number)+'</textarea></td>'+
        '<td><textarea name="" readonly class="form-control input-sm type_components_modal" data-inputedit="">'+formatDate($value.accompanying_document_date_get)+'</textarea></td>'+
        '<td><textarea name="" readonly class="form-control input-sm number_components_modal" data-inputedit="">'+''+'</textarea></td>';
        return tr;
    };

    window.document_base_encumbrance = function($value,editprefix){
        console.log('document_base_encumbrance',$value);
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
        var tr = '<input type="hidden" name="document_base_addition_type[]" class="addition_type_modal" value="'+undVal($value.document_base_addition_type)+'">'+
            '<td><textarea readonly  name="document_base_type_document[]" class="form-control input-sm type_document_modal">'+undVal($value.document_base_type_document)+'</textarea></td>'+
            '<td><textarea readonly name="document_base_number_document[]" class="form-control input-sm number_document_modal">'+undVal($value.document_base_number_document)+'</textarea></td>'+
            '<td><textarea readonly name="document_base_date_document[]" class="form-control input-sm date_document_modal">'+undVal($value.document_base_date_document)+'</textarea></td>'+
            '<td><textarea readonly name="document_base_certifier[]" class="form-control input-sm certifier_modal">'+undVal($value.document_base_certifier)+'</textarea></td>'+
            '<td><textarea readonly name="document_base_addition_info[]" class="form-control input-sm addition_info_modal">'+undVal($value.document_base_addition_info)+'</textarea></td>'+
            '<td><textarea readonly name="document_base_add_document_base[]" class="form-control input-sm add_document_base">'+undVal($value.document_base_add_document_base)+'</textarea></td>'+
            '<td><button class="btn btn-block btn-sm btn-warning change_document_tr" type="button" data-toggle="modal" data-target="#document_base_change"><span class="glyphicon glyphicon-pencil"></span></button></td>'+
            '<td><button class="btn btn-block btn-sm btn-danger delete_document_tr" type="button"><b>X</b></button></td>';
        return tr;
    };

    window.document_base = function($value,editprefix){
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
        var tr = '<input type="hidden" name="document_base_addition_type[]" class="addition_type_modal" value="'+undVal($value.document_base_addition_type)+'">'+
            '<td><textarea readonly name="'+editprefix+'document_base_type_document[]" class="form-control input-sm type_document_modal">'+undVal($value.type_document)+'</textarea></td>'+
            '<td><textarea readonly name="'+editprefix+'document_base_number_document[]" class="form-control input-sm number_document_modal">'+undVal($value.number_document)+'</textarea></td>'+
            '<td><textarea readonly name="'+editprefix+'document_base_date_document[]" class="form-control input-sm date_document_modal">'+undVal($value.date_document_base)+'</textarea></td>'+
            '<td><textarea readonly name="'+editprefix+'document_base_certifier[]" class="form-control input-sm certifier_modal">'+undVal($value.certifier)+'</textarea></td>'+
            '<td><textarea readonly name="'+editprefix+'document_base_addition_info[]" class="form-control input-sm addition_info_modal">'+undVal($value.addition_info)+'</textarea></td>'+
            '<td><textarea readonly name="'+editprefix+'document_base_add_document_base[]" class="form-control input-sm add_document_base_modal">'+undVal($value.add_document_base)+'</textarea></td>'+
            '<td><button class="btn btn-block btn-sm btn-warning change_document_base_tr button_add_change_document_base" value="2" type="button" data-toggle="modal" data-target="#document_base"><span class="glyphicon glyphicon-pencil"></span></button></td>'+
            '<td><button class="btn btn-block btn-sm btn-danger delete_document_base_tr" type="button"><b>X</b></button></td>';
        return tr;
    };


    window.payment = function($value,editprefix){
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
        var tr = 
            '<input type="hidden" name="payment_base[]" class="base_table" value="'+undVal($value.payment_base)+'">'+
            '<input type="hidden" name="payment_supplement_base[]" class="supplement_base_table" value="'+undVal($value.payment_supplement_base)+'">'+
            '<input type="hidden" name="payment_type_document[]" class="type_document_table" value="'+undVal($value.payment_type_document)+'">'+
            '<input type="hidden" name="payment_more[]" class="more_payment_table" value="'+undVal($value.payment_more)+'">'+
            '<input type="hidden" name="payment_institution_personal[]" class="institution_personal_modal" value="'+undVal($value.payment_institution_personal)+'">'+
            '<input type="hidden" name="payment_info_release_checked[]" class="payment_info_release_checked" value="'+undVal($value.payment_info_release_checked)+'">'+
            '<input type="hidden" name="payment_date_info[]" class="payment_date_info" value="'+undVal($value.payment_date_info)+'">'+
            '<input type="hidden" name="payment_date_release[]" class="payment_date_release" value="'+undVal($value.payment_date_release)+'">'+
            '<input type="hidden" name="payment_number_info[]" class="payment_number_info" value="'+undVal($value.payment_number_info)+'">'+
            '<input type="hidden" name="payment_number_release[]" class="payment_number_release" value="'+undVal($value.payment_number_release)+'">'+
            '<td><input type="text" name="payment_type[]" readonly class="payment_type_table form-control input-sm" value="'+undVal($value.payment_type)+'"></td>'+
            '<td><input type="text" name="payment_date[]" readonly class="date_payment_table form-control input-sm" value="'+undVal($value.payment_date)+'"></td>'+
            '<td><input type="text" name="payment_number[]" readonly class="number_payment_table form-control input-sm" value="'+undVal($value.payment_number)+'"></td>'+
            '<td><textarea name="payment_institution[]" readonly class="institution_table form-control input-sm">'+undVal($value.payment_institution)+'</textarea></td>'+
            '<td><textarea name="payment_amount[]" readonly class="payment_amount_table form-control input-sm">'+undVal($value.payment_amount)+'</textarea></td>'+
            '<td>'+
            '<button type="button" class="btn btn-sm btn-block btn-warning btn_change_payment" data-toggle="modal" data-target="#modal_change"><span class="glyphicon glyphicon-pencil"></span></button>'+
            '</td>'+
            '<td>'+
            '<button type="button" class="btn btn-sm btn-block btn-danger btn_delete_payment"><b>Х</b></button>'+
            '</td>';
            return tr;
    };

    window.addr_property = function($value,editprefix){
        if(typeof $value =='undefined' || $value == ''){
            console.error('Пустое значение $value')
            return '';
        }
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
        function createAndSelected(option,selected_item){
            var opt = '<option></option>';
            $.each(option, function(index,item){
                opt += `<option ${(item == selected_item) ? 'selected' : '' } >${item}</option>`
            })
            return opt;
        }

        var tr = 			`<div class="addr_block"><div class="street_components">
                <div class="row">
                    <div class="col-md-3"><h5>Тип улицы:</h5></div>
                    <div class="col-md-8">
                        <select class="form-control input-sm type_street_components" name="${editprefix}addr_property_type_street[]" id="addr_property_type_street"  value="${undVal($value.addr_property_type_street)}">
                            ${createAndSelected( ['улица','площадь','переулок','проспект','бульвар','иное' ], undVal($value.addr_property_type_street))}
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Название улицы:</h5></div>
                    <div class="col-md-8">
                        <div class="input-group  input-group-sm">
                            <div class="ui-widget">
                                <datalist id="real_estate_property_street_list">
                                </datalist>
                            </div>
                            <input data-emptyLi="" list="real_estate_property_street_list" type="text" id="real_estate_property_street" class="form-control input-sm name_street_components" name="${editprefix}addr_property_name_street[]" value="${undVal($value.addr_property_name_street)}">
                            <select id="real_estate_property_street_select" class="form-control input-sm" style="display: none">
                            </select>
                            <input style="width:100px; position: absolute;left: 300px;bottom: 0;" type="text" class="form-control input-sm name_street_components" id="real_estate_property_street_id"  name="${editprefix}addr_property_name_street_id[]" value="${undVal($value.addr_property_name_street_id)}">
                        </div>
                    </div>
                    <div class="col-md-1">
                        <button type="button" class="btn btn-sm btn-block btn-success" id="button_add_street_object">
                            <b>+</b></button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Тип:</h5></div>
                    <div class="col-md-3">
                        <select class="form-control input-sm type_house_components" name="${editprefix}addr_property_type_house[]" value="${undVal($value.addr_property_type_house)}">
                            ${createAndSelected( ['дом'], undVal($value.addr_property_type_house))}
                        </select>
                    </div>
                    <div class="col-md-1">
                        <h5>№:</h5>
                    </div>
                    <div class="col-md-4"><input type="text" class="form-control input-sm number_type_house_components" name="${editprefix}addr_property_num_type_house[]" value="${undVal($value.addr_property_num_type_house)}">
                    </div>
                </div>
            </div>
            <div class="object_components">
                <div class="row">
                    <div class="col-md-3"><h5>Тип объекта:</h5></div>
                    <div class="col-md-8">
                        <select class="form-control input-sm type_object_components" id="addr_property_object_type_object" name="${editprefix}addr_property_object_type_object[]" data-inputid="addr_property_object_type_object" value="${undVal($value.addr_property_object_type_object)}" disabled>
                            ${createAndSelected( ['садовое общество','гаражный кооператив','иное'], undVal($value.addr_property_object_type_object))}
                        </select>
                        <input type="text" style="display:none" class="form-control input-sm" id="addr_property_object_type_object_id" name="${editprefix}addr_property_object_type_object_id[]" value="${undVal($value.addr_property_object_type_object_id)}" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Название:</h5></div>
                    <div class="col-md-8">
                        <div class="input-group  input-group-sm">
                            <div class="ui-widget">
                                <datalist id="real_estate_property_object_components_list">
                                </datalist>
                            </div>
                            <input data-emptyLi="" list="real_estate_property_object_components_list" type="text" id="real_estate_property_object_components" class="form-control input-sm name_street_components" name="${editprefix}addr_property_object_name_type_object_components[]" value="${undVal($value.addr_property_object_name_type_object_components)}">
                            <select id="real_estate_property_object_components_select" class="form-control input-sm" style="display: none">
                            </select>
                            <input style="width:100px; position: absolute;left: 300px;bottom: 0;" type="text" class="form-control input-sm name_type_object_components" id="real_estate_property_street_id"  name="${editprefix}addr_property_object_name_type_object_components_id[]" value="${undVal($value.addr_property_object_name_type_object_components_id)}" disabled>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-3"><h5>Тип:</h5></div>
                    <div class="col-md-3">
                        <select class="form-control input-sm type_object_house_components" name="${editprefix}addr_property_type_object_house_components[]" value="${undVal($value.addr_property_type_object_house_components)}" disabled>
                           ${createAndSelected( ['дом'], undVal($value.addr_property_type_object_house_components))}
                        </select>
                    </div>
                    <div class="col-md-1">
                        <h5>№:</h5>
                    </div>
                    <div class="col-md-4"><input type="text" class="form-control input-sm number_type_object_house_components" name="${editprefix}addr_property_number_type_object_house_components[]" value="${undVal($value.addr_property_number_type_object_house_components)}" disabled></div>
                </div>
            </div>
            <div class="street_object_components">
                <div class="row">
                    <div class="col-md-3"><h5>Тип объекта:</h5></div>
                    <div class="col-md-8">
                        <select class="form-control input-sm type_object_street_components" name="${editprefix}addr_property_type_object_street_components[]" value="${undVal($value.addr_property_type_object_street_components)}" disabled>
                            ${createAndSelected( ['садовое общество','гаражный кооператив','площадь','переулок'], undVal($value.addr_property_type_object_street_components))}
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Название:</h5></div>
                    <div class="col-md-8">
                        <div class="input-group input-group-sm">
                            <div class="ui-widget">
                                <datalist id="name_type_object_object_street_components_list">
                                </datalist>
                            </div>
                            <input data-emptyLi="" list="name_type_object_object_street_components_list" type="text" id="name_type_object_object_street_components" class="form-control input-sm name_type_object_object_street_components" name="${editprefix}addr_property_object_name_type_object_object_street_components[]" value="${undVal($value.addr_property_object_name_type_object_object_street_components)}" disabled>
                            <select id="name_type_object_object_street_components_select" class="form-control input-sm" style="display: none">
                            </select>
                            <input style="width:100px; position: absolute;left: 300px;bottom: 0;" type="text" class="form-control input-sm name_type_object_object_street_components" id="name_type_object_object_street_components_id"  name="${editprefix}addr_property_object_name_type_object_object_street_components_id[]" value="${undVal($value.addr_property_object_name_type_object_object_street_components_id)}" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Тип улицы:</h5></div>
                    <div class="col-md-8">
                        <select class="form-control input-sm type_street_object_street_components" name="${editprefix}addr_property_type_street_object_street_components[]" value="${undVal($value.addr_property_type_street_object_street_components)}"  disabled>
                            ${createAndSelected( ['улица','площадь','переулок','проспект','бульвар','иное'], undVal($value.addr_property_type_street_object_street_components))}
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Название улицы:</h5></div>
                    <div class="col-md-8">
                        <div class="input-group input-group-sm">
                            <div class="ui-widget">
                                <datalist id="name_type_street_object_street_components_list">
                                </datalist>
                            </div>
                            <input data-emptyLi="" list="name_type_street_object_street_components_list" type="text" id="name_type_street_object_street_components" class="form-control input-sm name_type_object_street_components" name="${editprefix}addr_property_object_name_type_street_object_street_components[]" value="${undVal($value.addr_property_object_name_type_street_object_street_components)}" disabled>
                            <select id="name_type_street_object_street_components_select" class="form-control input-sm" style="display: none">
                            </select>
                            <input style="width:100px; position: absolute;left: 300px;bottom: 0;" type="text" class="form-control input-sm name_type_object_street_components" id="name_type_street_object_street_components_id"  name="${editprefix}addr_property_object_name_type_street_object_street_components_id[]" value="${undVal($value.addr_property_object_name_type_street_object_street_components_id)}" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"><h5>Тип:</h5></div>
                    <div class="col-md-3">
                        <select class="form-control input-sm type_street_object_components" name="${editprefix}addr_property_type_street_object_components[]" value="${undVal($value.addr_property_type_street_object_components)}" disabled>
                           ${createAndSelected( ['дом'], undVal($value.addr_property_type_street_object_components))}
                        </select>
                    </div>
                    <div class="col-md-1">
                        <h5>№:</h5>
                    </div>
                    <div class="col-md-4"><input type="text" class="form-control input-sm name_type_street_object_components" name="${editprefix}addr_property_name_type_street_object_components" value="${undVal($value.addr_property_name_type_street_object_components)}" disabled>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3"><h5>Подтип:</h5></div>
                <div class="col-md-3">
                    <select class="form-control input-sm subtype_house_components" name="${editprefix}addr_property_subtype_house[]" value="${undVal($value.addr_property_subtype_house)}">
                       ${createAndSelected( ['корпус','секция'], undVal($value.addr_property_subtype_house))}
                    </select>
                </div>
                <div class="col-md-1">
                    <h5>№:</h5>
                </div>
                <div class="col-md-4"><input type="text" class="form-control input-sm number_subtype_house_components" name="${editprefix}addr_property_num_subtype_house[]" value="${undVal($value.addr_property_num_subtype_house)}"></div>
            </div>
            <div class="row">
                <div class="col-md-3"><h5>Тип номера:</h5></div>
                <div class="col-md-3">
                    <select class="form-control input-sm type_number" name="${editprefix}addr_property_type_number[]" value="${undVal($value.addr_property_type_number)}">
                       ${createAndSelected( ['квартира','помещение','бокс','комната','гараж'], undVal($value.addr_property_type_number))}
                    </select>
                </div>
                <div class="col-md-1">
                    <h5>№:</h5>
                </div>
                <div class="col-md-4"><input type="text" class="form-control input-sm number_type_number_components" name="${editprefix}addr_property_num_type_number[]" value="${undVal($value.addr_property_num_type_number)}"></div>
            </div>
            <div class="row">
                <div class="col-md-3"><h5>Подтип номера:</h5></div>
                <div class="col-md-3"><input type="text" class="form-control input-sm subtype_number_components" name="${editprefix}addr_property_num_subtype_number[]" value="${undVal($value.addr_property_num_subtype_number)}">
                </div>
                <div class="col-md-1">
                    <h5>№:</h5>
                </div>
                <div class="col-md-4"><input type="text" class="form-control input-sm addr_property_number_subtype_number_components" name="${editprefix}addr_property_number_subtype_number_components[]" value="${undVal($value.addr_property_number_subtype_number_components)}"></div>
            </div></div>`;



        return tr;
    }


    window.cost_estimate_= function($value,editprefix){
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
         var tr = '<input type="hidden" name="cost_estimate_components_addition_form_[]" class="components_addition_form_modal" value="'+undVal($value.addition_form_components)+'" data-inputedit="input:addition_form_components" >'+ //>SplitAndChecked( input.val(), $(\'#applic li .applicant\') )
        '<input type="hidden" name="cost_estimate_components_own_built[]" class="components_own_built_modal" value="'+undVal($value.cost_estimate_components_own_built)+'" data-inputedit="checkbox:own_built_components" >'+
        '<input type="hidden" name="cost_estimate_doc_components_[]" class="formToJson" value="'+ scr($value.components_document_base_cost_form)+'" data-inputedit="input>jsonToForm($(\'#components_document_base_cost_form .table_document_cost_components\'),cost_form,input.val())" >'+
        '<td><textarea name="cost_estimate_components_type_evaluation[]"  readonly class="form-control input-sm components_type_evaluation_modal" data-inputedit="input:type_evaluation_components" >'+undVal($value.type_evaluation_components)+'</textarea></td>'+
        '<td><textarea name="cost_estimate_components_valuation_date[]"  readonly class="form-control input-sm components_valuation_date_modal" data-inputedit="input:valuation_date_components" >'+undVal($value.valuation_date_components)+'</textarea></td>'+
        '<td><textarea name="cost_estimate_components_cost[]"  readonly class="form-control input-sm components_cost_modal" data-inputedit="input:cost_components" >'+undVal($value.cost_components)+'</textarea></td>'+
        '<td><textarea name="cost_estimate_components_currency[]"  readonly class="form-control input-sm components_currency_modal" data-inputedit="input:currency_components" >'+undVal($value.currency_components)+'</textarea></td>'+
        '<td><button class="btn btn-block btn-sm btn-warning edit_line" type="button" data-editprefix="cost_estimate_" data-showmodal="#components_cost_estimate" data-savebuttonmodal="#components_cost_estimate #add_cost_components_table"><span class="glyphicon glyphicon-pencil"></span></button></td>'+
        '<td><button class="btn btn-block btn-sm btn-danger remove_line" type="button"><b>X</b></button></td>';
        return tr;
    };

    window.cost_form= function($value,from_json,editprefix){
        if(typeof editprefix == 'undefined'){
            editprefix = '';
        }
        console.log($value);
        var tr = `<input type="hidden" form="components_document_base_cost_form" name="${undVal(editprefix)}doc_addition_type_cost_components[]"  data-inputedit="input:addition_type_cost_components" class="doc_addition_type_cost_components" value="${undVal($value.doc_addition_type_cost_components)}">
        <td><textarea readonly form="components_document_base_cost_form" name="${undVal(editprefix)}doc_type_document_cost_components[]" data-inputedit="input:type_document_cost_components" class="form-control input-sm doc_type_document_cost_components">${undVal($value.doc_type_document_cost_components)}</textarea></td>
        <td><textarea readonly form="components_document_base_cost_form" name="${undVal(editprefix)}doc_number_document_cost_components[]" data-inputedit="input:number_document_cost_components" class="form-control input-sm doc_number_document_cost_components">${undVal($value.doc_number_document_cost_components)}</textarea></td>
        <td><textarea readonly form="components_document_base_cost_form" name="${undVal(editprefix)}doc_date_document_cost_components[]" data-inputedit="input:date_document_cost_components" class="form-control input-sm doc_date_document_cost_components">${undVal($value.doc_date_document_cost_components)}</textarea></td>
        <td><textarea readonly form="components_document_base_cost_form" name="${undVal(editprefix)}doc_certifier_cost_components[]" data-inputedit="input:certifier_cost_components" class="form-control input-sm doc_certifier_cost_components">${undVal($value.doc_certifier_cost_components)}</textarea></td>
        <td><textarea readonly form="components_document_base_cost_form" name="${undVal(editprefix)}doc_addition_info_cost_components[]" data-inputedit="input:addition_info_cost_components" class="form-control input-sm doc_addition_info_cost_components">${undVal($value.doc_addition_info_cost_components)}</textarea></td>
        <td><button class="btn btn-block btn-sm btn-warning edit_line" type="button" data-toggle="modal" data-target="#document_base_change_components"  data-editprefix="" data-showmodal="#components_document_base_cost" data-savebuttonmodal="#add_document_cost_components"><span class="glyphicon glyphicon-pencil"></span></button></td>
        <td><button class="btn btn-block btn-sm btn-danger remove_line" type="button"><b>X</b></button></td>`;
        return tr;
    }


    window.document_termination = function($value){
        return `<tr>'+
            <input type="hidden" name="document_termination_addition_type_recall[]"  class="addition_type_recall_modal" value="${undVal($value.addition_type_recall)}">'+
            <td><textarea name="document_termination_type_document_termination[]" readonly class="form-control input-sm type_document_termination_modal">${undVal($value.type_document_termination)}</textarea></td>'+
            <td><textarea name="document_termination_number_document_termination[]" readonly class="form-control input-sm number_document_termination_modal">${undVal($value.number_document_termination)}</textarea></td>'+
            <td><textarea name="document_termination_date_document_termination[]" readonly class="form-control input-sm date_document_termination_modal">${undVal($value.date_document_termination)}</textarea></td>'+
            <td><textarea name="document_termination_certifier_recall[]" readonly class="form-control input-sm certifier_recall_modal">${undVal($value.certifier_recall)}</textarea></td>'+
            <td><textarea name="document_termination_addition_info_recall[]" readonly class="form-control input-sm addition_info_recall_modal">${undVal($value.addition_info_recall)}</textarea></td>'+
            <td><textarea name="document_termination_add_document_base_recall[]" readonly class="form-control input-sm add_document_termination_base_modal">${undVal($value.add_document_base_recall)}</textarea></td>'+
            <td><button class="btn btn-block btn-sm btn-warning change_document_termination_tr button_add_change_document_termination_statement" value="2" type="button" data-toggle="modal" data-target="#document_termination_statement"><span class="glyphicon glyphicon-pencil"></span></button></td>'+
            <td><button class="btn btn-block btn-sm btn-danger delete_document_termination_tr" type="button"><b>X</b></button></td>'+
            </tr>`;
    }

});


