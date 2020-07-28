<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ApiController extends AbstractController
{
  /**
   * @Route("/api/post", name="api_post_index", methods = {"GET"})
   * @param PostRepository $postRepository
   * @param NormalizerInterface $normalizer
   * @return Response
   * @throws ExceptionInterface
   */
  public function index(PostRepository $postRepository, NormalizerInterface $normalizer)
  {
    // on utilise l'objet postRepository passé en paramètre pour utiliser la méthode findAll()
    // on range la valeur de cette opération dans $posts. en fait c'est un objet réponse de la base contenant la donnée
    $posts = $postRepository->findAll();


    // on normalise cette objet pour le typer Tableau associatif
    $post_normalize = $normalizer->normalize($posts);

    // on encode en json ce tableau associatif
    $json = json_encode($post_normalize);

    // On retourne la réponse attendue
    return new Response($json, 200, ["Content-type" => "application/json"]);
  }
}
