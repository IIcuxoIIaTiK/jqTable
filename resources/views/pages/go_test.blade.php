<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <link href="/css/cal/bootstrap-datetimepicker.min.css" rel="stylesheet">
    <script type="text/javascript" src="/js/cal/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="/js/cal/moment-with-locales.min.js"></script>
    <script type="text/javascript" src="/js/cal/bootstrap-datetimepicker.min.js"></script>

    <script src="/js/bootstrap.min.js"></script>
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <script type="text/javascript" src="/js/cal/jquery-ui.min.js"></script>
    <link href="/js/cal/jquery-ui.min.css">

    <script type="text/javascript" src="/js/jQuery.tree.js"></script>
    <script type="text/javascript" src="/js/modules/myFunction.js"></script>
    <script type="text/javascript" src="/js/modules/tablesTR.js"></script>
    <script type="text/javascript" src="/js/answer_test.js"></script>
    <script type="text/javascript" src="/js/initial_answer_test.js"></script>


    <link href="/css/statement.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Neucha" rel="stylesheet">
    <!-- Styles -->
    <link href="/plugins/select2/select2.min.css" rel="stylesheet">

    <script type="text/javascript" src="/plugins/select2/select2.min.js"></script>


    {{csrf_field()}}
    {{--<script type="text/javascript" src="/js/modules/iicuTable.js"></script>--}}
    {{--<script type="text/javascript" src="/js/modules/comboBox.js"></script>--}}
    <style>
        .panel-heading{
            background: rgba(255,255,255,.4);
        }
        .tag_block, .backgr{
            box-shadow: 0px 0px 15px 7px rgba(0,0,0,.1);
            background: rgba(255,255,255,.3);
        }


        .pos_fixed{
            position: fixed;
            height: auto;
            width: 25%;
        }
    </style>
    <script type="text/javascript">//<![CDATA[
        stop_timer = false;
        function parseTime_bv(timestamp){
            if(stop_timer != true){
                if (timestamp < 0) timestamp = 0;

                var day = Math.floor( (timestamp/60/60) / 24);
                var hour = Math.floor(timestamp/60/60);
                var mins = Math.floor((timestamp - hour*60*60)/60);
                var secs = Math.floor(timestamp - hour*60*60 - mins*60);
                var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );

                $('span.afss_day_bv').text(day);
                $('span.afss_hours_bv').text(left_hour);

                if(String(mins).length > 1)
                    $('span.afss_mins_bv').text(mins);
                else
                    $('span.afss_mins_bv').text("0" + mins);
                if(String(secs).length > 1)
                    $('span.afss_secs_bv').text(secs);
                else
                    $('span.afss_secs_bv').text("0" + secs);
            }

        }


        //]]>
    </script>

</head>
<body>
<div class="header">

    <div class="col-xs-12 col-sm-3 non_padding_left">
        <div class="col-xs-3">
            <a href="/">
                <img src="http://pre03.deviantart.net/b5b0/th/pre/f/2013/130/8/1/abstract_brain_emotions_by_qubodup-d64qp8t.png" alt="" style="margin-top: -10px;height: 50px; width: 50px">
            </a>
        </div>

        <div class="centered">
            <span class="white_text test_text_name">{{$test->name}}</span>
        </div>

    </div>
    <div class="col-xs-12 col-sm-6" >

    </div>
    <div class="col-xs-3">
        <div class="text-right">
            <button class="white_text end_test">Завершить</button>
        </div>
    </div>

</div>

<div class="container_info display_containers">
    <div class="container">
        <div class="col-xs-8">

            <div class="panel panel-primary backgr">
                <div class="panel-heading">

                    <div class="row form-group" data-block="applicant_">
                        <div class="col-xs-2">
                            <span class="form-inline">Наименование Теста :</span>
                        </div>
                        <div class="col-xs-10">
                            {{$test->name}}
                        </div>
                    </div>
                    <div class="row form-group" data-block="applicant_">
                        <div class="col-xs-2">
                            <span class="form-inline">Описание:</span>
                        </div>
                        <div class="col-xs-10">
                            {{$test->description}}
                        </div>
                    </div>

                </div>

            </div>

            <button id="start_test">Пройти тест</button>
            <form action="" id="form_answer">
                <div class="test-answer_block">

                </div>
            </form>
        </div>
        <div class="col-xs-4">

            <div class="panel panel-primary backgr pos_fixed">
                <div class="panel-heading">
                    <div class="row form-group" data-block="applicant_">
                        @foreach($test->questions as $key=>$value)
                            <div class="col-xs-3">
                                <span class="count_answer count_answer_{{$key}}">{{$key+1}}</span>
                            </div>
                        @endforeach
                    </div>
                    <div class="">
                        <span>Время на прохождение теста {{$test->settings['time']}} мин</span>
                    </div>
                    <div>
                        <span class="">Осталось: </span>
                        <span class="afss_day_bv">0</span> д.
                        <span class="afss_hours_bv">00</span>&nbsp;час.&nbsp;
                        <span class="afss_mins_bv">00</span>&nbsp;мин.&nbsp;
                        <span class="afss_secs_bv">00&nbsp;</span>&nbsp;сек.
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

<template id="question_num_template">
    <div class="question_num active">
        <span>Вопрос #<b class="num_question"></b></span>
        <span class="prev_description"></span>
    </div>
</template>


<template id="one_right_answer_template">
    <div class="answer_block_for_test one_right_answer" data-answer_id="">
        <h3>Вопрос</h3>
        <div class="caption"></div>
        <div class="row form-group">

        </div>
    </div>
</template>


<template id="radio_answer_template">
    <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
        <div class="radio">
            <label><input type="radio" class="radio_answer radio_answer_value" name="text_answer[]" value="" ><span class="text_radio_answer"></span></label>
        </div>
    </div>
</template>

<template id="many_right_answer_template">
    <div class="answer_block_for_test many_right_answer" data-answer_id="">
        <h3>Вопрос</h3>
        <div class="caption"></div>
        <div class="row form-group">

        </div>
    </div>
</template>


<template id="checkbox_answer_template">
    <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
        <div class="radio">
            <input type="checkbox" class="checkbox_answer checkbox_answer_value" name="text_answer[]" value="" ><span class="text_checkbox_answer"></span>
        </div>
    </div>
</template>


<template id="word_answer_template">
    <div class="answer_block_for_test word_right_answer" data-answer_id="">
        <h3>Вопрос</h3>
        <div class="caption"></div>
        <div class="row form-group">
            <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
                <div class="radio">
                    <input type="text" class="word_answer form-control" name="text_answer[]" value="" >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var test_url = '{{route('getTest', ['id'=>$test->id])}}';
</script>
</body>
</html>