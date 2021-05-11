<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class RoverManager
{
    public function getAllRover($roover)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/manifests/{$roover}?" .
            "api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

        //$statusCode = $response->getStatusCode();
        // $statusCode = 200
        //$contentType = $response->getHeaders()['content-type'][0];
        // $contentType = 'application/json'
        $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        return $content;
    }
}
