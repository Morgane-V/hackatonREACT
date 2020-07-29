<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\SerializerInterface;

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

    /**
     * @Route("/api/post", name="api_post_insert", methods = {"POST"})
     */
    public function insert(Request $request, SerializerInterface $serializer, EntityManagerInterface $entityManager, ValidatorInterface $validator){

    try{
        $jsonRecu = $request->getContent();
        $post = $serializer->deserialize($jsonRecu, Post::class, 'json');
        $post->setCreatedAt(new \DateTime());
        $errors = $validator->validate($post);

        if(count($errors) > 0){
            return $this->json($errors, 400);
        }

        $entityManager->persist($post);
        $entityManager->flush();
        return $this->json($post, 201, []);

    }catch(NotEncodableValueException $encodableValueException){
        return $this->json([
            'status'=> 400,
            'message'=>$encodableValueException->getMessage()
        ], 400);
    }
}
}