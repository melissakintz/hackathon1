<?php


namespace App\Controller;

use App\Controller\AbstractController;
use App\Model\PhotoManager;

class PhotoController extends AbstractController
{
    public function all()
    {
        $stockManager = new PhotoManager();
        $pictures = $stockManager->getAll();
        return $this->twig->render('Photo/index.html.twig', ['pictures' => $pictures]);
    }
}
