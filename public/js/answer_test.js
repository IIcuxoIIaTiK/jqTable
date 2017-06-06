
$(function() {

    function type_question_radio(index,item) {
        $('.test-answer_block').append(getTemplateContent('#one_right_answer_template',{
            'answer_id':   {
                type:  'data',
                value: index
            },
            'h3':   {
                type:  'text',
                value: 'Вопрос №'+(index+1)
            },
            '.caption':   {
                type:  'text',
                value: item.caption
            },
        }));
        $.each(item.answer, function(sub_index, sub_item) {
            $('[data-answer_id='+index+'] .row').append(getTemplateContent('#radio_answer_template', {
                '.radio_answer': {
                    type: 'attr',
                    attr: 'name',
                    value: 'text_answer['+index+']'
                },
                '.radio_answer_value': {
                    type: 'value',
                    value: sub_item.text_answer
                },
                '.text_radio_answer': {
                    type: 'text',
                    value: sub_item.text_answer
                },
            }))
        });
    }

    function type_question_checkbox(index,item) {
        $('.test-answer_block').append(getTemplateContent('#many_right_answer_template',{
            'answer_id':   {
                type:  'data',
                value: index
            },
            'h3':   {
                type:  'text',
                value: 'Вопрос №'+(index+1)
            },
            '.caption':   {
                type:  'text',
                value: item.caption
            },
        }));
        $.each(item.answer, function(sub_index, sub_item) {
            $('[data-answer_id='+index+'] .row').append(getTemplateContent('#checkbox_answer_template', {
                '.checkbox_answer': {
                    type: 'attr',
                    attr: 'name',
                    value: 'text_answer['+index+'][]'
                },
                '.checkbox_answer_value': {
                    type: 'value',
                    value: sub_item.text_answer
                },
                '.text_checkbox_answer': {
                    type: 'text',
                    value: sub_item.text_answer
                },
            }))
        });
    }

    $('#start_test').click(function() {

        ajaxToViewCallback({url: test_url}, function($data) {
            console.log($data);
            $.each($data.questions, function(index, item) {
                if(item.type_question == 1 ){
                    type_question_radio(index,item)
                }
                if(item.type_question == 2 ){
                    type_question_checkbox(index,item);
                }

                if(item.type_question == 3 ){
                    $('.test-answer_block').append(getTemplateContent('#word_answer_template',{
                        'answer_id':   {
                            type:  'data',
                            value: index
                        },
                        'h3':   {
                            type:  'text',
                            value: 'Вопрос №'+(index+1)
                        },
                        '.caption':   {
                            type:  'text',
                            value: item.caption
                        },
                        '.word_answer': {
                            type: 'attr',
                            attr: 'name',
                            value: 'text_answer['+index+']'
                        },
                    }));
                }
            })
            $('#start_test').hide();
            remain_bv = $data.settings.time*60;

            setInterval(function(){
                remain_bv = remain_bv - 1;
                parseTime_bv(remain_bv);
                if(remain_bv <= 0){
                    stop_timer = true;
                }
            }, 1000);
        })
    })


    $('.end_test').click(function() {

        if(stop_timer == false){
            ajaxToViewCallback({url: undefined, type: 'post', data: $('#form_answer').serialize(), notification: true}, function($data) {
                console.log($data);
                $.each($data.right_answer, function(index, item) {
                    $('.count_answer_'+item).addClass('right_answer');

                })
                $('.count_answer').not('.right_answer').addClass('wrong_answer');
                stop_timer = true;
                alert($data.result);
            });
        }

    });







































});

