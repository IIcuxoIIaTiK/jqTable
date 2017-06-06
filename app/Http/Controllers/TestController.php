<?php namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Test;
use App\ResultTests;
use Request;
use Auth;

class TestController extends Controller
{

    protected $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = Auth::user();

            return $next($request);
        }
        );
    }

    /**
     * Show the profile for the given user.
     *
     * @param
     *
     * @return View
     */
    public function create()
    {
        $user_tags = [];
        if ($this->user) {
            $user_tags = $this->user->tags()->get();
        }
        $select_default_tag = Request::input('tag');

        return view('pages.create_test', compact('user_tags', 'select_default_tag'));
    }

    public function showResultTest($id)
    {
        $test = Test::find($id);


        return view('pages.show_result_test', compact('test'));
    }

    public function goTest($id)
    {
        $test = Test::find($id);
        if (!$test) {
            dd('нет такого теста');
        }
        $go = false;
        $result = false;
        if ($this->user != null) {
            $user_tags = $this->user->tags()->get()->toArray();
            foreach ($user_tags as $value) {
                if ($test->tags_id == $value['id']) {
                    $go = true;
                }
            }
            $result = ResultTests::where('user_id', $this->user->id)->where('test_id', $id)->first();

        }
        if ($test->tags_id == null) {
            $go = true;
        }
        if ($this->user == null) {
            $go = true;
        }
        if ($go) {
            return view('pages.go_test', compact('test', 'result'));
        } else{
            dd($go,$test->tags_id);
        }
    }

    protected function radio_answer($questions, $key, $value, &$user_ball, &$right_answer)
    {
        foreach ($questions[$key]['answer'] as $sub_key => $sub_value) {
            if ($sub_value['text_answer'] == $value && $sub_value['weight_answer'] == 1) {
                $user_ball += $sub_value['weight_answer'];
                $right_answer[] = $key;
            }
        }
    }

    protected function checkbox_answer($questions, $key, $value, &$user_ball, &$right_answer)
    {
        $checkbox_max_value = 0;
        $user_ball_checkbox = 0;
        $right_answer_checkbox = [];
        $failed = false;
        foreach ($questions[$key]['answer'] as $sub_key => $sub_value) {
            $checkbox_max_value += $sub_value['weight_answer'];
            foreach ($value as $text_value) {
                if ($sub_value['text_answer'] == $text_value) {
                    $user_ball_checkbox += $sub_value['weight_answer'];
                    $right_answer_checkbox[] = $key;
                }
                if ($sub_value['text_answer'] == $text_value) {
                    if ($sub_value['weight_answer'] == 0) {
                        $failed = true;
                    }
                }
            }
        }
        $result_checkbox = 0;

        if (!$failed && $checkbox_max_value != 0 && $user_ball_checkbox != 0) {
            $result_checkbox = $user_ball_checkbox / $checkbox_max_value;
            $right_answer[] = $key;
        }
        $user_ball += $result_checkbox;
    }

    protected function text_answer($questions, $key, $value, &$user_ball, &$right_answer)
    {
        if (mb_strtolower($questions[$key]['text_answer']) == mb_strtolower($value)) {
            $user_ball += 1;
            $right_answer[] = $key;
        }
    }

    public function postTest($id)
    {
        $request = Request::all();
        $test = Test::find($id);
        $questions = $test->questions;
        $max_ball = 0;
        foreach ($questions as $key => $value) {
            if ($value['type_question'] == 1) {
                foreach ($value['answer'] as $sub_key => $sub_value) {
                    $max_ball += $sub_value['weight_answer'];
                }
            }
            if ($value['type_question'] == 2) {
                $max_ball += 1;

            }
            if ($value['type_question'] == 3) {
                $max_ball += 1;
            }
        }
        $user_ball = 0;
        $right_answer = [];
        foreach ($request['text_answer'] as $key => $value) {
            if ($questions[$key]['type_question'] == 1) {
                $this->radio_answer($questions, $key, $value, $user_ball, $right_answer);
            }

            if ($questions[$key]['type_question'] == 2) {
                $this->checkbox_answer($questions, $key, $value, $user_ball, $right_answer);

            }
            if ($questions[$key]['type_question'] == 3) {
                $this->text_answer($questions, $key, $value, $user_ball, $right_answer);
            }

        }
        $result = 0;
        if ($max_ball != 0 && $user_ball != 0) {
            $result = $user_ball / $max_ball * 100;
        }

        $user_id = null;
        if ($this->user != null) {
            $user_id = $this->user->id;
        }
        $test = [
            'test_id' => $id,
            'user_id' => $user_id,
            'result' => $result,
            'max_ball' => $max_ball,
            'user_ball' => $user_ball,
        ];
        $create_test = ResultTests::create($test);
//        dd($test,$create_test);

        return response()->json(['result' => 'Вы дали ' . $result . '% правильных ответов', 'max' => $max_ball, 'user_ball' => $user_ball, 'right_answer' => $right_answer]);

    }

    public function getTest($id)
    {
        $test = Test::find($id);

        $questions = $test->questions;

        foreach ($questions as $key => $value) {
            if ($value['type_question'] == 1 || $value['type_question'] == 2) {
                foreach ($value['answer'] as $sub_key => $sub_value) {
                    unset($questions[$key]['answer'][$sub_key]['weight_answer']);
                }
            }
            if ($value['type_question'] == 3) {
                unset($questions[$key]['weight_answer']);
                unset($questions[$key]['text_answer']);
            }
        }
        $test->questions = $questions;

        return response()->json($test);
    }

    public function saveTest($id = null)
    {
        $jsonField = Request::input('jsonField');

        $settings = $jsonField['settings_test'];
        $name_test = $jsonField['name_test'];
        $description_test = $jsonField['description_test'];
        $tag = $jsonField['tag'];
        if ($tag == 'null') {
            $tag = null;
        }
        $questions = $jsonField['questions'];
        $user_id = null;
        if ($this->user) {
            $user_id = $this->user->id;
        }

        $test = [
            'description' => $description_test,
            'questions' => $questions,
            'user' => $user_id,
            'settings' => $settings,
            'name' => $name_test,
            'tags_id' => $tag,
        ];
        $create_test = Test::create($test);
        return response()->json(['data' => $create_test, 'url' => route('go_test', ['id' => $create_test->id])]);
    }

}