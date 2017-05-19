//  «Невозможно» — это слово предназначено для словаря дураков.
jQuery.iicuTable = function(obj) {
    console.log(obj);
    var p = new iicuTable(obj);
    p.createTable()
};
jQuery(function($) {
    $.iicuTable({
        column: {
            id: 'outgoing_date',
            id1: 'name3',
            id2: 'name4',
        },
        data: JSON.parse('{"fio_user": "Елисеенко Алексей Дмитриевич", "payment_": {"table": {"payment_": [{"payment_base": "по обращению государственных органов", "payment_date": "", "payment_more": "", "payment_type": "государственная пошлина", "payment_amount": "Освобождение от оплаты", "payment_number": "", "payment_date_info": "", "payment_institution": "", "payment_number_info": "", "payment_date_release": "", "payment_type_document": "", "payment_number_release": "", "payment_supplement_base": "", "payment_info_release_checked": "2", "payment_institution_personal": ""}]}}, "applicant_": {"table": {"applicant_": [{"applicant_state": "", "applicant_app_sub": "Заявитель,Обременитель", "applicant_telephone": "0504548962", "applicant_citizenship": "", "applicant_fio_subject": "АГИС Артемовского р-на ЛНР", "applicant_RNUK_subject": "12131545", "applicant_face_subject": "entity_subject", "applicant_address_liven": "ЛНР, г. Луганск, ул. Тимирязева, 5", "applicant_date_document": "", "applicant_other_document": "", "applicant_statemnt_person": "", "applicant_public_authority": "", "applicant_check_citizenship": "on", "applicant_date_get_document": "", "applicant_document_personal": "паспорт", "applicant_entity_check_RNUK": "on", "applicant_issuing_authority": "", "applicant_other_information": "", "applicant_state_registration": "ЛНР", "applicant_authorized_person_fio": "", "applicant_individual_check_RNUK": "on", "applicant_address_correspondence": "ЛНР, г. Луганск, ул. Тимирязева, 5", "applicant_entity_subject_ots_RNUK": "", "applicant_authorized_person_RNUKPN": "", "applicant_authorized_person_num_doc": "", "applicant_authorized_person_date_doc": "", "applicant_authorized_person_dop_info": "", "applicant_authorized_person_type_doc": "", "applicant_entity_subject_fio_subject": "АГИС Артемовского р-на ЛНР", "applicant_authorized_person_certifier": "", "applicant_entity_subject_RNUK_subject": "12131545", "applicant_individual_subject_ots_RNUK": "", "applicant_document_personal_seria_number": "", "applicant_individual_subject_fio_subject": "", "applicant_individual_subject_RNUK_subject": ""}, {"applicant_state": "", "applicant_app_sub": "Должник", "applicant_telephone": "", "applicant_citizenship": "Украина", "applicant_fio_subject": "Ковров Олег Владимирович", "applicant_RNUK_subject": "1213241564", "applicant_face_subject": "individual_subject", "applicant_address_liven": "ЛНР, г. Луганск, ул. Ленина, 48", "applicant_date_document": "31.10.2012", "applicant_other_document": "", "applicant_statemnt_person": "", "applicant_public_authority": "", "applicant_check_citizenship": "on", "applicant_date_get_document": "", "applicant_document_personal": "паспорт", "applicant_entity_check_RNUK": "on", "applicant_issuing_authority": "УМВС В Артемовском районе г. Луганска", "applicant_other_information": "", "applicant_state_registration": "", "applicant_authorized_person_fio": "", "applicant_individual_check_RNUK": "on", "applicant_address_correspondence": "ЛНР, г. Луганск, ул. Ленина, 48", "applicant_entity_subject_ots_RNUK": "", "applicant_authorized_person_RNUKPN": "", "applicant_authorized_person_num_doc": "", "applicant_authorized_person_date_doc": "", "applicant_authorized_person_dop_info": "", "applicant_authorized_person_type_doc": "", "applicant_entity_subject_fio_subject": "", "applicant_authorized_person_certifier": "", "applicant_entity_subject_RNUK_subject": "", "applicant_individual_subject_ots_RNUK": "", "applicant_document_personal_seria_number": "ЕН125478", "applicant_individual_subject_fio_subject": "Ковров Олег Владимирович", "applicant_individual_subject_RNUK_subject": "1213241564"}]}}, "region_user": "Елисеенко Алексей Дмитриевич", "additionally": "", "addition_type": "", "outgoing_date": "29.11.2016", "type_statement": "Z_Gos_Reg_Obrem", "outgoing_number": "125", "organization_user": "Елисеенко Алексей Дмитриевич", "street_components": "1", "change_type_change": "", "ownership_form_own": "", "ownership_type_own": "", "documents_receiving": "personally", "real_estate_property_": {"table": {"addr_property_": [{"addr_property_type_house": "дом", "addr_property_name_street": "26 Бакинских комиссаров (н)", "addr_property_type_number": "квартира", "addr_property_type_street": "квартал", "addr_property_subtype_house": "корпус", "addr_property_name_street_id": "4411600000", "addr_property_num_type_house": "10", "addr_property_num_type_number": "", "addr_property_num_subtype_house": "", "addr_property_num_subtype_number": ""}], "number_land_property_": [{"number_land_property_cadastral": ""}]}, "real_estate_property_city": "", "real_estate_property_type": "квартира", "real_estate_property_city_id": "", "real_estate_property_subtype": "", "real_estate_property_district": "г. Красний Луч", "real_estate_property_republic": "Луганская Народная Республика", "real_estate_property_reg_number": "", "real_estate_property_description": "жилая комната - 18 кв.м., жилая - 14 кв.м., кухня - 9 кв.м.,, ванная - 7 кв.м., коридор - 8 кв.м., туалет - 3 кв.м.", "real_estate_property_district_id": "4411600000", "real_estate_property_republic_id": "4400000000", "real_estate_property_addition_type": "", "real_estate_property_addition_subtype": "", "real_estate_property_additional_information_components": ""}, "accompanying_document_": {"table": {"accompanying_document_": [{"accompanying_document_type": "Постановление", "accompanying_document_number": "147", "accompanying_document_subtype": "об аресте недвижимого имущества", "accompanying_document_date_get": "29.11.2016", "accompanying_document_certifier": "АГИС Артемовского р-на ЛНР", "accompanying_document_certifiertwo": ""}]}}, "ownership_type_registry": "", "change_reg_num_statement": "", "ownership_num_record_own": "", "change_Description_change": "", "reg_num_in_book_applicant": "147", "change_num_record_encumbrance": "", "other_ownership_type_registry": "", "change_num_ownerless_statement": "", "other_ownership_type_other_own": "", "number_subtype_number_components": "", "other_ownership_num_record_other": "", "other_ownership_addition_type_own": "", "registry_encumbrance_supplement_type": "", "dublicate_certificate_num_certificate": "", "registry_encumbrance_type_encumbrance": "арест недвижимого имущества", "registry_encumbrance_type_registration": "возникновение", "dublicate_certificate_seria_certificate": "", "dublicate_certificate_registry_num_statement": "", "registry_encumbrance_description_encumbrance": "", "registry_encumbrance_number_record_encumbrance": "5"}')
    });
});

window.clear_rec = false;
window.array_rec = [];
function Intersec(arr1,arr2){
    var idx = 0, arr3 = [];

    for (var i = 0; i < arr2.length; i++)
    {
        idx = arr1.indexOf(arr2[i]);
        if (idx >= 0) arr3.push(arr2[i]);
    }

    return arr3;
}
window.recursiveJson1 = (obj, func, pathVar = [] )=> {
    for(var key_obj1 in obj) {
        if(key_obj1 != 'clone' ){
            if(Object.prototype.toString.call(obj[key_obj1]) != '[object Array]' && Object.prototype.toString.call(obj[key_obj1]) != '[object Object]') {
                func({key: key_obj1, obj_val: obj[key_obj1], pathVar: pathVar, obj: obj});
            }
        }
    }
    for(var key_obj in obj) {
        if(key_obj == 'clone') {
            pathVar   = [];
            clear_rec = true;
        }
        if(Object.prototype.toString.call(obj[key_obj]) == '[object Array]') {
            if(Intersec(pathVar, Object.keys(obj[key_obj])).length > 0) {
                pathVar.pop();
                pathVar.pop();
            }
            pathVar.push(key_obj);
            recursiveJson(obj[key_obj], func, pathVar);
        } else{
            if(Object.prototype.toString.call(obj[key_obj]) == '[object Object]') {
                if(Object.prototype.toString.call(obj) == '[object Array]') {
                    console.log(1)
                    if(Intersec(pathVar, Object.keys(obj)).length > 0) {
                        pathVar.pop();
                    }
                } else {
                    if(clear_rec) {
                        pathVar   = [];
                        clear_rec = false
                    }
                }
                pathVar.push(key_obj);
                recursiveJson(obj[key_obj], func, pathVar);
            }
        }
    }
};
window.recursiveJson = (obj, func, pathVar )=> {
    array_rec.push(pathVar);
    if(typeof obj == 'object') {
        for(var a in obj){
            recursiveJson(obj[a], func, pathVar+'.'+a);
        }
    }
};
class iicuJson {
    constructor() {
        //this.pathVar            = [];
        //this.countFirstLevelKey = {};
    };

    createTable() {
        let a = this.data;
        prevKey = '';
        recursiveJson(a, (return_obj)=> {
            console.log(return_obj, prevKey);
        });
    };
}
class iicuTable {
    constructor(obj) {
        this.data    = obj.data;
        this.column    = obj.column;
        this.y       = obj.y;
        this.tr      = 'as';
        this.prevKey = '';
    };

    createTable() {
        let obj = this.data;
        let column = this.column;
        //console.log(this.data);

        for(var a in obj){

            recursiveJson(obj[a], (return_obj)=> {
                console.log(return_obj);
            }, a);
        }
        //var path = '';
        //$.each( array_rec[81].split('.'), function(index, item){
        //    path += '["'+item+'"]';
        //});

        let tr = '<tr>';
        let tr_thead = '';
        let tr_tbody = '';
        for(var thead_name in column){
            tr_thead+=`<td>${thead_name}</td>`;

        }
        tr+='</tr>';
        $('#iicuTable thead').append( tr );

        let tr = '<tr>';
        for(var thead_name in column){
            tr+=`<td>${thead_name}</td>`;
        }
        tr+='</tr>';
        $('#iicuTable thead').append( tr );
        //console.log(eval('obj'+path));

    };
}


