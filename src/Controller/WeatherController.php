<?php


namespace App\Controller;


use App\Model\WeatherManager;

class WeatherController extends AbstractController
{
    public function index()
    {
        $weatherManager = new WeatherManager();
        $shocks = $weatherManager->planetShocks();
        $geomagnetic = $weatherManager->geomagneticStorm();
        $solarFlare = $weatherManager->solarFlare();

        return $this->twig->render('/Weather/weather.html.twig', ['shocks' => $shocks, 'storm' => $geomagnetic, 'solarFlare' => $solarFlare]);
    }

}