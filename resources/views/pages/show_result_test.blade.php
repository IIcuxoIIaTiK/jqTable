@extends('layouts.app')

@section('content')
{{--<script type="text/javascript" src="/js/home.js"></script>--}}
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
    th, td{
        padding: 1vw;
    }
</style>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default backgr">
                <div class="panel-heading">{{$test->name}}</div>
                <div class="panel-body">
                    <div class="col-md-12">
                        <table>
                            <thead>
                                <th>Кто</th>
                                <th>Когда</th>
                                <th>Результат</th>
                                <th>Максимальный балл</th>
                                <th>Пользователь набрал баллов</th>
                            </thead>
                            <tbody>
                                @foreach($test->result as $result)
                                    <tr>
                                        <td>{{$result->user->name}}</td>
                                        <td>{{$result->updated_at}}</td>
                                        <td>{{$result->result}}%</td>
                                        <td>{{$result->max_ball}}</td>
                                        <td>{{$result->user_ball}}</td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<script>

</script>
@endsection
