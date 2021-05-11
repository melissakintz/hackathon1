<?php


namespace App\Model;


use Symfony\Component\HttpClient\HttpClient;

class WeatherManager
{

    public function getWeather()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.nasa.gov/insight_weather/?api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U&feedtype=json&ver=1.0');

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

    /*
     * get event geomagnetics storm
     */
    public function geomagneticStorm()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.nasa.gov/DONKI/GST?startDate=2016-01-01&endDate=2016-01-30&api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U');

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

    /*
     * get event interplanetary shocks
     */
    public function planetShocks()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.nasa.gov/DONKI/IPS?startDate=2016-01-01&endDate=2016-01-30&api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U');

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

    /*
     * get event solar flare
     */
    public function solarFlare()
    {
        $client = HttpClient::create();
        $response = $client->request('GET', 'https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=LOECrvPRpcrxyo8RE3BLSiQ5kPl4FKUOcD7h0T7U');

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