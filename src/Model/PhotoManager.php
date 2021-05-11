<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;


class PhotoManager
{
    public function getAll()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=5HyGJ1AzkXemlBR7sLpc1ba3c0nePKpOO48G6u8G');

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
