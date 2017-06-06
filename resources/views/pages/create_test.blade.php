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
    <script type="text/javascript" src="/js/create_test.js"></script>
    <script type="text/javascript" src="/js/initial_create_test.js"></script>


    <link href="/css/statement.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Neucha" rel="stylesheet">
    <!-- Styles -->
    <link href="/plugins/select2/select2.min.css" rel="stylesheet">

    <script type="text/javascript" src="/plugins/select2/select2.min.js"></script>

    {{csrf_field()}}
    {{--<script type="text/javascript" src="/js/modules/iicuTable.js"></script>--}}
    {{--<script type="text/javascript" src="/js/modules/comboBox.js"></script>--}}

</head>
<body>
<div class="header">

    <div class="col-xs-12 col-sm-3 non_padding_left">
        <div class="col-xs-3">
            <a href="/">
                <img src="http://pre03.deviantart.net/b5b0/th/pre/f/2013/130/8/1/abstract_brain_emotions_by_qubodup-d64qp8t.png" alt="" style="margin-top: -10px;height: 100%; width: 100%">
            </a>
        </div>

        <div class="centered">
            <span class="white_text test_text_name">Наименование теста</span>
        </div>

    </div>
    <div class="col-xs-12 col-sm-6" >
        <div class="centered" style="text-align: center;">
            <div class="save_btn cover_show active_btn"><span>Обложка</span></div>
            <div class="save_btn question_show"><span>Вопросы</span></div>
            <div class="save_btn settings_show"><span>Настройка</span></div>
        </div>
    </div>
    <div class="col-xs-3">
        <div class="text-right">
            <button class="white_text save_test">Сохранить</button>
        </div>
    </div>

</div>

<div class="container_info display_containers">
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Тэг: </span>
                    </div>
                    <div class="col-xs-10">
                        <select @if(!$user_tags)) disabled @endif name="" id="select_tag" class="js-example-basic-single js-states form-control">
                            <option value="null"> без тега( в свободном доступе) </option>

                            @foreach($user_tags as $value)
                                <option value="{{$value->id}}" >{{$value->name}}</option>
                            @endforeach
                        </select>
                    </div>

                </div>
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Наименование Теста :</span>
                    </div>
                    <div class="col-xs-10">
                        <textarea style="border: none;" name="" id="" rows="5" class="form-control form-inline test_text" placeholder="Сколько гусей было у бабуси"></textarea>
                    </div>
                </div>
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Описание:</span>
                    </div>
                    <div class="col-xs-10">
                        <textarea style="border: none;" name="" id="" rows="5" class="form-control form-inline test_description" placeholder="Описание вопроса (не обязательно)"></textarea>
                    </div>
                </div>

            </div>

        </div>

    </div>

</div>

<div class="container1 display_containers" >
    <div class="question_block">
        <div class="question_container">

        </div>
        <div class="new_question">
            <button id="new_question_btn" type="button" class="btn btn-success btn-block btn-sm"{{-- data-toggle="modal" data-target-modal="#modal_type_test"--}}><b>Добавить вопрос</b></button>
        </div>
    </div>
    <div class="answer_block" >
        {{--
            TODO: узнать насчет того, нужна ли градация "весов" ответов,
            TODO: нужно ли максимальное отображение кол-ва ответов(вопросов 8, а отобразится 4, грубо говоря перемешка вариантов ответа),
            TODO: нужен ли функционал просмотра результатов тестирования студентами
            TODO: нужно ли приведение общего балла к 5ке?
        --}}
        <div class="test-container">

        </div>
    </div>


</div>

<div class="settings_container display_containers" >
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-12">
                        <span class="form-inline">Время прохождения теста (минуты)</span>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <!--    Таблица заявителя    -->
                <div class="row form-group">
                    <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
                        <input style="border: none;" class="form-control form-inline test_time" placeholder="Минуты" value="60">
                    </div>
                </div>
            </div>
        </div>
        {{--<div class="panel panel-primary">--}}
            {{--<div class="panel-heading">--}}
                {{--<div class="row form-group" data-block="applicant_">--}}
                    {{--<div class="col-xs-12">--}}
                        {{--<span class="form-inline">Кол-во попыток(раз)</span>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="panel-body">--}}
                {{--<!--    Таблица заявителя    -->--}}
                {{--<div class="row form-group">--}}
                    {{--<div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">--}}
                        {{--<input style="border: none;" class="form-control form-inline test_count" placeholder="1" value="1">--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
</div>


<div id="show_modal"></div>

<template id="modal_type_test_template">
    <div class="modal fade bs-example-modal-lg" data-keyboard="false" data-backdrop="static" id="modal_type_test">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close close_modal_legal" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Тип теста</h4>
                </div>
                <div class="modal-body">
                    <div class="row form-group">
                        <div class="col-md-3"><label class="radio-inline"><input type="radio" class="type_test" name="type_test" data-select-template="#one_right_answer_template">Один верный ответ</label></div>
                        <div class="col-md-3"><label class="radio-inline"><input type="radio" class="type_test" name="type_test" data-select-template="#many_right_answer_template">Несколько верных ответов</label></div>
                        <div class="col-md-3"><label class="radio-inline"><input type="radio" class="type_test" name="type_test" data-select-template="#file_answer">Файл с решением</label></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-sm close_modal_legal" data-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-success btn-sm" id="save_legal" data-dismiss="modal">Сохранить
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<template id="question_num_template">
    <div class="question_num active">
        <span>Вопрос #<b class="num_question"></b></span>
        <span class="prev_description"></span>
    </div>
</template>

<template id="answer_template">
    <div data-question_id="1" class="_question show">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Текст Вопроса :</span>
                    </div>
                    <div class="col-xs-10">
                        <textarea style="border: none;" name="caption" id="" class="form-control form-inline question_text" placeholder="Сколько гусей было у бабуси"></textarea>
                    </div>
                </div>
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Описание :</br>( optional )</span>
                    </div>
                    <div class="col-xs-10">
                        <textarea style="border: none;" name="description" id="" class="form-control form-inline" placeholder="Описание вопроса"></textarea>
                    </div>
                </div>
                <div class="row form-group" data-block="applicant_">
                    <div class="col-xs-2">
                        <span class="form-inline">Тип</span>
                    </div>
                    <div class="col-xs-10">
                        <select style="border: none;" name="type_question" class="form-control form-inline type_answer">
                            <option value="1" data-template="one_right_answer_template">Один правильный ответ</option>
                            <option value="2" data-template="many_right_answer_template">Несколько правильных ответов</option>
                            <option value="3" data-template="word_answer_template">Слово | Цифра | Фраза</option>
                            <option value="4" data-template="file_answer_template">Прикрепленный файл</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <!--    Таблица заявителя    -->
                <div class="row form-group">
                    <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">

                        <table class="table table-hover" data-table="applicant_">
                            <thead>
                                <tr>
                                    <th>Варианты ответов</th>
                                    <th>Вес ответа</th>
                                </tr>
                            </thead>
                            <tbody class="applicant_legal tbody">
                                <tr class="">
                                    <td><input type="text" name="text_answer[]" value="" class="form-control" placeholder="Пример: Один" ></td>
                                    <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_bad_answer">
                                            <option data-answer="very_bad_answer">0</option>
                                            <option data-answer="bad_answer">0.25</option>
                                            <option data-answer="not_bad_answer">0.5</option>
                                            <option data-answer="good_answer">0.75</option>
                                            <option data-answer="very_good_answer">1</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="">
                                    <td><input type="text" name="text_answer[]" value="" class="form-control"  placeholder="Пример: Два"></td>
                                    <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_good_answer">
                                            <option data-answer="very_bad_answer">0</option>
                                            <option data-answer="bad_answer">0.25</option>
                                            <option data-answer="not_bad_answer">0.5</option>
                                            <option data-answer="good_answer">0.75</option>
                                            <option data-answer="very_good_answer" selected>1</option>
                                        </select></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="col-xs-1 btn btn-success btn-block btn-sm add_answer"><b>Добавить ответ</b></button>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<template id="one_right_answer_template">
    <div class="row form-group">
        <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
            <table class="table table-hover" data-table="applicant_">
                <thead>
                    <tr>
                        <th>Вариант ответа</th>
                        <th>Вес ответа</th>
                    </tr>
                </thead>
                <tbody class="applicant_legal tbody">
                    <tr class="">
                        <td><input type="text" name="text_answer[]" value="" class="form-control" placeholder="Пример: Один" ></td>
                        <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_bad_answer">
                                <option data-answer="very_bad_answer">0</option>
                                <option data-answer="bad_answer">0.25</option>
                                <option data-answer="not_bad_answer">0.5</option>
                                <option data-answer="good_answer">0.75</option>
                                <option data-answer="very_good_answer">1</option>
                            </select>
                        </td>
                    </tr>
                    <tr class="">
                        <td><input type="text" name="text_answer[]" value="" class="form-control"  placeholder="Пример: Два"></td>
                        <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_good_answer">
                                <option data-answer="very_bad_answer">0</option>
                                <option data-answer="bad_answer">0.25</option>
                                <option data-answer="not_bad_answer">0.5</option>
                                <option data-answer="good_answer">0.75</option>
                                <option data-answer="very_good_answer" selected>1</option>
                            </select></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="col-xs-1 btn btn-success btn-block btn-sm add_answer"><b>Добавить ответ</b></button>
        </div>
    </div>
</template>
<template id="many_right_answer_template">
    <div class="row form-group">
        <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
            <table class="table table-hover" data-table="applicant_">
                <thead>
                    <tr>
                        <th>Вариант ответа</th>
                        <th>Вес ответа</th>
                    </tr>
                </thead>
                <tbody class="applicant_legal tbody">
                    <tr class="">
                        <td><input type="text" name="text_answer[]" value="" class="form-control" placeholder="Например: Белый" ></td>
                        <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_good_answer">
                                <option data-answer="very_bad_answer">0</option>
                                <option data-answer="bad_answer">0.25</option>
                                <option data-answer="not_bad_answer">0.5</option>
                                <option data-answer="good_answer">0.75</option>
                                <option data-answer="very_good_answer" selected>1</option>
                            </select>
                        </td>
                    </tr>
                    <tr class="">
                        <td><input type="text" name="text_answer[]" value="" class="form-control"  placeholder="Например: Розовый"></td>
                        <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_bad_answer">
                                <option data-answer="very_bad_answer">0</option>
                                <option data-answer="bad_answer">0.25</option>
                                <option data-answer="not_bad_answer">0.5</option>
                                <option data-answer="good_answer">0.75</option>
                                <option data-answer="very_good_answer" >1</option>
                            </select></td>
                    </tr>
                    <tr class="">
                        <td><input type="text" name="text_answer[]" value="" class="form-control"  placeholder="Например: Серый"></td>
                        <td><select name="weight_answer[]" id=""  class="form-control weight_answer" data-vizualize_answer="very_good_answer">
                                <option data-answer="very_bad_answer">0</option>
                                <option data-answer="bad_answer">0.25</option>
                                <option data-answer="not_bad_answer">0.5</option>
                                <option data-answer="good_answer">0.75</option>
                                <option data-answer="very_good_answer" selected>1</option>
                            </select></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="col-xs-1 btn btn-success btn-block btn-sm add_answer"><b>Добавить ответ</b></button>
        </div>
    </div>
</template>

<template id="word_answer_template">
    <div class="row form-group">
        <div class="col-lg-12 col-md-12 col-xs-12 col-xs-12">
            <table class="table table-hover" data-table="applicant_">
                <tbody class="applicant_legal tbody">
                    <tr class="">
                        <td><input type="text" value="" name="text_answer" class="form-control" placeholder="Например: Белый" ></td>
                    </tr>
                </tbody>
            </table>
            <button type="button" class="col-xs-1 btn btn-success btn-block btn-sm add_answer"><b>Добавить ответ</b></button>
        </div>
    </div>
</template>

<template id="tr_empty_answer_template">
        <tr class="">
            <td><input type="text" name="text_answer[]" value="" class="form-control" placeholder="Пример: белый" ></td>
            <td>
                <select name="weight_answer[]" class="form-control weight_answer" data-vizualize_answer="very_bad_answer">
                    <option data-answer="very_bad_answer">0</option>
                    <option data-answer="bad_answer">0.25</option>
                    <option data-answer="not_bad_answer">0.5</option>
                    <option data-answer="good_answer">0.75</option>
                    <option data-answer="very_good_answer">1</option>
                </select>
            </td>
        </tr>
</template>

@include('pages.create_test.settings')

<script>
    var select_default_tag = '{{$select_default_tag}}';
</script>
</body>
</html>