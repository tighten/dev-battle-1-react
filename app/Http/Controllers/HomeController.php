<?php

namespace App\Http\Controllers;

use Laracasts\Utilities\JavaScript\JavaScriptFacade as JavaScript;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        JavaScript::put([
            'auth' => env('AUTH_TOKEN'),
        ]);

        return view('home');
    }
}
