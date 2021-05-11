<?php

namespace App\Controller;

use App\Model\EventManager;

class EventController extends AbstractController
{
    public function index()
    {
        $eventManager = new EventManager();
        $shocks = $eventManager->planetShocks();
        $geomagnetic = $eventManager->geomagneticStorm();
        $solarFlare = $eventManager->solarFlare();

        return $this->twig->render(
            '/Event/weather.html.twig',
            ['shocks' => $shocks, 'storm' => $geomagnetic, 'solarFlare' => $solarFlare]
        );
    }
}
