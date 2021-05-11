<?php

namespace App\Controller;

use App\Controller\AbstractController;
use App\Model\PhotoManager;
use App\Model\RoverManager;

class PhotoController extends AbstractController
{
    public function all($name)
    {
        $roverManager = new RoverManager();
        $photoManager = new PhotoManager();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $roover = $_POST;
            $pictures = $photoManager->getExtremlyFull($roover, $name);
            $rovers = $roverManager->getAllRover($name);
            $roverImages = $photoManager->getRoverImages($name);
            return $this->twig->render(
                'Photo/index.html.twig',
                ['pictures' => $pictures, 'roverImages' => $roverImages, 'rovers' => $rovers, 'name' => $name]
            );
        }
        $rovers = $roverManager->getAllRover($name);
        $roverImages = $photoManager->getRoverImages($name);
        $pictures = $photoManager->getAll($name);
        return $this->twig->render('Photo/index.html.twig', [
            'pictures' => $pictures,
            'roverImages' => $roverImages, 'rovers' => $rovers, 'name' => $name
        ]);
    }
}
