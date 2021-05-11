<?php

namespace App\Controller;

use App\Controller\AbstractController;
use App\Model\PhotoManager;

class PhotoController extends AbstractController
{
    public function all()
    {
        $photoManager = new PhotoManager();
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $roover = $_POST;
            $pictures = $photoManager->getExtremlyFull($roover);
            return $this->twig->render('Photo/index.html.twig', ['pictures' => $pictures]);
        }
        $pictures = $photoManager->getAll();
        return $this->twig->render('Photo/index.html.twig', ['pictures' => $pictures]);
    }
}
