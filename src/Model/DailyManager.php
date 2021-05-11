<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class DailyManager
{
    /*
     * get daily picture
     */
    public function getDailyPic()
    {
        $client = HttpClient::create();
        $response = $client->request
        ('GET', 'https://api.nasa.gov/planetary/apod?api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U');

        $statusCode = $response->getStatusCode();
        // $statusCode = 200
        $contentType = $response->getHeaders()['content-type'][0];
        // $contentType = 'application/json'
        $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        return $content;
    }
}
