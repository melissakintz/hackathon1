<?php

namespace App\Controller;

use App\Model\DailyManager;

class DailyController extends AbstractController
{
    public function getDailyPic()
    {
        $dailyManager = new DailyManager();
        $picture = $dailyManager->getDailyPic();

        return $this->twig->render('/Photo/dailyPic.html.twig', ['picture' => $picture]);
    }
}
