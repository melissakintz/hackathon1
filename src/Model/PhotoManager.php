<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class PhotoManager
{
    public function getAll($roover)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/rovers/{$roover}/photos?" .
        "sol=1000&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

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

    public function getPictureDay(int $sol)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?
        sol={$sol}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

        // $statusCode = $response->getStatusCode();
        // $statusCode = 200
        // $contentType = $response->getHeaders()['content-type'][0];
        // $contentType = 'application/json'
        $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        return $content;
    }

    public function getPictureRoover(array $roover)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/rovers/{$roover['roover']}/photos?
        sol={$roover['sol']}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

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

    public function getFull(array $roover)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/rovers/{$roover['roover']}/photos?
        sol={$roover['sol']}&camera=navcam&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

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

    public function getExtremlyFull(array $data)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://api.nasa.gov/mars-photos/api/v1/rovers/{$data['roover']}/photos?" .
            "sol={$data['sol']}&camera={$data['cam']}&api_key=MEnxfxyUQdWOMtv0UTo0dNAwyisOQpHeXQBAcKXF");

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

    public function getRoverImages($roover)
    {
        $client = HttpClient::create();
        $response = $client->request('GET', "https://images-api.nasa.gov/search?q=rover&media_type=image" .
            "&description={$roover}&title={$roover}");

        // $statusCode = $response->getStatusCode();
        // $statusCode = 200
        // $contentType = $response->getHeaders()['content-type'][0];
        // $contentType = 'application/json'
        $content = $response->getContent();
        // $content = '{"id":521583, "name":"symfony-docs", ...}'
        $content = $response->toArray();
        // $content = ['id' => 521583, 'name' => 'symfony-docs', ...]
        return $content;
    }
}
