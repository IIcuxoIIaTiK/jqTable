@extends('layouts.app')

@section('content')
<script type="text/javascript" src="/js/home.js"></script>
<style>
    .panel-heading{
        background: rgba(255,255,255,.4);
    }
    .tag_block, .backgr{
        box-shadow: 0px 0px 15px 7px rgba(0,0,0,.1);
        background: rgba(255,255,255,.3);
    }
    #app{
        min-height: 100vh;
        background: radial-gradient(at top, #FEFFFF, #264b77) no-repeat;
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default backgr">
                <div class="panel-heading">Тэги</div>
                <div class="panel-body">
                    <div class="col-md-8">
                        <select multiple="multiple" name="" id="select_tag" class="js-example-basic-single js-states form-control">
                            <option value=""></option>
                            @foreach($tags as $value)
                                <option value="{{$value->id}}">{{$value->name}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="col-md-4">
                        <button id="add_tag">Добавить себе этот тэг</button>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default backgr">
                <div class="panel-heading">Мои тэги</div>
                <div class="panel-body">

                    @foreach($user_tags as $tag)
                        <div class="panel panel-default tag_block">
                            <div class="panel-heading show_test" href="#test_for_tag_{{$tag->id}}">
                                <a >{{$tag->name}}</a>
                            </div>
                            <a href="/create_test?tag={{$tag->id}}" class="create_test">Создать тест для этого тэга</a>

                            <div class="panel-body tab-pane fade" id="test_for_tag_{{$tag->id}}">
                                @if($tag->tests->count())
                                    @foreach($tag->tests as $test)
                                        <div class="test_row">
                                            <div class="col-md-1">
                                                @if($test->user == Auth::user()->id)
                                                    <a href="{{route('show_result_test', ['id'=>$test->id])}}" ><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> </a>
                                                @endif
                                            </div>
                                            <div class="col-md-3">
                                                <a target="_blank" href="{{route('go_test', ['id'=>$test->id])}}">{{$test->name}}</a>
                                            </div>
                                            <div class="col-md-4">
                                                <span>@if($test->result_this_user(Auth::user()->id)->first()) {{$test->result_this_user(Auth::user()->id)->first()->result}} @endif
                                                </span>
                                            </div>
                                            <div class="col-md-4">
                                                <a href="{{route('go_test', ['id'=>$test->id])}}" class="copy_href">Скопировать ссылку на тест</a>
                                            </div>
                                        </div>
                                    @endforeach
                                @else
                                    <span class="">Для этого тега еще нет тестов, предлагаем создать</span>
                                @endif
                            </div>
                        </div>
                   @endforeach

                    <div class="panel panel-default tag_block">
                        <div class="panel-heading show_test" href="#test_for_tag_null">
                            <a >Создали вы, но без тэга</a>
                        </div>
                        <a href="/create_test?tag=null" class="create_test">Создать тест для этого тэга</a>

                        <div class="panel-body tab-pane fade" id="test_for_tag_null">
                            @if($user_tags_null->count())
                                @foreach($user_tags_null as $test)
                                    <div class="test_row">
                                        <div class="col-md-6">
                                            <a target="_blank" href="{{route('go_test', ['id'=>$test->id])}}">{{$test->name}}</a>
                                        </div>
                                        <div class="col-md-6">
                                            <a href="{{route('go_test', ['id'=>$test->id])}}" class="copy_href">Скопировать ссылку на тест</a>
                                        </div>
                                    </div>
                                @endforeach
                            @else
                                <span class="">Для этого тега еще нет тестов, предлагаем создать</span>
                            @endif
                        </div>
                    </div>

            </div>
        </div>
    </div>
</div>

<script>

    const route_add_tag = '{{route('add_tag_to_current_user')}}';
    var user_selected_tags = {!! json_encode($tags_id) !!};
console.log(user_selected_tags);
</script>
@endsection
