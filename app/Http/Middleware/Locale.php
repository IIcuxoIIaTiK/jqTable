<?php

namespace App\Http\Middleware;

use Closure;
use App;
use Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;

class Locale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $raw_locale = session('locale');     # Если пользователь уже был на нашем сайте,
        # то в сессии будет значение выбранного им языка.
        if (in_array($raw_locale, Config::get('app.locales'))) {  # Проверяем, что у пользователя в сессии установлен доступный язык
            $locale = $raw_locale;                                # (а не какая-нибудь бяка)
        } else {
        }                 # В ином случае присваиваем ей язык по умолчанию
        $locale = Config::get('app.locale');

        App::setLocale($locale);                                  # Устанавливаем локаль приложения

        return $next($request);                                   # И позволяем приложению работать дальше
    }
}
