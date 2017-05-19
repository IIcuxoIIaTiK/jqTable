function create_test(){
    //model_questions.;

    model_questions[Object.keys(model_questions).length] = (
        {
            type: '#answer_template',
            caption: '',
            questions: [

            ]
        }
    );
    $('._question.show').removeClass('show');
    $('.question_container .question_num.active').removeClass('active');
    $('.question_container').append(getTemplateContent('#question_num_template',
        {
            '.num_question': {
                type:  'text',
                value: Object.keys(model_questions).length
            }
        }
    ));
    $('.test-container').append(getTemplateContent('#answer_template',
        {
            '.num_question': {
                type:  'text',
                value: Object.keys(model_questions).length
            },
            'question_id':   {
                type:  'data',
                value: Object.keys(model_questions).length
            },
        }
    ));
}
var model_questions = {};
$(function() {
    var tmp             = {};

    $.each($('template'), function(index, item) {
        tmp['#' + $(item).attr('id')] = document.importNode(item.content, true);
    });
    $('body').on('click', 'button[data-target-modal]', function() {
        let _this                = $(this);
        let data_target          = _this.data('target-modal');
        let template             = data_target + '_template';
        let remove_if_show_modal = $('#show_modal ' + data_target)
        if(remove_if_show_modal) {
            $(data_target).remove();
        }
        $('#show_modal').append(getTemplateContent(template));
        $(data_target).modal('show');
    });


    $('body').on('click', '#new_question_btn', function() {
        create_test();
    });

    $('body').on('click', '.save_btn', function() {
        $(this).parent().find('.active_btn').removeClass('active_btn');

        $(this).addClass('active_btn');
    });
    $('body').on('click', '.question_show', function() {
        $('.display_containers').hide();
        $('.container1').show();
    });
    $('body').on('click', '.cover_show', function() {
        $('.display_containers').hide();
        $('.container_info').show();
    });
    $('body').on('click', '.settings_show', function() {
        $('.display_containers').hide();
        $('.settings_container').show();
    });
    $('body').on('change', '.weight_answer', function() {
        $(this).attr('data-vizualize_answer', $(this).find('option:selected').data('answer'));
    });
    $('body').on('click', '.add_answer', function() {
        var a = Date.now();
        $(this).prev().find('tbody').append(getTemplateContent('#tr_empty_answer_template'))
        var b = Date.now();
        var res = b - a;

        console.log("Скрипт выполнялся <"+ res +"> ms.");
    });
    $('body').on('click', '.question_num', function() {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        $('._question.show').removeClass('show');
        $($('._question')[$(this).index()]).addClass('show');

    });
    $('body').on('change', '.type_answer', function() {
        let template = '#' + $(this).find('option:selected').data('template');
        $(this).closest('._question').find('.panel-body').html(getTemplateContent(template));
    });
    $('body').on('blur', '.question_text', function() {
        $('.question_num.active').find('.prev_description').text($(this).val());
    });
    $('body').on('blur', '.test_text', function() {
        if($(this).val() != ''){
            $('.test_text_name').text($(this).val());
        } else {
            $('.test_text_name').text('Наименование теста');
        }

    });

    $('body').on('change', '._question :input', function() {
        var a = Date.now();

        let question_id = $(this).closest('._question').data('question_id');
        let question_tmp = $(this).closest('._question').find(':input').serializeArray();
        model_questions[question_id-1] = formToJson(question_tmp);
        //let name =   $(this).attr('name');
        //if( name != '' && name != 'question[]'){
        //    model_questions[question_id-1][name] = $(this).val();
        //} else if(name != '' && name == 'question[]'){
        //    model_questions[question_id-1].questions =  $(this).val();
        //}
        var b = Date.now();
        var res = b - a;

        console.log(question_id,"Скрипт выполнялся <"+ res +"> ms.");
    });


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
    };
    $('body').on('click', '.copy_href', function(e) {
        e.preventDefault();
        copy($(this).attr('href'));
        alert('успешно скопировано в буфер обмена');
    });
    $('.save_test').click(function() {
        let send_var = {
            name_test: $('.test_text').val(),
            description_test: $('.test_description').val(),
            tag: $('#select_tag').val(),
            settings_test: {
                time: $('.test_time').val(),
            },
            questions: model_questions
        }
        console.log(JSON.stringify(send_var))

        localStorage.setItem('send_var', JSON.stringify(send_var));

        //alert('попытаюсь отправить, но если не отправится, то cделаем вид что куда то все же отправили')

        ajaxToViewCallback({url: undefined, type: 'post', data: { jsonField: send_var }, notification: true}, function($data) {
            $('.save_test').before('<a href="'+$data.url+'" class="copy_href">Скопировать ссылку на тест</a>');

        });
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








});

